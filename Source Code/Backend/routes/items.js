const { Router } = require('express');

const itemRoutes = Router();

itemRoutes.get('/', (req, res) => {
  setTimeout(
    () => res.json([
      {
        itemId: 'OfficeSupplies',
        imageId: 'OfficeSupplies',
        title: 'Office Supplies',
        price: 100,
        salePrice: 100,
        description: 'Office appliances, or office equipment, are the tools, machinery, and supplies used in an office. ',
      },
      {
        itemId: 'Clothing',
        imageId: 'Clothing',
        title: 'Clothing',
        price: 200,
        salePrice: 200,
        description: 'Clothing is any item worn on the body, typically made of fabrics or textiles.',
      },
      {
        itemId: 'Electronics',
        imageId: 'Electronics',
        title: 'Electronics',
        price: 600,
        salePrice: 600,
        description: 'Like laptops, tablet computers are designed to be portable. However, they provide a different computing experience.',
      },
      {
        itemId: 'Grocery',
        imageId: 'Grocery',
        title: 'Grocery',
        price: 100,
        salePrice: 100,
        description: 'that sells perishable and nonperishable food supplies and certain nonedible household items, such as soaps and paper products.',
      },
      {
        itemId: 'Appliances',
        imageId: 'Appliances',
        title: 'Home Appliances',
        price: 900,
        salePrice: 900,
        description: 'appliance or a household appliance, is a machine which assists in household functions such as cooking, cleaning and food preservation.',
      },
      {
        itemId: 'Furniture',
        imageId: 'Furniture',
        title: 'Furniture',
        price: 800,
        salePrice: 800,
        description: 'movable objects that are used in a house, office, or room to make it comfortable or suitable for living or working',
      },
    ]),
    // Adds a fake server side delay
    500,
  );
});

module.exports = itemRoutes;
