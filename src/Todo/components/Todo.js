import React, { Component } from 'react';
import {
    Text,
    View,
    TextInput
} from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/todos';

class Todo extends Component {

    static propTypes = {
        /** can be complete */
        isComplete: PropTypes.bool.isRequired,

        /** must have an id */
        id: PropTypes.number.isRequired,

        /** must have a namee */
        name: PropTypes.string.isRequired,

        /** can be updated */
        onUpdateTodo: PropTypes.func.isRequired,

        /** can be completed or uncompleted */
        onCompleteClick: PropTypes.func.isRequired,
    };

    state = {
        open: false
    };

    /**
     * an item can be completed
     * @private
     */
    _handleCompleteClick = () => {
        const { id, onCompleteClick } = this.props;

        onCompleteClick(id);
    };

    /**
     * an items text can be changed
     * @param name
     * @private
     */
    _handleUpdateTodo = name => {
        const { id, onUpdateTodo } = this.props;

        onUpdateTodo({ id, name });
    };

    /**
     * an item can be removed
     * @private
     */
    _handleRemoveClick = () => {
        const { id, onRemoveTodo } = this.props;
        onRemoveTodo(id);
    };

    /**
     * sets the open state to true or false
     * @private
     */
    _onClick = () => this.setState(({ open }) => ({ open: !open }));

    render(){
        const { id, name, isComplete } = this.props;

        const { open } = this.state;

        return open ?
            <TextInput
                style={styles.todo}
                editable
                maxLength={40}
                defaultValue={name}
                onChangeText={this._handleUpdateTodo}
                onEndEditing={this._onClick}
            />
            :
            <View>
                <Text
                    style={styles.todo}
                    onPress={this._onClick}
                >
                    #{id} Name: {name}
                </Text>
                <View style={styles.actions}>
                    <Text
                        style={isComplete ? styles.isUncomplete : styles.isComplete}
                        onPress={this._handleCompleteClick}
                    >
                        {isComplete ? "Complete" : "Uncomplete"}
                    </Text>
                    <Text
                        style={styles.remove}
                        onPress={this._handleRemoveClick}
                    >
                        Remove
                    </Text>
                </View>
            </View>;
    }
}

export default Todo;