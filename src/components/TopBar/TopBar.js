import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";

import navigation from "../Navigation";
import { container, navbar, theme_changer, text } from "./styles.module.css";

const TopBar = () => {
  const routes = useRouter();
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-10 h-10"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-10 h-10 "
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <div className={container}>
      {navigation.map((link) => {
        console.log("link", link.path);
        console.log("pathname", routes.pathname);
        return (
          <ul className={navbar} key={link.name}>
            <Link href={link.path}>
              <li
                className={
                  link.path === routes.pathname
                    ? "text-red"
                    : "text-nero dark:text-off_white"
                }>
                {link.name}
              </li>
            </Link>
          </ul>
        );
      })}

      <div className={theme_changer}>{renderThemeChanger()}</div>
    </div>
  );
};
export default TopBar;
