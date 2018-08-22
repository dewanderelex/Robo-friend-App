import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './Assets/css/App.css';
import Scroll from './Scroll';

class App extends Component {

    constructor(props){
        super();
        this.state = {
            robots : [],
            searchfield : '',
        };
    }


    

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        }).then(users => {
            this.setState({robots: users});
        })
    }

    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value});

    }

    render() {

        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });

        return (
            <div className = 'tc'>
                <h1 className = "pa4" id = "title">This is some robots of Alex and {this.props.abc}</h1>
                <SearchBox searchChange = {this.onSearchChange} searchfield = {this.state.searchfield}/>
                <Scroll>
                    <CardList robots = {filteredRobots}/>
                </Scroll>
                
            </div>
        );
    }
}

export default App;