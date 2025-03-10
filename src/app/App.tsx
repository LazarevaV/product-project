import { classNames } from "shared/lib/helpers/classNames/classNames";
import { Navbar } from "widgets/Navbar";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider";
import "./styles/index.scss";
import { Sidebar } from "widgets/Sidebar";
import { Suspense } from "react";

import  i18n  from 'shared/config/i18n/i18n';
import { changeLanguage } from 'i18next';




const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
