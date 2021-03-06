class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class.
    this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'Expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', this.expandArticle.bind(this));

  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    if(this.domElement.classList.contains('article-open')){
      this.domElement.classList.remove('article-open');
      this.expandButton.innerText = 'Expand';
    } else {
      this.domElement.classList.add('article-open');
      this.expandButton.innerText = 'Close'
    }

  }
}

/* START HERE:
- Select all classes named ".article" and assign that value to the articles variable.
- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.
*/

let articles = document.querySelectorAll('.article');
articles.forEach((article) => {
  return new Article(article);
});