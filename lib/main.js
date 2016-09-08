import React from 'react'
import Modal from './Modal'

export default React.createClass({
  getDefaultProps() {
    return {
      albums: {
        "Phantom Regiment": [
          {
            src: "assets/pr-battery.jpg",
            alt: ""
          },
          {
            src: "assets/pr-contras.jpg",
            alt: ""
          },
          {
            src: "assets/pr-trumpets.jpg",
            alt: ""
          },
        ],
        "Santa Clara Vanguard": [
          {
            src: "assets/scv-hornline.jpg",
            alt: ""
          },
          {
            src: "assets/scv-snares.jpg",
            alt: ""
          },
          {
            src: "assets/scv-trumpets.jpg",
            alt: ""
          },
        ],
        "Cadets of Bergen County": [
          {
            src: "assets/cadets-contras.jpg",
            alt: ""
          },
          {
            src: "assets/cadets-corps.jpg",
            alt: ""
          },
          {
            src: "assets/cadets-snares.jpg",
            alt: ""
          },
        ],
        "Cavaliers": [
          {
            src: "assets/cavaliers-corps.jpg",
            alt: ""
          },
          {
            src: "assets/cavaliers-highbrass.jpg",
            alt: ""
          },
          {
            src: "assets/cavaliers-highbrass.jpg",
            alt: ""
          },
        ],
        "Blue Devils": [
          {
            src: "assets/bd-battery.jpg",
            alt: ""
          },
          {
            src: "assets/bd-corps.jpg",
            alt: ""
          },
          {
            src: "assets/bd-plumes.jpg",
            alt: ""
          },
        ],
        "Carolina Crown": [
          {
            src: "assets/cc-battery.jpg",
            alt: ""
          },
          {
            src: "assets/cc-colorguard.jpg",
            alt: ""
          },
          {
            src: "assets/cc-hornline.jpg",
            alt: ""
          },
        ],
      }
    }
  },

  getInitialState() {
    return {
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

  thumbnailClickHandler(e){
    var clickedImageEl = e.target;
    this.setState({
      modalOpenClass: "modal--display",
      modalImageSource: clickedImageEl.src,
      modalImageAlt: clickedImageEl.alt
    })
  },

  render() {

    return (
      <section className="tumbnails__container">
        <img className="thumbnail"
             src="assets/pr-trumpets.jpg"
             alt="Phantom Regiment trumpets"
             onClick={this.thumbnailClickHandler}/>
        <Modal modalOpenClass={this.state.modalOpenClass}
               modalImageSource={this.state.modalImageSource}
               modalImageAlt={this.state.modalImageAlt}
               closeModalCallback={this.closeModal}/>
      </section>
    )
  }
})
