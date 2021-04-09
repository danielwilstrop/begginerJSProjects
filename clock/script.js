setInterval(setClock, 1000)

const secondHand = document.querySelector('[data-second-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const hourHand = document.querySelector('[data-hour-hand]')
const dateBox = document.querySelector('[data-box')


function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    const day = currentDate.getDate()
    const month = currentDate.getMonth() + 1
    setRotation(secondHand,secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
    dateBox.innerHTML = `${day} / ${month}`
}

function setRotation(element, rotationRatio) {
       element.style.setProperty('--rotation', rotationRatio * 360)
}