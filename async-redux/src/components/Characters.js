import React from 'react'
import { connect } from 'react-redux'
import { fetchCharacter } from '../store/actions'

import Character from './Character'

class Characters extends React.Component {
    state = { count: 1 }

    componentDidMount() {
        this.props.fetchCharacter(this.state.count)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count){
            this.props.fetchCharacter(this.state.count)
        }
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }  

    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }    
    
    render() {
        console.log('Count: ', this.state.count)
        return(
            <div>
                {this.props.fetching && <h2>loading...</h2>}
                <div className='cards'>
                <Character history={this.props.history} />
                </div>
                {this.state.count > 1 && <button onClick={() => this.decrement()}>Previous Page</button>}
                <button onClick={() => this.increment()}>Next Page</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('map state to props:', state)
    return {
        error: state.error,
        fetching: state.fetching,
    }
}

export default connect(
    mapStateToProps,
    { fetchCharacter }
)(Characters);