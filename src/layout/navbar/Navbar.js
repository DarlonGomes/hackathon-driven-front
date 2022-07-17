import styled from "styled-components";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import FirstColumn from "./FirstColumn";
import SecondColumn from "./SecondColumn";

export default function Navbar() {
    const location = useLocation();
    const path = location.pathname;
    const display = path !== "/" && path !== "/sign-up";

    const [isNotesListVisible, setIsNotesListVisible] = useState(false);

    return (
        display && (
            <FixedContainer>
                <FirstColumn />
                <SecondColumn isNotesListVisible={isNotesListVisible} setIsNotesListVisible={setIsNotesListVisible} />
            </FixedContainer>
        )
    );
}

const FixedContainer = styled.div`
    position: fixed;
    inset: 0 auto 0 0;
    display: flex;
`;
