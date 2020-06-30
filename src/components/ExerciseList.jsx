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
                <div className="row">
                    <div className="col-10 mx-auto my-5">
                    <h2>Logged Exercises</h2>
                        <table className="table table-bordered table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Username</th>
                                    <th>Description</th>
                                    <th>Duration</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.exercises.map(exercise => {
                                        const { _id, username, description, duration, date } = exercise
                                        return (
                                            <tr key={_id}>
                                                <td>{username}</td>
                                                <td>{description}</td>
                                                <td>{duration}</td>
                                                <td>{date.substring(0, 10)}</td>
                                                <td>
                                                    <Link to={`/edit-exercise/${_id}`} >edit</Link> | <a href="#"  onClick={() => this.deleteExercise(_id)}>delete</a>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }
}

export default ExerciseList;
