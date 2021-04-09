import React, {useState} from 'react';

function ClickablePicture(props) {
    
    let [statePic, setStatePic] = useState(false)

    const changePic =() => {
        setStatePic(!statePic)
    }
    return (
        <div className="box-black-border">
            <img onClick={changePic}
                 src={statePic ? props.img : props.imgClicked}
                 className="clickable-picture"
                 alt="img to click"
            />
        </div>
    );
}

export default ClickablePicture;