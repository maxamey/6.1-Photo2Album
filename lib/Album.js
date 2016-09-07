import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getDefaultProps(){
    return {
      albums: {
        "album1": {
          title: "album1",
          imageSrc1: "http://also.kottke.org/misc/images/birds-with-arms-04.jpg",
          imageSrc2: "#",
          imageSrc3: "#",
          imageSrc4: "#",
          imageSrc5: "#",
          imageSrc6: "#",
        },
        "album2": {
          title: "album2",
          imageSrc1: "#",
          imageSrc2: "#",
          imageSrc3: "#",
          imageSrc4: "#",
          imageSrc5: "#",
          imageSrc6: "#",
        },
        "album3": {
          title: "album3",
          imageSrc1: "#",
          imageSrc2: "#",
          imageSrc3: "#",
          imageSrc4: "#",
          imageSrc5: "#",
          imageSrc6: "#",
        },
        "album4": {
          title: "album4",
          imageSrc1: "#",
          imageSrc2: "#",
          imageSrc3: "#",
          imageSrc4: "#",
          imageSrc5: "#",
          imageSrc6: "#",
        },
        "album5": {
          title: "album5",
          imageSrc1: "#",
          imageSrc2: "#",
          imageSrc3: "#",
          imageSrc4: "#",
          imageSrc5: "#",
          imageSrc6: "#",
        },
        "album6": {
          title: "album6",
          imageSrc1: "#",
          imageSrc2: "#",
          imageSrc3: "#",
          imageSrc4: "#",
          imageSrc5: "#",
          imageSrc6: "#",
        },

      }
    }
  },
  render(){
    let currentAlbumObject = this.props.albums[this.props.params.title];
    return(
      <h2>WAHHH</h2>
    )
  }
})
