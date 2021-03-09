import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import { addCounter, minCounter } from './redux/action'

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(data => data.counter);
    
    return(
    <View style={styles.counterContainer}>
        <TouchableOpacity style={styles.counterBtn}
        onPress={() => dispatch(addCounter(counter))}>+</TouchableOpacity>
        <Text style={styles.text}>{counter}</Text>
        <TouchableOpacity style={styles.counterBtn} 
        onPress={()=>dispatch(minCounter(counter))}>-</TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    counterContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: '16px'
      },
      counterBtn: {
        backgroundColor: 'green',
        padding: '16px',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '600'
      },
      text: {
        fontSize: '18px',
        fontWeight: '700',
        textAlign: 'center',
        width: '50%'
      }
});

export default Counter;