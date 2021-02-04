import React, { useState } from 'react';
import ColorPicker from './components/ColorPicker/ColorPicker';

const App = () => {
  const [currentColor, setCurrentColor] = useState('#FFCC33');

  const onChange = (value) => {
    setCurrentColor(value);
  }

  return (
    <ColorPicker onChange={onChange} value={currentColor} colors={App.colors} />
  );
}

App.colors = [
  {
    name: 'Orange',
    hex: '#FFCC33'
  },
  {
    name: 'Purple',
    hex: '#ff32c0'
  },
  {
    name: 'Blue',
    hex: '#3368ff'
  }
];

export default App;
