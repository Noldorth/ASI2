import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Visual extends Component {
  
   
    render() {
         
           if(this.props.type === 'img') {
                return (
                    <img style={{width: '100%'}} src={this.props.src}/>  
                )
           } else if (this.props.type === 'video') {
            return (
                <iframe class="embed-responsive-item" src={this.props.src} allowfullscreen></iframe>
            )
           }
           return (
               JSON.stringify(this.props)
           )
        
    }
  }
  export default Visual