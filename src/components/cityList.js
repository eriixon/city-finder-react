import React from 'react';
import { connect } from "react-redux";
import { Container, Card } from 'semantic-ui-react'
import City from './city.js';
import { deleteCity } from '../store/actions';


const mapStateToProps = state => { return { cityList: state.cityList }};
const mapDispatchToProps = dispatch => { return {deleteCity: city => dispatch(deleteCity(city)) }};

const CityList = ({ cityList, deleteCity}) => (
    <Container>
        <Card.Group>
            {cityList !== [] ? (cityList.map((city, index) => (
                <City key={index} city={city} deleteCity={deleteCity} />
                ))) : null}
        </Card.Group>
    </Container>
);

const List = connect(mapStateToProps, mapDispatchToProps)(CityList);

export default List;