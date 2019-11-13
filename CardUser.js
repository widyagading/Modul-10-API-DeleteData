import React from 'react'
import {Link } from 'react-router-dom' 
import axios from 'axios'
import swal from 'sweetalert'

function CardUser({user, refresh}){
    async function deleteUser(){
        swal({
            title: "Are you sure?",
            text: "once you delete the data, (" +user.nama + ") will not be able to recover!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then(async (willDelete) => {
            if (willDelete) {
                swal("data (" + user.nama + ") has been deleted!",{icon: "success",});

                await axios.delete("http://localhost/reactapi/deleteUser.php?id=" + user.id)

                return refresh()
            }else {
                swal("data (" + user.nama + ") is safe!");
            }
        }); }
        

    return(
        <tr>
            <th scope="row">{user.id}</th>
            <th scope="row">{user.nama}</th>
            <th scope="row">{user.alamat}</th>
            <th scope="row">
                { 
                <div>
                    <Link className="btn btn-dark" to={'/editUser/' + user.id}>Edit</Link>
                    <button type="button" class="btn btn-dark" onClick={deleteUser}>Delete</button>
                </div>
                }
            </th>
        </tr>
    )
}

export default CardUser