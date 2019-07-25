import React from 'react';

function Character(props) {
    return (
        <div className='character-card'>
            <h2>{props.character.name}</h2>
            <img src={props.character.image} />
            <h4>Species: {props.character.species} Gender: {props.character.gender}</h4>
            <h4>Status: {props.character.status}</h4>
            <h4>Origin: {props.character.origin.name}</h4>
            <h4>Location: {props.character.location.name}</h4>
        </div>
    )
}

export default Character