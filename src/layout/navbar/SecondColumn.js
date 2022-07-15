import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

export default function SecondColumn(props) {
    const { isNotesListVisible, setIsNotesListVisible } = props;

    return (
        <Column isNotesListVisible={isNotesListVisible}>
            <GiHamburgerMenu onClick={() => setIsNotesListVisible(!isNotesListVisible)} />
        </Column>
    );
}

const Column = styled.div`
    display: relative;
    border-right: 2px solid rgba(26, 23, 23, 0.2);
    width: ${(props) => (props.isNotesListVisible ? "500px" : 0)};
    transition: 0.5s;
    overflow-y: scroll;

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
`;
