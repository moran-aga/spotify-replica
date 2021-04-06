import React from "react";
import albums from "../data/albums.json";
import songs from "../data/songs.json";
import { Link } from "react-router-dom";

function Album(props) {
 const id = props.match.params.id;
 const album = albums.find((album) => album.id === id);
 console.log(album);
 return (
  <div>
   <h1>{album.name}</h1>
   <h2>{album.artist}</h2>
   {album.cover_img && (
    <img alt="album-cover" className="img" src={`${album.cover_img}`} />
   )}
   <ul>
    {album.songs.map((song) => {
     const albumSongs = songs.find((one) => song === one.id);
     console.log(albumSongs);
     return (
      <>
       <Link to={`/song/${albumSongs.id}`}>
        <li>{albumSongs.name}</li>
       </Link>
      </>
     );
    })}
   </ul>
  </div>
 );
}

export default Album;
