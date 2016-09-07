import React from 'react'
import { Link } from 'react-router'

export default React.createClass({

  render() {
    return (
      <main>
        <header className="mainTitle__container">
          <h1 className="mainTitle">My Albums</h1>
        </header>
        <div className="albums__conatiner">
          <ul className="albums">
            <li className="albums__item">
              <Link to="/album/album1">
                <img src="album/imageSrc1"
                     alt=""/>
              </Link>
            </li>
            <li className="albums__item">
              <Link to="/album/album2">
                <img src="album/imageSrc1"
                     alt=""/>
              </Link>
            </li>
            <li className="albums__item">
              <Link to="/album/album3">
                <img src="album/imageSrc1"
                     alt=""/>
              </Link>
            </li>
            <li className="albums__item">
              <Link to="/album/album4">
                <img src="album/imageSrc1"
                     alt=""/>
              </Link>
            </li>
            <li className="albums__item">
              <Link to="/album/album5">
                <img src="album/imageSrc1"
                     alt=""/>
              </Link>
            </li>
            <li className="albums__item">
              <Link to="/album/album6">
                <img src="album/imageSrc1"
                     alt=""/>
              </Link>
            </li>
          </ul>
        </div>
      </main>
    )
  }
})
