import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Section from "./Components/Section/Section";

const theme = createTheme({
  buttons: {
    primary: '#6418C3',
    radius50: '50vw',
    padding: "12px 20px",
    startBtn: {
      color: '#fff',
      background: '#6418C3',
      borderRadius: '50vw',
      padding: "12px 20px",
      fontWeight: "bold",
      '&:hover': {
        background: '#6418C3',

      }
    }
  },
  columnsStyle: {
    textAlign: 'center',
    padding: '30px',
    border: 'none',
    boxShadow: 'none',
    marginTop: "20px"
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Hero theme={theme} />
        <Section theme={theme} flexDirection='row-reverse' />
        <Section theme={theme} flexDirection='row' />
        <Section theme={theme} flexDirection='row-reverse' />
      </ThemeProvider>
    </div>
  );
}

export default App;
