import axios from 'axios';

const API_SIGNIN = 'https://not-bear-app.herokuapp.com/sign-in'
const API_SIGNUP = 'https://not-bear.app.herokuapp.com/sign-up'
export async function signIn ( obj ){
    
    try {
        
        const response = await axios.post(API_SIGNIN, obj)
        if(response.status < 300){
            
            const token = {
                headers: {
                  Authorization: `Bearer ${response.data.token}`,
                },
              };
    
            // localStorage.setItem(USER, JSON.stringify(userData));
            //  localStorage.setItem(USER_TOKEN, token);
            return token
        }
    } catch (error) {
        return false
    }
}

export async function signUp ( obj ){
    try {
        const response = await axios.post(API_SIGNUP, obj)
        if(response.status < 300){
            return true
        }
    } catch (error) {
        return false
    }
}

// export async function autoLogin (obj){
//     //Trying to validate user token, need to think about the back-end validation and response
//     const header = JSON.parse(localStorage.getItem(USER_TOKEN));
//     try {
//         if(header){
//             const response = await axios.post(`${URL}/token-check`, header)
//         }
        
//     } catch (error) {
        
//     }
// }

// export async function logout (){
    
//     //clear context
//     localStorage.clearItem(USER_LOCAL)
//      localStorage.clearItem(USER_TOKEN)
//  }
