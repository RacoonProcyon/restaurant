import React from 'react';

const Dispatcher = React.lazy(() => import('./views/Dispatcher/Dispatcher'));
const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Accepted = React.lazy(() => import('./views/Dispatcher/Accepted'));
const Ongoing = React.lazy(() => import('./views/Dispatcher/Ongoing'))
const Cancelled = React.lazy(() => import('./views/Dispatcher/Cancelled'));
const Resturant = React.lazy(() => import('./views/Resturant/Resturant'));
const AddOn = React.lazy(() => import('./views/AddOn/AddOn'));
const AddAddons = React.lazy(() => import('./views/AddOn/addAddOn'));
const Category = React.lazy(() => import('./views/Category/Categary'));
const AddCategoryForm = React.lazy(() => import('./views/Category/addCategoryForm'));
const Product = React.lazy(() => import('./views/Product/Product'));
const AddProduct = React.lazy(() => import('./views/Product/AddProduct'));
const Deleveris = React.lazy(() => import('./views/deliveries/deliveries'));
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/dispatcher', name: 'dispatcher', component: Dispatcher },
  { path: '/accepted', name: 'Accepted', component: Accepted },
  { path: '/ongoing', name: 'Ongoing', component: Ongoing },
  { path: '/cancelled', name: 'Cancelled', component: Cancelled },
  { path: '/resturant', name: 'Resturant', component: Resturant },
  { path: '/addon', name: 'AddOn', component: AddOn },
  { path: '/add-addon', name: 'Add Addons', component: AddAddons },
  { path: '/category-list', name: 'Category List', component: Category },
  { path: '/add-category-form', name: 'Add Category Form', component: AddCategoryForm },
  { path: '/product', name: 'Product', component: Product },
  { path: '/add-product', name: 'Add Product', component: AddProduct },
  { path: '/deliveries', name: 'Deliveries', component: Deleveris }
];

export default routes;
