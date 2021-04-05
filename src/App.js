import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Playlist from "./components/Playlist";
import Artist from "./components/Artist";
import Album from "./components/Album";
import Song from "./components/Song";
import NotFound from "./components/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
 return (
  <div className="app">
   <BrowserRouter>
    <section id="header">
     <Link className="home-btn" to="/">
      Home
     </Link>
    </section>

    <Switch>
     <ErrorBoundary>
      <Route exact path="/" component={Home} />
      <Route exact path="/playlist/:id" component={Playlist} />
      <Route exact path="/artist/:id" component={Artist} />
      <Route exact path="/album/:id" component={Album} />
      <Route exact path="/song/:id" component={Song} />
     </ErrorBoundary>
     <Route component={NotFound} />
    </Switch>
   </BrowserRouter>
  </div>
 );
}

export default App;
