'use strict';

const plusIcon = document.querySelector('.icon-wrapper');
const articleContent = document.querySelectorAll('.article-content');

function displayContent() {
   for( const article of articleContent) {
    article.classList.toggle('active');
    }
}
plusIcon.addEventListener('click', displayContent);