import React, {Component} from 'react';

class CreateExercise extends Component {

    state = {
        username: "",
        description: "",
        duration: 0,
        date: new Date().toISOString(),
        users: []
    }

    componentDidMount() {
        this.setState({
            users: ["test user"],
            username: "test user"
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
        this.setState({ date: e.target.value })
    }

    SubmitHandler = (e) => {
        e.preventDefault()
        
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise)

        window.location = "/"
    }

    render () {
        
        return (
            <>
                <div className="row">
                    <div className="col-8 mx-auto my-5">
                    <h2 className="text-center">
                        Create new exercise log
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
                            <textarea name="description" id="" cols="30" rows="10" className="form-control" onChange={this.onChangeDescription} placeholder="Describe your exercise routine here..." required></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="duration">Duration (in minutes)</label>
                            <input type="number" className="form-control" name="duration" value={this.state.duration} onChange={this.onChangeDuration} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input type="date" className="form-control" name="date" value={this.state.date} onChange={this.onChangeDate} required/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Create exercise log</button>
                    </form>
                    </div>
                </div>
            </>
        );
    }

    
}

export default CreateExercise;
