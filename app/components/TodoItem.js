import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const TodoItem = ({
  item,
  removeItem
}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.text}>{item.text}</Text>
        <TouchableOpacity
        onPress={()=>{removeItem(item.id)}}
        style={styles.removeButton}
      >
          <Text style={styles.closeText}>X</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

  itemContainer: {
    paddingLeft:30,
    height:50,
    paddingTop:10,
    // backgroundColor:'red',
    marginBottom:10,
    borderBottomWidth:0.5,
    borderBottomColor:'rgba(33,33,33,0.1)',
    flexDirection: 'row'
  },
  text: {
    fontWeight:'300'
  },
  removeButton: {
    position:'absolute',
    right:30,
    paddingTop:5
  },
  closeText: {
    color:"red",
    fontSize:20
  }
});
export default TodoItem;
