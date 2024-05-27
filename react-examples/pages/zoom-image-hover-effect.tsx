import React from 'react';

const zoomPage = () => {
   return (
        <>
            <div className="zoom-wrapper">
                <img src="/images/mountain_view.jpg" alt="Mountain View" />
            </div>
            <style jsx>
                    {`.zoom-wrapper {
    height: 200px;
    width: 300px;
    overflow: hidden;
}

.zoom-wrapper img {
    object-fit: cover;
    transition: transform 0.8s;
    height: 100%;
    cursor: pointer;
}
  
.zoom-wrapper:hover img {
    transform: scale(1.5); 
}`}
                </style>
        </>
   )
}

export default zoomPage;