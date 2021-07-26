import Home from "./pages/Home";
import Header from "./components/Header";
import Container from "@material-ui/core/Container";

const App = () => {
  return (
    <>
      <Header/>
      <Container maxWidth="md">
        <Home/>
      </Container>
    </>
  );
}

export default App;
