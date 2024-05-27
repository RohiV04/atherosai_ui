import React from 'react';

const inputPage = () => {
   return (
        <>
            <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#3F396F', width: '100vw', height: '100vh' }}>
                <div className="field">
                    <input
                        type="text"
                        name="first-name"
                        autoComplete="off"
                        required
                    />
                    <label htmlFor="first-name" className="label-wrapper">
                        <span className="label-text">
                            First Name
                        </span>
                    </label>
                </div>
            </span>
            <style jsx>
                {`
             .field {
                position: relative;
                height: 65px;
                width: 100%;
                margin-top: -18px;
                max-width: 200px;
                color: white;
                overflow: hidden;
                transform: scale(1.2);
            }
              
            .field input {
                position: absolute;
                height: 100%;
                width: 100%;
                color: white;
                outline: 0;
                background-color: inherit;
                padding-top: 40px;
                border: none;
                box-sizing: border-box;
            }
              
            .field .label-wrapper {
                position: absolute;
                height: 100%;
                width: 100%;
                bottom: 0;
                background-color: inherit;
                left: 0;
                pointer-events: none;
                border-bottom: 1px solid white;
            }
              
            .field .label-wrapper::after {
                content: "";
                position: absolute;
                height: 100%;
                width: 100%;
                border-bottom: 3px solid #FF9950;
                left: 0;
                bottom: -1px;
                transform: translateX(-100%);
                transition: transform 0.2s ease;
            }
              
            .field .label-text {
                position: absolute;
                bottom: 5px;
                left: 0;
                transition: all 0.2s ease;
            }
              
            .field input:focus + .label-wrapper .label-text,
            .field input:valid + .label-wrapper .label-text {
                font-size: 12px;
                color: #FF9950;
                transform: translateY(-150%);
            }
            
            .field input:focus + .label-wrapper::after,
            .field input:valid + .label-wrapper::after {
                transform: translateX(0%);
            }
                `}
            </style>
        </>
   ) 

}

export default inputPage;