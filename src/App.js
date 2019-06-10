import React from 'react';
import Search from './components/components/Search/Search';

class App extends React.Component {
  state={
    term: ""
  }

  askApi=()=>{
    const url = `https://pixabay.com/api/?key=12729852-59eef194e2bcf04b886ad0945&q=${this.state.term}`
  }

  dataSearch= term =>{
    this.setState({
      term
    },()=>{
      this.askApi();
    })
  }

 render() {
  return (
    <>
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Images Hounter</p>
        <Search dataSearch={this.dataSearch}/>
      </div>
    </div>
    {this.state.term}
    </>
  );
 }
  
}

export default App;
