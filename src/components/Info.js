import React from 'react';
import Image1 from '../img/elden-ring.jpeg';
import Image2 from '../img/screenshot1.jpeg';
import Image3 from '../img/screenshot2.jpeg';


class Info extends React.Component {
  render() {
    return(
        <article className="middle">
            <div className="gallery">
               <img src={Image1} alt="Elden Ring Cover" className="image1"></img>
               <img src={Image2} alt="Elden ring Screenshot" className="image2"></img>
               <img src={Image3} alt="Elden ring Screenshot 2" className="image2"></img>
            </div>
        </article>
    )
  }
}

export default Info