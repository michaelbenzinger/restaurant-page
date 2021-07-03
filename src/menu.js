const menu = (() => {
  const menuItems = [
    {
      name: 'Cheese Slice',
      description: 'A big slice of standard Cheese.',
      price: '$3.98',
    }, {
      name: 'Sausage Slice',
      description: 'A sweet slice of down home Sausage.',
      price: '$4.34',
    }, {
      name: 'Pepperoni Slice',
      description: "A killin' slice of spicy pepperoni.",
      price: '$4.34',
    }, {
      name: 'Supreme Slice',
      description: "All that you want on a big ol' slice.",
      price: '$4.51',
    }, {
      name: 'Cheese Pizza',
      description: "A whole spankin' Cheese Pizza.",
      price: '$8.93',
    }, {
      name: 'Sausage Pizza',
      description: 'A larger than life Sausage Pizza.',
      price: '$9.61',
    }, {
      name: 'Pepperoni Pizza',
      description: 'The Pepperoni Pizza of your dreams.',
      price: '$9.61',
    }
  ];
  return { menuItems };
})();

export default function displayMenu(pageContent) {
  const menuSection = document.createElement('div');
  menuSection.classList.add('menu-section');
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  menuSection.appendChild(menuContainer);
  pageContent.appendChild(menuSection);

  displayMenuItems(menuContainer);
  return 'Menu';
}

function displayMenuItems(menuContainer) {
  menu.menuItems.forEach(item => {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');
    const itemName = document.createElement('h3');
    itemName.innerText = item.name;
    itemName.classList.add('item-name');
    const itemDescription = document.createElement('p');
    itemDescription.innerText = item.description;
    itemDescription.classList.add('item-description');
    const itemPrice = document.createElement('span');
    itemPrice.innerText = item.price;
    itemPrice.classList.add('item-price');
    
    itemContainer.appendChild(itemName);
    itemContainer.appendChild(itemDescription);
    itemContainer.appendChild(itemPrice);
    menuContainer.appendChild(itemContainer);
  });
}