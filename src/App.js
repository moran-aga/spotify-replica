import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Playlist from "./components/Playlist";
import Artist from "./components/Artist";
import Album from "./components/Album";
import Song from "./components/Song";

function App() {
 return (
  <div className="app">
   <BrowserRouter>
    <Link to="/">Home</Link>

    <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/playlist/:id" component={Playlist} />
     <Route exact path="/artist/:id" component={Artist} />
     <Route exact path="/album/:id" component={Album} />
     <Route exact path="/song/:id" component={Song} />
    </Switch>
   </BrowserRouter>
  </div>
 );
}

export default App;
