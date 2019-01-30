import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Button = (props) => {
    return (
        <div>

        </div>
    );
}

const Answer = (props) => {
    return (
        <div>
            ...
        </div>
    );
}

const Stars = (props) => {
    return (
        <div>
            <FontAwesomeIcon icon="igloo"/>
            <FontAwesomeIcon icon="igloo"/>
            <FontAwesomeIcon icon="igloo"/>
            <FontAwesomeIcon icon="igloo"/>
            <FontAwesomeIcon icon="igloo"/>
        </div>
    );
}

class Game extends Component {
    render() {
        return (
            <div>
                <h3>Play Nine</h3>
                <Stars/>
                <Button/>
                <Answer/>
            </div>
        );
    }
}

export default Game;