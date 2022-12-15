import { useContext } from '@antv/gi-sdk';
import React from 'react';
const Counter = props => {


  return (
    <div
      style={{
        position: 'absolute',
        bottom: '100px',
        left: '50px',
        background: 'red',
      }}
    >
      正在实时更新 ...
    </div>
  );
};

export default Counter;
