import React from 'react'

class GoogleAuth extends React.Component{

     state ={
         isSignedIn:null
     }

    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId:"356398052274-chc7dof5bsqbdmjek414scqvvpgqct8m.apps.googleusercontent.com",
                scope: "email"
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()})
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
    }

    renderButton = () => {
        if(this.state.isSignedIn === null){
            return (
                <div>I don't know if we are signed In</div>
            )
        }
        else if(this.state.isSignedIn){
            return(
               <button className="ui red google button" onClick={()=>this.auth .signOut()}>
                    <i className="google icon"/>
                    Sign Out
               </button>
            )
        }
        else{
            return (
                <button className="ui red google button" onClick={()=>this.auth .signIn()}>
                    <i className="google icon"/>
                   Sign In
                </button> 
            )
        }
    }

    render(){
        return(
           <React.Fragment>
               {this.renderButton()}
           </React.Fragment>
        )
    }
}

export default GoogleAuth