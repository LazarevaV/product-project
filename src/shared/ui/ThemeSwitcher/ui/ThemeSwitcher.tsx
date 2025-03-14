import { classNames } from "shared/lib/helpers/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import { FC, } from 'react';
import { useTheme, Theme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'



interface ThemeSwitcherProps {
	className?: string; 
}


export const ThemeSwitcher : FC <ThemeSwitcherProps> = ({className}) => {

		const { theme, toggleTheme } = useTheme();
	

	return (
		<Button 
				theme={ThemeButton.CLEAR}
				className={classNames(cls.themeSwitcher, {}, [className])}
				onClick={toggleTheme}
				>
					{theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
		</Button>
	)
}




