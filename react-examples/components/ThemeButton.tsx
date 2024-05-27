import React from 'react';
import classnames from 'classnames';
import s from '@components/ThemeSwitcher.module.scss';

const ThemeButton = (
    {
        id,
        name,
        iconSrc,
        activeTheme,
        setTheme
    }
) => {
    return (
        <button
            className={
                classnames({
                    [s['theme-button']]: true,
                    [s['theme-button--dark']]:
                        activeTheme === 'DARK',
                    [s['theme-button--unactive']]:
                        activeTheme !== id,
                })
            }
            onClick={
                () => {
                    setTheme(id)
                }
            }
        >
            <img
                className={classnames({
                    [s['theme-icon']]: true,
                    [s['theme-icon--dark']]:
                        activeTheme === 'DARK'
                })}
                src={iconSrc}
                alt={id}
            />
            {name}
        </button>
    )
};

export default ThemeButton;