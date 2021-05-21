
import React from 'react';
import { StyleSheet, View,TextInput } from 'react-native';
import TodoList from './components/todo';
import Login from './components/login'
import Routes from './components/Routes.js'
export default function App() {
  return (
    <View style={styles.container}>
      {/* <TodoList /> */}
      {/* <Login /> */}
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
    
  },
  text:{
    color:"white",
    fontSize:40,
    textAlign:'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingLeft:3
  },
});
