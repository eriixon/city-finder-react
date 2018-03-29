import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';


class City extends React.Component {

    deleteCity = (event) => {
        event.preventDefault();
        this.props.deleteCity(this.props.city);
    }

    render() {
        const city = this.props.city;
        return (
            <Card>
                <Card.Content>
                    <Image><iframe title="Google Map"  src={city.mapLink} allowFullScreen frameBorder='0'/></Image>
                    <Card.Header> {city.City} </Card.Header>
                    <Card.Description>
                        {city.County ? (<p>County: {city.County}</p>) : null}
                        {city.Municipality ? (<p>Municipality: {city.Municipality}</p>) : null}
                        <p>State: {city.State}</p>
                        <p>Country: {city.Country}</p>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a href={city.wiki}>
                        <Button animated='vertical' color='blue' className="cardLink">
                            <Button.Content hidden>Wikipedia</Button.Content>
                            <Button.Content visible>
                                <Icon name='wikipedia w' />
                            </Button.Content>
                        </Button>
                    </a>
                    <a href={city.citydata}>
                        <Button animated='vertical' color='green' className="cardLink">
                            <Button.Content hidden>City-Data</Button.Content>
                            <Button.Content visible>
                                <Icon name='building outline' />
                            </Button.Content>
                        </Button>
                    </a>

                        <Button animated='vertical' color='red' className="cardLink" onClick={this.deleteCity}>
                            <Button.Content hidden>Delete</Button.Content>
                            <Button.Content visible>
                                <Icon name='trash' />
                            </Button.Content>
                        </Button>

                </Card.Content>
            </Card>
        );
    }
}

export default City;
