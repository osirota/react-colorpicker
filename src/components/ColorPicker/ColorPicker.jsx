import React from 'react';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ColorRange from '../ColorRange/ColorRange';
import DropDown from '../DropDown/DropDown';
import Styled from './ColorPicker.styled.js';

const ColorPicker = ({
    colors,
    onChange,
    value,
}) => {
    const renderColors = () => (
        colors.map((color, index) => (
            <Styled.RangeItem onClick={() => onChange(color.hex)} key={color + index}>{color.name} <Styled.ColorBoxItem value={color.hex} /></Styled.RangeItem>
        ))
    );

    return (
        <Styled.ColorContainer>
            <Styled.ColorItemsLarge>
                <span>{value}</span>
            </Styled.ColorItemsLarge>
            <Styled.ColorItems>
                <DropDown
                    menu={<Styled.ColorBox value={value} />}
                    color={value} 
                    onChange={onChange}
                    controls
                >
                    <ColorRange color={value} onChange={onChange}/>
                </DropDown>
                
            </Styled.ColorItems>
            <Styled.ColorItems>
                <DropDown
                        menu={<ArrowDropDownIcon />}
                        color={value} 
                        onChange={onChange}
                    >
                    {renderColors()}
                </DropDown>
            </Styled.ColorItems>
        </Styled.ColorContainer>
    );

};

export default ColorPicker;