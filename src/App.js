import React from 'react';
import Search from './components/components/Search/Search';
import Result from './components/components/Result/Result';
import "./bootstrap.min.css"

class App extends React.Component {
  state={
    term: "",
    images:[],
    page: ''
  }

  scroll= () =>{
    const element = document.querySelector(".jumbotron");
    element.scrollIntoView('smooth', 'start')
  }

  backPage= ()=>{
    //leer estado actual
    let page = this.state.page
    //restar pagina
    if(page===1){return null}
      page -= 1
    // cambio al estado
      this.setState({
        page
      },()=>{
        this.askApi()
        this.scroll()
      })
  }

  nextPage= ()=>{
    //leer estado actual
      let page = this.state.page
    //sumar pagina
      page += 1
    // cambio al estado
      this.setState({
        page
      },()=>{
        this.askApi()
        this.scroll()
      })
  }

  
  askApi=()=>{
    const term = this.state.term
    const page= this.state.page
    const url = `https://pixabay.com/api/?key=12729852-59eef194e2bcf04b886ad0945&q=${term}&page=${page}`
    
    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => this.setState({images: resultado.hits}))
  }

  dataSearch= term =>{
    this.setState({
      term,
      page: 1
    },()=>{
      this.askApi();
    })
  }

 render() {
  return (
    <>
    <div className="container">
      <div className="jumbotron">
        <h1 className=" text-center mb-5">Images Hounter</h1>
        <Search dataSearch={this.dataSearch}/>
      </div>
        <Result 
          images={this.state.images}
          backPage = {this.backPage}
          nextPage = {this.nextPage}
          />
          
    </div>
    </>
  );
 }
  
}

export default App;
