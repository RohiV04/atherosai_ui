

import React from 'react';
import classNames from 'classnames';

const Notification = ({ notification }) => {
    const d = new Date(notification.dateTime);

    return <div className='notification'>
        <div className='notification__avatar'>
            <img src={notification.user.avatar} alt={notification.title} />
            <div className={
                classNames('notification__status', {
                    'notification__status--online': 
                        notification.user.status === 'online',
                    'notification__status--offline': 
                        notification.user.status === 'offline',
                    'notification__status--pending': 
                        notification.user.status === 'pending'
                })
            }></div>
        </div>
        <div className='notification__content'>
            <h2 className='notification__title'>{notification.title}</h2>
            <time className='notification__date'>
                {d.getDate() + '. June ' + d.getFullYear()}
            </time>
        </div>
        {
            !notification.read && <div className='notification__read'></div>
        }
        <style jsx>
            {`
            .notification {
                display: flex;
                align-items: center;
                transition: all 0.3s;
                border-radius: 0.5rem;
                min-height: 4rem;
                padding: 0.25rem 0.75rem;
                cursor: pointer;
                font-size: 0.75rem;
                position: relative;
            }

            .notification__title {
                color: white;
            }

            .notification__title strong {
                font-weight: 600;
            }

            .notification:hover {
                background: #323335;
            }
            
            .notification img {
                border-radius: 50%;
                width: 2.75rem;
                height: 2.75rem;
                margin-right: 1rem;
                object-fit: cover;
            }

            .notification__content {
                display: flex;
                flex-direction: column;
                padding: 0 0.25rem;
            }
            
            .notification__title {
                color: white;
                font-size: 0.9rem;
                font-weight: 600;
            }

            .notification__avatar {
                position: relative;
            }

            .notification__date {
                color: #D3D3D3;
                font-size: 0.9rem;
            }

            .notification__status {
                width: 0.5rem;
                height: 0.5rem;
                border-radius: 50%;
                margin-left: -1rem;
                position: absolute;
                bottom: 0.25rem;
                right: 1.15rem;
                border: 2px solid #1F1F1F;
            }

            .notification__read {
                width: 0.5rem;
                height: 0.5rem;
                background: #D53B34;
                position: absolute;
                border-radius: 50%;
                right: 0.75rem;
                top: 50%;
                transform: translateY(-50%);
            }

            .notification__status--online {
                background: #67DA48;
            }

            .notification__status--offline {
                background: #58595B;
            }

            .notification__status--pending {
                background: #F4C94A;
            }
            `}
        </style>
    </div>
}

export default Notification;