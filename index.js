const $ = require('cheerio');
const curl = require('request-promise');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const contactSource = require('./Source/ContactDetails');
const indiaGovtData = require('./Source/indiagov');
const globalData = require('./Source/GlobalData');

app.get('/', async (request, response) => {
    let data = {
        status: false,
        message: 'Something went wrong.',
        message_for_developer: 'API data refresh rate is - 1 time per hour.',
        data: {
            globalSource: {
                ncov: {},
                wom: {}
            },
            indiaSource: {
                stateWise: [],
                total: {},
                data_source: [
                    'https://www.mohfw.gov.in/',
                    'https://google.com'
                ]
            },
            contacts: {
                national_phone_numbers: contactSource.national_phone_numbers,
                state_wise_phone_number: contactSource.stateWise,
                emails: contactSource.emails
            }
        },
        credits: [
            {name: 'Niladri Shekhar Mondal', email: 'nldrmondal35@gmail.com'},
            {name: 'Asit Das', email: 'asit.1308018@gmail.com'}
        ],
        sources: [
            {name: 'Ministry of Health and Family Welfare of India', website: 'https://www.mohfw.gov.in/'},
            {name: 'Health and Family Welfare Department of West Bengal', website: 'https://www.wbhealth.gov.in'},
            {name: 'Global noval corona virus dashboard', website: 'https://ncov2019.live/'},
            {name: 'Worldometer COVID-19 CORONAVIRUS PANDEMIC', website: 'https://www.worldometers.info/coronavirus/'},
            {name: 'Google', website: 'https://google.com/'}
        ]
    };

    try {
        let errors = {indiaGov: null, global_ncov: null, global_wom: null};
        let pullIndiaGovtData_nCov = {};
        let pullIndiaGovtData_wom = {};
        try {
            pullIndiaGovtData = await indiaGovtData.data();
        } catch(error) { errors['indiaGov'] = error.toString(); }
        try {
            pullIndiaGovtData_nCov = await globalData.data_ncov();
        } catch(error) { error['global_ncov'] = error.toString(); }
        try {
            pullIndiaGovtData_wom = await globalData.data_wom();
        } catch(error) { error['global_wom'] = error.toString(); }

        data['data']['indiaSource']['stateWise'] = pullIndiaGovtData && typeof pullIndiaGovtData === 'object' && pullIndiaGovtData.hasOwnProperty('stateWise') ? pullIndiaGovtData.stateWise : [];
        data['data']['indiaSource']['total'] = pullIndiaGovtData && typeof pullIndiaGovtData === 'object' && pullIndiaGovtData.hasOwnProperty('total') ? pullIndiaGovtData.total : [];
        data['data']['globalSource']['ncov'] = pullIndiaGovtData_nCov ? pullIndiaGovtData_nCov : {};
        data['data']['globalSource']['wom'] = pullIndiaGovtData_wom ? pullIndiaGovtData_wom : {};
        
        if( errors.indiaGov && errors.global_ncov &&  errors.global_wom) { throw new Error( errors.toString() ); }

        data['status'] = true;
        data['message'] = 'Successful';
    } catch(error) {
        data['status'] = false;
        data['message'] = error.toString();
    }

    const output = JSON.stringify(data, null, 2);
    response.setHeader('content-type', 'application/json');
    await response.send(output);
});

app.listen(port);

