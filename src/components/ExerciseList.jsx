import React, { Component } from 'react';
import axios from "axios"
import { Link } from "react-router-dom"

class ExerciseList extends Component {

    state = {
        exercises: []
    }

    componentDidMount() {
        const url = "http://localhost:5000" 
        axios.get(`${url}/exercises`)
            .then(res => {
                this.setState({
                    exercises: res.data
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    deleteExercise = id => {
        const url = "http://localhost:5000" 
        axios.delete(`${url}/exercises/`+id)
            .then(res => console.log(res.data))
            this.setState({
                exercises: this.state.exercises.filter(exercise => exercise._id !== id)
            })
    }
    

    render () {
        
        return (
            <>
                <h2>Exercise List</h2>
            </>
        );
    }
}

export default ExerciseList;
