import React from "react";
import songs from "../data/songs.json";

function Song(props) {
 const id = props.match.params.id;
 const song = songs.find((song) => song.id === id);
 console.log(song);
 return (
  <div>
   <h1>{song.name}</h1>
   <h2>{song.artist}</h2>
   <h3>{song.album}</h3>
   <h4>{song.length}</h4>

   <iframe
    width="560"
    height="315"
    src={song.youtube_link}
    title="YouTube video player"
    loading="lazy"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
   ></iframe>
   <h2>lyrics:</h2>
   <div className="lyrics">{song.lyrics}</div>
  </div>
 );
}

export default Song;
