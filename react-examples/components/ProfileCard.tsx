import React from 'react';

export const ProfileCard = () => {
    return (
        <div className="card">
            <div className='background'>
                <img src="images/engineering.jpg" alt="background" />
            </div>
            <div className='avatar-picture'>
                <img src="images/profile.jpg" alt="avatar" />
            </div>
            <div className='content'>
                <p className='profile-name'>Jason Alexander</p>
                I'm JavaScript full-stack engineer, love working with <em>React</em> and <em>Node.js</em>.
            </div>
            <style jsx>
                    {`
.card {
    display: grid;
    grid-template-rows: 96px 48px 48px 1fr;
    grid-template-columns: 1fr;
    border-radius: 20px 20px 16px 16px;
    background-color: white;
    cursor: pointer;
    max-width: 348px;
}

.card:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.background {
    grid-row: 1/3;
    grid-column: 1 / -1;
}

.background img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px 16px 0px 0px;
}

.avatar-picture {
    grid-row: 2 / 4;
    grid-column: 1 / -1;
    padding: 0 24px;
    z-index: 1;  
}

.profile-name {
    font-size: 20px;
    font-weight: 700;
    line-height: 20px;
    margin: 16px 0px 8px 0px;
}

.avatar-picture img {
    height: 100%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    object-fit: cover;
}

.content {
    grid-row: 4 / 5;
    grid-column: 1 / -1;
    padding: 0px 24px 24px 24px;
}
`}
            </style>
        </div>
    )
}

export default ProfileCard;