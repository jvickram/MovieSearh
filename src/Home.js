import React, { Component } from 'react'
import {
    Container, Row, Col, Card, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { Link } from 'react-router-dom'
import Data from './data.json'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favourite: [],
            searchText: '',
            selectedItem: '',
            markedFavourite: false,
            response: '',
        }
        this.onChange = this.onChange.bind(this);
        this.fetchResult = this.fetchResult.bind(this)
        this.addToFav = this.addToFav.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    addToFav(){
        let newFav = this.state.response
        Data.favourite.push(newFav)
        localStorage.setItem('Favourite',JSON.stringify(Data.favourite))
        this.setState({markedFavourite:true})
    }

    fetchResult() {
        // http://www.omdbapi.com/?type=movie&t=smallville&apikey=d58686a0
        const { selectedItem, searchText } = this.state
        fetch("https://www.omdbapi.com/?type=" + selectedItem + "&t=" + searchText + "&apikey=d58686a0")
            .then(res => res.json())
            .then(response => this.setState({response:response}))
    }

    componentDidMount(){
        let data = localStorage.getItem('Favourite') || []
        if (data.length>0){
            var extractedData = JSON.parse(data)
        }
        console.log('extractedData',extractedData)
        Data.favourite = extractedData!==undefined?extractedData: []
    }

    render() {
        return (
            <Container style={{padding:"10px"}}>
                <Row style={{ textAlign: 'center' }}>
                    <Col sm={{ size: 12 }}>
                        <input type="text" style={{width:"40%", verticalAlign:'middle', height:"40px"} }
                            name="searchText"
                            placeholder="Type movie, series, episodes here"
                            value={this.state.searchText}
                            onChange={(e) => this.onChange(e)}
                        />
                        <select style={Styles.boxSize}
                            className="btn btn-primary"
                            name="selectedItem"
                            value={this.state.selectedItem}
                            onChange={(e) => this.onChange(e)}
                        >
                            <option value="dropdown">Dropdown</option>
                            <option value='movie'>Movies</option>
                            <option value='series'>Series</option>
                            <option value='episode'>Episode</option>
                        </select>
                        <button style={{height:"40px", marginLeft:"10px"}}
                            className="btn btn-primary"
                            type="submit"
                            onClick={this.fetchResult}
                            disabled={(this.state.selectedItem==="dropdown" && this.state.selectedItem==="") || this.state.searchText===""}
                        >Search</button>
                    </Col>
                </Row>
                <hr />
                <Row style={{display: this.state.response!==undefined && this.state.response!== ''? 'block':'none', margin:"10px"}}>
                    {this.state.response.Response==="False"
                    ?<Col>
                        <Card>
                            <CardBody>
                                <CardTitle tag="h5">{this.state.response.Error}</CardTitle>
                            </CardBody>
                        </Card>
                    </Col>
                    :<Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Card>
                            <CardBody>
                                <img width="100%" src={this.state.response.Poster} alt="Poster" height="200px"/>
                                <CardTitle tag="h5">Title: {this.state.response.Title}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Release Date:{this.state.response.Year}</CardSubtitle>
                            </CardBody>
                            <CardBody style={{ display: "flex", justifyContent: "space-between"}}>
                                {!this.state.markedFavourite?<button  className="btn btn-primary"
                                    onClick={this.addToFav}
                                >Add to favourite</button>:''}
                                <Link to={{
                                    pathname: "/details",
                                    searchDetail: this.state.response
                                }}><button className="btn btn-primary">Details</button></Link>
                            </CardBody>
                        </Card>
                    </Col>
                    }
                </Row>
            </Container>
        )
    }
}

const Styles = {
    boxSize: {
        height: "40px"
    }
}

export default Home