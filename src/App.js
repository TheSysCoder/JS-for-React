import Navigation from "./routes/navigations/navogation.component";
import { students, numbers } from "./utils/database";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  <Router>
    <Route path="/" element={<Navigation />}></Route>
  </Router>;
}

export default App;
