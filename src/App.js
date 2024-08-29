import "./App.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider } from "@mantine/core";
import electionResult from "./dataset.json";
import Home from "./page/Home";
const theme = createTheme({
  /** Put your mantine theme override here */
});
function App() {
  return (
    <MantineProvider theme={theme}>
      <Home electionResult={electionResult} />{" "}
    </MantineProvider>
  );
}

export default App;
