import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
    increment,
    decrement,
    selectCount
} from './redux/counterSlice'
const Counter = () => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Pressable
                    style={styles.btn}
                    onPress={() => dispatch(decrement())}
                >
                    <Text style={styles.text}>-</Text>
                </Pressable>
                <Text style={styles.text}>{count}</Text>
                <Pressable
                    style={styles.btn}
                    onPress={() => dispatch(increment())}
                >
                    <Text style={styles.text}>+</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    btn: {
        width: 50,
        height: 50,
        backgroundColor: "pink",
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,

    },
    text: {
        fontSize: 30,
        fontWeight: 600,
    }
});