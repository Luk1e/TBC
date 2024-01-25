// Import styles
import GlobalStyles from "./GlobalStyles";
// Import components
import { NavBar } from "./components/header/NavBar";
import { Footer } from "./components/footer/Footer";
// Import hooks
import { BrowserRouter } from "react-router-dom";
// Import pages
import { Home } from "./pages/home/Home";

// App
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Home />
      <GlobalStyles />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
