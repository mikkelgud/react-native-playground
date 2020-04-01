import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput'

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  

  const addGoalHandler = enteredGoal => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      { id: Math.random().toString(), value: enteredGoal}
    ]);
    console.log("added " + enteredGoal )
    // setCourseGoals([...courseGoals, enteredGoal]); Will also work, but maybe not always. 
  };





  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={courseGoals} 
      renderItem={itemData => <GoalItem title={itemData.item.value}/>}
        />
    </View>
   );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
