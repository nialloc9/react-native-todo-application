import React, { Component } from 'react';
import {
    View,
    FlatList,
    TextInput
} from 'react-native';
import Todo from './components/Todo'
import appStyles from './styles/app';

class TodoList extends Component {
    state = {
        newTodo: "",
        todos: [
            {
                id: 1,
                name: "Wash dishes",
                isComplete: false
            },
            {
                id: 2,
                name: "Pick up apples",
                isComplete: false
            }
        ]
    };

    /**
     * a new item can be added to the array of todos
     * @private
     */
    _handleCreateTodo = () => {

        const { newTodo, todos } = this.state;

        const id = todos[todos.length - 1].id + 1;

        this.setState({
            todos: [
                ...todos,
                {
                    id,
                    name: newTodo,
                    isComplete: false
                }
            ]
        })
    };

    /**
     * a new todo can be saved in state
     * @param newTodo
     * @private
     */
    _onChangeNewTodoText = newTodo => this.setState(state => ({ newTodo }));

    /**
     * a key can be created from item array
     * @param item
     * @param index
     * @private
     */
    _keyExtractor = (item, index) => item.id;

    /**
     * an item can be marked as completed
     * @param id
     */
    handleCompleteClick = id => this.setState(({ todos }) => ({
        todos: todos.map(o => o.id === id ? { ...o, isComplete: !o.isComplete } : o )
    }));

    /**
     * an item can be updated
     * @param id
     * @param name
     */
    handleUpdateTodo = ({ id, name }) => this.setState(({ todos }) => ({
        todos: todos.map(o => o.id === id ? { ...o, name } : o )
    }));

    /**
     * an item can be removed
     * @param id
     */
    handleRemoveTodo = id => this.setState(({ todos }) => ({
        todos: todos.filter(o => o.id !== id )
    }));

    render() {

        const { todos } = this.state;

        return (
            <View style={appStyles.container}>
                <View style={appStyles.inputWrapper}>
                    <TextInput
                        style={appStyles.input}
                        placeholder="Create Todo"
                        onEndEditing={this._handleCreateTodo}
                        onChangeText={this._onChangeNewTodoText}
                    />
                </View>
                <View>
                    <FlatList
                        data={todos}
                        keyExtractor={this._keyExtractor}
                        renderItem={({item: { id, name, isComplete }}) =>
                            <Todo
                                id={id}
                                name={name}
                                isComplete={isComplete}
                                onUpdateTodo={this.handleUpdateTodo}
                                onCompleteClick={this.handleCompleteClick}
                                onRemoveTodo={this.handleRemoveTodo}
                            />
                        }
                    />
                </View>
            </View>
        );
    }
}


export default TodoList;