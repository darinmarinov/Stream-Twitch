import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {signIn, signOut} from '../actions'
import auth from '../reducers'

class GoogleAuth extends React.Component{


    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId:"356398052274-chc7dof5bsqbdmjek414scqvvpgqct8m.apps.googleusercontent.com",
                scope: "email"
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId())
        }
        else{
            this.props.signOut()
        }
    }


    renderButton = () => {
        if(this.props.isSignedIn === null){
            return (
                <div>I don't know if we are signed In</div>
            )
        }
        else if(this.props.isSignedIn){
            return(
               <button className="ui red google button" onClick={()=>this.auth.signOut()}>
                    <i className="google icon"/>
                    Sign Out
               </button>
            )
        }
        else{
            return (
                <button className="ui red google button" onClick={()=>this.auth.signIn()}>
                    <i className="google icon"/>
                   Sign In
                </button> 
            )
        }
    }
   
    render(){
        console.log(this.props.singIn)
        return(
           <React.Fragment>
               {this.renderButton()}
           </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        isSignedIn: state.auth.isSignedIn
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        signIn,
        signOut
    }, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(GoogleAuth)