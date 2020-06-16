// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
  // linksContainer.classList.toggle('show-links') -> first method only if we know the hight and we dont add dynamically other menus
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  // console.log(containerHeight, linksHeight);
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');
// ********** fixed navbar ************
window.addEventListener('scroll', () => {
  // console.log(pageYOffset);
  const scrollHeight = pageYOffset;
  const navbarHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navbarHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }
  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    // prevent default
    e.preventDefault();
    // navigate tio specific spot, get the id without the hashtag
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);

    // calculate the heights
    const navbarHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;

    const fixedNav = navbar.classList.contains('fixed-nav');
    let position = element.offsetTop - navbarHeight;

    if (!fixedNav) {
      position -= navbarHeight;
    }
    if (navbarHeight > 82) {
      // means that the navbar is open
      position += containerHeight;
    }
    // scroll to that position
    window.scrollTo({
      left: 0,
      top: position
    });
    // close the link menu on small screen
    linksContainer.style.height = 0;
  });
});
