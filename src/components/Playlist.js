import React from "react";
import playlists from "../data/playlists.json";

function Playlist(props) {
 const id = props.match.params.id;
 const playlist = playlists.find((playlist) => playlist.id === id);
 return (
  <div>
   <h1>{playlist.name}</h1>
   <h4>created at: {playlist.created_at}</h4>
   {playlist.cover_img && (
    <img alt="playlist" className="img" src={`${playlist.cover_img}`} />
   )}
   <ul>
    {playlist.songs.map((song, i) => {
     return <li key={i}>{song}</li>;
    })}
   </ul>
  </div>
 );
}
export default Playlist;
