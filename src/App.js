import React from 'react';
import TodoItem from './components/TodoItem';
import todosData from "./todosData";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: todosData
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.data.map(item => {
                if (id === item.id) {
                    return {
                        ...item,
                        completed: !item.completed
                    }
                }
                return item;
            })
            return {
                data: updatedTodos
            }
        })
    }
    
    render() {
        const todosArray = this.state.data.map(item => {
            return <TodoItem key={item.id} todo={item} handleChange={this.handleChange}/>
        })
    
        return (
            <div className="list">
                {todosArray}
            </div>
        )
    }
}

export default App;