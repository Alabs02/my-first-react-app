import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './scss/App.scss';
import Navbar from './components/Navbar';
import Home from './views/Home';
import CreateBlog from './views/CreateBlog';
import BlogDetails from './views/BlogDetails';
import NotFound from './views/404';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />

                <main className="Main__content">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>

                        <Route path="/create-blog">
                            <CreateBlog />
                        </Route>

                        <Route path="/blog/:id">
                            <BlogDetails />
                        </Route>

                        <Route path="*">
                            <NotFound />
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    );
}

export default App;
