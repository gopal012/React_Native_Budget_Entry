import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Alert, TouchableOpacity, Text } from 'react-native'
import { useDispatch } from 'react-redux';
import { addItem } from './Redux/ItemSlice';
import { useNavigation } from '@react-navigation/native'

function BudgetEntryScreen() {

  const [item, setItem] = useState('');
  const [plannedAmount, setplannedAmount] = useState('');
  const [actualAmount, setactualAmount] = useState('');
  const navigation = useNavigation();

  const validate = () => {
    let valid = true;
    if (item == '') {
      valid = false;
    }
    if (plannedAmount == '') {
      valid = false;
    }
    if (actualAmount == '') {
      valid = false;
    }
    return valid
  }

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <TextInput style={styles.inputField} 
                 placeholder='Enter Item Name' 
                 value={item} 
                 onChangeText={(text) => setItem(text)} />
      <TextInput style={styles.inputField} 
                 placeholder='Enter Planned Amount' 
                 value={plannedAmount} 
                 onChangeText={(text) => setplannedAmount(text)} 
                 keyboardType='number-pad' />
      <TextInput style={styles.inputField} 
                 placeholder='Enter Actual Amount' 
                 value={actualAmount} 
                 onChangeText={(text) => setactualAmount(text)} 
                 keyboardType='number-pad'/>
      <TouchableOpacity>
        <Text style={[styles.inputField,
        {
          backgroundColor: 'green',
          color: 'white',
          padding: 10
        }]}
          onPress={() => {
            if (validate()) {
              dispatch(addItem({ item, plannedAmount, actualAmount }))
              setItem('');
              setplannedAmount('');
              setactualAmount('');
              navigation.goBack()
            } else {
              Alert.alert('Please Fill All Field !!')
            }
          }}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1E90FF'
  },
  inputField: {
    borderColor: 'black',
    borderWidth: 2,
    textAlign: 'center',
    width: 250,
    margin: 20,
    backgroundColor: 'white',
    fontSize: 15
  },
  submit: {
    backgroundColor: "green",
    color: "black",
    padding: 10,
    margin: 10
  },
})

export default BudgetEntryScreen
