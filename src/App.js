import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";

class NameForm extends React.Component {
  constructor(props) {
  super(props);
  state = {
    this.state = {super_hero: 'SuperMan'};
    this.state ={super_hero:'SpiderMan'};
    this.state = {super_hero: 'BatMan'};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  

  saveInput = (e) => {
    this.setState({ input: e.target.value });
  };

  addNewSuperHero = () => {
    let {input } = this.state;
    super_hero.push(input);
     
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} /></label>
        <input type="submit" value="Submit" />
      </form>
    );


  const gitHubUrl = "https://github.com/15Dkatz/official_joke_api.git";

function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);

  const getGitHubUserWithFetch = async () => {};

  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub User Data</h1>
      </header>
      <div className="user-container">
        <h5 className="info-item">{userData.name}</h5>
        <h5 className="info-item">{userData.location}</h5>
        <h5 className="info-item">{userData.blog}</h5>
        <h5 className="info-item">{userData.company}</h5>
      </div>
    </div>
  );
}

export default App;



    
 

  