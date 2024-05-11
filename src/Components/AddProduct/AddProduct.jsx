import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";


const AddProduct = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <h1 className="text-center mt-7 md:mt-12 text-3xl font-medium">Add Items</h1>
            <div className="w-10/12 md:w-2/4 mx-auto bg-slate-100 p-5 md:p-8 my-3 rounded-lg shadow-lg">
                <form >
                {/* onSubmit={handelAddCoffee} */}
                    <div className="flex flex-col md:flex-row gap-2">
                        <div className="w-full">
                            <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Item Name</span>
                            </label>
                            <input type="text" name="tem_name" placeholder="Item Name" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subcategory Name</span>
                            </label>
                            <input type="text" name="subcategory_Name" placeholder="Subcategory Name" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <input type="text" name="short_description" placeholder="Short Description" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Processing Time</span>
                            </label>
                            <input type="text" name=" processing_time" placeholder="Processing Time" className="input input-bordered"  />
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="form-control ">
                            <label className="label">
                                <span className="label-text"> Price</span>
                            </label>
                            <input type="text" name=" price" placeholder="Price" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Customization</span>
                            </label>
                            <input type="text" name="customization" placeholder="Customization" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Stock Status</span>
                            </label>
                            <input type="text" name="stockStatus" placeholder="Stock Status" className="input input-bordered"  />
                            </div>
                        </div>
                    </div>
                    <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="picture" name="image" placeholder="Item image" className="input input-bordered"  />
                    </div>
                    <input type="submit" value='Submit' className="btn btn-block bg-white my-3"/>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;