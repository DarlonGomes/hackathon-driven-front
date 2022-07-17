import styled from "styled-components";
import { CgNotes } from "react-icons/cg";
import { IoIosArrowForward } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";
import { MdNoteAdd, MdOutlineBookmarks } from "react-icons/md";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import landscape from "../../assets/images/landscape.jpeg";
import logo from "../../assets/images/logo.png";

export default function CategoriesColumn() {
    const obj = {title: "Not a category"}
    const arr = [ obj, obj, obj ,obj]
    return (
        <Column landscape={landscape}>
            <div className="fit-circle"/>
            <Profile />
            <Shortcuts />
            <Categories>
                <li>
                    <CgNotes />
                    <p>Notes</p>
                    <IoIosArrowForward />
                </li>
                <li>
                    <IoTrashOutline />
                    <p>Trash</p>
                    <IoIosArrowForward />
                </li>
            </Categories>
            <Categories overflow>
                <h3>Categories</h3>
                
                    {arr.map((e, index) => <li key={index}><MdOutlineBookmarks />
                    <p>{e.title}</p>
                    <IoIosArrowForward /></li>)}
                
            </Categories>
        </Column>
    );
}

function Profile() {
    const {data} = useContext(UserContext);
    return (
        <ProfileContainer>
            <img src={logo} alt="Not a Bear.app logo" />
            <h3>{data.name}</h3>
            <p>Not a Bear</p>
        </ProfileContainer>
    );
}

function Shortcuts() {
    return (
        <ShortcutsContainer>
            <div>
                <MdNoteAdd />
                <p>Add note</p>
            </div>
            <div>
                <MdOutlineBookmarks />
                <p>Add category</p>
            </div>
        </ShortcutsContainer>
    );
}

function Categories(props) {
    const children = props.children;

    return <CategoriesContainer>{children}</CategoriesContainer>;
}

const Column = styled.div`
    width: 250px;
    background: ${(props) =>
        `linear-gradient(0deg, rgba(191, 43, 43, 0.7), rgba(191, 43, 43, 0.7)), url(${props.landscape})`};
    background-repeat: no-repeat;
    background-size: cover;
    overflow-y: scroll;
    position: relative;
    ::-webkit-scrollbar{
        display: none;
    }
    -ms-overflow-style: none; 
    scrollbar-width: none;  

    .fit-circle{
        height: 40px;
        width: 20px;
        border-radius: 20px 0 0 20px;
        background-color: #FFFFFF;
        position: absolute;
        top: 30px;
        left: 230px;
        
    }
`;

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 30px 0 15px;

    img {
        border: 2px solid #ffffff;
        border-radius: 100px;
        width: 100px;
    }

    h3 {
        font-family: "Bree Serif";
        font-size: 24px;
        color: #ffffff;
    }

    p {
        font-size: 14px;
        color: #ffffff;
    }
`;

const ShortcutsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 0 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 15px 0;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
    }

    svg {
        border-radius: 24px;
        padding: 8px;
        height: 45px;
        width: 100%;
        max-width: 45px;
        background-color: rgba(255, 255, 255, 0.8);
        color: #e74d4d;
    }

    p {
        font-size: 14px;
        text-align: center;
        color: #ffffff;
    }
`;

const CategoriesContainer = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 20px;
    overflow-y: ${(props) => (props.overflow ? "scroll" : "initial")};
    ::-webkit-scrollbar{
        display: none;
    }
    -ms-overflow-style: none; 
    scrollbar-width: none;  

    h3,
    li {
        font-size: 16px;
        color: #ffffff;
    }

    li {
        display: flex;
        align-items: center;
        gap: 4px;
        cursor: pointer;

        svg {
            min-width: 16px;
        }

        svg:nth-of-type(2) {
            margin-left: auto;
        }
    }
`;
