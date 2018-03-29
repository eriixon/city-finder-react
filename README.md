# City Finder v.4.0 with React
City Finder v.4 with React

## Description.
This light web application can help to find information about a city ot town just by a name. The result will be a single card or several cards for all cities/towns with the current name.

## Project Guidelines
- Simple - very user friendly
- Lightweight - Small file and memory footprint
- Flexible - Very easy to maintain

## How to use
* Chose the country - USA, Canada or Mexico
* Fill down the name of the city and click the button
* Try in at https://city-find.herokuapp.com/

## Technologies
* JavaScript Framework - React with Redux
* User Interface Framework - Semantic UI
* Database - Firebase
* Builder - Webpack
* Engine - Node JS and Yarn 

Also this app uses [Google Maps JS API](https://developers.google.com/maps/documentation/javascript/) to find the current city/tonw on the map and show it in the card.
## Reference

I developed this project using several frameworks:
* [City Finder v2.1 with Vue](https://github.com/eriixon/city-finder-vue2)
* [City Finder v3.1 with Angular](https://github.com/eriixon/city-finder-angular)

## Build Setup

``` bash
# install dependencies
npm install or yarn install

# serve with hot reload at localhost:3000
npm start or yarn start

# build for production with minification
npm run build or yarn build

# run all tests
npm test or yarn test
```

The last step is to provide Firebase tokens, put them to fbconfig.js in config directory (needs to be created):
```
{
"apiKey":"...", 
"authDomain":"...",
"databaseURL": "...",
"projectId": "...",
"storageBucket": "...",
"messagingSenderId": "..."
}
```

## Version
The current version is 2.1 and placed at Heroku for demostration https://findcity.herokuapp.com/

## License
See the LICENSE file in the root directory of this source tree. Feel free to use and modify the code.
