import React from 'react'
import Modal from './Modal'

export default React.createClass({
  getDefaultProps() {
    return {
      albums: {
        "Phantom Regiment": [
          {
            source: "assets/pr-battery.jpg",
            imageAlt: ""
          },
          {
            source: "assets/pr-contras.jpg",
            imageAlt: ""
          },
          {
            source: "assets/pr-trumpets.jpg",
            imageAlt: ""
          },
          {
            source: "assets/pr-trumpets.jpg",
            imageAlt: ""
          },
          {
            source: "assets/pr-trumpets.jpg",
            imageAlt: ""
          },
        ],
        "Santa Clara Vanguard": [
          {
            source: "assets/scv-hornline.jpg",
            imageAlt: ""
          },
          {
            source: "assets/scv-snares.jpg",
            imageAlt: ""
          },
          {
            source: "assets/scv-trumpets.jpg",
            imageAlt: ""
          },
        ],
        "Cadets of Bergen County": [
          {
            source: "assets/cadets-contras.jpg",
            imageAlt: ""
          },
          {
            source: "assets/cadets-corps.jpg",
            imageAlt: ""
          },
          {
            source: "assets/cadets-snares.jpg",
            imageAlt: ""
          },
        ],
        "Cavaliers": [
          {
            source: "assets/cavaliers-corps.jpg",
            imageAlt: ""
          },
          {
            source: "assets/cavaliers-highbrass.jpg",
            imageAlt: ""
          },
          {
            source: "assets/cavaliers-tenors.jpg",
            imageAlt: ""
          },
        ],
        "Blue Devils": [
          {
            source: "assets/bd-battery.jpg",
            imageAlt: ""
          },
          {
            source: "assets/bd-corps.jpg",
            imageAlt: ""
          },
          {
            source: "assets/bd-plumes.jpg",
            imageAlt: ""
          },
        ],
        "Carolina Crown": [
          {
            source: "assets/cc-battery.jpg",
            imageAlt: ""
          },
          {
            source: "assets/cc-colorguard.jpg",
            imageAlt: ""
          },
          {
            source: "assets/cc-hornline.jpg",
            imageAlt: ""
          },
        ],
      }
    }
  },

  getInitialState() {
    return {
      currentAlbum: Object.keys(this.props.albums)[0],
      modalOpenClass: "modal--hidden",
      modalImageSource: "",
      modalImageAlt: ""
    }
  },

  closeModal() {
    this.setState({
      modalOpenClass: "modal--hidden"
    })
  },

  thumbnailClickHandler(e) {
    var clickedImageEl = e.target;
    this.setState({
      modalOpenClass: "modal--display",
      modalImageSource: clickedImageEl.src,
      modalImageAlt: clickedImageEl.alt
    })
  },

  titleClickHandler(e) {
    var clickedAlbumTitle = e.target.innerHTML
    this.setState({
      currentAlbum: clickedAlbumTitle
    })
  },

  render() {
    let albumsTitles = Object.keys(this.props.albums)
    return (
      <main className="mainContainer">
        <section className="navContainer">
          <ul className="titlesContainer">
            {
              albumsTitles.map((title, i) =>{
                return <li key={i}
                           className="titles__item"
                           onClick={this.titleClickHandler}>
                  {title}
                </li>
              })
            }
          </ul>
        </section>
        <section className="contentContainer">
          <h2 className="albumHeading">
            {this.state.currentAlbum}
          </h2>
          <ul className="thumbnails__container">
            {
              this.props.albums[this.state.currentAlbum].map((thumbnail, i) => {
                return <li className="thumbnail__item"
                           key={i}>
                  <img key={i}
                       src={thumbnail.source}
                       alt={thumbnail.imageAlt}
                       onClick={this.thumbnailClickHandler}
                       className="thumbnail"/>
                </li>
              })
            }
          </ul>
          <Modal modalOpenClass={this.state.modalOpenClass}
                 modalImageSource={this.state.modalImageSource}
                 modalImageAlt={this.state.modalImageAlt}
                 closeModalCallback={this.closeModal}/>
        </section>
      </main>

    )
  }
})
