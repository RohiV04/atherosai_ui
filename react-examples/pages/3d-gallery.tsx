import React from 'react';
import Container from '@components/Container';

const CustomLoader = () => {
    return <>
      <Container>
        <div className="image-container">
            <span className="tile tile-1">
                <img src="https://img.freepik.com/free-vector/spaceship-outer-space-with-planets-asteroids_107791-2262.jpg?w=2000&t=st=1675890192~exp=1675890792~hmac=55d3898dfa4592f8c7819703d7b0e09adf14b6b408368a3f54f7266c1c12adc9" alt="Image"/>
            </span>
            <span className="tile tile-2">
                <img src="https://img.freepik.com/free-vector/sunset-sunrise-ocean-nature-landscape_33099-2244.jpg?w=1380&t=st=1677927684~exp=1677928284~hmac=1cf23f3be67d718e4a1d05cf1a14e893967565a284146bbbb871e6367328c4d8" alt="Image"/>
            </span>
            <span className="tile tile-3">
                <img src="https://img.freepik.com/free-vector/space-illustration-night-alien-fantasy-landscape_33099-1873.jpg?w=2000&t=st=1677928595~exp=1677929195~hmac=ad7aa0e80ea72f9416738daec9444dffde69463e8c0f331b4628984eab0c4820" alt="Image"/>
            </span>
            <span className="tile tile-4">
                <img src="https://img.freepik.com/free-vector/nightclub-dance-floor-illustration_33099-2002.jpg?w=2000&t=st=1677928962~exp=1677929562~hmac=5d8540a6eb2dddb6411c769f8d561e8a21dd30b70f65e6ede94117712cdbf59e" alt="Image"/>
            </span>
        </div>
      </Container>
      <style jsx>
      {`
.image-container {
    transform: rotateX(51deg) rotateZ(43deg);
    display: grid;
    grid-gap: 8px;
    grid-template-columns: 1fr 1fr;
}
  
.tile {
    display: grid;
    position: relative;
    cursor: pointer;
}
  
.tile > img {
    top: 0;
    left: 0;
    transition:
      .4s ease-in-out top,
      .4s ease-in-out left,
      .4s ease-in-out transform,
      .4s ease-in-out box-shadow;
    width: 150px;
    height: 150px;
    object-fit: cover;
    opacity: 1;
}
  
.tile:nth-child(1) > img {
  box-shadow: 3px 3px rgba(192,37,162, 0.4);
}
  
.tile:nth-child(2) > img {
   box-shadow: 3px 3px rgba(253,219,90, 0.4);
}
  
.tile:nth-child(3) > img {
   box-shadow: 3px 3px rgba(41,153,192, 0.4);
}
  
.tile:nth-child(4) > img {
   box-shadow: 3px 3px rgba(192,37,162, 0.4);
}
  
.tile > img:hover {
    position: absolute;
    top: -10px;
    left: -10px;
    transition:
        .4s ease-in-out top,
        .4s ease-in-out left,
        .4s ease-in-out transform,
        .4s ease-in-out box-shadow;
}

.tile:nth-child(1) > img:hover {
    box-shadow: 5px 5px rgba(192,37,162, 0.4),
        10px 10px rgba(192,37,162, 0.3), 15px 15px rgba(192,37,162, 0.2),
        20px 20px rgba(192,37,162, 0.1), 25px 25px rgba(192,37,162, 0.05);
}

.tile:nth-child(2) > img:hover {
    box-shadow: 5px 5px rgba(253,219,90, 0.4),
        10px 10px rgba(253,219,90, 0.3), 15px 15px rgba(253,219,90, 0.2),
        20px 20px rgba(253,219,90, 0.1), 25px 25px rgba(253,219,90, 0.05);
}

.tile:nth-child(3) > img:hover {
    box-shadow: 5px 5px rgba(41,153,192, 0.4),
        10px 10px rgba(41,153,192, 0.3), 15px 15px rgba(41,153,192, 0.2),
        20px 20px rgba(41,153,192, 0.1), 25px 25px rgba(41,153,192, 0.05);
}

.tile:nth-child(4) > img:hover {
    box-shadow: 5px 5px rgba(192,37,162, 0.4),
        10px 10px rgba(192,37,162, 0.3), 15px 15px rgba(192,37,162, 0.2),
        20px 20px rgba(192,37,162, 0.1), 25px 25px rgba(192,37,162, 0.05);
}
  
`}
                </style>
    </>
}

export default CustomLoader;