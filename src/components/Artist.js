import React from "react";
import artists from "../data/artists.json";
import albums from "../data/albums.json";
import songs from "../data/songs.json";
import { Link } from "react-router-dom";

function Artist(props) {
 const id = props.match.params.id;
 const artist = artists.find((artist) => artist.id === id);
 return (
  <div>
   <h1>{artist.name}</h1>
   {artist.cover_img && (
    <img alt="artist" className="img" src={`${artist.cover_img}`} />
   )}
   <h2>ALBUMS</h2>
   <ul>
    {artist.albums.map((album) => {
     //  const songId = songs.find((song) => song.id === track);
     const currntAlbum = albums.find((one) => album === one.id);
     console.log(currntAlbum);
     return (
      <>
       <Link to={`/album/${currntAlbum.id}`}>
        <li>{currntAlbum.name}</li>
       </Link>
      </>
     );
    })}
   </ul>
   <h2>TOP SONGS</h2>
   <ul>
    {artist.selected_songs.map((song) => {
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

export default Artist;
