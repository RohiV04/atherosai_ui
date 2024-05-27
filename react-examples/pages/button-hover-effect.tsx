import React from 'react';
import Container from '@components/Container';

const cardsHoverEffect = () => {
   return (
        <>
            <Container>
                <span className='button-wrapper'>
                    <a
                        href="https://learning.atheros.ai"
                        className='button'
                        title="Atheros Learning"
                    >
                        Atheros Learning
                    </a>
                </span>
            </Container>
            <style jsx>
                {`
@import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');

.button {
    display: grid;
    place-items: center;
    height: 40px;
    max-width: 160px;
    padding: 0 16px;
    font-family: Mullish, sans-serif;
    font-weight: 700;
    font-size: 14px;
    text-decoration: none;
    white-space: nowrap;
    outline: 3px solid #ff9950; 
    background-color: #ff9950;
    border: none;
    border-radius: 4px;
    color: #050028;
    box-shadow: 0 5px 10px rgba(0,0,0,.15);
    text-shadow: 0.5px 0 0 #050028;
    transition: outline-offset .25s ease-in-out;
}

.button-wrapper {
    background-color: #ff9950;
    border-radius: 3px;
}

.button:hover, button:focus {
    outline-offset: 4px;
    cursor: pointer;
}
                `}
            </style>
        </>
   ) 

}

export default cardsHoverEffect;