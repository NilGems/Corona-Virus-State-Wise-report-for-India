const $ = require('cheerio');
const curl = require('request-promise');
const NodeCache = require( "node-cache" );
const cache_instance = new NodeCache();
module.exports = {
    data_ncov: () => {
        return new Promise(async (resolve, reject) => {
            try {
                let data = {
                    country: 'India',
                    confirmed: 0,
                    deceased: 0,
                    percentage_death_changes: 0,
                    recovered: 0,
                    serious: 0,
                    data_source: 'https://ncov2019.live/'

                };
                if(cache_instance.get('global_nocv')) {
                    const cache_data = cache_instance.get('global_nocv');
                    data['confirmed'] = cache_data['confirmed'];
                    data['deceased'] = cache_data['deceased'];
                    data['percentage_death_changes'] = cache_data['percentage_death_changes'];
                    data['recovered'] = cache_data['recovered'];
                    data['serious'] = cache_data['serious'];
                } else {
                    const pullData = await curl({
                        url: 'https://ncov2019.live/data',
                        method: 'GET',
                        resolveWithFullResponse: true
                    });
                    const _$ = $.load(pullData.body);
                    const table_data = _$('table#sortable_table_Global');
                    if(table_data && table_data.length > 0) {
                        const row = table_data.find("tbody > tr > td:contains('India')").closest('tr');
                        const tds =  row.find('td');
                        data['confirmed'] = parseInt( tds.eq(1).text().trim() );
                        data['deceased'] = parseInt( tds.eq(4).text().trim() );
                        data['percentage_death_changes'] = parseInt( tds.eq(6).text().trim() );
                        data['recovered'] = parseInt( tds.eq(7).text().trim() );
                        data['serious'] = parseInt( tds.eq(8).text().trim() );

                        cache_instance.set('global_nocv', data, 60*60);
                    }
                }
                resolve(data);
            } catch(error) {
                reject(error);
            }
        });
    },
    data_wom: () => {
        return new Promise(async (resolve, reject) => {
            try {
                let data = {
                    country: 'India',
                    total_cases: 0,
                    new_cases: 0,
                    total_deaths: 0,
                    new_deaths: 0,
                    total_recovered: 0,
                    active_cases: 0,
                    serious_cases: 0,
                    tot_cases_in_one_miliopn_peoples: 0,
                    data_source: 'https://www.worldometers.info/coronavirus/'

                };
                if(cache_instance.get('global_wom')) {
                    const cache_data = cache_instance.get('global_wom');
                    data['total_cases'] = cache_data['total_cases'];// tds.eq(1).text().trim() ? parseInt( tds.eq(1).text().trim() ) : 0;
                    data['new_cases'] = cache_data['new_cases']; // tds.eq(2).text().trim() ? parseInt( tds.eq(2).text().trim() ) : 0;
                    data['total_deaths'] = cache_data['total_deaths']; // tds.eq(3).text().trim() ? parseInt( tds.eq(3).text().trim() ) : 0;
                    data['new_deaths'] = cache_data['new_deaths']; // tds.eq(4).text().trim() ? parseInt( tds.eq(4).text().trim() ) : 0;
                    data['total_recovered'] = cache_data['total_recovered']; // tds.eq(5).text().trim() ? parseInt( tds.eq(5).text().trim() ) : 0;
                    data['active_cases'] = cache_data['active_cases']; // tds.eq(6).text().trim() ? parseInt( tds.eq(6).text().trim() ) : 0;
                    data['serious_cases'] = cache_data['serious_cases']; // tds.eq(7).text().trim() ? parseInt( tds.eq(7).text().trim() ) : 0;
                    data['tot_cases_in_one_miliopn_peoples'] = cache_data['tot_cases_in_one_miliopn_peoples']; // tds.eq(8).text().trim() ? parseFloat( tds.eq(8).text().trim() ) : 0;

                } else {
                    const pullData = await curl({
                        url: 'https://www.worldometers.info/coronavirus/',
                        method: 'GET',
                        resolveWithFullResponse: true
                    });
                    const _$ = $.load(pullData.body);
                    const table_data = _$('table#main_table_countries_today');
                    if(table_data && table_data.length > 0) {
                        const row = table_data.find("tbody > tr > td:contains('India')").closest('tr');
                        const tds =  row.find('td');
                        data['total_cases'] = tds.eq(1).text().trim() ? parseInt( tds.eq(1).text().trim() ) : 0;
                        data['new_cases'] = tds.eq(2).text().trim() ? parseInt( tds.eq(2).text().trim() ) : 0;
                        data['total_deaths'] = tds.eq(3).text().trim() ? parseInt( tds.eq(3).text().trim() ) : 0;
                        data['new_deaths'] = tds.eq(4).text().trim() ? parseInt( tds.eq(4).text().trim() ) : 0;
                        data['total_recovered'] = tds.eq(5).text().trim() ? parseInt( tds.eq(5).text().trim() ) : 0;
                        data['active_cases'] = tds.eq(6).text().trim() ? parseInt( tds.eq(6).text().trim() ) : 0;
                        data['serious_cases'] = tds.eq(7).text().trim() ? parseInt( tds.eq(7).text().trim() ) : 0;
                        data['tot_cases_in_one_miliopn_peoples'] = tds.eq(8).text().trim() ? parseFloat( tds.eq(8).text().trim() ) : 0;


                        cache_instance.set('global_wom', data, 60*60);
                    }
                }
                resolve(data);
            } catch(error) {
                reject(error);
            }
        });
    }
};