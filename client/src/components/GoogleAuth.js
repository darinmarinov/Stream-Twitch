import React from 'react'

class GoogleAuth extends React.Component{

    componentDidMount(){
        window.GamepadHapticActuator.load('client:auth2', ()=>{
            window.GamepadHapticActuator.client.init({
                clientId:356398052274-chc7dof5bsqbdmjek414scqvvpgqct8m.apps.googleusercontent.com,
                scope: 'email'
            })
        })
    }

    render(){
        return(
           <React.Fragment>
               <p>GoogleAuth</p>
           </React.Fragment>
        )
    }
}

export default GoogleAuth