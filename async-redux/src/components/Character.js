import React from 'react';
import { connect } from 'react-redux';

import { getCharacter } from '../store/actions'

class Character extends React.Component {

    getCharacter = (charId) => {
        this.props.getCharacter(charId)
        this.props.history.push(`/character-info`)
    }

    render() {
        console.log('character props', this.props)
        return (
            <div>
                {this.props.characters.map(character =>              
                    <div key={character.id} className='character-card' onClick={() => this.getCharacter(character.id)}>
                        <h2>{character.name}</h2>
                        <img src={character.image} alt={character.name} />
                        <h4>Species: {character.species}</h4>
                        <h4>Gender: {character.gender}</h4>
                        <h4>Status: {character.status}</h4>
                        <h4>Origin: {character.origin.name}</h4>
                        <h4>Location: {character.location.name}</h4>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('character state', state)
    return{
        characters: state.characters
    }
}

export default connect(
    mapStateToProps,
    { getCharacter }
)(Character)