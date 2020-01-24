import React from 'react'
import {connect} from 'react-redux';
import { fetchStreams} from '../../actions'

class StreamList extends React.Component {

    componentDidMount(){
        this.props.fetchStreams()
    }
     
    render(){
        const {streams} = this.props;
        console.log(streams)
        return(
           <>
           {
              streams != 0 || streams.map(stream =>{
                  return(
                      <div>{stream.id}</div>
                  )
              })
           }
           </>
        )
    }
}

const mapStateToProps = state => {
    return({
        streams: state.streams 
    })
}


export default connect(mapStateToProps,{fetchStreams})(StreamList)