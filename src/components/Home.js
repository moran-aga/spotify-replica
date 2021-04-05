import React from "react";
import albums from "../data/albums.json";
import artists from "../data/artists.json";
import songs from "../data/songs.json";
import playlists from "../data/playlists.json";
import { Link } from "react-router-dom";

function Home(props) {
 return (
  <div>
   <h2 className="sliderHeader">TOP PLAYLISTS</h2>
   <ul className="slider">
    {playlists.map((playlist, i) => {
     return (
      <>
       <div key={i} className="sliderItem">
        <Link to={`/playlist/${playlist.id}`}>
         {playlist.cover_img && (
          <img alt="playlist" className="img" src={`${playlist.cover_img}`} />
         )}
         <li>{playlist.name}</li>
        </Link>
       </div>
      </>
     );
    })}
   </ul>
   <h2 className="sliderHeader">TOP SONGS</h2>
   <ul className="slider">
    {songs.slice(0, 5).map((song, i) => {
     return (
      <>
       <div key={i} className="sliderItem">
        <Link to={`/song/${song.id}`}>
         {song.cover_img && (
          <img alt="song" className="img" src={`${song.cover_img}`} />
         )}
         <li>{song.name}</li>
        </Link>
       </div>
      </>
     );
    })}
   </ul>
   <h2 className="sliderHeader">TOP ARTISTS</h2>
   <ul className="slider">
    {artists.map((artist, i) => {
     return (
      <div key={i} className="sliderItem">
       <Link to={`/artist/${artist.id}`}>
        {artist.cover_img && (
         <img alt="artist" className="img" src={`${artist.cover_img}`} />
        )}
        <li>{artist.name}</li>
       </Link>
      </div>
     );
    })}
   </ul>

   <h2 className="sliderHeader">TOP ALBUMS</h2>
   <ul className="slider">
    {albums.map((album, i) => {
     return (
      <div key={i} className="sliderItem">
       <Link to={`/album/${album.id}`}>
        {album.cover_img && (
         <img alt="album" className="img" src={`${album.cover_img}`} />
        )}
        <li>{album.name}</li>
       </Link>
      </div>
     );
    })}
   </ul>
  </div>
 );
}

export default Home;
