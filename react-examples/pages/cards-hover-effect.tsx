import React from 'react';
import Container from '@components/Container';

const cardsHoverEffect = () => {
   return (
        <>
            <Container>
                <div className="gallery">
                    <div className="card">
                        Card 1
                    </div>
                    <div className="card">
                        Card 2
                    </div>
                    <div className="card">
                        Card 3
                    </div>
                    <div className="card">
                        Card 4
                    </div>
                </div>
            </Container>
            <style jsx>
                {`

.gallery {
    display: flex;
    left: calc(50% - 330px);
}

.card {
    position: relative;
    left: 0;
    width: 110px;
    height: 150px;
    padding: 8px;
    background-color: white;
    border-radius: 8px;
    transition: 1s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 25px;
}

.card:nth-child(1) {
    background-color: #B881FF;
}

.card:nth-child(2) {
    background-color: #FF9950;
}

.card:nth-child(3) {
    background-color: #AAEC8A;
}

.card:nth-child(4) {
    background-color: #ED6A5E;
}

.card:not(:first-child) {
    margin-left: -55px;
}

.card:hover {
    transform: translateY(-16px);
    font-weight: bold;
    cursor: pointer;
}

.card:hover ~ .card {
    left: 55px;
}
                `}
            </style>
        </>
   ) 

}

export default cardsHoverEffect;