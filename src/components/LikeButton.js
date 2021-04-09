import React, {useState} from 'react';

function LikeButton(props) {
    let [clikedBtn, setClikedBtn] = useState(0)

    const increment =() => {setClikedBtn( (clikedBtn + 1)%5) }

    const colors = ['purple','blue','green','orange','red']
    return (
        <div className="box-black-border">
            <button onClick={increment} style={{backgroundColor:colors[clikedBtn]}} className="Btn-Color-Changed"> Like </button>
        </div>
    );
}

export default LikeButton;