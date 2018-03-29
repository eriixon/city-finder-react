import firebase from './fbconfig'
import foundCity from './foundCity'


const fblookup = (lookup) => {
    const { city, country } = lookup;
    const itemsRef = firebase.database().ref(country);
    
    var myPromise = new Promise((resolve, reject) => {
        itemsRef.on('value', (snapshot) => {
            let data = snapshot.val()        
            if (data) resolve(lookUpCitis(data, country, city));
            else reject('Something Wrong');
        });
    });
    return myPromise.then(
        result =>  {return result }, 
        result => console.error(result)
    );
}


const lookUpCitis = (states, country, city) => {
    
    const foundCities = [];

    Object.values(states).forEach(state => {
        Object.values(state).forEach(element => {
            if (element.hasOwnProperty('Name') && element['Name'].toLowerCase() === city.toLowerCase()) {
                const [fcity, fstate] = [element['Name'], element['State']]
                foundCities.push(foundCity(fcity, '', '', fstate, country));
            } else Object.values(element).forEach(subelement => {
                if ( subelement.hasOwnProperty('Name') && subelement['Name'].toLowerCase() === city.toLowerCase()) {
                    const [c, m] = [ subelement['County'] ? subelement['County'] : '', subelement['Municipality'] ? subelement['Municipality'] : '' ];
                    const [fcity, fstate] = [subelement['Name'], subelement['State']]
                    foundCities.push(foundCity(fcity, c, m, fstate, country));
                }
            });
        });
    });

    return foundCities;
}

export default fblookup
