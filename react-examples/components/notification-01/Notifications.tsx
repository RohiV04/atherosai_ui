import React from 'react';
import notificationsDefinition from './notificationsDefinition';
import Notification from './Notification';

const tabs = ['all', 'following', 'liked', 'commented'];

const createNotificationsCount = (notificationsDefinition) => {
    return notificationsDefinition.reduce(
        (acc, notification) => {
            acc['all']++;
            acc[notification.notificationType]++;
            return acc;
        }, tabs.reduce((acc, tab) => {
            acc[tab] = 0;
            return acc;
        }, {})
    );
}

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const Notifications = () => {
    const [notifications, setNotifications] = React.useState(
        notificationsDefinition
    );
    const notificationsCount = createNotificationsCount(
        notifications
    );
    const [currentTab, setCurrentTab] = React.useState('all');

    return (
        <div className='background'>
            <div className='notifications'>
            <div className='notifications__header'>
                <h2>Notifications</h2>
                <img 
                    className='notifications__close' 
                    src='/icons/close.svg' alt='Close' 
                />
            </div>
            <div className='notifications__tabs'>
                {
                    tabs.map(tab =>
                        <div className='tab'>
                            <button 
                                key={tab}
                                className={currentTab === tab ? 'active' : ''}
                                onClick={() => setCurrentTab(tab)}
                            >
                                {capitalizeFirstLetter(tab)}
                            </button>
                            <span className='notification__count'>
                                {notificationsCount[tab]}
                            </span>
                        </div>
                    )
                }
            </div>
            <div className='notifications__content'>
                {
                    notifications.filter((notification) => {
                        if (currentTab === 'all') {
                            return true;
                        } else {
                            return notification.notificationType === currentTab;
                        }
                    }).map((notification, index) =>
                        <Notification key={index} notification={notification} />
                    )
                }
            </div>
            <div className='notifications__footer'>
                <button className='secondary' onClick={() => {
                    setNotifications(notifications.map(
                        notification => {
                            notification.read = true;
                            return notification;
                        }
                    ))
                }}>
                    Mark all as read
                </button>
                <button className='primary'>
                    View all notifications
                </button>
            </div>
        </div>
        <style jsx>
            {`
                .background {
                    background: #4D4D4D;
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .notifications__close {
                    cursor: pointer;
                }

                .notifications {
                    margin: 0 auto;
                    margin-top: -5rem;
                    border-radius: 1rem;
                    background: #1F1F1F;
                    max-width: 30rem;
                    width: 100%;
                    padding: 1rem;
                    min-height: 30rem;
                    display: flex;
                    flex-direction: column;
                }

                .notifications__content {
                    display: flex;
                    padding-top: 1rem;
                    flex-direction: column;
                    gap: 0.25rem;
                }

                .notifications__header {
                    display: flex;
                    justify-content: space-between;
                }

                .notifications__header h2 {
                    margin-top: 0.75rem;
                }

                .notifications h2 {
                    color: #E6E6E8;
                }

                .notifications button {
                    background: transparent;
                    border: none;
                    color: white;
                    cursor: pointer;
                    gap: 0.5rem;
                }

                .notifications .active {
                    text-decoration: underline;
                    color: #D8D8DA;
                }

                .notifications button:hover {
                    text-decoration: underline;
                }

                .notifications__tabs {
                    display: flex;
                    gap: 1rem;
                    padding-bottom: 0.5rem;
                    overflow-x: auto;
                    border-bottom: 1px 
                    solid #323335;
                }

                .notifications .tab {
                    white-space: nowrap;
                    display: flex;
                    flex-wrap: nowrap;
                }

                .notification__count {
                    background: #323335;
                    color: #D8D8DA;
                    border-radius: 0.25rem;
                    padding: 0.25rem;
                }

                .active .notification__count {
                    color: white;
                }

                .notifications__footer .primary {
                    color: white;
                    background: #7C47EB;
                    padding: 0.5rem;
                    border-radius: 0.25rem;
                    border: 1px solid #8C56F4;
                }

                .secondary {
                    color: #F2F2F2;
                    background: #323335;
                    border: 1px solid #2F2F2F;
                }

                .notifications__footer {
                    margin-top: auto;
                    padding-top: 0.5rem;
                    display: flex;
                    justify-content: space-between;
                }
            `}
        </style>
    </div>)
}

export default Notifications;