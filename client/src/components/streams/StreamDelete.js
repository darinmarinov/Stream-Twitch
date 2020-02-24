import React from 'react'
import Modal from '../Modal'
import { fetchStream, deleteStream } from '../../actions'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

class StreamDelete extends React.Component {


    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }

    renderActions = () => {
        return (
            <>
                <button onClick={()=> this.props.deleteStream(this.props.match.params.id)} className='ui button negative'>Delete</button>
                <Link to="/" className='ui button'>Cancel</Link>
            </>
        )
    }


    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream?'
        }

        return `Are you sure you want to delete this stream with title ${this.props.stream.title}`

    }


    render() {

        return (
            <Modal
                title={'Delete Stream'}
                content={this.renderContent()}
                actions={this.renderActions()}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete)