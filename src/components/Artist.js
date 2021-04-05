import React from "react";
import artists from "../data/artists.json";

function Artist(props) {
 const id = props.match.params.id;
 const artist = artists.find((artist) => artist.id === id);
 return (
  <div>
   <h1>{artist.name}</h1>
   {artist.cover_img && <img className="img" src={`${artist.cover_img}`} />}
   <h2>ALBUMS</h2>
   <ul>
    {artist.albums.map((album) => {
     return <li>{album}</li>;
    })}
   </ul>
   <h2>TOP SONGS</h2>
   <ul>
    {artist.selected_songs.map((song) => {
     return <li>{song}</li>;
    })}
   </ul>
  </div>
 );
}

export default Artist;
