import "./App.css";
import Carrousel from "./components/Carrousel";
import Analise from "./components/Avaliacao";
import Item from "./components/meuSlide";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    allVariants: {
      color: "#1B3D10",
      fontFamily: "Poppins",
      textAlign: "left",
      letterSpacing: "0.1rem",
    },
    h1: {
      fontSize: "2.25rem",
      fontWeight: "bold",
    },
    h2: {
      fontFamily: "Roboto",
      fontSize: "1.75rem",
    },
    h3: {
      fontSize: "1.5rem",
    },
    h4: {
      fontSize: "1.25rem",
    },
    h5: {
      fontSize: "1rem",
    },
    h6: {
      fontSize: "0.87rem",
    },
    body1: {
      fontFamily: "Roboto",
      fontSize: "1.4rem",
      textAlign: "left",
    },
    subtitle1: {
      fontSize: "0.75rem",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Item />
        <Carrousel />
        <Analise />
      </div>
    </ThemeProvider>
  );
}

export default App;
