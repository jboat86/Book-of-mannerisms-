
const {COUNTRY} = require('./data.js');


COUNTRY.forEach(country =>{

    country.mannerisms.forEach(m => {
        if (m.signal){
            m.icon = m.signal;
               delete m.signal;
        }
     
    });
});



console.log(country[0].mannerisms[0]
    
);