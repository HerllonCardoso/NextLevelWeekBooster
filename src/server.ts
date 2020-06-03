import express from 'express';


const app = express();

app.get('/users', (request, response) => {
    console.log('Listasgem de usuarios');



    response.json([
        'Diego',
        "Cleiton",
        "Robson",
        "Danial"
    ]);
});

app.listen(3333);