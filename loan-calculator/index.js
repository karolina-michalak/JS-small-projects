document.getElementById('loan-form').addEventListener('submit', function(e){
    document.getElementById('results').style.display = 'none'
    document.getElementById('loading').style.display = 'block'
    setTimeout(calculateResutls, 2000)

    e.preventDefault()
})

function calculateResutls() {
    const amount = document.getElementById('amount')
    const interest = document.getElementById('interest')
    const years = document.getElementById('years')
    const monthlyPayment = document.getElementById('monthly-payment')
    const totalPayment = document.getElementById('total-payment')
    const totalInterest = document.getElementById('total-interest')
    
    const principal = parseFloat(amount.value) 
    const calculatedInterest = parseFloat(interest.value) / 100 / 12
    const calculatedPayments = parseFloat(years.value) * 12

    const x = Math.pow(1 + calculatedInterest, calculatedPayments)
    const monthly = (principal * x * calculatedInterest) / (x - 1)

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2)
        totalPayment.value = (monthly * calculatedPayments).toFixed(2)
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2)
        document.getElementById('results').style.display = 'block'
        document.getElementById('loading').style.display = 'none'

    } else {
        showError('Please fill in all the fields')
    }
}

showError = error => {
    document.getElementById('results').style.display = 'none'
    document.getElementById('loading').style.display = 'none'
    blockButton()
    const div = document.createElement('div')
    const card = document.querySelector('.card')
    const heading = document.querySelector('.heading')
    div.className = 'alert alert-danger'
    div.appendChild(document.createTextNode(error))
    card.insertBefore(div, heading)
    setTimeout(function(){
        clearError()
        unblockButton()
    }, 3000)
}

blockButton = () => {
    const btn = document.querySelector('.btn')
    btn.setAttribute('disabled', true)
}

clearError = () => {
    document.querySelector('.alert').remove()
}

unblockButton = () => {
    const btn = document.querySelector('.btn')
    btn.removeAttribute('disabled', false)
}