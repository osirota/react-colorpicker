import React, { useState, useEffect, useRef } from 'react'
import Styled from './DropDown.styled.js';

const DropDown = ({
    onChange,
    menu, 
    children, 
    controls, 
    color,
}) => {
    const [initialColor, setInitialColor] = useState(null);
    const [isShow, setIsShow] = useState(false);
    const inputRef = useRef();

    const handleClickOutside = ({ target }) => {
        if (!inputRef.current.contains(target)) {
            handleConfirm();
        }
    }
    const handleCancel = () => {
        onChange(initialColor);
        setIsShow(false);
    }
    const handleConfirm = () => {
        setIsShow(false);
    }

    const handleDropDownClick = () => {
        setInitialColor(color);
        setIsShow(true);
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });
    
    return (
        <Styled.DropDownContainer ref={inputRef}>
            <Styled.DropDownMenu onClick={handleDropDownClick}>
                {menu}
            </Styled.DropDownMenu>
            {isShow && <Styled.DropDownList>
                {children}
                {controls && <Styled.DropDownControls>
                    <button onClick={handleCancel}>Cancel</button>
                    <button onClick={handleConfirm}>OK</button>
                </Styled.DropDownControls>}
            </Styled.DropDownList>}
        </Styled.DropDownContainer>
    )
};

export default DropDown;
