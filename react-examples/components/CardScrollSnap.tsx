import React, { useState } from 'react';

const CardScrollSnap = () => {
    return (
        <>
            <div className='container'>
                <div className="card">
                    HTML
                </div>
                <div className="card">
                    CSS
                </div>
                <div className="card">
                    JS
                </div>
                <div className="card">
                    Python
                </div>
            </div>
            <style jsx>
                        {`  
html {
    scroll-behavior: smooth;
}

.container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 16px;
    max-height: 176px; 
    max-width: 220px;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
}

.card {
    min-width: 200px;
    min-height: 200px;
    color: white;
    display: flex;
    border-radius: 10px;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.2s;
    align-items:center;
    justify-content: center;
    cursor: pointer;
    scroll-snap-align: start;
}

.card:hover {
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.4);
}

.card:nth-child(1) {
    background-image: linear-gradient(to right, rgb(242, 112, 156), rgb(255, 148, 114));
}
.card:nth-child(2) {
    background-image: linear-gradient(to right, #fc5c7d, #6a82fb);
}
.card:nth-child(3) {
    background-image: linear-gradient(25deg, #d64c7f, #ee4758 50%);
}
.card:nth-child(4) {
    background-image: linear-gradient(to right, #8360c3, #2ebf91);
}

.container::-webkit-scrollbar {
    width: 8px;
}

.container::-webkit-scrollbar-track {
    background: #110C32;
    border-radius: 6px;
}

.container::-webkit-scrollbar-thumb {
    background: #FF995095;
    border-radius: 5px;
}

.container::-webkit-scrollbar-thumb:hover {
    background: #FF9950;
} 
`}
            </style>
        </>
    )
}

export default CardScrollSnap;