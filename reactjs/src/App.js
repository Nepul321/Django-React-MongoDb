import Nav from './Components/navbar'
import { Route, Switch } from 'react-router-dom'
import Addmeetups from './Pages/addmeetups';
import Favorites from './Pages/favorites';
import Allmeetups from './Pages/allmeetups';
import UpdateMeetup from './Pages/updatemeetups';

function App() {
  return (
    <div>
      <Nav />
      <Switch>
      <Route path="/" exact component={Allmeetups}>
      </Route>
      <Route path="/add-meetup/" component={Addmeetups}>
      </Route>
      <Route path="/favorites/" component={Favorites}>
      </Route>
      <Route path="/update-meetup/:id/" component={UpdateMeetup}>
        
      </Route>
      </Switch>
    </div>
  );
}

export default App;
