import React, { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import { useTheme } from "next-themes";

import navigation from "../Navigation";
import Link from "next/link";
import styles from "./TopBar.styles";
import { useRouter } from "next/router";

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
          className="w-10 h-10 text-yellow-500 "
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-10 h-10 text-gray-900 "
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <div style={styles.container}>
      {navigation.map((link) => {
        return (
          <ul
            className={
              link.path === routes.route
                ? "text-red"
                : "text-nero dark:text-off_white"
            }
            style={styles.navbar}
            key={link.name}>
            <Link className="text-red" href={link.path}>
              <li className="text-sky-400">{link.name}</li>
            </Link>
          </ul>
        );
      })}

      <div style={styles.themeChanger}>{renderThemeChanger()}</div>
    </div>
  );
};
export default TopBar;
