const express = require('express')
const app = express();


const movieRoutes = require('./routes/movieRoutes');
const tvShowRoutes = require('./routes/tvShowRoutes');
const authRoutes = require('./routes/authRoutes');


require('dotenv').config();
app.use(express.urlencoded({extended: false}));
app.use(express.json());





app.use('/api', movieRoutes);
app.use('/api/tvshows', tvShowRoutes);


app.use('', authRoutes);




app.listen(3000, () =>{
    console.log('Server started...')
});