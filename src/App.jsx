import Header from "./pages/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Product from "./pages/Product";

function App() {
  return (
    <Router>
      <div className="font-kumbh">
        <Header />
        <Product />
      </div>
    </Router>
  );
}

export default App;
