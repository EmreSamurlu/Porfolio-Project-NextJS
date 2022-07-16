import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../Header";
import background from "../../../public/images/background.png";
import { background_image } from "./styles.module.css";

const Container = ({ children, style, ...customMeta }) => {
  const meta = {
    title: "Emre Samurlu | Full Stack Developer - Freelancer",
    ...customMeta,
  };

  return (
    <div>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <main style={style}>
        <div className={background_image}>
          <Image
            src={background}
            layout="fill"
            objectFit="cover"
            alt="background"
          />
        </div>
        {children}
      </main>
    </div>
  );
};

export default Container;
