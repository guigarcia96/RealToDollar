let resultDiv = document.querySelector('.result')
let h1 = document.querySelector('#finalResult')
let valueButton = document.querySelector('#button')

function insertValueInHTML(digitedValue, convertedValue, digitedValueConverted, response) {

  let dollarValue = response


  convertedValue = (digitedValueConverted * dollarValue.BRL_USD)


  if (convertedValue.toString() === 'NaN') {
    alert('Favor digitar apenas numeros')
    digitedValue.value = ''


  } else {


    h1.innerHTML = digitedValueConverted > 1 ?
      `R$${String(digitedValueConverted.toFixed(2)).replace('.', ',')} em Dollar são $${String(convertedValue.toFixed(2)).replace('.', ',')}` :
      `R$${String(digitedValueConverted.toFixed(2)).replace('.', ',')} em Dollar é $${String(convertedValue.toFixed(2)).replace('.', ',')}`
    digitedValue.value = ''
  }


}

const converteValor = () => {

  axios.get('https://free.currconv.com/api/v7/convert?q=BRL_USD&compact=ultra&apiKey=290f5fe71e4298e51733')
    .then(response => {

      valueButton.addEventListener('click', () => {
        event.preventDefault()
        let digitedValue = document.querySelector('#valor')
        let digitedValueConverted = digitedValue.value
        digitedValueConverted = digitedValueConverted.replace(',', '.')
        digitedValueConverted = parseFloat(digitedValueConverted)
        let convertedValue
        insertValueInHTML(digitedValue, convertedValue, digitedValueConverted, response.data)



      })
    })
}
converteValor()
