
import {SIGN_IN} from '../types'
import streams from '../apis/streams'

export const signIn = (userId) => {
    return{
        type: SIGN_IN,
        payload: userId
    }
}