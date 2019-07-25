import React from 'react'
import { connect } from 'react-redux'
import { fetchCharacter } from '../store/actions'

class Characters extends React.Component {

    componentDidMount() {
        this.props.fetchCharacter()
    }

    render() {
        return(
            <div>
                <h2>characters</h2>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('map state to props:', state)

}

export default connect(
    mapStateToProps,
    { fetchCharacter }
)(Characters);