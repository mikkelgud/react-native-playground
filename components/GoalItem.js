import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const GoalItem = props =>{
    return (  
      <TouchableOpacity onPress={props.onPress.bind(this, props.id)}>
    <View style={style.listItem}>
        <Text>{props.title}</Text>
      </View>
      </TouchableOpacity>
      )
}

const style = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 10,
      }
})

export default GoalItem;