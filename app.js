const express = require('express');
const nodemon = require('nodemon');
const path = require('path');

const app = express()

/////////////Static files/////////////
app.use(express.static(path.join(__dirname, 'public')))

/////////////View engine//////////////
app.set('view engine', 'ejs');

/////////////Routes///////////////////
const mainRouter = require('./routes/mainRouter')
const photosRouter = require('./routes/photosRouter')
const musicRouter = require('./routes/musicRouter')

/////////////Router paths/////////////
app.use('/', mainRouter)
app.use('/photos', photosRouter)
app.use('/music', musicRouter)


app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor funcionando');
});


// //////////////Servidor///////////////
// app.listen(3000, () => {
//     console.log('Servidor corriendo')
// })


