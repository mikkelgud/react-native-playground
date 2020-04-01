import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList  } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput'

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [visibleState, setVisibleState] = useState(false);


  const addGoalHandler = enteredGoal => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      { id: Math.random().toString(), value: enteredGoal}
    ]);
    console.log("added " + enteredGoal );
    setVisibleState(false);
    // setCourseGoals([...courseGoals, enteredGoal]); Will also work, but maybe not always. 
  };

  const removeGoalHandler = goalId =>{
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== goalId)
    })
  }

  const cancelGoalHandler = () =>{
    setVisibleState(false);
  }



  return (
    <View style={styles.screen}>
            <Button title="Add new goal" onPress={() => setVisibleState(true)}/> 
      <GoalInput visible={visibleState} onAddGoal={addGoalHandler} onCancel={cancelGoalHandler} />
      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={courseGoals} 
      renderItem={itemData =>   <GoalItem id={itemData.item.id} onPress={removeGoalHandler} title={itemData.item.value} />}
        />
    </View>
   );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
