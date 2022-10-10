import React, { useState } from "react";
import {View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, Image} from 'react-native';
import TodoItem from "../components/TodoItem";
import uuid from 'react-native-uuid';

const HomeScreen = () => {

  const [items, setItems] =useState([
    {id:uuid.v4(), text:'Buy milk'},
    {id:uuid.v4(), text:'Buy bread'},
    {id:uuid.v4(), text:'Finish Homework'},
    {id:uuid.v4(), text:'Iron clothes'},
    {id:uuid.v4(), text:'Workout once per week'},
    // {id:1, text:'Buy milk'},
    // {id:2, text:'Buy bread'},
    // {id:3, text:'Finish Homework'},
    // {id:4, text:'Iron clothes'},
    // {id:5, text:'Workout once per week'},
  ]);

  const [enteredText, setEnteredText] = useState("");

  const removeItem = (id) => {
    setItems(oldItems => {
      return oldItems.filter(item =>  item.id != id);
    })
  }

  const addItem = (text) => {
    setItems(oldItems => {
      return [{ id: uuid.v4(),text}, ...oldItems]
    })
  }

  return (
    <View style={styles.parentContainer}>
      <View style={styles.header}>
      <Image style={styles.image} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-UMA7UwvVFmMIE7fMY2_Z3sep5UBMpmnroQ&usqp=CAU'}}></Image>
        <Text  style={styles.headerText}>Todo Items</Text>
      </View>
      <View style={styles.bodyContainer}>
        <FlatList
          data={items}
          renderItem={({item}) => <TodoItem item={item} removeItem={removeItem} />}
        />
      </View>
      <View style={styles.footerContainer}>
        <TextInput
          value={enteredText}
          placeholder={"Add Item"}
          style={styles.textInput}
          onChangeText={(text)=>setEnteredText(text)}
        />
        <TouchableOpacity
        onPress={()=>{addItem(enteredText)}}
        style={styles.addButton}>
          <Text style={styles.addButtonText}>Add Item</Text>
        </TouchableOpacity>
      </View>
    </View>
    // <View>
    //   <Text style={styles.text}>Hello World!</Text>
    // </View>
  )
}

const styles = StyleSheet.create({

  image: {
    width:60,
    height:60,
    borderRadius:30
  },
  parentContainer: {
    // color: 'red'
    flex:1,
    flexDirection:'column'
  },
  header: {
    // backgroundColor:'red',
    width:'100%',
    height:'13%',
    paddingLeft:30,
    flexDirection:'row',
    marginTop:'20%'
    // paddingBottom:20
  },
  headerText: {
    // color: 'white',
    fontWeight:'600',
    fontSize:30,
    paddingLeft:15,
    paddingTop:10
    // marginTop:'15%'
  },
  bodyContainer: {
    // backgroundColor:'blue',
    paddingTop:0,
    width:'100%',
    height:'60%',
  },
  footerContainer: {
    // backgroundColor:'green',
    paddingLeft:33,
    width:'100%',
    height:'50%'
  },
  textInput: {
    borderColor:'rgba(255,0,0,0.2)',
    borderWidth:1,
    padding:15,
    width:'90%',
    marginBottom:10
  },
  addButton: {
    backgroundColor:'orange',
    paddding:50,
    width:'90%',
    alignItems:'center'
  },
  addButtonText: {
    color:'white',
    fontWeight:'600'
  }
});

export default HomeScreen;
