import { Header, Container } from "../../src/components";

const Home = () => {
  return (
    <Container>
      <Header />
      <div className="bg-slate-900 dark:bg-slate-800  px-6 py-8 ring-slate-900/5 ">
        <h3 className="text-nero dark:text-off_white mt-5 text-base font-medium tracking-tight text-2xl">
          Hello!
        </h3>
      </div>
    </Container>
  );
};

export default Home;
