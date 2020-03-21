const $ = require('cheerio');
const curl = require('request-promise');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', async (request, response) => {
    let data = {
        status: false,
        message: 'Something went wrong.',
        data: {
            stateWise: [],
            total: {}
        },
        credits: [
            {name: 'Niladri Shekhar Mondal', email: 'nldrmondal35@gmail.com'},
            {name: 'Ashit Das', email: ''}
        ],
        sources: [
            {name: 'Ministry of Health and Family Welfare of India', website: 'https://www.mohfw.gov.in/'}
        ]
    };
    
    try {
        const curlResponse = await curl('https://www.mohfw.gov.in/', {
            method: 'GET',
            resolveWithFullResponse: true
        });
        const _$ = $.load(curlResponse.body);
        const table = _$('table.table').eq(0);
        if(table) {
            data['status'] = true;
            data['message'] = 'Successful';
            const table_rows = table.find('tbody > tr');
            const table_rows_last_index = ( table_rows.length - 1 );
            table_rows.each((index) => {
                if(table_rows_last_index > index){
                    const tableRowColumns = table_rows.eq(index).find('td');
                    data['data']['stateWise'].push({
                        id:     ( tableRowColumns.eq(0).text() ).trim(),
                        stateName:      ( tableRowColumns.eq(1).text() ).trim(),
                        confirmedIndianCases:  ( tableRowColumns.eq(2).text() ).trim(),
                        confirmedForeignCases:  ( tableRowColumns.eq(3).text() ).trim(),
                        recoveredCases:      ( tableRowColumns.eq(4).text() ).trim(),
                        deathCases:  ( tableRowColumns.eq(5).text() ).trim(),
                    });
                }
            });
            data['data']['total'] = {
                confirmedIndianCases:  ( table_rows.eq(table_rows_last_index).find('td').eq(1).text() ).trim(),
                confirmedForeignCases:  ( table_rows.eq(table_rows_last_index).find('td').eq(2).text() ).trim(),
                recoveredCases:      ( table_rows.eq(table_rows_last_index).find('td').eq(3).text() ).trim(),
                deathCases:  ( table_rows.eq(table_rows_last_index).find('td').eq(4).text() ).trim(),
            };
        }
    } catch(error) {
        data['message'] = error.toString();
    }
    const output = JSON.stringify(data, null, 2);
    response.setHeader('content-type', 'application/json');
    await response.send(output);
});

app.listen(port);

