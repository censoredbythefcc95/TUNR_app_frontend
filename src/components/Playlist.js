
import React from "react";

const Playlist = (props) => {
  const { playlist, deleteSong } = props;
  const handleDelete = (songSelected) => {
    props.deleteSong(songSelected);
  };
  const loaded = () => {
    return (
      <div key={Playlist._id}>
        {playlist.map((song) => {
          return (
            <article className="playlist-container">
              

              <div className="song-name">
                <p>{song.title}</p>
              </div>

              <div className="artist-name">
                <p> {song.author} </p>
              </div>

              <div className="song-length">
                <p> {song.time}</p>
              </div>
              <button onClick={() => handleDelete(song)}>Delete Song</button>
            </article>
          );
        })}
      </div>
    );
  };
  const loading = <h6>What are you Listening to?</h6>;

  return playlist.length >0 ? loaded(): loading;
};

export default Playlist;