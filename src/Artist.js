import React from 'react';
import { Row,Col } from 'react-bootstrap';

const Artist =({artist})=>{
    if(!artist) return null
    const {images,name,followers,genres} = artist;
    return <Row >
             <Col className='text-center mb-2'>
                <h3> {name}</h3>
                <p>{followers.total} followers</p>
                <p>{genres.join(',')}</p>
                <img src={ images[0] && images[0].url} 
                alt='artist-profile'
                style={{
                    width:200,
                    height:200,
                    borderRadius :100,
                    objectFit:'cover'
                }}
                />
            </Col>
    </Row>
    }
export default Artist;