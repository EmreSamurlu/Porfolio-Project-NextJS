import Head from "next/head";
import Image from "next/image";

import Container from "../components/Container";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <Container>
      <h1 className="text-3xl font-bold underline text-primaryText">
        Hello world!
      </h1>
    </Container>
  );
};

export default Home;
