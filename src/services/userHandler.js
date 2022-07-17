import axios from 'axios';

const URL = process.env.URI;
const USER = process.env.USER_LOCAL;
const TOKEN = process.env.TOKEN_LOCAL;

export async function signIn ( obj ){
    console.log(obj)
    try {
        const response = await axios.post('https://not-a-bear.herokuapp.com/sign-in', obj)
        if(response.status < 300){
            
            const token = {
                headers: {
                  Authorization: `Bearer ${response.data.token}`,
                },
              };
    
            // localStorage.setItem(USER, JSON.stringify(userData));
            localStorage.setItem(TOKEN, token);
            return token
        }
    } catch (error) {
        return false
    }
}

export async function signUp ( obj ){
    try {
        const response = await axios.post(`${URL}/sign-up`, obj)
        if(response.status < 300){
            return true
        }
    } catch (error) {
        return false
    }
}

export async function autoLogin (obj){
    //Trying to validate user token, need to think about the back-end validation and response
    const header = JSON.parse(localStorage.getItem(TOKEN));
    try {
        if(header){
            const response = await axios.post(`${URL}/token-check`, header)
        }
        
    } catch (error) {
        
    }
}

export async function logout (){
    
    //clear context
    localStorage.clearItem(USER)
    localStorage.clearItem(TOKEN)
}
