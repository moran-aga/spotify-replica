import React from "react";
import playlists from "../data/playlists.json";
import songs from "../data/songs.json";
import { Link } from "react-router-dom";
const queryString = require("query-string");

function Playlist(props) {
 const id = props.match.params.id;
 const playlist = playlists.find((playlist) => playlist.id === id);
 const parsed = queryString.parse(props.location.search);

 return (
  <div>
   <h1>{playlist.name}</h1>
   <h4>created at: {playlist.created_at}</h4>
   {playlist.cover_img && (
    <img alt="playlist" className="img" src={`${playlist.cover_img}`} />
   )}
   <ul>
    {playlist.tracks.map((track, i) => {
     const songId = songs.find((song) => song.id === track);
     return (
      <>
       <Link to={`/song/${track}`}>
        <li key={i}>{songId.name}</li>
       </Link>
      </>
     );
    })}
   </ul>
  </div>
 );
}
export default Playlist;
