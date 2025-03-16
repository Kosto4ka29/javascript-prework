'use strict';

function titleClickHandler(){
  const links = document.querySelectorAll('.titles a');
  console.log(links);
}

const buttonTest = document.getElementById('button-test');

buttonTest.addEventListener('click', titleClickHandler);













function generateTags() {
  /* find all articles */
  const articles = document.querySelectorAll(".post");

  /* START LOOP: for every article */
  articles.forEach(article => {
    /* find tags wrapper */
    const tagsWrapper = article.querySelector(".post-tags");

    /* make html variable with empty string */
    let html = "";

    /* get tags from data-tags attribute */
    const tags = article.getAttribute("data-tags");

    /* split tags into array */
    const tagsArray = tags.split(" ");

    /* START LOOP: for each tag */
    tagsArray.forEach(tag => {
      /* generate HTML of the link */
      const tagHTML = `<a href="#tag-${tag}" class="tag-link">${tag}</a> `;

      /* add generated code to html variable */
      html += tagHTML;
    });

    /* END LOOP: for each tag */

    /* insert HTML of all the links into the tags wrapper */
    tagsWrapper.innerHTML = html;
  });
  /* END LOOP: for every article */
}

generateTags();