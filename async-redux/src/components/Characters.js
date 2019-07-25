import React from 'react'
import { connect } from 'react-redux'
import { fetchCharacter } from '../store/actions'

import Character from './Character'

class Characters extends React.Component {

    componentDidMount() {
        this.props.fetchCharacter()
    }
    
    render() {
        console.log('characters: ', this.props.characters)
        return(
            <div>
                <h2>characters</h2>
                {this.props.fetching && <h2>loading...</h2>}
                <div className='cards'>
                    {this.props.characters && this.props.characters.map(character => <Character key={character.id} character={character} />)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('map state to props:', state)
    return {
        error: state.error,
        fetching: state.fetching,
        characters: state.characters
    }
}

export default connect(
    mapStateToProps,
    { fetchCharacter }
)(Characters);