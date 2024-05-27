
import React from 'react';

const notificationExample = () => {
    return (<>
        <figure className="notification">
            <div className="notification__body">
                <img
                    src="icons/check-circle.svg"
                    title="Success"
                    alt="Success"
                    className="notification__icon"
                />
                Your account has been created! &#128640; 
            </div>
            <div className="notification__progress"></div>
        </figure>
        <style jsx>
            {`
            .notification {
                position: absolute;
                bottom: 4px;
                right: 4px;
                width: max-content;
                border-radius: 6px;
                background-color: #313e2c;
                color: #aaec8a;
                box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
                transform: translateY(30px);
                opacity: 0;
                visibility: hidden;
                animation: fade-in 3s linear;
            }
            
            .notification__icon {
                height: 26px;
                width: 26px;
                margin-right: 4px;
            }
            
            .notification__body {
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 16px 8px;
            }
            
            .notification__progress {
                position: absolute;
                left: 4px;
                bottom: 4px;
                width: calc(100% - 8px);
                height: 3px;
                transform: scaleX(0);
                transform-origin: left;
                background: linear-gradient(to right, #313e2c,  #aaec8a);
                border-radius: inherit;
                animation: progress 2.5s 0.3s linear;
            }
            
            @keyframes fade-in {
                5% {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }
                95% {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
                
            @keyframes progress {
                to {
                    transform: scaleX(1);
                }
            }
            `}
            </style>
        </>
    )
}

export default notificationExample;