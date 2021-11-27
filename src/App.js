import AllForms from "./pages/AllForms/AllForms";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={AllForms} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
