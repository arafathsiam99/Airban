import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import AdminRoute from "../AdminRoute/AdminRoute";
import useFirebase from "../Hooks/useFirebase";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AddReview from "../../Pages/AddReview/AddReview";
import ManageAllOrders from "../../Pages/ManageAllOrders/ManageAllOrders";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import ManageProducts from "../../Pages/ManageProducts/ManageProducts";

const DashBoard = () => {
  const { admin, logout } = useFirebase();
  console.log(admin);
  let { path, url } = useRouteMatch();
  return (
    <div>
      <div className="justify-content-center flex-wrap ">
        {!admin && (
          <div className=" d-flex flex-wrap">
            <Link to={`${url}/myorders`}>
              <button className="focus:outline-none text-black bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 text-white">
                My Orders
              </button>
            </Link>
            {/* <Link to={`${url}/pay`}>
                <button className="focus:outline-none text-black bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 text-white">
                  Pay Here
                </button>
              </Link> */}
            <Link to={`${url}/addreview`}>
              <button className="focus:outline-none text-black bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 text-white">
                Add Review
              </button>
            </Link>
          </div>
        )}
        <br />
        {admin && (
          <div className=" d-flex flex-wrap">
            <Link to={`${url}/makeadmin`}>
              <button className="focus:outline-none text-black bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 text-white">
                Make Admin
              </button>
            </Link>
            <br />
            <Link to={`${url}/addproduct`}>
              <button className="focus:outline-none text-black bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 text-white">
                Add Product
              </button>
            </Link>
            <br />
            <Link to={`${url}/manageallorders`}>
              <button className="focus:outline-none text-black bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 text-white">
                Manage All Orders
              </button>
            </Link>
            <br />
            <Link to={`${url}/manageproducts`}>
                <button className="focus:outline-none text-black bg-blue-800 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 text-white">
                  Manage Products
                </button>
              </Link>
          </div>
        )}
        <button
          onClick={() => logout()}
          className="focus:outline-none text-black bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:ring-orange-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 text-white"
        >
          Log Out
        </button>
      </div>
      <Switch>
        <Route exact path={path}></Route>
        {/* <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route> */}
        <AdminRoute path={`${path}/makeadmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/addproduct`}>
          <AddProduct></AddProduct>
        </AdminRoute>
        <AdminRoute path={`${path}/manageallorders`}>
          <ManageAllOrders></ManageAllOrders>
        </AdminRoute>
        <AdminRoute path={`${path}/manageproducts`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
        <Route path={`${path}/myorders`}>
          <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/addreview`}>
          <AddReview></AddReview>
        </Route>
      </Switch>
    </div>
  );
};

export default DashBoard;
