import React from 'react'
import {
    Container, Row, Col, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

function Details(props) {
    console.log(props)
    return (
        <Container style={{padding: "10px"}}>
            <Row>
                <Col sm={{ size:  4 }}>
                    <img width="100%" src={ props.location.searchDetail.Poster} alt="Poster" />
                </Col>
                <Col sm={{ size:  8 }}>
                    <CardBody>
                        <CardTitle tag="h5">Title:  { props.location.searchDetail.Title}</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Type:  { props.location.searchDetail.Type}</CardSubtitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">Release Date:  { props.location.searchDetail.Year}</CardSubtitle>
                        <CardText>Actors:  { props.location.searchDetail.Actors}</CardText>
                        <CardText>Awards:  { props.location.searchDetail.Awards}</CardText>
                        <CardText>BoxOffice: { props.location.searchDetail.BoxOffice}</CardText>
                        <CardText>Country: { props.location.searchDetail.Country}</CardText>
                        <CardText>DVD: { props.location.searchDetail.DVD}</CardText>
                        <CardText>Director: { props.location.searchDetail.Director}</CardText>
                        <CardText>Genre: { props.location.searchDetail.Genre}</CardText>
                        <CardText>Language: { props.location.searchDetail.Language}</CardText>
                        <CardText>Metascore: { props.location.searchDetail.Metascore}</CardText>
                        <CardText>Production: { props.location.searchDetail.Production}</CardText>
                        <CardText>Plot: { props.location.searchDetail.Plot}</CardText>
                        <CardText>Rated: { props.location.searchDetail.Rated}</CardText>
                        <CardText>Runtime: { props.location.searchDetail.Runtime}</CardText>
                        <CardText>Released: { props.location.searchDetail.Released}</CardText>
                        <CardText>ImdbID: { props.location.searchDetail.imdbID}</CardText>
                        <CardText>ImdbRating: { props.location.searchDetail.imdbRating}</CardText>
                        <CardText>ImdbVotes: { props.location.searchDetail.imdbVotes}</CardText>
                    </CardBody>
                </Col>
            </Row>
        </Container>
    )
}

export default Details