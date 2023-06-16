var uniqid = require('uniqid');
const express = require('express');
const axios = require('axios')
var cors = require('cors');
const port = 3002;
const app = express();


app.use(cors())

app.get(`/leads`, (request, res) => {
    axios.post('https://dyupinlesha.amocrm.ru/api/v4/leads', [
        {
            name: `${uniqid()}`
        }
    ],
        {
            headers: {
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc2MTMwYjFkOGI3OWU3ZGY3MDdhM2MzYzE0NjcwNDc2NzZkYjc4YTFhZmRmNjg4N2E2YzVlZDVhYWQzYWI3Y2Q4ODNhMWI0NDE1YTJkODI2In0.eyJhdWQiOiJhZmY2ZmYxMS01Mzc4LTRmYmUtODQ1Yi0wMDBmZWRlNDZjYWIiLCJqdGkiOiI3NjEzMGIxZDhiNzllN2RmNzA3YTNjM2MxNDY3MDQ3Njc2ZGI3OGExYWZkZjY4ODdhNmM1ZWQ1YWFkM2FiN2NkODgzYTFiNDQxNWEyZDgyNiIsImlhdCI6MTY4NjgzNDQzNiwibmJmIjoxNjg2ODM0NDM2LCJleHAiOjE2ODY5MjA4MzYsInN1YiI6Ijk3MzEyNDYiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6MzExMjI4MzgsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6InYyIiwic2NvcGVzIjpbImNybSJdfQ.Cd5JKNAVPk0K_jSRMhnn60MKDCv5SHH3QAOJ7ns3-zPEiPVp0_zGrSxhzP1-S5j6Q9kwOACgz3hnrJNQNKNV7D_JanWstcjTYhWCrJxAOq5Mx9H-wfL5YsMsfjWfw-ZqsJ9ZtYXM54X4Lw2YcCyR0THxpEpiZ4tE-lTmIyr0WpGKlJqgVzxNZ7-ETd4sAyLIb7A8psz_YFPHnBCFsDmFy-O3ALQ1NT53OmOsVdWgACJQfQ5PpwADHQqXYeW_9qT07oVaSMCLdGmeedTzy2GteUTxJLD8Bsb0vvy7q8NjEgUG3p1lZn03QpBMxQ6Zrp4FwkNX30JfneDAGSdHJoq8GA',
            }
        })
        .then((response) => {
            res.send(JSON.stringify([{ id: response.data._embedded.leads[0].id, name: response.config.data }]))
        })
});

app.get(`/contacts`, (request, res) => {
    axios.post('https://dyupinlesha.amocrm.ru/api/v4/contacts', [
        {
            name: `${uniqid()}`
        }
    ],
        {
            headers: {
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc2MTMwYjFkOGI3OWU3ZGY3MDdhM2MzYzE0NjcwNDc2NzZkYjc4YTFhZmRmNjg4N2E2YzVlZDVhYWQzYWI3Y2Q4ODNhMWI0NDE1YTJkODI2In0.eyJhdWQiOiJhZmY2ZmYxMS01Mzc4LTRmYmUtODQ1Yi0wMDBmZWRlNDZjYWIiLCJqdGkiOiI3NjEzMGIxZDhiNzllN2RmNzA3YTNjM2MxNDY3MDQ3Njc2ZGI3OGExYWZkZjY4ODdhNmM1ZWQ1YWFkM2FiN2NkODgzYTFiNDQxNWEyZDgyNiIsImlhdCI6MTY4NjgzNDQzNiwibmJmIjoxNjg2ODM0NDM2LCJleHAiOjE2ODY5MjA4MzYsInN1YiI6Ijk3MzEyNDYiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6MzExMjI4MzgsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6InYyIiwic2NvcGVzIjpbImNybSJdfQ.Cd5JKNAVPk0K_jSRMhnn60MKDCv5SHH3QAOJ7ns3-zPEiPVp0_zGrSxhzP1-S5j6Q9kwOACgz3hnrJNQNKNV7D_JanWstcjTYhWCrJxAOq5Mx9H-wfL5YsMsfjWfw-ZqsJ9ZtYXM54X4Lw2YcCyR0THxpEpiZ4tE-lTmIyr0WpGKlJqgVzxNZ7-ETd4sAyLIb7A8psz_YFPHnBCFsDmFy-O3ALQ1NT53OmOsVdWgACJQfQ5PpwADHQqXYeW_9qT07oVaSMCLdGmeedTzy2GteUTxJLD8Bsb0vvy7q8NjEgUG3p1lZn03QpBMxQ6Zrp4FwkNX30JfneDAGSdHJoq8GA',
            }
        })
        .then((response) => {
            res.send(JSON.stringify([{ id: response.data._embedded.contacts[0].id, name: response.config.data }]))
        })
});

app.get(`/companies`, (request, res) => {
    axios.post('https://dyupinlesha.amocrm.ru/api/v4/companies', [
        {
            name: `${uniqid()}`
        }
    ],
        {
            headers: {
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijc2MTMwYjFkOGI3OWU3ZGY3MDdhM2MzYzE0NjcwNDc2NzZkYjc4YTFhZmRmNjg4N2E2YzVlZDVhYWQzYWI3Y2Q4ODNhMWI0NDE1YTJkODI2In0.eyJhdWQiOiJhZmY2ZmYxMS01Mzc4LTRmYmUtODQ1Yi0wMDBmZWRlNDZjYWIiLCJqdGkiOiI3NjEzMGIxZDhiNzllN2RmNzA3YTNjM2MxNDY3MDQ3Njc2ZGI3OGExYWZkZjY4ODdhNmM1ZWQ1YWFkM2FiN2NkODgzYTFiNDQxNWEyZDgyNiIsImlhdCI6MTY4NjgzNDQzNiwibmJmIjoxNjg2ODM0NDM2LCJleHAiOjE2ODY5MjA4MzYsInN1YiI6Ijk3MzEyNDYiLCJncmFudF90eXBlIjoiIiwiYWNjb3VudF9pZCI6MzExMjI4MzgsImJhc2VfZG9tYWluIjoiYW1vY3JtLnJ1IiwidmVyc2lvbiI6InYyIiwic2NvcGVzIjpbImNybSJdfQ.Cd5JKNAVPk0K_jSRMhnn60MKDCv5SHH3QAOJ7ns3-zPEiPVp0_zGrSxhzP1-S5j6Q9kwOACgz3hnrJNQNKNV7D_JanWstcjTYhWCrJxAOq5Mx9H-wfL5YsMsfjWfw-ZqsJ9ZtYXM54X4Lw2YcCyR0THxpEpiZ4tE-lTmIyr0WpGKlJqgVzxNZ7-ETd4sAyLIb7A8psz_YFPHnBCFsDmFy-O3ALQ1NT53OmOsVdWgACJQfQ5PpwADHQqXYeW_9qT07oVaSMCLdGmeedTzy2GteUTxJLD8Bsb0vvy7q8NjEgUG3p1lZn03QpBMxQ6Zrp4FwkNX30JfneDAGSdHJoq8GA',
            }
        })
        .then((response) => {
            res.send(JSON.stringify([{ id: response.data._embedded.companies[0].id, name: response.config.data }]))
        })
});

const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);
    console.log(`Server listening on port ${server.address().port}`);
});

