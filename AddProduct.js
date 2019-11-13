import React from 'react'
import Axios from 'axios'
import swal from 'sweetalert'

class AddProduct extends React.Component{
    constructor(){
        super()
        this.state={
            product_id : '',
            product_name : '',
            product_price : '',
        }
    }

    handleChange = (e) =>{
        this.setState({ [e.target.name] : e.target.value })
    }

    handleSubmit = async(e) => {
        e.preventDefault()
        console.log(this.state)
        await Axios.post("http://localhost/reactapi/addProduct.php", this.state)
        this.props.history.push('/product');
        swal("Good job!", "Add Data has been!", "success");
    }

    render(){
        return(
            <div>
                <h5>Tambah Product</h5>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="product_id">Id</label>
                        <input type="text" className="form-control" name="product_id" placeholder="Enter Product ID" 
                        onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label for="product_name">Nama Barang</label>
                        <input type="text" className="form-control" name="product_name" placeholder="Enter Product Name" 
                        onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="product_price">Harga Barang</label>
                        <input type="text" className="form-control" name="product_price"placeholder="Enter Product Price" 
                        onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }}

    export default AddProduct
