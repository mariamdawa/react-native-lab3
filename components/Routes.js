import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import Login from './login'
import TodoList from './todo';
import Profile from './profile';
import { NativeRouter, Route, Link } from "react-router-native";


const Routes = () => (
  <NativeRouter>
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link to="/login" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Login</Text>
        </Link>
        <Link
          to="/todo"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text>Todo</Text>
        </Link>
        <Link
          to="/profile"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text>Profile</Text>
        </Link>
      </View>

      <Route exact path="/login" component={Login} />
      <Route exact path="/todo" component={TodoList} />
      <Route path="/profile" component={Profile} />
    </View>
  </NativeRouter>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
    top:10
  },
  header: {
    fontSize: 20,
    color:'white'
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    width:500
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor:'white',
    color:'black'
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

export default Routes;