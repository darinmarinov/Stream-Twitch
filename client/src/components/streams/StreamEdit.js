import React from 'react'
import { connect } from 'react-redux'
import { fetchStreams } from '../../actions'

class StreamEdit extends React.Component {

    componentDidMount() {
        this.props.fetchStreams(this.props.match.params.id)
    }


    render() {

        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        return (
            <>
 
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStreams })(StreamEdit);