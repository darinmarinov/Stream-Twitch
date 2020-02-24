import React from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions'

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams()
    }

    renderList = () => {
        return this.props.streams.map((stream) => {
            return (
                <div className='ui message' key={stream.id}>
                    {this.props.uid === stream.userId ?
                        <div className='right floated content'>
                            <Link to={`/streams/edit/${stream.id}`} className="ui button primary" type="submit">Edit</Link>
                            <Link to={`/streams/delete/${stream.id}`} className="ui button negative" type="submit">Delete</Link>
                        </div>
                        :
                        ''
                    }
                    <div className='content'>
                        <div className="header">  <i className='icon camera aligned middle' />{stream.title}</div>
                        <div className="ui horizontal inverted divider"></div>
                        <div className='text description'>
                            {stream.description}
                        </div>
                    </div>
                </div>
            )
        })
    }

    renderCreate = () => {
       return this.props.isSignedIn ?   <Link to="/streams/new" className="ui button primary right floated" type="submit">Create a List</Link> : ''
    }

    render() {
        console.log(this.props)
        return (
            <>
                <h2>Stream:</h2>
                <div className='ui celled list'>
                    {this.renderList()}
                    {this.renderCreate()}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams),
        uid: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}


export default connect(mapStateToProps, { fetchStreams })(StreamList)