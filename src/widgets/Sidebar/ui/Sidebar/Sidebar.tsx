import { classNames } from 'shared/lib/helpers/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'
import { Langswitcher } from 'shared/ui/LangSwitcher/LangSwitcher'



interface SidebarProps {
	className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
	
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed(prev => !prev)
	}
console.log(cls)
	return(
		<div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed }, [className])}>
			<button onClick={onToggle}>
				Toggle
			</button>
			<div className={cls.switchers}>
					<ThemeSwitcher/>
					<Langswitcher className={cls.lang}/ >
			</div>
		</div>
	);
};