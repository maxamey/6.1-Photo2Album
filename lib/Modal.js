import React from 'react'

export default React.createClass({



  render() {
    console.log(this.props);
    return (
      <section className={this.props.modalOpenClass}>
        <img className="modal__fullImage"
             src={this.props.modalImageSource}
             alt={this.props.modalImageAlt}/>
      </section>
    )
  }
})
