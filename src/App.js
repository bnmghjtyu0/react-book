import axios from 'axios'
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TableComponent from './component/table'
import Aux from './utils/Aux'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      times: {},
      results:[],
      columns: [
        {
          label: "時間",
          prop: "release_date"
        },
        {
          label: "標題二",
          prop: "title"
        },
        {
          label: "adult",
          prop: "",
          render: function(data) {
            return data.adult === false ? (
              <span>普遍級</span>
            ) : (
              <span class="text-red">限制級</span>
            );
          }
        }
      ]
    }
  }
  componentDidMount() {
    axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=23785b1559bb39249c40d56934f80e6c&language=zh-TW&page=1"
      ).then(res => {
        console.log(res);
        this.setState({
          results: res.data.results
        });
      });
  }
  render() {
      const { columns, results, times } = this.state;
    if (results === undefined) return false;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
         <div class="container">
         <h2>Table 組件</h2>
         <TableComponent columns={columns} datas={results} />
         </div>
      </div>
    );
  }
}

export default App;
