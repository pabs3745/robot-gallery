import React from "react";
import CardList from "./CardList";
import {robots} from './robots';
import SearchBox from "./SearchBox";
import './App.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
        // console.log(event.target.value)
        
        
        // console.log(filterRobot)
    }

    render() {
        const filterRobot = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className="tc">
                <h1 className="f1">Robot Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filterRobot}/>
            </div>
            
        )
    }
    
}

export default App;