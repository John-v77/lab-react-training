import React from 'react';

function BoxColor(props) {
    let {r, g, b} = props
    
    let styleBoxColor= {
           backgroundColor: `rgb(${r},${g},${b})`
    }
    
    return (
        <div style={styleBoxColor} className='box-black-border' >
            color
        </div>
    );
}

export default BoxColor;