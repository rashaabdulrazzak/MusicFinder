import React, { Component } from 'react'
import {Row ,form } from 'react-bootstrap';
class Search extends Component{
    state = {
        atristQuery:''
    };
   updateArtistQuery =(event)=>{
    console.log('event.target.value',event.target.value);
    this.setState({atristQuery :event.target.value});
  }
  handleKeyPress=(event)=>{
 if(event.key === 'Enter'){
   this.searchArtist(this.state.atristQuery)
 }
}
searchArtist=()=>{
  this.props.searchArtist(this.state.atristQuery)
}
render(){
    return(
        <Row className="justify-content-center py-5 mt-2">
            <div className='col-4 0ffset-4'>
            <form className="form-inline">
              <input className='form-control mr-sm-2' placeholder='Search an Artist'
               onChange={this.updateArtistQuery}
               onKeyPress={this.handleKeyPress}/>            
            <button className='btn btn-outline-success my-2 my-sm-0' onClick={this.searchArtist}>Search</button>
            </form> 
            </div>  
        </Row>
    )
}
}
export default Search