import React from 'react';

function NumbersTable(props) {

    const displayTable =() => {
        let list = []
        let style
        for(let i=0; i<props.limit; i++){
            style = {backgroundColor: i%2 === 0 ? 'red' : 'white',}
            list.push(<li style={style} key={i}>{i+1}</li>)
        }
        return list
    }

    
    return (
        <div className='numbersTable'>
            {displayTable()}
        </div>
    );
}

export default NumbersTable;