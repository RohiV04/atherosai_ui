import React from 'react';

const Container = ({ children }) => {
    return <>
        <span className='container'>
            {children}
        </span>
        <style jsx>
            {`
.container {
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 8px;
    background-color: #3F396F;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 32px;
    max-width: 500px;
}
    `}
        </style>
    </>
}

export default Container