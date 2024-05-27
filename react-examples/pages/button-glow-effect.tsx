import React from 'react';

const page = () => {
   return (
        <>
            <span className='background'>
                <a
                    href="https://learning.atheros.ai"
                    className='button-glow'
                >
                    learning.atheros.ai
                </a>
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

.button-glow {
    width: 240px;
    height: 55px;
    text-decoration: none;
    display: grid;
    place-items: center;
    color: #fff;
    background: #110C32;
    position: relative;
    z-index: 0;
    border-radius: 16px;
    transition: all 0.5s;
}

.button-glow:hover {
    color: #FF9950;
}

.button-glow:before {
    content: '';
    background: linear-gradient(to right, #B881FF, #7ED956, #FF9950, #ED6A5E, #B881FF, #7ED956, #FF9950, #ED6A5E, #B881FF); 
    position: absolute;
    background-size: 300%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 5px);
    height: calc(100% + 5px);
    opacity: 0;
    border-radius: 16px;
    animation: glow 30s alternate infinite;
    transition: opacity .5s ease-in-out;
}

.button-glow:active {
    background: #3F396F;
}

.button-glow:hover:before {
    opacity: 1;
}

.button-glow:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #050028;
    left: 0;
    top: 0;
    border-radius: 16px;
}

@keyframes glow {
    0% { background-position: 0 0; }
    50% { background-position: 300% 0; }
    100% { background-position: 0 0; }
}
`}
                </style>
        </>
   ) 

}

export default page;