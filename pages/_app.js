import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Component />
    </ThemeProvider>
  );
}

export default MyApp;
