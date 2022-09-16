import { Text, StyleSheet } from 'react-native';

export default function AppName({ children }) {
    return (
        <Text style={styles.appName}>
        {children}
        </text>
    );

    const styles = StyleSheet.create({
        appName: {
            fontSize: 30,
            fontWeight: 'bold',
            color: 'red',
        },
    }):
        

}