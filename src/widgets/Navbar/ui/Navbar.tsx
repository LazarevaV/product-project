import { classNames } from "shared/lib/helpers/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'

interface Navbarprops {
  className?: string;
}

export const Navbar = ({ className }: Navbarprops) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/"} className={cls.mainLink}>Главная</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>О сайте</AppLink>
      </div>
    </div>
  );
};
