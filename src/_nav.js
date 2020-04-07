export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    {
      name: 'Dispatcher',
      url: '/dispatcher',
      icon: 'cui-laptop ',
    },
    {
      name: 'Restaurant',
      url: '/resturant',
      icon: 'fa fa-beer',
    },
    {
      name: 'Addons',
      icon: 'fa fa-shopping-bag',
      children: [
        {
          name: 'Addons',
          url: '/addon',
          icon: 'fa fa-shopping-bag',
        },
        {
          name: 'Add Addons',
          url: '/add-addon',
          icon: 'fa fa-shopping-bag',
        },
      ],
    },
    {
      name: 'Category',
      icon: 'fa fa-filter',
      children: [
        {
          name: 'Category List',
          url: '/category-list',
          icon: 'fa fa-filter',
        },
        {
          name: 'Add Category',
          url: '/add-category-form',
          icon: 'fa fa-filter',
        },
      ],
    },
    {
      name: 'Product',
      icon: 'fa fa-product-hunt',
      children: [
        {
          name: 'Product List',
          url: '/product',
          icon: 'fa fa-product-hunt',
        },
        {
          name: 'Add Product',
          url: '/add-product',
          icon: 'fa fa-product-hunt',
        },
      ],
    },
    {
      name: 'Deliveries',
      url: '/deliveries',
      icon: 'fa fa-car',
    },
  ]
};
