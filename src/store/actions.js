export const addCity = cities => ({ 
    type: "ADD_CITY", 
    newCities: cities 
});

export const deleteCity = city => ({
    type: 'DEL_CITY',
    city: city
});