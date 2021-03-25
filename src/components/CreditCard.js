import React from 'react';

function CreditCard(props) {
    let {
        bgColor,
        color,
        type,
        number,
        expirationMonth,
        expirationYear,
        bank,
        owner} = props

    let len = number.length

    return (
        <div className='credit-Card' style={{ backgroundColor: `${bgColor}`, color:`${color}`}}>
            <p>{type}</p>
            <p>•••• •••• ••••  {number.slice(len-5, len-1)}</p>
            <p>{expirationMonth}/{expirationYear} {bank}</p>
            <p>{owner}</p>
        </div>
    );
}

export default CreditCard;