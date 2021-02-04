import styled from 'styled-components';


const ColorBox = styled.div`
    background: ${props => props.value ? props.value : '#000'};
    width: 20px;
    height: 20px;
`;
const ColorBoxItem = styled(ColorBox)`
    margin: 0 20px;
`;
const ColorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ColorItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
`;
const ColorItemsLarge = styled(ColorItems)`
    width: 200px;
`;

const RangeItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px 0;
    padding: 10px;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
        background: #3377b6;
        transition: all 0.5s;
    }
`;

export default {
    ColorBox,
    ColorBoxItem,
    ColorContainer,
    ColorItems,
    ColorItemsLarge,
    RangeItem
};