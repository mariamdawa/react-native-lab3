import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React , {useState} from 'react';


const TodoListItem = ({id,textValue, onRemove}) => {

  return (
    <View >
      <TouchableOpacity onPress={onRemove(id)} style={styles.container} >
        <View style={styles.circle} />
        <Text style={styles.text}  >{textValue}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width:500
  },
  text: {
    flex: 5,
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 20,
    width: 100,
    color:"white"
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 15,
    borderColor: 'blue',
    borderWidth: 1,
    marginRight: 10,
    marginLeft: 10,
  },
});

export default TodoListItem;