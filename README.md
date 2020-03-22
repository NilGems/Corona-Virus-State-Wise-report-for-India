# API TO TRACK COVID-19 CORONAVIRUS PANDEMIC DATA FOR INDIA (DATA COLLECTED FROM RELIABLE SOURCE)
API to track COVID-19 CORONAVIRUS PANDEMIC DATA FOR INDIA

## Usage
- ```clone``` this git respiratory
- run ```npm install``` from your TERMINAL
- run ```npm start``` from you TEMINAL
- open ```127.0.0.1:3000``` from your browser.
## Output
<details><summary>CLICK ME</summary>
<p>
  
```json
{
  "status": true,
  "message": "Successful",
  "message_for_developer": "API data refresh rate is - 1 time per hour.",
  "data": {
    "globalSource": {
      "ncov": {
        "country": "India",
        "confirmed": 332,
        "deceased": 5,
        "percentage_death_changes": 0,
        "recovered": 24,
        "serious": 0,
        "data_source": "https://ncov2019.live/"
      },
      "wom": {
        "country": "India",
        "total_cases": 332,
        "new_cases": 0,
        "total_deaths": 5,
        "new_deaths": 0,
        "total_recovered": 24,
        "active_cases": 303,
        "serious_cases": 0,
        "tot_cases_in_one_miliopn_peoples": 0.2,
        "data_source": "https://www.worldometers.info/coronavirus/"
      }
    },
    "indiaSource": {
      "stateWise": [
        {
          "id": 1,
          "stateName": "Andhra Pradesh",
          "confirmedIndianCases": 3,
          "confirmedForeignCases": 0,
          "recoveredCases": 0,
          "deathCases": 0,
          "contactNumber": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+918662410978",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "id": 2,
          "stateName": "Chhattisgarh",
          "confirmedIndianCases": 1,
          "confirmedForeignCases": 0,
          "recoveredCases": 0,
          "deathCases": 0,
          "contactNumber": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "104",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "id": 3,
          "stateName": "Delhi",
          "confirmedIndianCases": 26,
          "confirmedForeignCases": 1,
          "recoveredCases": 5,
          "deathCases": 1,
          "contactNumber": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+911122307145",
              "type": "Helpline"
            }
          ]
        },
        {
          "id": 4,
          "stateName": "Gujarat",
          "confirmedIndianCases": 14,
          "confirmedForeignCases": 0,
          "recoveredCases": 0,
          "deathCases": 0,
          "contactNumber": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "104",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "id": 5,
          "stateName": "Haryana",
          "confirmedIndianCases": 3,
          "confirmedForeignCases": 14,
          "recoveredCases": 0,
          "deathCases": 0,
          "contactNumber": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+918558893911",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "id": 6,
          "stateName": "Himachal Pradesh",
          "confirmedIndianCases": 2,
          "confirmedForeignCases": 0,
          "recoveredCases": 0,
          "deathCases": 0,
          "contactNumber": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "104",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "id": 7,
          "stateName": "Karnataka",
          "confirmedIndianCases": 20,
          "confirmedForeignCases": 0,
          "recoveredCases": 2,
          "deathCases": 1,
          "contactNumber": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "104",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "id": 8,
          "stateName": "Kerala",
          "confirmedIndianCases": 45,
          "confirmedForeignCases": 7,
          "recoveredCases": 3,
          "deathCases": 0,
          "contactNumber": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+914712552056",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "id": 9,
          "stateName": "Madhya Pradesh",
          "confirmedIndianCases": 4,
          "confirmedForeignCases": 0,
          "recoveredCases": 0,
          "deathCases": 0,
          "contactNumber": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+917552527177",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "id": 10,
          "stateName": "Maharashtra",
          "confirmedIndianCases": 60,
          "confirmedForeignCases": 3,
          "recoveredCases": 0,
          "deathCases": 2,
          "contactNumber": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+912026127394",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "id": 11,
          "stateName": "Odisha",
          "confirmedIndianCases": 2,
          "confirmedForeignCases": 0,
          "recoveredCases": 0,
          "deathCases": 0,
          "contactNumber": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+919439994859",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "id": 12,
          "stateName": "Puducherry",
          "confirmedIndianCases": 1,
          "confirmedForeignCases": 0,
          "recoveredCases": 0,
          "deathCases": 0,
          "contactNumber": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "104",
              "type": "Helpline"
            }
          ]
        },
        {
          "id": 13,
          "stateName": "Punjab",
          "confirmedIndianCases": 13,
          "confirmedForeignCases": 0,
          "recoveredCases": 0,
          "deathCases": 1,
          "contactNumber": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "104",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "id": 14,
          "stateName": "Rajasthan",
          "confirmedIndianCases": 22,
          "confirmedForeignCases": 2,
          "recoveredCases": 3,
          "deathCases": 0,
          "contactNumber": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+911412225624",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "id": 15,
          "stateName": "Tamil Nadu",
          "confirmedIndianCases": 4,
          "confirmedForeignCases": 2,
          "recoveredCases": 1,
          "deathCases": 0,
          "contactNumber": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+914429510500",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "id": 16,
          "stateName": "Telengana",
          "confirmedIndianCases": 10,
          "confirmedForeignCases": 11,
          "recoveredCases": 1,
          "deathCases": 0,
          "contactNumber": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "104",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "id": 17,
          "stateName": "Chandigarh",
          "confirmedIndianCases": 5,
          "confirmedForeignCases": 0,
          "recoveredCases": 0,
          "deathCases": 0,
          "contactNumber": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+919779558282",
              "type": "Helpline"
            }
          ]
        },
        {
          "id": 18,
          "stateName": "Jammu and Kashmir",
          "confirmedIndianCases": 4,
          "confirmedForeignCases": 0,
          "recoveredCases": 0,
          "deathCases": 0,
          "contactNumber": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+911912520982",
              "type": "Helpline"
            },
            {
              "phone_number": "+911942440283",
              "type": "Helpline"
            }
          ]
        },
        {
          "id": 19,
          "stateName": "Ladakh",
          "confirmedIndianCases": 13,
          "confirmedForeignCases": 0,
          "recoveredCases": 0,
          "deathCases": 0,
          "contactNumber": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+911982256462",
              "type": "Helpline"
            }
          ]
        },
        {
          "id": 20,
          "stateName": "Uttar Pradesh",
          "confirmedIndianCases": 24,
          "confirmedForeignCases": 1,
          "recoveredCases": 9,
          "deathCases": 0,
          "contactNumber": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "18001805145",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "id": 21,
          "stateName": "Uttarakhand",
          "confirmedIndianCases": 3,
          "confirmedForeignCases": 0,
          "recoveredCases": 0,
          "deathCases": 0,
          "contactNumber": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "104",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "id": 22,
          "stateName": "West Bengal",
          "confirmedIndianCases": 4,
          "confirmedForeignCases": 0,
          "recoveredCases": 0,
          "deathCases": 0,
          "contactNumber": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+913323571075",
              "type": "Helpline",
              "source": "https://www.wbhealth.gov.in/"
            },
            {
              "phone_number": "+913323571083",
              "type": "Helpline",
              "source": "https://www.wbhealth.gov.in/"
            },
            {
              "phone_number": "+913323573636",
              "type": "Helpline",
              "source": "https://www.wbhealth.gov.in/"
            },
            {
              "phone_number": "1800313444222",
              "type": "Helpline",
              "source": "https://www.wbhealth.gov.in/"
            },
            {
              "phone_number": "+913323412600",
              "type": "Helpline",
              "source": "https://www.wbhealth.gov.in/"
            },
            {
              "phone_number": "+913323032200",
              "type": "Beleghata Hospital",
              "source": "https://www.google.com/"
            },
            {
              "phone_number": "+913322041101",
              "type": "PG Hospital",
              "source": "https://www.google.com/"
            },
            {
              "phone_number": "+913325557656",
              "type": "RG Kor Hospital",
              "source": "https://www.google.com/"
            }
          ]
        }
      ],
      "total": {
        "confirmedIndianCases": "283",
        "confirmedForeignCases": "41",
        "recoveredCases": "24",
        "deathCases": "5"
      },
      "data_source": [
        "https://www.mohfw.gov.in/",
        "https://google.com"
      ]
    },
    "contacts": {
      "national_phone_numbers": [
        {
          "phone_number": "1075",
          "type": "Helpline",
          "source": "https://www.mohfw.gov.in/"
        },
        {
          "phone_number": "+911123978046",
          "type": "Central Helpline",
          "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
        }
      ],
      "state_wise_phone_number": [
        {
          "name": "andhra pradesh",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+918662410978",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "name": "arunachal pradesh",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+919436055743",
              "type": "Helpline"
            }
          ]
        },
        {
          "name": "assam",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+916913347770",
              "type": "Helpline"
            }
          ]
        },
        {
          "name": "bihar",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "104",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "name": "chhattisgarh",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "104",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "name": "goa",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "104",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "name": "gujarat",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "104",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "name": "haryana",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+918558893911",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "name": "himachal pradesh",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "104",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "name": "jharkhand",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "104",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "name": "karnataka",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "104",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "name": "kerala",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+914712552056",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "name": "madhya pradesh",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+917552527177",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "name": "maharashtra",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+912026127394",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "name": "manipur",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+913852411668",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "name": "meghalaya",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "108",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "name": "mizoram",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "102",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "name": "nagaland",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+917005539653",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "name": "odisha",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+919439994859",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "name": "punjab",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "104",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "name": "rajasthan",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+911412225624",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "name": "sikkim",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "104",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "name": "tamil nadu",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+914429510500",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "name": "telengana",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "104",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "name": "tripura",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+913812315879",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "name": "uttarakhand",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "104",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "name": "uttar pradesh",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "18001805145",
              "type": "Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            }
          ]
        },
        {
          "name": "west bengal",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+913323571075",
              "type": "Helpline",
              "source": "https://www.wbhealth.gov.in/"
            },
            {
              "phone_number": "+913323571083",
              "type": "Helpline",
              "source": "https://www.wbhealth.gov.in/"
            },
            {
              "phone_number": "+913323573636",
              "type": "Helpline",
              "source": "https://www.wbhealth.gov.in/"
            },
            {
              "phone_number": "1800313444222",
              "type": "Helpline",
              "source": "https://www.wbhealth.gov.in/"
            },
            {
              "phone_number": "+913323412600",
              "type": "Helpline",
              "source": "https://www.wbhealth.gov.in/"
            },
            {
              "phone_number": "+913323032200",
              "type": "Beleghata Hospital",
              "source": "https://www.google.com/"
            },
            {
              "phone_number": "+913322041101",
              "type": "PG Hospital",
              "source": "https://www.google.com/"
            },
            {
              "phone_number": "+913325557656",
              "type": "RG Kor Hospital",
              "source": "https://www.google.com/"
            }
          ]
        },
        {
          "name": "andaman and nicobar islands",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+913192232102",
              "type": "Helpline"
            }
          ]
        },
        {
          "name": "chandigarh",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+919779558282",
              "type": "Helpline"
            }
          ]
        },
        {
          "name": "dadra and nagar haveli and daman & diu",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "104",
              "type": "Helpline"
            }
          ]
        },
        {
          "name": "delhi",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+911122307145",
              "type": "Helpline"
            }
          ]
        },
        {
          "name": "jammu & kashmir",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+911912520982",
              "type": "Helpline"
            },
            {
              "phone_number": "+911942440283",
              "type": "Helpline"
            }
          ]
        },
        {
          "name": "ladakh",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "+911982256462",
              "type": "Helpline"
            }
          ]
        },
        {
          "name": "lakshadweep",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "104",
              "type": "Helpline"
            }
          ]
        },
        {
          "name": "puducherry",
          "contact": [
            {
              "phone_number": "+911123978046",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf"
            },
            {
              "phone_number": "1075",
              "type": "National Helpline",
              "source": "https://www.mohfw.gov.in/"
            },
            {
              "phone_number": "104",
              "type": "Helpline"
            }
          ]
        }
      ],
      "emails": [
        {
          "email": "ncov2019@gov.in",
          "type": "Help email address",
          "source": "https://www.mohfw.gov.in/"
        },
        {
          "email": "ncov2019@gmail.com",
          "type": "Help email address",
          "source": "https://www.mohfw.gov.in/"
        }
      ]
    }
  },
  "credits": [
    {
      "name": "Niladri Shekhar Mondal",
      "email": "nldrmondal35@gmail.com"
    },
    {
      "name": "Asit Das",
      "email": "asit.1308018@gmail.com"
    }
  ],
  "sources": [
    {
      "name": "Ministry of Health and Family Welfare of India",
      "website": "https://www.mohfw.gov.in/"
    },
    {
      "name": "Health and Family Welfare Department of West Bengal",
      "website": "https://www.wbhealth.gov.in"
    },
    {
      "name": "Global noval corona virus dashboard",
      "website": "https://ncov2019.live/"
    },
    {
      "name": "Worldometer COVID-19 CORONAVIRUS PANDEMIC",
      "website": "https://www.worldometers.info/coronavirus/"
    },
    {
      "name": "Google",
      "website": "https://google.com/"
    }
  ]
}
```

</p>
</details>
  
## API Response example
[CLICK HERE](https://na-corona-virus-statstics.herokuapp.com/)

## Data sources
- [Ministry of Health and Family Welfare of India](https://www.mohfw.gov.in/)
- [Health and Family Welfare Department of West Bengal](https://www.wbhealth.gov.in)
- [Global noval corona virus dashboard](https://ncov2019.live/)
- [Worldometer COVID-19 CORONAVIRUS PANDEMIC](https://www.worldometers.info/coronavirus/)
- [Google](https://google.com/)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
