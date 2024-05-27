import React from 'react';
import Container from '@components/Container';


const FlexGrowPage = () => {
    return <>
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
            <div className="card">
                Card 5
            </div>
        </div>
      </Container>
      <style jsx>
                    {`
.gallery {
    display: flex;
    gap: 4px;
}

.card {
    position: relative;
    left: 0;
    width: 80px;
    border-radius: 4px;
    padding: 8px;
    height: 160px;
    background-color: white;
    transition: 0.4s ease-in-out;
    flex: 1px;
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

.card:nth-child(5) {
    background-color: #99C2FE;
}

.card:hover {
    flex: 3;
    font-weight: bold;
    cursor: pointer;
}

`}
        </style>
    </>
}

export default FlexGrowPage;