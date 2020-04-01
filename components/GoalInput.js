import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Button} from 'react-native';




const GoalInput = props =>{
  const [enteredGoal, setEnteredGoal] = useState(" ");
  
  const enterGoalHandler = (enterGoal) => {
    setEnteredGoal(enterGoal);
  };

    return (
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
          onPress={props.onAddGoal.bind(this, enteredGoal)}
        />
      </View>
      )
}

const styles = StyleSheet.create({
  inputView :{
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center"
  },
  buttonStyle:{
    backgroundColor: 'blue',
    width: 200
  },
  textInput: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
})

export default GoalInput;