import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { fetchWorkouts } from '../services/api';

const WorkoutScreen = () => {
    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        const loadWorkouts = async () => {
            const data = await fetchWorkouts();
            setWorkouts(data);
        };
        loadWorkouts();
    }, []);

    return (
        <View>
            <Text>Workouts</Text>
            {workouts.map((workout) => (
                <Text key={workout.id}>{workout.name}</Text>
            ))}
        </View>
    );
};

export default WorkoutScreen;
