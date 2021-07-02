import './meyerreset.css'
import './style.css'
import displayHome from './home.js'
import displayContact from './contact.js'
import displayMenu from './menu.js'

const pageContent = document.querySelector('#content');
console.log(pageContent);
console.log("We are working!");

function displayNav() {
  const head = document.createElement('header');
  const nav = document.createElement('nav');
  const navItems = ['Home', 'Contact', 'Menu'];
  navItems.forEach(page => {
    const navItem = document.createElement('a');
    navItem.innerHTML = page;
    nav.appendChild(navItem);
  });
  pageContent.appendChild(head);
  head.appendChild(nav);
}

displayNav();
displayHome(pageContent);