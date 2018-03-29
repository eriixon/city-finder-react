import React, { Component } from 'react'
import { connect } from "react-redux";
import { Form, Container, Icon } from 'semantic-ui-react'
import { countries } from '../assets/constants'
import fblookup from '../services/fblookup'
import { addCity } from '../store/actions';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';


const mapDispatchToProps = dispatch => { return { addCity: cities => dispatch(addCity(cities)) }};

class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = { city: '', country: '', infoShow: false, errorShow: false };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.city && this.state.country) {
            const lookup = {city:this.state.city, country: this.state.country}
            this.setState({ infoShow: true })
            const self = this;
            new Promise((resolve, reject) => resolve(fblookup(lookup))).then(result => {
                if (result.length) {
                    self.setState({ infoShow: false})
                    this.props.addCity(result)
                } else self.setState({ errorShow: true })
            });
            this.setState({ city: '', country: '' })
        }
    }

    render() {
        const { city, country } = this.state
        const isEnabled = city.length > 2 && country.length > 0;

        return (
            <Container>
                <SweetAlert show={this.state.infoShow} title="Loading" text="We are looking for this place..." onConfirm={() => this.setState({ infoShow: false })}/>
                <SweetAlert show={this.state.errorShow} title="Sorry" text="We could not find this place" onConfirm={() => this.setState({ errorShow: false })}/>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Button fluid positive color='green' size='medium' disabled={!isEnabled}><Icon name='search' /></Form.Button>
                        <Form.Input placeholder='City / Town' name='city' value={city} onChange={this.handleChange} />
                        <Form.Select placeholder='Country' name='country' value={country} options={countries} onChange={this.handleChange} />
                    </Form.Group>
                </Form>
            </Container>
        )
    }
}
const Finder = connect(null, mapDispatchToProps)(ConnectedForm);
export default Finder;
