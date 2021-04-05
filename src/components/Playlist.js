import React from "react";
import playlists from "../data/playlists.json";

function Playlist(props) {
 const id = props.match.params.id;
 const playlist = playlists.find((playlist) => playlist.id === id);
 return (
  <div>
   <h1>{playlist.name}</h1>
   <h3>{playlist.created_at}</h3>
   {playlist.cover_img && <img className="img" src={`${playlist.cover_img}`} />}
   <ul>
    {playlist.songs.map((song) => {
     return <li>{song}</li>;
    })}
   </ul>
  </div>
 );
}
export default Playlist;
