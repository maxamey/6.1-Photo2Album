import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getDefaultProps(){
    return {
      album1: {
        image1: "#",
        image2: "#",
        image3: "#",
        image4: "#",
        image5: "#",
        image6: "#"
      },
      album2: {
        image1: "#",
        image2: "#",
        image3: "#",
        image4: "#",
        image5: "#",
        image6: "#"
      },
      album3: {
        image1: "#",
        image2: "#",
        image3: "#",
        image4: "#",
        image5: "#",
        image6: "#"
      },
      album4: {
        image1: "#",
        image2: "#",
        image3: "#",
        image4: "#",
        image5: "#",
        image6: "#"
      },
      album5: {
        image1: "#",
        image2: "#",
        image3: "#",
        image4: "#",
        image5: "#",
        image6: "#"
      },
      album6: {
        image1: "#",
        image2: "#",
        image3: "#",
        image4: "#",
        image5: "#",
        image6: "#"
      }
    }
  },
  render() {
    console.log(this);
    return (
      <main>
        <header className="mainTitle__container">
          <h1 className="mainTitle">My Albums</h1>
        </header>
        <div className="albums__conatiner">
          <ul className="albums">
            
          </ul>
        </div>
      </main>
    )
  }
})
