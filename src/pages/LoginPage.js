import { Container, Row , Col} from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import { useState, useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { signIn, autoLogin } from '../services/userHandler.js';
import { UserContext } from '../context/userContext.js';
import { ThreeDots } from "react-loader-spinner";

export default function LoginPage() {
    const { setData, setToken} = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [isDisabled, setIsDisabled] = useState(false)
    const navigate = useNavigate();
    

    async function validateUser(event){
        event.preventDefault();
        setIsDisabled(true)
        const obj = {
            email: email,
            password: password
        }
        const response = await signIn(obj);
        
        if(response === false){
            setIsDisabled(false);
            alert("Your credentials don't match.")
            return
        }
        setData(response.data)
        setToken(response.token)
        setTimeout(()=>{
            setIsDisabled(false);
            navigate(`/board`)
        }, "1000")
    }

    const ToggleButton = () => {
        if(isDisabled){
            
            return(
                <button disabled={true} ><ThreeDots  color="#FFFFFF" height={17} width={"100%"} /></button>
            )
        }else{
            return(
                <button type='submit'>LOG IN</button>
            )
        }
        
    }

    useEffect(()=>{
        const response = autoLogin({setData,setToken})
        
        if(response === true){
            setIsDisabled(true)
            setTimeout(()=>{
                setIsDisabled(false);
                navigate(`/board`);
            },"1000")
        }else{
            
            setIsDisabled(false)
            return;
        }
        
    },[])
    return (
            <Container >
                <Row>
                    <Col>
                        <LoginContent>
                            <NotALogo>
                                <img src={logo} alt='Definitely not a bear.app'/>
                                <h1 >Not a <span className='red'>Bear</span> App</h1>
                            </NotALogo>
                            <Form onSubmit={(event)=>{validateUser(event)}}>
                                <div className='input-wrapper'>
                                <div className='input-theme'>
                                    @
                                </div>
                                <input
                                type='email'
                                value={email}
                                onChange={e=> setEmail(e.target.value)}
                                placeholder= 'E-mail'
                                required
                                disabled= {isDisabled} 
                                ></input>
                                </div>
                                <div className='input-wrapper'>
                                    <div className='input-theme'>*</div>
                                    <input
                                    type='password'
                                    value={password}
                                    onChange={e=> setPassword(e.target.value)}
                                    placeholder= 'Password'
                                    required
                                    disabled= {isDisabled} 
                                    ></input>
                                </div>
                                <ToggleButton />
                                
                            </Form>
                                <h4> Forgot password?</h4>
                                <div className='sign-up'>
                                    <h4>Don't have an account?</h4>
                                    <button onClick={()=>{navigate('/sign-up')}}>SIGN UP</button>
                                </div>
                        </LoginContent>
                    </Col>
                    <Col >
                        <InfoSide>
                            <h3>A very fun markdown editor app</h3>
                            <p>A bunch of pretty text describing how cool and 
                                fun this program is to use, etc and such.
                                A little more sausage to take up space.
                                And a touch of chimichurri.</p>
                        </InfoSide>

                    </Col>
                </Row>
            </Container> 
    )
}

const LoginContent = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h4{
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: #A3A3A3;
    }
    .sign-up{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 438px;
        margin-top: 70px;
        font-family: 'Lato';
        h4{
            font-weight: 500;
            font-size: 24px;
            line-height: 29px;
            color: #000000;
        }
        button{
            width: 150px;
            height: 45px;
            border: 2px solid #D43838;
            border-radius: 5px;
            border: none;
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            color: #D43838;
        }
    }
`;

const Form = styled.form`
    
    font-family: 'Lato';
    .input-wrapper{
        display: flex;
        
    }
    input{
        width: 388px;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #E74D4D;
        border-radius: 0px 5px 5px 0px;
        box-sizing: border-box;
        padding: 0 15px;
        font-weight: 400;
        font-size: 16px;
        line-height: 16px;
        color: #000000;
        margin-bottom: 25px;
        ::placeholder {
            font-weight: 400;
            font-size: 16px;
            line-height: 16px;
            color: #A3A3A3;
        }
        :focus {
            outline: none;
        }
        
    }
    .input-theme{
        width: 50px;
        height: 45px;
        background: #E74D4D;
        border: 1px solid #E74D4D;
        border-radius: 5px 0px 0px 5px;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button{
        width: 438px;
        height: 45px;
        background: linear-gradient(90deg, #E9984E 0%, #D53838 46.35%, #D33895 100%);
        border-radius: 5px;
        border: none;
        margin: 45px 0 14px;
        font-weight: 600;
        font-size: 16px;
        line-height: 16px;
        color: #FFFFFF;
    }
`;

const NotALogo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        width: 150px;
        height: 150px;
        object-fit: cover;
        margin-bottom: 10px;
    }
    h1{
        width: 425px;
        height: 87px;
        font-family: 'Bree Serif';
        font-style: normal;
        font-weight: 400;
        font-size: 64px;
        line-height: 87px;
        color: #000000;
        margin-bottom: 120px;
    }
    .red{
        color: #E74D4D;
    }
`;

const InfoSide = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(90deg, #E74D4D 0%, #B52323 100%);
    box-sizing: border-box;
    padding: 0px 66px;
    font-weight: 400;
    text-align: center;
    color: #FFFFFF;
    h3{
        font-family: 'Bree Serif';
        font-size: 44px;
        line-height: 50px;
        margin-bottom: 30px;
    }
    p{
        font-family: 'Lato';
        font-size: 30px;
        line-height: 32px;
    }
`;