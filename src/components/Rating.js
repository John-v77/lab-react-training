import React from 'react';

function Rating(props) {
    let stars = Math.round(props.children)
    const showRating =() =>{

        let res =""

        for( let i=0; i<=5; i++){
            if(i<stars){
                res +='★'
            }else if(i>stars){
                res +='☆'
            }
        }
        return res

    }
    return (
        <div className="box-black-border">
            {showRating()}
        </div>
    );
}

export default Rating;