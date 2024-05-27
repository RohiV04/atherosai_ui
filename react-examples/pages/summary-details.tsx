import React from 'react';

const inputPage = () => {
   return (
        <>
            <span className='background'>
                <span className='faq'>
                    <details>
                        <summary>What do I need for completing the course?</summary>
                        <p>All you need is a laptop and internet access. There is no need to purchase any software or hardware.</p>
                    </details>
                    <details>
                        <summary>Do I get a certificate?</summary>
                        <p>Sure! After completing all the quizzes you will be able to download a certificate with unique code, proving all gained knowledge and skills.</p>
                    </details>
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

.faq {
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 16px;
    max-width: 400px;
}

summary {
    cursor: pointer;
}
                `}
            </style>
        </>
   ) 

}

export default inputPage;