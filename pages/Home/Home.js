import { useDispatch, useSelector } from "react-redux";

import Container from "../../src/components/Container";
import { toggleTheme } from "../../src/redux/features/theme";
import { dark, light } from "../../styles";

const Home = () => {
  const { darkTheme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <Container
      style={
        darkTheme
          ? { backgroundColor: dark.primary }
          : { backgroundColor: light.primary }
      }>
      <p style={darkTheme ? { color: "#FDFDFD" } : { color: "#141414" }}>
        Selam
      </p>
      <p>{darkTheme.toString()}</p>
      <button onClick={handleClick}>Toggle Theme</button>
    </Container>
  );
};

export default Home;
