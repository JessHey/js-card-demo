import '../css/style.scss'
import { image as imageInfo, buttons as buttonInfo } from "../../data/db.json"

// console.log(imageInfo);
// console.log(buttonInfo)

// 获得root节点

// const app = document.getElementById('app')
const app = document.querySelector('#app')

const cardGroup = document.createElement('div')
cardGroup.classList.add('card-group')

app.appendChild(cardGroup)

imageInfo.forEach(imgInfo => {
  const card = document.createElement('div')
  card.classList.add('card')
  card.style.backgroundImage = `url(${imgInfo.url})`
  cardGroup.appendChild(card)
})


// 新建按钮元素
const buttonGroup = document.createElement('div')
buttonGroup.classList.add('btn-group')

cardGroup.appendChild(buttonGroup)

buttonInfo.forEach(btnInfo => {
  const button = document.createElement('span')
  const classList = btnInfo.classList
  classList.forEach(className => {
    button.classList.add(className)
  })
  buttonGroup.appendChild(button)
})


// 按钮功能

const leftbtn = document.querySelector('.btn.left')
const rightbtn = document.querySelector('.btn.right')

function getCardList() {
  return document.querySelectorAll('.card-group .card') // card-group 是class， 前面要加点。 
}

// 左键功能
function leftbtnFunc(event) {

  event.preventDefault() //阻止默认事件，默认事件可能会链接到别的地方，然后就会先执行别的命令，然后才回来执行这个，这样就会导致一些始料未及的问题，无法解决，为了防止这种情况发生，所以先阻止默认事件。

  // span 没有默认事件，但往往可能不清楚前面的类到底是div，span 还是别的，所以通常还是会先阻止默认事件
  const cardList = getCardList()
  cardGroup.insertBefore(cardList[0], buttonGroup)
  // console.log(cardList); // 每次点击按钮之后要拿新的图片，所以cardList要放在function里面，保存原有的卡片的顺序，每次点击后会重新排序
}


//右键功能
function rightbtnFunc(event) {
  event.preventDefault()
  const cardList = getCardList()
  cardGroup.insertBefore(cardList[cardList.length - 1], cardList[0])
}

leftbtn.addEventListener('click', leftbtnFunc)
rightbtn.addEventListener('click', rightbtnFunc)