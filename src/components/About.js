import React from 'react';
import Image1 from '../img/elden-ring2.jpeg'


class Info extends React.Component {
  render() {
    return(
        <article className="middle">
          <div className="about" id="about">
            <figure className="hero">
              <img src={Image1}></img>
            </figure>
            <figure>
              <h2>About Elden Ring</h2>
              <p>Elden Ring is the brand new video game by the mind behind Dark Souls, Boodborne and Sekiro: Shadows Die Twice, Hidetaka Miyazaki. This game is an open world action RPG, which will be a first for Miyazaki's games. Miyazaki worked with Game Of Thrones creator, George R.R Martin to create the story, world and monsters of this game and it has fans extremely excited! This game will be coming to Xbox, Playstation and PC on February 25,th 2022! </p>
            </figure>
          </div>
        </article>

    )
  }
}

export default Info