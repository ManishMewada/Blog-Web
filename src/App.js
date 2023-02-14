import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetail from './BlogDetails';
import NotFound from './NotFound';
import Edit from './Edit';
import AuthorCreate from './AuthorCreate';
import Author from './Author';
import AuthorDetails from './AuthorDetails';
import AuthorEdit from './AuthorEdit';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetail />
            </Route>
            <Route path="/edit/:id">
              <Edit />
            </Route>
            <Route exact path='/authors'>
              <Author />
            </Route>
            <Route path='/authorcreate'>
              <AuthorCreate />
            </Route>
            <Route path='/authors/:id'>
              <AuthorDetails />
            </Route>
            <Route path='/authoredit/:id'>
              <AuthorEdit />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div> 
      </div>
    </Router>
  );
}

export default App;
