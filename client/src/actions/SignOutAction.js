
import {SIGN_OUT} from '../types'
import streams from '../apis/streams'


export const signOut = () => {
    return{
        type: SIGN_OUT,
      
    }
}