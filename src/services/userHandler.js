import axios from 'axios';

const API_SIGNIN = 'https://not-bear-app.herokuapp.com/sign-in'
const API_SIGNUP = 'https://not-bear.app.herokuapp.com/sign-up'
export async function signIn ( obj ){
    
    try {
        
        const response = await axios.post(API_SIGNIN, obj)
        if(response.status < 300){
            console.log(response)
            const token = {
                headers: {
                  Authorization: `Bearer ${response.data.token}`,
                },
              };
            const data = {
                name: response.data.name,
                email: response.data.email
            }
              localStorage.setItem("NotAUserStorage", JSON.stringify(data));
              localStorage.setItem("NotATokenStorage", JSON.stringify(token));
            return {token , data}
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

export  function autoLogin ({setData, setToken}){
    //Trying to validate user token, need to think about the back-end validation and response
    
    const token =  JSON.parse(localStorage.getItem("NotATokenStorage")); 
    const data =  JSON.parse(localStorage.getItem("NotAUserStorage"))
        if(token && data ){   
            setData(data)
            setToken(token)
            return true
        }else{
            return false
        }
    
}

export async function logout ({setData, setToken}){
    //clear context
    localStorage.clearItem("NotAUserStorage")
    localStorage.clearItem("NotATokenStorage")
    setData(null)
    setToken(null)
    return true
 }
