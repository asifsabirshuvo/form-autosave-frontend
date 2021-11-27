import AllForms from "./pages/AllForms/AllForms";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SubmitForm from "./pages/SubmitForm/SubmitForm";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={AllForms} />
          <Route path="/form/:id" exact component={SubmitForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
