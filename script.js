const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length

next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {
    // Xem hết bình luận
    return false
  }
  translateY += -400
  comment.style.transform = `translateY(${translateY}px)`
  count--
})

prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 3) {
    // Xem hết bình luận
    return false
  }
  translateY += 400
  comment.style.transform = `translateY(${translateY}px)`
  count++
})

const menu_mb = document.querySelector('.js-modal');
const modal = document.querySelector('.modal-js');
const close = document.querySelector('.close_btn');

function showMenuMB() {
  modal.classList.add('open_menu');
}

function removeMenu() {
  modal.classList.remove('open_menu');
}

menu_mb.addEventListener('click', showMenuMB);
close.addEventListener('click', removeMenu)

const menu_mb1 = document.querySelector('.js-modal1');
const modal1 = document.querySelector('.modal-js1');
const close1 = document.querySelector('.close_btn1');

function showMenuMB1() {
  modal1.classList.add('open_menu1');
}

function removeMenu1() {
  modal1.classList.remove('open_menu1');
}

menu_mb1.addEventListener('click', showMenuMB1);
close1.addEventListener('click', removeMenu1)
