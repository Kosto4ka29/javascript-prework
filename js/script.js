'use strict';

function titleClickHandler(event) {
  console.log('Link was clicked!');

  // Prevent the default action of the link
  event.preventDefault();

  /* remove class 'active' from all article links  */
  const links = document.querySelectorAll('.titles a');
  for (let link of links) {
    link.classList.remove('active');
  }

  /* add class 'active' to the clicked link */
  event.currentTarget.classList.add('active');

  /* remove class 'active' from all articles */
  const articles = document.querySelectorAll('.post');
  for (let article of articles) {
    article.classList.remove('active');
  }

  /* get 'href' attribute from the clicked link */
  const href = event.currentTarget.getAttribute('href');

  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(href);

  /* add class 'active' to the correct article */
  if (targetArticle) {
    targetArticle.classList.add('active');
  }
}

const links = document.querySelectorAll('.titles a');

for (let link of links) {
  link.addEventListener('click', titleClickHandler);
}