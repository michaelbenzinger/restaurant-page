import './meyerreset.css'
import './style.css'
import displayHome from './home.js'
import displayContact from './contact.js'
import displayMenu from './menu.js'

const pageContent = document.querySelector('#content');
const body = document.querySelector('body');
let currentPage = '';

function displayNav() {
  const head = document.createElement('header');
  const nav = document.createElement('nav');
  const navItems = ['Home', 'Contact', 'Menu'];
  navItems.forEach(page => {
    const navItem = document.createElement('a');
    navItem.innerHTML = page;
    navItem.addEventListener('click', function(e){
      if (currentPage != e.target.innerText) {
        removeAllContent();
        if (e.target.innerText == 'Home') {
          currentPage = displayHome(pageContent);
        } else if (e.target.innerText == 'Contact') {
          currentPage = displayContact(pageContent);
        } else if (e.target.innerText == 'Menu') {
          currentPage = displayMenu(pageContent);
        }
      }
      eventListeners();
    });
    nav.appendChild(navItem);
  });
  body.insertBefore(head, pageContent);
  head.appendChild(nav);
}

function removeAllContent() {
  while (pageContent.firstChild) {
    pageContent.removeChild(pageContent.lastChild);
  }
  pageContent.childNodes.forEach(node => {
    node.remove();
  });
}

function eventListeners () {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      removeAllContent();
      if (button.dataset.callback == 'displayHome') {
        currentPage = displayHome(pageContent);
      } else if (button.dataset.callback == 'displayContact') {
        currentPage = displayContact(pageContent);
      } else if (button.dataset.callback == 'displayMenu') {
        currentPage = displayMenu(pageContent);
      }
    });
  });
}

displayNav();
currentPage = displayHome(pageContent);
eventListeners();