const umaStrlea = document.querySelector('.item1')
const duasStrlea = document.querySelector('.item2')
const tresStrlea = document.querySelector('.item3')
const quatroStrlea = document.querySelector('.item4')
const cincoStrlea = document.querySelector('.item5')

let avaliado = document.querySelector('.avaliado')

const card = document.querySelector('.card')
const card2 = document.querySelector('.card-2')

card2.classList.add('fechado')


const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {

      if (valor > 0) {

            card.classList.add('fechado')
            card2.classList.remove('fechado')
      }
      else {
            window.alert('Nothing selected')
      }
})

let valor = ''


umaStrlea.addEventListener("click", () => {

      valor = '1'
      avaliado.innerHTML = `<p>You selected  ${valor + " "}out of 5</p>`
      umaStrlea.style.background = 'hsl(216, 12%, 54%)'



      duasStrlea.style.background = 'hsl(213, 21%, 22%)'
      tresStrlea.style.background = 'hsl(213, 21%, 22%)'
      quatroStrlea.style.background = 'hsl(213, 21%, 22%)'
      cincoStrlea.style.background = 'hsl(213, 21%, 22%)'

})
duasStrlea.addEventListener("click", () => {

      valor = '2'
      avaliado.innerHTML = `<p>You selected  ${valor + " "}out of 5</p>`
      duasStrlea.style.background = 'hsl(216, 12%, 54%)'
      umaStrlea.style.background = 'hsl(213, 21%, 22%)'
      tresStrlea.style.background = 'hsl(213, 21%, 22%)'
      quatroStrlea.style.background = 'hsl(213, 21%, 22%)'
      cincoStrlea.style.background = 'hsl(213, 21%, 22%)'
})
tresStrlea.addEventListener("click", () => {

      valor = '3'
      avaliado.innerHTML = `<p>You selected  ${valor + " "}out of 5</p>`
      tresStrlea.style.background = 'hsl(216, 12%, 54%)'
      duasStrlea.style.background = 'hsl(213, 21%, 22%)'
      umaStrlea.style.background = 'hsl(213, 21%, 22%)'
      quatroStrlea.style.background = 'hsl(213, 21%, 22%)'
      cincoStrlea.style.background = 'hsl(213, 21%, 22%)'
})
quatroStrlea.addEventListener("click", () => {

      valor = '4'
      avaliado.innerHTML = `<p>You selected  ${valor + " "}out of 5</p>`
      quatroStrlea.style.background = 'hsl(216, 12%, 54%)'
      duasStrlea.style.background = 'hsl(213, 21%, 22%)'
      tresStrlea.style.background = 'hsl(213, 21%, 22%)'
      umaStrlea.style.background = 'hsl(213, 21%, 22%)'
      cincoStrlea.style.background = 'hsl(213, 21%, 22%)'
})
cincoStrlea.addEventListener("click", () => {

      valor = '5'
      avaliado.innerHTML = `<p>You selected  ${valor + " "}out of 5</p>`
      cincoStrlea.style.background = 'hsl(216, 12%, 54%)'
      duasStrlea.style.background = 'hsl(213, 21%, 22%)'
      tresStrlea.style.background = 'hsl(213, 21%, 22%)'
      quatroStrlea.style.background = 'hsl(213, 21%, 22%)'
      umaStrlea.style.background = 'hsl(213, 21%, 22%)'
})





