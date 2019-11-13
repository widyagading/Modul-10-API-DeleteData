import axios from 'axios'
import swal from 'sweetalert'

function deleteProduct(){
    swal({
        title: "Are you sure?",
        text: "once you delete the data, (" +product.product_name + ") will not be able to recover!",
        icon: "warning",
        buttons: true,
        dangerMode: true, 
    })
    .then(async (willDelete) => {
        if (willDelete) {
            swal("data (" + product.product_name + ") has been deleted!",{icon: "success",});

            await axios.delete("http://localhost/reactapi/deleteProduct.php?product_id=" + product.product_id)

            return refresh()
        }else {
            swal("data (" + product.product_name + ") is safe!");
        }
    });
}

<button type="button" class="btn btn-dark" onClick={deleteProduct}>Delete</button>