import React from 'react'
import Axios from 'axios'
import swal from 'sweetalert'

class AddUser extends React.Component{
    constructor(){
        super()
        this.state={
            id : '',
            nama : '',
            alamat : '',
        }
    }

    handleChange = (e) =>{
        this.setState({ [e.target.name] : e.target.value })
    }

    handleSubmit = async(e) => {
        e.preventDefault()
        console.log(this.state)
        await Axios.post("http://localhost/reactapi/addUser.php", this.state)
        this.props.history.push('/user');
        swal("Good job!", "Add Data has been!", "success");
    }

    render(){
        return(
            <div>
                <h5>Tambah User</h5>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="id">Id</label>
                        <input type="text" className="form-control" name="id" placeholder="EnterNumber ID" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="nama">Nama</label>
                        <input type="text" className="form-control" name="nama" placeholder="Enter Your Name" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="alamat">Alamat</label>
                        <input type="text" className="form-control" name="alamat"placeholder="Enter Your Address" onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }}

    export default AddUser
