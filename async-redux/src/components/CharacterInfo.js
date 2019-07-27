import React from 'react'
import { connect } from 'react-redux'

class CharacterInfo extends React.Component {
    render() {
        return(
            <div>
                {/* <h1>{this.props.character.name}</h1> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('character info', state.characterInfo)
    return {
        characterInfo: state.characterInfo
    }
}

export default connect(
    mapStateToProps,
    {}
)(CharacterInfo)