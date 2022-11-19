const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const date = new Date('Jan 1 2023 00:00:00')

function counter() {
  const now = new Date()
  const gap = date - now

  const d = Math.floor(gap / 1000 / 60 / 60 / 24)
  const h = Math.floor(gap / 1000 / 60 / 60) % 24
  const m = Math.floor(gap / 1000 / 60) % 60
  const s = Math.floor(gap / 1000) % 60
  if (gap) {
    days.innerHTML = d
    hours.innerHTML = h
    minutes.innerHTML = m
    seconds.innerHTML = s
  }
}

setInterval(counter , 1000)


