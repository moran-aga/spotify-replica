import React from "react";
import albums from "../data/albums.json";

function Album(props) {
 const id = props.match.params.id;
 const album = albums.find((album) => album.id === id);
 return (
  <div>
   <h1>{album.name}</h1>
   <h2>{album.artist}</h2>
   {album.cover_img && (
    <img alt="album-cover" className="img" src={`${album.cover_img}`} />
   )}
   <ul>
    {album.songs.map((song) => {
     return <li>{song}</li>;
    })}
   </ul>
  </div>
 );
}

export default Album;
