import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { fetchStreams, editStream } from '../../actions'
import StreamForm from './StreamForm'

class StreamEdit extends React.Component {

    componentDidMount() {
        this.props.fetchStreams(this.props.match.params.id)
    }


    onSubmit = (formValues) => {
         this.props.editStream(this.props.match.params.id, formValues)
    }


    render() {
        console.log(this.props.stream)
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        return (
            <>
               <h3>Edit a Form</h3>
               <StreamForm initialValues={_.pick(this.props.stream,'title', 'description')} onSubmit={this.onSubmit}/>
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStreams, editStream })(StreamEdit);