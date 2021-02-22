import axios from "axios";
import { doc } from "prettier";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const divCard = document.createElement('div');
  const divHead = document.createElement('div');
  const divAuthor = document.createElement('div');
  const divImg = document.createElement('div');
  const authoImg = document.createElement('img');
  const authoName = document.createElement('span');

  divCard.classList.add('card');
  divHead.classList.add('headline');
  divAuthor.classList.add('author');
  divImg.classList.add('img-container');

  divHead.textContent = article.headline;
  authoImg.src = article.authorPhoto;
  authoName.textContent = article.authorName;

  divCard.appendChild(divHead);
  divCard.appendChild(divAuthor);
  divAuthor.appendChild(divImg);
  divImg.appendChild(authoImg);
  divAuthor.appendChild(authoName);

  divCard.addEventListener('click', () => {
    console.log(divHead);
  })

  return divCard;
}

// window.onload = () => {
//   const cardDiv = document.querySelector('.cards-container')
//   cardDiv.appendChild(Card())
// }

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`https://lambda-times-api.herokuapp.com/articles`)
    .then(res => {
      res.forEach(()=> {
        Card(res);
      })
    })
    .catch(err => {console.log(err)})

}

export { Card, cardAppender }
