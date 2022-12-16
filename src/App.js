import { Route, Switch } from "react-router-dom";

import AllMeetUpsPage from "./pages/AllMeetUps";
import NewMeetUpPage from "./pages/NewMeetUp";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetUpsPage />
        </Route>
        <Route path="/new-meetup" exact>
          <NewMeetUpPage />
        </Route>
        <Route path="/favorites" exact>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
