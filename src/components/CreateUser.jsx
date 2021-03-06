import React, { Component } from 'react';
import axios from "axios"

class CreateUser extends Component {
    state = {
        username: "",
    }

    onChangeUsername = (e) => {
        this.setState({ username: e.target.value })
    }

    SubmitHandler = (e) => {
        e.preventDefault()
        
        const user = {
            username: this.state.username
        }

        console.log(user)

        // Send user to server
        const url = "http://localhost:5000"
        // Add user to DB
        axios.post(`${url}/users/add`, user)
            .then(res => console.log(res.data))

        this.setState({
            username: ""
        })
    }

    render () {
        return (
            <>
                <div className="row">
                        <div className="col-8 mx-auto my-5">
                        <h2 className="text-center">
                            Create new user
                        </h2>
                        <form onSubmit={this.SubmitHandler}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" placeholder="Enter username" value={this.state.username} onChange={this.onChangeUsername}/>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Create user</button>
                        </form>
                        </div>
                    </div>
            </>
        );
    }    
}

export default CreateUser;
