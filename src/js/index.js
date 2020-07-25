let resultDiv = document.querySelector('.result')
let h1 = document.querySelector('#finalResult')
let valueButton = document.querySelector('#button')

function insertValueInHTML(digitedValue, convertedValue, digitedValueConverted) {
  axios
    .get('https://free.currconv.com/api/v7/convert?q=BRL_USD&compact=ultra&apiKey=290f5fe71e4298e51733')
    .then(function (response) {
      // handle success
      const data = response.data
      convertedValue = (digitedValueConverted * data.BRL_USD)


      if (convertedValue.toString() === 'NaN') {
        alert('Favor digitar apenas numeros')
        digitedValue.value = ''


      } else {

        h1.innerHTML = digitedValueConverted > 1 ?
          `R$${digitedValueConverted} em Dollar são $${convertedValue}` :
          `R$${digitedValueConverted} em Dollar é $${convertedValue}`
        digitedValue.value = ''
      }

    })
}

const converteValor = () => {

  let digitedValue = document.querySelector('#valor')
  let digitedValueConverted = parseFloat(digitedValue.value)
  let convertedValue

  insertValueInHTML(digitedValue, convertedValue, digitedValueConverted)
}




valueButton.addEventListener('click', () => {
  event.preventDefault()
  converteValor()



})

