let time = document.querySelector(".time")
time.innerHTML = new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true }).format(new Date())
time.setAttribute("title", new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true, year: 'numeric', month: 'long', day: 'numeric' }).format(new Date()))

let timeSetter = setInterval(() => {
    time.innerHTML = new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true }).format(new Date())
    time.setAttribute("title", new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true, year: 'numeric', month: 'long', day: 'numeric' }).format(new Date()))
}, 60000);

document.querySelector(".desktop").onclick = function () {
    document.querySelectorAll(".icon").forEach((e) => {
        e.classList.remove("selected")
    })
}

document.querySelectorAll(".icon").forEach((icon) => {
    icon.onclick = function () {
        setTimeout(() => {
            document.querySelectorAll(".icon").forEach((e) => {
                e.classList.remove("selected")
            })
            this.classList.add("selected")
        }, 1);
    }
})

document.querySelector(".max").onclick = function () {
    document.querySelector(".window").classList.toggle("maximized")
}

document.querySelector(".min").onclick = function () {
    document.querySelector(".readme").classList.toggle("active")
    document.querySelector(".window").classList.toggle("minimized")
}

document.querySelector(".readme").onclick = function () {
    document.querySelector(".readme").classList.toggle("active")
    document.querySelector(".window").classList.toggle("minimized")
}

document.querySelector(".cls").onclick = function () {
    document.querySelector(".readme").style.display = "none"
    document.querySelector(".window").style.display = "none"
}
document.querySelector(".rickrool").ondblclick = function () {
    setTimeout( ()=> { this.classList.remove("selected") }, 2 )
    window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0")
}

document.querySelector(".adobe").ondblclick = function () {
    setTimeout( ()=> { this.classList.remove("selected") }, 1 )
    window.open("https://drive.google.com/file/d/1IPYGgwbmONVNjx4V4Pk-26Ab1Km_xbEC/view")
}

document.querySelector(".my-computer").ondblclick = function () {
    setTimeout( ()=> { this.classList.remove("selected") }, 2 )
    window.open("https://github.com/123Anurag123")
}

document.querySelector(".my-network").ondblclick = function () {
    setTimeout( ()=> { this.classList.remove("selected") }, 2 )
    window.open("https://www.linkedin.com/in/123anurag123/")
}



document.querySelector(".note-pad").ondblclick = function () {
    setTimeout( ()=> { this.classList.remove("selected") }, 2 )
    document.querySelector(".readme").style.display = "initial"
    document.querySelector(".window").style.display = "initial"
    document.querySelector(".readme").classList.add("active")
    document.querySelector(".window").classList.remove("minimized")}
    document.querySelector("textarea").value = "Hello World!\n\n -Feels Nostalgic ahh Portfolio \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n Inspired by Dustinn Brett -(https://dustinbrett.com) "








