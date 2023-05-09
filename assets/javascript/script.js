const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const watch = setInterval(function time(){
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    if (hour < 10) hour = '0' + hour 

    if (minute < 10) minute = '0' + minute

    if (second < 10) second = '0' + second

    hours.textContent = `${hour}`
    minutes.textContent = `${minute}`
    seconds.textContent = `${second}`

},1000)
