import React from 'react';
import Container from '@components/Container';

const cardsFlipEffectGallery = () => {
    return <>
      <Container>
            <div className="gallery">
                <div className="card">
                    <div className="card__side">
                        <img src="https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154720.jpg?w=2000&t=st=1682151186~exp=1682151786~hmac=05be3d41bdc593a615dde9cf2d842e8e27e15a63f87466c4f93256f6b0324418" />
                    </div>
                    <div className="card__side card__side--back">
                        <img src="https://img.freepik.com/free-photo/space-background-with-stardust-shining-stars-realistic-colorful-cosmos-with-nebula-milky-way_1258-150914.jpg?w=1380&t=st=1682151237~exp=1682151837~hmac=9642b92e90cea3bcf65f2650c6cbac594a7ed6cb7f3a1ec6aa5bf2157132a559" />
                    </div>
                </div>
                <div className="card">
                    <div className="card__side">
                        <img src="https://img.freepik.com/free-photo/aesthetic-dark-wallpaper-background-neon-light_53876-128291.jpg?w=2000&t=st=1682151069~exp=1682151669~hmac=f9a89465e546becb30c82e54b35ed135e0b97141a5894d6d6370def3b04ec594" />
                    </div>
                    <div className="card__side card__side--back">
                        <img src="https://img.freepik.com/free-photo/moon_1048-2672.jpg?w=2000&t=st=1682151334~exp=1682151934~hmac=81853326df3abdc46cd21c209727e3ab9543204e2206438ecebdb43574930a1b" />
                    </div>
                </div>
                <div className="card">
                    <div className="card__side">
                        <img src="https://img.freepik.com/free-photo/earth-galaxy-elements-this-image-furnished-by-nasa_335224-750.jpg?w=2000&t=st=1682151098~exp=1682151698~hmac=92758c2324ff7810fc7acd6e7aa59d1d637a4e9de1195ae11e6321aef92fa3ab" />
                    </div>
                    <div className="card__side card__side--back">
                        <img src="https://img.freepik.com/free-photo/colorful-universe-reflected-water_1160-613.jpg?w=1380&t=st=1682151134~exp=1682151734~hmac=39ae02d9b5596e3b73c1ce886b548679248205586067c24b6c4a6ea87273fefe" />
                    </div>
                </div>
            </div>
      </Container>
      <style jsx>
                    {`
body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3F396F;
    width: 100vw;
    height: 100vh;
}

.gallery {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    perspective: 800px;
}

.card {
    position: relative;
    width: 120px;
    height: 160px;
    cursor: pointer;
    transition: 1s ease-in-out;
    transform-style: preserve-3d;
}
  
.card:hover {
    transform: rotateY(0.5turn);
}
  
.card__side {
    position: absolute;
    top: 0;
    left: 0;
    backface-visibility: hidden;
    width: 100%;
    height: 100%;
    transition: 1s ease-in-out;
}

.card__side--back {
    transform: rotateY(0.5turn);
}

.card__side > img {
    width: 120px;
    height: 160px;
    object-fit: cover;
}
`}
                </style>
    </>
}

export default cardsFlipEffectGallery;