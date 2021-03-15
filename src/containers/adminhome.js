import React, { Component } from 'react';
class AdminHome extends Component {


    // renderProductList = () => {
    //     let allproducts = this.props.produts.map(product => {
    //         return <li key={product.pid}>{product.product_name} {product.price} <img src={product.product_image}></img></li>
    //     })
    //     return allproducts;
    // }

    addproduct=(event)=>{
        event.preventDefault();
        this.props.history.push("/addproduct")
    }

    render() {
        return (
            <React.Fragment>
                <h1>Iam in admin home page</h1>
                {/* <ul>
                    {this.renderProductList()}
                </ul> */} 
                <button onClick={this.addproduct} >AddPrducts</button>

            </React.Fragment>
        );
    }
}

export default AdminHome;