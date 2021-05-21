import React, {useState} from 'react';
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import TodoInsert from './todoInsert';
import TodoListItem from './todoItem'
const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = text => {
        setTodos([
        ...todos,
        {id: Date.now().valueOf(),textValue: text},
        ]);
    };
    const onRemove = id => e => {
        console.log("hi")
        setTodos(todos.filter(todo => todo.id != id));
      };
    return (
      <View style={styles.container}>
        <Text style={styles.appTitle}>Hello Todolist</Text>
        <View style={styles.card}>
          <TodoInsert onAddTodo={addTodo}/>
          <ScrollView>
            <View>
              <Text>TodoList</Text>
              {todos.map(todo => (
                <TodoListItem {...todo} key={todo.id} onRemove={onRemove}/>
                ))}
            </View>
          </ScrollView>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    marginRight: 10,
  },
  
});

export default TodoList;