import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { About } from "./pages/about";
import { Admin } from "./pages/admin";
import { AdminLoginPage } from "./pages/admin/LoginPage";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import { useAdminContext } from "./pages/contexts/AdminContext.context";

function App() {
  const adminContext = useAdminContext();
  const { user } = adminContext;
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/cyanide" component={AdminLoginPage} />
          <ProtectedRoute user={user} path="/admin" component={Admin} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
