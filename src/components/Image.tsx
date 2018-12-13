import * as React from 'react';
import axios from 'axios';

interface ImageRequest {
  ctype: string;
  token: string;
}

interface State {
  url: string;
  status_code: number;
}

class ImageComponent extends React.Component<ImageRequest, State> {
  constructor(props: ImageRequest) {
    super(props);
    this.state = {
      url: "",
      status_code: 0
    }
  };

  componentDidMount() {
    axios.get('http://0.0.0.0:8000/')
      .then( (res) => {
        console.log(res)
        this.setState({
          url: JSON.stringify(res.data),
          status_code: res.status
        });
      })
  }

  render() {
    if (this.state.status_code !== 200 ) {
      return <div>Error!</div>;
    } else {
      return <p>{this.state.url}</p>//<img src="{this.state.url}">{this.state.url}</img>;
    }
  }
}

export default ImageComponent;


//
// interface Image {
//   error: string;
//   url: string;
//   contentType: string;
//   size: number;
// }
//
// class ImageComponent extends React.Component{ //}<Image, any> {
//   public state: any;
//   public props: Image;
//   constructor(image: Image){
//     super(image);
//     this.image = image;
//     this.state = {
//       url: null,
//       contentType: null,
//       size: null
//     };
//   }
//   // super(image);
//   // this.state = {
//   //   url: null,
//   //   contentType: null,
//   //   size: null
//   // };
//
//   imageDidLoad() => {
//     fetch("http://0.0.0.0:8000/vokalvippy/b7418d7b360ff57fa4c9191044d404a2")
//       .then(res => res.json())
//       .then( (result) => {
//         console.log(result);
//         this.setState({
//           url: "http://0.0.0.0:8000/vokalvippy/b7418d7b360ff57fa4c9191044d404a2",
//           contentType: "image/jpeg"
//         });
//         alert("Success");
//       },
//       (error) => {
//         console.log(error);
//         this.setState({
//           error: error.message
//         });
//         alert("Error");
//       }
//     );
//   }
//
//   render() {
//     if (this.state.error) {
//       return <div>Error: {this.state.error.message}</div>;
//     } else {
//       return <img src={this.state.url}></img>;
//     }
//   }
// }
//
// export default ImageComponent;
