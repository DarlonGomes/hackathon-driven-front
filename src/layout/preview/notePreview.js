import styled from "styled-components";
import { useState } from "react";
export default function NotePreview (props){
    
    const [note] = useState(props.arr);



    return(
        <Container>
            <h3>{note.title}</h3>
            <div className="limiter">
            <p>{note.subtitle}</p>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 330px;
    height: 150px;
    box-sizing: border-box;
    padding:  20px 10px 20px 40px;
    background: #FFFFFF;
    border-width: 2px 2px 2px 0px;
    border-style: solid;
    border-color: #E4E4E4;
    font-family: 'Lato';

    h3{
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #454545;
        margin-bottom: 10px;
    }

    p{
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #9F9F9F;
    }

    .limiter{
        width: 270px;
        max-height: 80px;
        overflow: hidden;
        
    }
`;