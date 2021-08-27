import './App.css';
import DashBoard from './DashBoard';
import SideBar from './SideBar';
import TopBar from './TopBar';
import User from './User';
import Product from './Product';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateUser from './CreateUser';
import EditUser from './EditUser';
import CreateProduct from './CreateProduct';
import EditProduct from './EditProduct';

function App() {
  return (
    <>
     <Router>
    <div id="wrapper">
     <SideBar/>
    <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
      <TopBar/>
      <div class="container-fluid">
     
        <Switch>
           <Route path="/" component={DashBoard} exact={true}/>
           <Route path="/user" component={User} exact={true}/>
           <Route path="/create-user" component={CreateUser} exact={true}/>
           <Route path="/user/edit/:id" component={EditUser} exact={true}/>
           <Route path="/product" component={Product} exact={true}/>
           <Route path="/create-product" component={CreateProduct} exact={true}/>
           <Route path="/product/edit/:id" component={EditProduct} exact={true}/>
        </Switch>
      

        {/* <DashBoard/> */}
        {/* <User> </User> */}
        {/* <Product/> */}
      </div>
      </div>
      </div>
    </div>
    </Router>
    </>
  );
}

export default App;

