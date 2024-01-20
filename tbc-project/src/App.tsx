// Import styles
import GlobalStyles from "./GlobalStyles";
// Import components
import { NavBar } from "./components/header/NavBar";
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
      <GlobalStyles />;
    </BrowserRouter>
  );
}

export default App;
