var uniqid = require('uniqid');
const express = require('express');
const axios = require('axios')
var cors = require('cors');
const port = 3002;
const app = express();

app.use(cors())
var access_token;
axios.get('https://test.gnzs.ru/oauth/get-token.php',
    {
        headers: {
            'X-Client-Id': '31122838',
        }
    })
    .then((response) => {
        access_token = response.data.access_token
    })


app.get(`/leads`, (request, res) => {
    axios.post('https://dyupinlesha.amocrm.ru/api/v4/leads', [
        {
            name: `${uniqid()}`
        }
    ],
        {
            headers: {
                Authorization: 'Bearer ' + access_token,
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
                Authorization: 'Bearer ' + access_token,
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
                Authorization: 'Bearer ' + access_token,
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

