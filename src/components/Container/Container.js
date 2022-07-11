import React from "react";
import Head from "next/head";

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
      <main style={style}>{children}</main>
    </div>
  );
};

export default Container;