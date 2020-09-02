import React from 'react';
import TodoItem from './components/TodoItem';
import todosData from "./todosData";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: todosData,
        }
    }
    
    render() {
        const todosArray = this.state.data.map(item => {
            return <TodoItem key={item.id} todo={item}/>
        })
    
        return (
            <div className="list">
                {todosArray}
            </div>
        )
    }
}

export default App;