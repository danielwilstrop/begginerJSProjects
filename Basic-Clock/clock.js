
const clock = document.getElementById('clock')

const time = () => {
    let date = new Date()
    let hour = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    
    if (hour < 10){
        hour = `${hour}`
    }

    if (min < 10){
        min = `0${min}`
    }

    if (sec < 10){
        sec = `0${sec}`
    }
    
    clock.innerText = `${hour}:${min}:${sec}`
}

setInterval(time, 1000)
