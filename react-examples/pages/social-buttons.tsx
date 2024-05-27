import React from 'react';

const inputPage = () => {
   return (
        <>
            <span className='background'>
                <span className='social-media-buttons'>
                    <span className='social-media-button'>
                        <img alt="Instagram" src="/icons/instagram.svg" />
                    </span>
                    <span className='social-media-button'>
                        <img alt="Twitter" src="/icons/twitter.svg" />
                    </span>
                    <span className='social-media-button'>
                        <img alt="Youtube" src="/icons/youtube.svg" />
                    </span>
                    <span className='social-media-button'>
                        <img alt="LinkedIn" src="/icons/linkedin.svg" />
                    </span>
                </span>
            </span>
            <style jsx>
                {`
.background {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3F396F;
    width: 100vw;
    height: 100vh;
}

.social-media-buttons {
    display: flex;
    column-gap: 24px;
}

.social-media-button {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    outline: 2px solid white;
    cursor: pointer;
    transition: all 0.3s;
    display: grid;
    place-items: center;
}

.social-media-button:hover {
    outline-offset: 3px;
}
.social-media-button:hover:nth-child(1) {
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    outline: 2px solid linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
}

.social-media-button:hover:nth-child(2) {
    background-color: #1DA1F2;
}

.social-media-button:hover:nth-child(3) {
    background-color: #c4302b;
}

.social-media-button:hover:nth-child(4) {
    background-color: #0072b1;
}
                `}
            </style>
        </>
   ) 

}

export default inputPage;