import React, { useState, useEffect } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
    const [workouts, setWorkouts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://YOUR_BACKEND_IP:8000/api/workouts/')
            .then(response => {
                setWorkouts(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Workout List</Text>
            {loading ? <ActivityIndicator size="large" /> : (
                workouts.map((workout, index) => (
                    <Text key={index} style={styles.item}>{workout.name}</Text>
                ))
            )}
            <Button title="Start Workout" onPress={() => navigation.navigate('Workout')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
    item: { fontSize: 18, marginBottom: 5 }
});
