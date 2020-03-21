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
            total: {},
            contacts: {
                national_phone_numbers: ['1075', '+91-11-23978046'],
                state_wise_phone_number: {},
                email: 'ncov2019@gov.in'
            }
        },
        credits: [
            {name: 'Niladri Shekhar Mondal', email: 'nldrmondal35@gmail.com'},
            {name: 'Ashit Das', email: 'asit.1308018@gmail.com'}
        ],
        sources: [
            {name: 'Ministry of Health and Family Welfare of India', website: 'https://www.mohfw.gov.in/'}
        ]
    };

    const state_wise_contacts = [
        {name:'andhra pradesh',contact: ['0866-2410978']},
        {name:'arunachal pradesh',contact:['9436055743']},
        {name:'assam',contact:['6913347770']},
        {name:'bihar',contact:['104']},
        {name:'chhattisgarh',contact:['104']},
        {name:'goa',contact:['104']},
        {name:'gujarat',contact:['104']},
        {name:'haryana',contact:['8558893911']},
        {name:'himachal pradesh',contact:['104']},
        {name:'jharkhand',contact:['104']},
        {name:'karnataka',contact:['104']},
        {name:'kerala',contact:['0471-2552056']},
        {name:'madhya pradesh',contact:['0755-2527177']},
        {name:'maharashtra',contact:['020-26127394']},
        {name:'manipur',contact:['3852411668']},
        {name:'meghalaya',contact:['108']},
        {name:'mizoram',contact:['102']},
        {name:'nagaland',contact:['7005539653']},
        {name:'odisha',contact:['9439994859']},
        {name:'punjab',contact:['104']},
        {name:'rajasthan',contact:['0141-2225624']},
        {name:'sikkim',contact:['104']},
        {name:'tamil nadu',contact:['044-29510500']},
        {name:'telengana',contact:['104']},
        {name:'tripura',contact:['0381-2315879']},
        {name:'uttarakhand',contact:['104']},
        {name:'uttar pradesh',contact:['18001805145']},
        {name:'west bengal',contact:['1800313444222','03323412600']},
        {name:'andaman and nicobar islands',contact:['03192-232102']},
        {name:'chandigarh',contact:['9779558282']},
        {name:'dadra and nagar haveli and daman & diu',contact:['104']},
        {name:'delhi',contact:['011-22307145']},
        {name:'jammu & kashmir',contact:['01912520982','0194-2440283']},
        {name:'ladakh',contact:['1982256462']},
        {name:'lakshadweep',contact:['104']},
        {name:'puducherry',contact:['104']}
    ].map( item => {
        return {
            name: item.name,
            code: item.name.replace(/[\s\W]/, ''),
            code2: item.name.replace(/[&]/, 'and').replace(/[\s\W]/, ''),
            contact: item.contact
        };
    });
    
    data['data']['contacts']['state_wise_phone_number'] = state_wise_contacts.map(item => {
        return {
            name: item.name,
            contact: item.contact
        };
    });

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
                    let filterStateName = ( ( ( tableRowColumns.eq(1).text() ).trim() ).toLowerCase() ).replace(/[\s\W]/, '');
                    let contactDetails = state_wise_contacts.filter(item => item.code === filterStateName || item.code2 === filterStateName);
                    const pushableData = {
                        id:     ( tableRowColumns.eq(0).text() ).trim(),
                        stateName:      ( tableRowColumns.eq(1).text() ).trim(),
                        confirmedIndianCases:  ( tableRowColumns.eq(2).text() ).trim(),
                        confirmedForeignCases:  ( tableRowColumns.eq(3).text() ).trim(),
                        recoveredCases:      ( tableRowColumns.eq(4).text() ).trim(),
                        deathCases:  ( tableRowColumns.eq(5).text() ).trim(),
                        contactNumber: (contactDetails && typeof contactDetails === 'object' && contactDetails.length > 0 ? contactDetails[0].contact : [])
                    };
                    data['data']['stateWise'].push(pushableData);
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

