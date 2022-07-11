import React from "react";
import navigation from "../Navigation";
import Link from "next/link";
import styles from "./TopBar.module.css";

const TopBar = () => {
  return (
    <div className={styles.container}>
      {navigation.map((link) => {
        return (
          <ul className={styles.navbar} key={link.name}>
            <Link href={link.path}>
              <li>{link.name}</li>
            </Link>
          </ul>
        );
      })}
    </div>
  );
};
export default TopBar;
