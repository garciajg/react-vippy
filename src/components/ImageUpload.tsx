import * as React from 'react';
import axios from 'axios';

class UploadImage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      image: null
    };
    this.onUpload = this.onUpload.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onUpload(e: any) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('myImage', this.state.image);
    const config = {
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Methods': 'POST, OPTIONS, GET',
        'Access-Control-Allow-Credentials':'true',
        'Content-Type':'image/jpeg',
        'X-Vip-Token':'legittoken',
        'Cache-Control':'None'
      }
    }
    axios.post("http://0.0.0.0:8000/upload/vokalvippy", formData, config)
      .then( (res) => {
        alert(res.status);
      }).catch((error) => {
        alert("error");
      });
  }

  onChange(e: any) {
    if (e.target.files !== null){
      this.setState({
        image: URL.createObjectURL(e.target.files[0])
      });
    } else {
      console.log("No Image")
    }
  }

  render() {
    return (
      <div>
        <h4>Image Upload</h4>
        <input type="file" accept="image/jpeg,image/gif" id="imageUpload" onChange={this.onChange} /><br/>
        <img src={this.state.image}/>
        <button onClick={this.onUpload}>Upload Image</button>
      </div>
    )
  }
}

export default UploadImage;
