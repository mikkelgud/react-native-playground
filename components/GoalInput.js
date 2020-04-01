import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Button, Modal} from 'react-native';




const GoalInput = props =>{
  const [enteredGoal, setEnteredGoal] = useState("");

  
  const enterGoalHandler = (enterGoal) => {
    setEnteredGoal(enterGoal);
  };
  
  const addGoalHandler =()=>{
    props.onAddGoal(enteredGoal);
    setEnteredGoal(" ");
  }

    return (
<Modal visible={props.visible} animationType="slide">   
   <View style={styles.inputView}>
        <TextInput
          placeholder="Write your goal here"
          style={styles.textInput}
          onChangeText={enterGoalHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonWrapper}>
          <View style={styles.buttonStyle}>
        <Button
          title="+Add"
          onPress={addGoalHandler}
        />
        </View>
        <View style={styles.buttonStyle}>
         <Button
          title="cancel"
          color="red"
          onPress={props.onCancel}
        /></View>
      </View>
      </View>
      </Modal>

      )
}

const styles = StyleSheet.create({
  inputView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonStyle:{
    width: '45%'
  },
  textInput: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    color: 'black'
  },
  buttonWrapper:{
    flexDirection: "row",
    justifyContent: "space-between",
    width: '50%'
  },
})

export default GoalInput;