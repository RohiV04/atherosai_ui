import React from 'react';

const inputPage = () => {
   return (
        <>
            <section className='container'>
                <article className='card'>
                    1
                </article>
                <article className='card'>
                    2
                </article>
                <article className='card'>
                    3
                </article>
            </section>
            <style jsx>
                {`

.container {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.card {
    background-color: #FF9950;
    height: 80px;
    display: flex;
    flex: 1 0 300px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
}
                `}
            </style>
        </>
   ) 

}

export default inputPage;