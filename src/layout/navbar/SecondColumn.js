import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiSettingsKnobs } from "react-icons/gi";
import NotePreview from "../preview/notePreview";

export default function SecondColumn(props) {
    const { isNotesListVisible, setIsNotesListVisible } = props;
    const obj = {
        title: "One of my not bear notes",
        subtitle: "This note definitely wasn't made by a bear.This note definitely wasn't made by a bear.This note definitely wasn't made by a bear.This note definitely wasn't made by a bear.This note definitely wasn't made by a bear.This note definitely wasn't made by a bear.This note definitely wasn't made by a bear.This note definitely wasn't made by a bear.This note definitely wasn't made by a bear.This note definitely wasn't made by a bear."
    }
    const arr = [obj, obj, obj, obj, obj, obj, obj,obj,obj]

    return (
        <Column isNotesListVisible={isNotesListVisible}>
            
            <GiHamburgerMenu onClick={() => setIsNotesListVisible(!isNotesListVisible)} />
            <div className="header">
            <GiSettingsKnobs />
                <h3> Category Name</h3>
            </div>
            {arr.map((e, index) => <NotePreview arr={e} key={index}/>)}
        </Column>
    );
}

const Column = styled.div`
    display: relative;
    border-right: 2px solid rgba(26, 23, 23, 0.2);
    width: ${(props) => (props.isNotesListVisible ? "330px" : 0)};
    transition: 0.5s;
    overflow-y: scroll;
    ::-webkit-scrollbar{
        display: none;
    }
    -ms-overflow-style: none; 
    scrollbar-width: none;  

    svg {
        position: absolute;
        top: 30px;
        right: -17px;
        border-radius: 20px;
        padding: 8px;
        background-color: #e74d4d;
        font-size: 40px;
        color: #ffffff;
        cursor: pointer;
    }

    .header{
        width: 330px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        border-width: 2px 2px 2px 0px;
        border-style: solid;
        border-color: #E4E4E4;

        h3{
            font-family: 'Lato';
            font-weight: 700;
            font-size: 28px;
            line-height: 34px;
            color: #454545;
        }

        svg{
            position: absolute;
            top: 15px;
            left: 15px;
            background-color: #ffffff;
            color: #DFDFDF;
        }
    }
`;
