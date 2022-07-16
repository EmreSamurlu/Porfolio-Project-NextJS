import Container from "../src/components/Container";
import Home from "./Home";
// import ReduxProvider from "../src/redux/ReduxProvider";

const App = () => {
  return (
    // <ReduxProvider>
    <Container>
      <Home />
    </Container>
    // </ReduxProvider>
  );
};

export default App;
