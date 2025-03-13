const API_URL = "http://your-backend-url/api/workouts/";

export const getWorkouts = async () => {
    try {
        const response = await fetch(API_URL);
        return await response.json();
    } catch (error) {
        console.error("Error fetching workouts:", error);
        return [];
    }
};
