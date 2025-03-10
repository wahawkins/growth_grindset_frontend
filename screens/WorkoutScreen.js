import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function WorkoutScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Workout Details</Text>
            <Button title="Back to Home" onPress={() => navigation.goBack()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 }
});
