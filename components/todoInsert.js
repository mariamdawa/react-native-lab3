import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';


const TodoInsert = ({onAddTodo}) => {
    const [newTodoItem, setNewTodoItem] = useState('');

    const todoInputHandler = newTodo => {
        setNewTodoItem(newTodo);
    };
    const addTodoHandler = () => {
        onAddTodo(newTodoItem);
        setNewTodoItem('');
    };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Add an item!"
        placeholderTextColor={'gray'}
        autoCorrect={false}
        onChangeText={todoInputHandler}
        value={newTodoItem}
      />
      <View style={styles.button}>
        <Button title={'ADD'} onPress={addTodoHandler} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    listContainer: {
      alignItems: 'center',
    },
    input:{
        height:60,
        color:"white"
    }
  });
export default TodoInsert;
