import React from "react";
import Head from "next/head";

const Container = ({ children, ...customMeta }) => {
  const meta = {
    title: "Emre Samurlu | Full Stack Developer - Freelancer",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <main className="bg-backgroundColor w-full h-full">{children}</main>
    </div>
  );
};

export default Container;
