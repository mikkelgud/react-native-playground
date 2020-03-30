import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState(" ");
  const [courseGoals, setCourseGoals] = ([]);

  const enterGoalHandler = (enterGoal) =>{
    setEnteredGoal(enterGoal);
  };

  const addGoalHandler = () =>{
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, enteredGoal]);
    // setCourseGoals([...courseGoals, enteredGoal]); Will also work, but maybe not always. 
  };


  return (
    <View style={styles.screen}>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Write your goal here"
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
      <View>
      </View>
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
  }
});
