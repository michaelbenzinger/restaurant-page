import HeroPhoto from './pizza-hero.jpg';

export default function displayHome(pageContent) {
  //Hero
  const heroSection = document.createElement('section');
  heroSection.classList.add('hero-section');
  displayHeroPhoto(heroSection);
  displayHeroCopy(heroSection);
  pageContent.appendChild(heroSection);
  //About
  const aboutSection = document.createElement('section');
  aboutSection.classList.add('about-section');
  displayAboutSection(aboutSection);
  pageContent.appendChild(aboutSection);

  return 'Home';
}

function displayHeroPhoto(heroSection) {
  const heroPhotoContainer = document.createElement('div');
  const heroImage = new Image();
  heroImage.src = HeroPhoto;
  heroImage.setAttribute('width', '100%');
  heroImage.setAttribute('height', '100%');
  heroImage.setAttribute('style', 'object-fit: cover');
  heroPhotoContainer.classList.add('hero-photo');
  heroPhotoContainer.appendChild(heroImage);
  heroSection.appendChild(heroPhotoContainer);
}

function displayHeroCopy(heroSection) {
  const heroCopyContainer = document.createElement('div');
  const heroCopyContent = document.createElement('div');
  heroCopyContainer.classList.add('hero-copy');
  heroCopyContent.classList.add('hero-copy-content');
  const title = document.createElement('h1');
  title.innerText = "Chicago's Favorite Pizza";
  const subtitle = document.createElement('p');
  subtitle.innerText = 'Rated #1 in 2020';
  const button = document.createElement('button');
  button.dataset.callback = 'displayMenu';
  button.innerText = 'Order Now';
  heroCopyContent.appendChild(title);
  heroCopyContent.appendChild(subtitle);
  heroCopyContent.appendChild(button);
  heroCopyContainer.appendChild(heroCopyContent);
  heroSection.appendChild(heroCopyContainer);
}

function displayAboutSection(aboutSection) {
  const aboutContent = document.createElement('div');
  aboutContent.classList.add('about-content');
  const title = document.createElement('h2');
  title.innerText = 'Our Story';
  const copy1 = document.createElement('p');
  copy1.innerText = "On April 9, 1964, our story began in Gurnee, IL when Greg Mangione opened the first Mangione's Pizzeria. The restaurant was to be a model of hospitality and community.";
  const copy2 = document.createElement('p');
  copy2.innerText = "Since then, our restaurants have spent over 50 years delivering the absolute best pizza.";
  aboutContent.appendChild(title);
  aboutContent.appendChild(copy1);
  aboutContent.appendChild(copy2);
  aboutSection.appendChild(aboutContent);
}