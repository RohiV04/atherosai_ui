import React, { useState } from 'react';
import classnames from 'classnames';
import s from '@components/ThemeSwitcher.module.scss';
import ThemeButton from '@components/ThemeButton';
import { get } from '@lib/utils';

const themes = [
    {
        id: 'LIGHT',
        name: 'Light',
        iconSrc: '/icons/light.svg'
    },
    {
        id: 'DARK',
        name: 'Dark',
        iconSrc: '/icons/dark.svg',
    }
];

const ThemeSwitcher = () => {
    const [activeTheme, setTheme] = useState('LIGHT');

    return <>
        <span
            className={
                classnames({
                    [s['theme-switcher']]: true,
                    [s['theme-switcher--dark']]: 
                        activeTheme === 'DARK'
                })
            }
        >
            {
                themes.map((themeButtonProps) => {
                    return (
                        <ThemeButton
                            key={get(themeButtonProps, 'id')}
                            setTheme={setTheme}
                            activeTheme={activeTheme}
                            {...themeButtonProps}
                        />
                    )
                })
            }
        </span>
    </>
};

export default ThemeSwitcher;