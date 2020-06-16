const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', (e) => {
  // console.log(e.target.dataset.id);
  const id = e.target.dataset.id;
  if (id) {
    // remove the active class from all the buttons
    btns.forEach((btn) => btn.classList.remove('active'));
    e.target.classList.add('active');
    articles.forEach((article) => article.classList.remove('active'));
    articles.forEach((article) => {
      if (article.getAttribute('id') === id) {
        article.classList.add('active');
      }
    });
  }
});
