import { classNames } from "shared/lib/helpers/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink } from 'shared/ui/AppLink/AppLink';

interface Navbarprops {
  className?: "string";
}

export const Navbar = ({ className }: Navbarprops) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={"/"} className={cls.mainLink}>Главная</AppLink>
        <AppLink to={"/about"}>О сайте</AppLink>
      </div>
    </div>
  );
};
