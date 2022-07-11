import Home from "./Home";
import Container from "../src/components/Container";
import TopBar from "../src/components/TopBar";
import ReduxProvider from "../src/redux/ReduxProvider";

const App = () => {
  return (
    <ReduxProvider>
      <Container>
        <TopBar />
        <Home />
      </Container>
    </ReduxProvider>
  );
};

export default App;
