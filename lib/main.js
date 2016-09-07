import React from 'react'
import Modal from './Modal'

export default React.createClass({

  getInitialState(){
    return {
      modalOpenClass: "modal--hidden",
      modalImageSource: "",
      modalImageAlt: ""
    }
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
                modalImageAlt={this.state.modalImageAlt}/>
      </section>
    )
  }
})
