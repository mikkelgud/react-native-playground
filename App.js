import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalInput';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState(" ");
  const [courseGoals, setCourseGoals] = useState([]);

  const enterGoalHandler = (enterGoal) => {
    setEnteredGoal(enterGoal);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentCourseGoals => [
      ...currentCourseGoals, 
      { id: Math.random().toString(), value: enteredGoal}
    ]);
    console.log("added " + enteredGoal )
    // setCourseGoals([...courseGoals, enteredGoal]); Will also work, but maybe not always. 
  };





  return (
    <View style={styles.screen}>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Write your goal here p"
          style={styles.textInput}
          onChangeText={enterGoalHandler}
          value={enteredGoal}
        />
        <Button
          title="+Add"
          style={styles.buttonStyle}
          onPress={addGoalHandler}
        />
      </View>
      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={courseGoals} 
      renderItem={itemData => (
       <GoalInput/>
          )}
        />
    </View>
   );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputView: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInput: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  buttonStyle: {
    backgroundColor: 'blue',
    width: 200
  },
  
});
