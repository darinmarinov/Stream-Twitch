import React from 'react'
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions'

class StreamList extends React.Component {

    componentDidMount() {
        this.props.fetchStreams()
    }

    renderList = () => {
        return this.props.streams.map((stream) => {
            return (
                <div className='item' key={stream.id}>
                    <i className='icon camera aligned middle' />
                    <div className='content'>
                        <h3>{stream.title}</h3>
                        <div className='description'>
                            {stream.description}
                        </div>
                    </div>
                    {this.props.uid === stream.userId ?
                        <div className='buttons'>
                            <button className="btn waves-effect waves-light" type="submit">Delete</button>
                            <button className="btn waves-effect waves-light" type="submit">Edit</button>
                        </div>
                        :
                        ''
                    }
                </div>
            )
        })
    }

    render() {
        console.log(this.props)
        return (
            <>
                <h2>Stream:</h2>
                <div className='ui celled list'>
                    {this.renderList()}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        streams: Object.values(state.streams),
        uid: state.auth.userId
    }
}


export default connect(mapStateToProps, { fetchStreams })(StreamList)