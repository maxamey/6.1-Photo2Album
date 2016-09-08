import React from 'react'

export default React.createClass({
  render() {
    return (
      <section className={this.props.modalOpenClass}>
        <h2 className="modal__exit"
            onClick={this.props.closeModalCallback}>
          X
        </h2>
        <div className="previousImage">
          { //<img src="assets/previous.png"
               //className="changeImage"/>
           }
        </div>
        <div className="nextImage">
          {//<img src="assets/next.png"
            //   className="changeImage"/>
          }
        </div>
        <img className="modal__fullImage"
             src={this.props.modalImageSource}
             alt={this.props.modalImageAlt}/>
      </section>
    )
  }
})
