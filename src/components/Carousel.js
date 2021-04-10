import React, {useState} from 'react';

function Carousel(props) {
    let [carouselPic, setCarouselPic] = useState(props.imgs[0])


    const swapPicture = (delta) => {
        let imgPosition = props.imgs.indexOf(carouselPic)

        let swapToPosition
        
        // guard clause if position get negative
        imgPosition <=0 ? 
            // resets position to array lentght
            swapToPosition = props.imgs.length-1 :
            // if not calculate acorgingly
            swapToPosition = (imgPosition+delta) %props.imgs.length

        setCarouselPic(props.imgs[swapToPosition])
    }

    return (
        <div className="carousel">
            <button onClick={()=> swapPicture(-1)}>Left</button>
            <img src={carouselPic} alt="pic"/>
            <button onClick={()=> swapPicture(1)}>Right</button>
        </div>
    );
}

export default Carousel;