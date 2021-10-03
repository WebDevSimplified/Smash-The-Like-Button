const likeButton = document.querySelector('.like-button')
const groupCuff = document.querySelector('.group-cuff')
const groupTop = document.querySelector('.group-top')
const groupLeft = document.querySelector('.group-left')
const groupTopRight = document.querySelector('.group-top-right')
const groupBottomRight = document.querySelector('.group-bottom-right')
let numberOfClicks = 0

likeButton.addEventListener('click', () => {
  numberOfClicks++
  if (numberOfClicks >= 12) {
    groupLeft.classList.add('cracked')
    likeButton.classList.add('exploded')
    
    // reset everything
    setInterval(() => {
      groupLeft.classList.remove('cracked')
      groupTopRight.classList.remove('cracked')
      groupTop.classList.remove('cracked')
      groupBottomRight.classList.remove('cracked')
      likeButton.classList.remove('exploded')
    }, 2000)
    numberOfClicks = 0;

  } else if (numberOfClicks >= 9) {
    groupBottomRight.classList.add('cracked')
  } else if (numberOfClicks >= 6) {
    groupTopRight.classList.add('cracked')
  } else if (numberOfClicks >= 3) {
    groupTop.classList.add('cracked')
  }

  likeButton.classList.add('big')
})

likeButton.addEventListener('transitionend', () => {
  likeButton.classList.remove('big')
})