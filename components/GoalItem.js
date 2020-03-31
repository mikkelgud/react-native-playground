import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GoalItem = props =>{
    return (  
    <View style={style.listItem}>
        <Text>{itemData.item.value}</Text>
      </View>
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