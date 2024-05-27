import React from 'react';
import Container from '@components/Container';

const CustomLoader = () => {
    return <>
      <Container>
        <span className="loader"></span>
      </Container>
      <style jsx>
      {`
.loader {
    width: 54px;
    height: 54px;
    border: 4px solid #FFF;
    border-radius: 50%;
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    animation: loader-anim 3s linear infinite;
}

.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 4px solid;
  border-color: #FF9950 transparent;
}

@keyframes loader-anim {
    0% {
        transform: scale(1) rotate(360deg);
    }

    50% {
        transform: scale(.7) rotate(-360deg);
    }

    100% {
        transform: scale(1) rotate(360deg);
    }
}
`}
                </style>
    </>
}

export default CustomLoader;