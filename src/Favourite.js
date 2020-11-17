import React from 'react'
import {
    Container, Row, Col, Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
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
            <Col sm="12" md={{ size: 6, offset: 3 }}><h1>My Favourites</h1></Col>
        
        {Data.favourite!==null || Data.favourite!==undefined  || Data.favourite!==''?
         Data.favourite.map(item=> {
             return (

        <Container style={{padding:"10px"}} key={item.Title}>
        <Row>
            {item.Title===""? "" :
             <Col sm="12" md={{ size: 8, offset: 1 }}>
                <Card key={item.Title}>
                    <CardBody>
                        <img width="100%" src={item.Poster} alt="Poster" />
                        <CardTitle tag="h5">Title: {item.Title}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Release Date:{item.Year}</CardSubtitle>
                    </CardBody>
                    <CardBody>
                        <button  className="btn btn-primary" onClick = {()=>removeFromFav(item.Title)}>Remove favourite</button>
                    </CardBody>
                </Card>
            </Col>
            }
        </Row>
    </Container>
         )
        })
       
    : <Container>
        <Row>
            <Col>
                <h3>No Favourites</h3>
            </Col>
        </Row>
    </Container>}
    </Container>
    )
}

const Styles = {
    boxSize: {
        height: "40px"
    }
}