import React from 'react';

class Info extends React.Component {
  render() {
    return(
      <article>
      <h1>Intro</h1>

      <p className='intro'>Hello, my name is Karam Fahad. Welcome to WDDM 121.</p>

      <section id="about">
        <h2>get in touch</h2>

        <ul>
          <li>
            <a href="#">linkedin</a>
          </li>

          <li>
            <a href="#">snapchat</a>
          </li>

          <li>
            <a href="#">twitter</a>
          </li>
        </ul>
      </section>
    </article>
    )
  }
}

export default Info