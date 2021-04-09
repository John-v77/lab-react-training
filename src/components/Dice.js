import React, {useState} from 'react';

function Dice(props) {
    let [dice, setDice] = useState('img/dice3.png')

    const changeDice = () => {
        setTimeout(setDice('img/dice-empty.png'), 1)

        let num = 1 + Math.floor(Math.random()*6)
        let imgLink = `/img/dice${num}.png`

        setTimeout(setDice(imgLink),1000) 
    }

    return (
        <div className='box-black-border'>
            <img onClick={changeDice}
                 src={dice}
                 alt="Dice"
                 className="dice"
            />
        </div>
    );
}

export default Dice;