import { StyleSheet, Text, View, Image } from 'react-native';
import {  } from "react-navigation";

export default function App() {
  return (
    <View style={styles.mainView}>
        <View style={styles.container}>
            <select name = "lista">

                <option selected value = "item1"> Item1

                <option value = "item2"> Item2

                <option value = "item3"> Item3

            </select>
        </View>
    </View>
  );
};