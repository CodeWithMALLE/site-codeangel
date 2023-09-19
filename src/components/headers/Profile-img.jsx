import React from 'react';
import "./Profile-img.css"
import profile_img from "../../media/profile-img.jpg"

const ProfileImg = () => {
    return (
        <figure className="profile">
            <img src={profile_img} alt="" />
            <h1 >Moussa MALLE</h1>
        </figure>
    );
}

export default ProfileImg;
