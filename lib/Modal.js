import React from 'react'

export default React.createClass({
  render() {
    return (
      <section className={this.props.modalOpenClass}>
        <h2 className="modal_exit"
            onClick={this.props.closeModalCallback}>
          X
        </h2>
        <img className="modal__fullImage"
             src={this.props.modalImageSource}
             alt={this.props.modalImageAlt}/>
      </section>
    )
  }
})
