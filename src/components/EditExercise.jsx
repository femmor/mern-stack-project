import React, {Component} from 'react';
import axios from "axios"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.min.css"

class CreateExercise extends Component {

    state = {
        username: "",
        description: "",
        duration: 0,
        startDate: new Date(),
        users: []
    }

    componentDidMount() {
        const url = "http://localhost:5000" 
        const id = this.props.match.params.id

        axios.get(`${url}/exercises/${id}`)
            .then(res => {
                
                this.setState({
                    username: res.data.username,
                    description: res.data.description,
                    duration: res.data.duration,
                    startDate: res.data.startDate
                })
            })
            .catch(error => console.log(error))


        axios.get(`${url}/users`)
            .then(res => {
                if(res.data.length > 0) {
                    this.setState({
                        users: res.data.map(user => user.username)
                    })
                }
            })
    }
    

    onChangeUsername = (e) => {
        this.setState({ username: e.target.value })
    }

    onChangeDescription = (e) => {
        this.setState({ description: e.target.value })
    }

    onChangeDuration = (e) => {
        this.setState({ duration: e.target.value })
    }

    onChangeDate = (e) => {
        this.setState({ startDate: e.target.value })
    }

    handleDateChange = date => {
        this.setState({ startDate: date })
      };

    SubmitHandler = (e) => {
        e.preventDefault()
        
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.startDate
        }

        // Send exercise to server
        const url = "http://localhost:5000" 
        const id = this.props.match.params.id
        axios.post(`${url}/exercises/${id}`, exercise)
            .then(res => console.log(res.data))

        window.location = "/"
    }

    render () {
        
        return (
            <>
                <div className="row">
                    <div className="col-8 mx-auto my-5">
                    <h2 className="text-center">
                        Edit exercise log
                    </h2>
                    <form onSubmit={this.SubmitHandler}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <select 
                                className="form-control"
                                ref="userInput" 
                                required
                                onChange={this.state.onChangeUsername}
                                >
                                    {
                                        this.state.users.map(user => {
                                            return(
                                                <option
                                                    key={user}
                                                    value={user}>
                                                    {user}
                                                </option>
                                            )
                                        })
                                    }
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea name="description" id="" cols="30" rows="10" className="form-control" onChange={this.onChangeDescription} value={this.state.description} required></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="duration">Duration (in minutes)</label>
                            <input type="number" className="form-control" name="duration" value={this.state.duration} onChange={this.onChangeDuration} required/>
                        </div>
                        <div className="form-group">
                            <div>
                                <label htmlFor="date">Date</label>
                            </div>
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleDateChange}
                                onSelect={this.handleSelect}
                                className="form-control"
                                value={this.state.startDate}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Edit exercise log</button>
                    </form>
                    </div>
                </div>
            </>
        );
    }

    
}

export default CreateExercise;
