import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import './App.css';
import Scroll from "./Scroll";

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }))
        
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
                <Scroll>
                    <CardList robots={filterRobot}/>
                </Scroll>
                
            </div>
            
        )
    }
    
}

export default App;