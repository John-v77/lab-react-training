import React from 'react';
import profiles from '../data/berlin.json';

function Facebook(props) {
    console.log(profiles)

    const displayProfiles = () => {
        return profiles.map(each => {
            return(
                <div className='facebook-box' key={each}>
                    <img src={each.img} alt="profile Pic" />
                    <div>
                        <p><b>First name:</b>   {each.firstName}</p>
                        <p><b>Last name:</b>    {each.lastName}</p>
                        <p><b>Country:</b>      {each.country}</p>
                        <p><b>Type:</b>         {each.isStudent ? "Student" : "Teacher"}</p>
                    </div>
                </div>
            ) 
        })
    }

    return (
        <div className="facebook-box">
            {displayProfiles()}
        </div>
    );
}

export default Facebook;