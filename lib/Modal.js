import React from 'react'

export default React.createClass({

  render() {
    return (
      <section className="modal--hidden">
        <img className="modal__fullImage"
             src="assets/pr-trumpets.jpg"
             alt="Phantom Regiment trumpets"
             onClick={this.tumbnailClickHandler}/>
      </section>
    )
  }
})
