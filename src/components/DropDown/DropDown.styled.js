import styled from 'styled-components';


const DropDownContainer = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;
const DropDownMenu = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;
const DropDownList= styled.div`
    position: absolute;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 55px;
    box-shadow: 0 0 19px rgba(2, 2, 2, 0.14);
    border: 1px solid #ccc;
    width: 200px;
    padding: 5px;
`;
const DropDownControls = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export default {
    DropDownContainer,
    DropDownMenu,
    DropDownList,
    DropDownControls,
};