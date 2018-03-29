import { links } from '../assets/constants'

const foundCity = (city, county, municipality, state, country) => {

    let map_link = `${links.google_map}+${city}`;
    map_link = (county !== '') ? `${map_link}+${county}` : map_link;
    map_link = (municipality !== '') ? `${map_link}+${municipality}` : map_link;
    map_link += `+${state}+${country}`;

    let wiki_link = `${links.wiki}${city},_${state}`;
    let citydata_link = `${links.city_data}${city}-${state}.html`;

    return {
        City: city, County: county, Municipality: municipality, State: state, Country: country,
        mapLink: map_link, wiki: wiki_link, citydata: citydata_link
    };
}

export default foundCity;
