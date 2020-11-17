import React from 'react'
import {
    Container, Row, Col, Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { Link } from 'react-router-dom'
import Data from './data.json'

const removeFromFav = (title) =>{
    let old = Data.favourite
    while ( old.findIndex(e => e.Title === title ) >= 0 )
    old.splice( old.findIndex(f => f.Title === title),1);
    Data.favourite = old
    localStorage.setItem('Favourite',JSON.stringify(Data.favourite))
    window.location.reload(false);
}

export default function Favourite() {
    if(Data.favourite.length===0){
        let data = localStorage.getItem('Favourite')
        let extractedData = JSON.parse(data)
        if(extractedData!=="" && extractedData!==undefined && extractedData!==null){
            extractedData.forEach(item => {
                            Data.favourite.push(item)
            })
        }
    }
    return (
        <Container>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}><h1>My Favourites</h1></Col>
            </Row>
    
        <Container style={{padding:"10px"}} >
            {Data.favourite!==null || Data.favourite!==undefined  || Data.favourite!==''
            ?
            <Row>
            {Data.favourite.map(item=> {
                return (

                item.Title===""? "" :
                <Col sm="4" md="3" key={item.Title}>
                    <Card key={item.Title}>
                        <CardBody>
                            <img width="100%" src={item.Poster} style={{height:"200px"}} alt="Poster" />
                            <CardTitle tag="h5">Title: {item.Title}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Release Date:{item.Year}</CardSubtitle>
                        </CardBody>
                        <CardBody style={{display:"flex", justifyContent:"space-around"}}>
                            <button  className="btn btn-primary" onClick = {()=>removeFromFav(item.Title)}>Unfavourite</button>
                            <Link to={{
                                        pathname: "/details",
                                        searchDetail: item
                                    }}><button className="btn btn-primary">Details</button></Link>
                        </CardBody>
                    </Card>
                </Col>
                )
            })}
            </Row>
            
            : 
            <Row>
                <Col>
                    <h3>No Favourites</h3>
                </Col>
            </Row>}
        </Container>
    </Container>
    )
}

const Styles = {
    boxSize: {
        height: "40px"
    }
}