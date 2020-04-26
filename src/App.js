import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Artist from './Artist';
import Tracks from './Tracks';
//import Search from './Search';
const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com';

class App extends Component {
  state={ 
    atristQuery:'Marshmello', 
    artist:null,
    tracks :[]
  };
 componentDidMount(){
   this.searchArtist()
 }
searchArtist =()=>{
    const query = this.state.atristQuery
   //console.log(atristQuery)
  fetch(`${API_ADDRESS}/artist/${query}`)
  .then(response => response.json())
  .then(json =>{
     console.log(json);
     if(json.artists.total>0){
       const artist = json.artists.items[0];
       console.log('artist', artist)
       this.setState({artist});       
      fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
      .then(resp => resp.json())
      .then(json => this.setState({tracks:json.tracks}))
      .catch(error => alert(error.message));
     }    
    })
    .catch(error=> alert(error.message));
  
}
 updateArtistQuery =(event)=>{
    console.log('event.target.value',event.target.value);
    this.setState({atristQuery :event.target.value});
  }
  handleKeyPress=(event)=>{
 if(event.key === 'Enter'){
   console.log(this.state)
   this.searchArtist()
 }
}
  render(){
  return (
    <Container>
      <Row className="justify-content-center">
          <Col>
            <h2 className='text-center'> Music master</h2>          
           {/*<Search searchArtist = {this.searchArtist}/>*/}
              <Row className="justify-content-center py-5 mt-2">
            <div className='d-flex col-4 0ffset-4'>            
              <input className='form-control mr-sm-2' placeholder='Search an Artist'
               onChange={this.updateArtistQuery}
               onKeyPress={this.handleKeyPress}/>            
            <button className='btn btn-outline-success my-2 my-sm-0' onClick={this.searchArtist}>Search</button>
           
            </div>  
        </Row>
          </Col>
           </Row>
      <Row>
          <Col>
             <Artist artist={this.state.artist}/>      
             <Tracks tracks={this.state.tracks} />
          </Col>
      </Row>
    </Container>
  )
}
}

export default App;
