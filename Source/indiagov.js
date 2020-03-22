const $ = require('cheerio');
const curl = require('request-promise');
const NodeCache = require( "node-cache" );
const cache_instance = new NodeCache();
const state_wise_contacts = require('./ContactDetails').stateWise.map( item => {
    return {
        name: item.name,
        code: item.name.replace(/[\s\W]/, ''),
        code2: item.name.replace(/[&]/, 'and').replace(/[\s\W]/, ''),
        contact: item.contact
    };
});
module.exports = {
    data: () => {
        return new Promise( async(resolve, reject) => {
            try {
                let data = {
                    stateWise: [],
                    total: {}
                };
                if(cache_instance.get('indian_gov')) {
                    data = cache_instance.get('indian_gov');
                } else {
                    const curlResponse = await curl('https://www.mohfw.gov.in/', {
                        method: 'GET',
                        resolveWithFullResponse: true
                    });
                    const _$ = $.load(curlResponse.body);
                    // const table = _$('button.collapsible + div.content.newtab table.table').eq(0);
                    const table_search = {
                        first_col: _$("th > strong:contains('Name of State / UT')").closest('table.table'),
                        second_col: _$("th > strong:contains('Total Confirmed cases (Indian National)')").closest('table.table'),
                        third_col: _$("th > strong:contains('Total Confirmed cases ( Foreign National )')").closest('table.table'),
                        four_col: _$("th > strong:contains('Cured/Discharged/Migrated')").closest('table.table'),
                        five_col: _$("th > strong:contains('Death')").closest('table.table'),
                    };
                    const table = (
                        table_search.first_col.is(table_search.second_col) && 
                        table_search.first_col.is(table_search.third_col) && 
                        table_search.first_col.is(table_search.four_col) &&
                        table_search.first_col.is(table_search.five_col)
                    ) ? table_search.first_col : null;
                    if(table) {
                        data['status'] = true;
                        data['message'] = 'Successful';
                        const table_rows = table.find('tbody > tr');
                        const table_rows_last_index = ( table_rows.length - 1 );
                        let counterId = 1;
                        table_rows.each((index) => {
                            if(table_rows_last_index > index){
                                const tableRowColumns = table_rows.eq(index).find('td');
                                let filterStateName = ( ( ( tableRowColumns.eq(1).text() ).trim() ).toLowerCase() ).replace(/[\s\W]/, '');
                                let contactDetails = state_wise_contacts.filter(item => item.code === filterStateName || item.code2 === filterStateName);
                                const pushableData = {
                                    id:     counterId,
                                    stateName:      ( tableRowColumns.eq(1).text() ).trim(),
                                    confirmedIndianCases:  parseInt( ( tableRowColumns.eq(2).text() ).trim() ),
                                    confirmedForeignCases:  parseInt( ( tableRowColumns.eq(3).text() ).trim() ),
                                    recoveredCases:      parseInt( ( tableRowColumns.eq(4).text() ).trim() ),
                                    deathCases:  parseInt( ( tableRowColumns.eq(5).text() ).trim() ),
                                    contactNumber: (contactDetails && typeof contactDetails === 'object' && contactDetails.length > 0 ? contactDetails[0].contact : [])
                                };
                                data['stateWise'].push(pushableData);
                                counterId++;
                            }
                        });
                        data['total'] = {
                            confirmedIndianCases:  ( table_rows.eq(table_rows_last_index).find('td').eq(1).text() ).trim(),
                            confirmedForeignCases:  ( table_rows.eq(table_rows_last_index).find('td').eq(2).text() ).trim(),
                            recoveredCases:      ( table_rows.eq(table_rows_last_index).find('td').eq(3).text() ).trim(),
                            deathCases:  ( table_rows.eq(table_rows_last_index).find('td').eq(4).text() ).trim(),
                        };

                        cache_instance.set('indian_gov', data, 60*60);
                    }
                }
                
                resolve(data);
            } catch(error) {
                reject(error);
            }
        })
    }
};