import React, { Component } from "react";
import data from "./data";
import "./productlist.css";

export default class ProductList extends Component {
    constructor() {
        super();
        this.state = {
            productList: data,
            editingIndex: null,
            editedProduct: {
                title: '',
                image: '',
                brand: '',
                price: ''
            }
        };
    }

    deleteProduct = (index) => {
        const updatedProductList = [...this.state.productList];
        updatedProductList.splice(index, 1);
        this.setState({ productList: updatedProductList });
    };

    editProduct = (index) => {
        const { productList } = this.state;
        const editedProduct = { ...productList[index] };
        this.setState({ editingIndex: index, editedProduct, });
    };

    handleChange = (e) => {
        const { name, value, type, files } = e.target;
        if (type === "file") {
            console.log(files);
            const reader = new FileReader();
            reader.onload = () => {
                this.setState(prevState => ({
                    editedProduct: {
                        ...prevState.editedProduct,
                        [name]: reader.result
                    }
                }));
            };
            reader.readAsDataURL(files[0]);
        } else {
            this.setState(prevState => ({
                editedProduct: {
                    ...prevState.editedProduct,
                    [name]: value
                }
            }));
        }
    };

    saveEditedProduct = () => {
        const { editingIndex, editedProduct, productList, } = this.state;
        const updatedProductList = [...productList];
        updatedProductList[editingIndex] = editedProduct;
        this.setState({ productList: updatedProductList, editingIndex: null });
    };

    render() {
        const { productList, editingIndex, editedProduct } = this.state;

        return (
            <>
                <div id="productlist">
                    <h1 className="H1">Product List Component</h1>
                    <hr />
                    <table className="table">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Title</th>
                                <th>Image</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productList.map((product, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{product.title}</td>
                                    <td><img src={product.thumbnail} alt={product.title} width="100px" height="100px" /></td>
                                    <td>{product.brand}</td>
                                    <td>{product.price}</td>
                                    <td><button onClick={() => this.editProduct(index)} className="btn btn-success">Edit</button></td>
                                    <td><button onClick={() => this.deleteProduct(index)} className="btn btn-danger">Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {editingIndex !== null && (
                    <div id="login-box" className="login-box">
                        <form id="editform">
                            <div className="user-box">
                                <input type="text" id="title" name="title" value={editedProduct.title} onChange={this.handleChange} />
                                <label>Title</label>
                            </div>
                            <div className="user-box">
                                <input type="file" id="image" name="image" onChange={this.handleChange} />
                                <label>Image</label>
                            </div>
                            <div className="user-box">
                                <input type="text" id="brand" name="brand" value={editedProduct.brand} onChange={this.handleChange} />
                                <label>Brand</label>
                            </div>

                            <div className="user-box">
                                <input type="text" id="price" name="price" value={editedProduct.price} onChange={this.handleChange} />
                                <label>Price</label>
                            </div>
                            <center>
                                <button type="button" onClick={this.saveEditedProduct}>SAVE</button>
                            </center>
                        </form>
                    </div>
                )}
            </>
        );
    }
}
