import { classNames } from "shared/lib/helpers/classNames/classNames";
import cls from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button";
import { ThemeButton } from "../Button/Button";

interface LangSwitcherprops {
  className?: string;
}

export const Langswitcher = ({ className }: LangSwitcherprops) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
   
      <Button
        className={classNames(cls.Langswitcher, {}, [className])}
        theme={ThemeButton.CLEAR}
        onClick={toggle}
      >
        {t("Язык")}
      </Button>
   
  );
};
