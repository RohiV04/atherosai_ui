import React from 'react';

const inputPage = () => {
   return (
        <>
            <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#3F396F', width: '100vw', height: '100vh' }}>
                <input className="search" />
            </span>
            <style jsx>
                {`
             .search {
                position:relative;
                width: 15px;
                height: 15px;
                border-radius: 20px;
                padding: 10px;
                transition-duration: 500ms;
                cursor: pointer;
                background-repeat: no-repeat;
                font-size: 15px;
                color: transparent;
                border: 1px solid white;
                overflow: hidden;
                background: url(icons/search-white.svg) no-repeat transparent;
                background-size: 22px;
                background-position: 45% 50%;
              }
              
            .search:hover {
                cursor: pointer;
                border: 1px solid #FF9950;
                background: url(icons/search.svg) no-repeat transparent;
                background-size: 22px;
                background-position: 45% 50%;
            }
            
            .search:focus {
                width: 200px;
                cursor: pointer;
                padding-left: 40px;
                color: white;
                outline: none;
                border: 1px solid #FF9950;
                background-color: transparent;
                background: url(icons/search.svg) no-repeat;
                background-size: 22px;
                background-position: 10px 50%;
            }
                `}
            </style>
        </>
   ) 

}

export default inputPage;