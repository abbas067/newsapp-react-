import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
  constructor(){
    super();
    this.state={
   articles:[]
    }
  }
  async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=84088d1eb9ee441c93fe3e104acf98ac";
    let data=await fetch(url);
    let parsedData=await data.json();
    this.setState({articles:parsedData.articles});
  } 
  render() {
    return (
      <>
      <div className="container my-3">
      <h2>Newsmonkey-Top headlines</h2>
      <div className="row my-3">
      {this.state.articles.map(element=>{
     return <div className="col-md-4" key={element.url}>
      <NewsItems title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url}/>
      </div>
      })}
      </div>
      </div>
     
      </>
    )
  }
}

export default News