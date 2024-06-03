// Nội dung thiệp
var letterContent ='Cũng đã đến ngày cô ấy "già" hơn tui 1 tuổi ^^ .Hôm nay là một ngày đặc biệt, ngày hạnh phúc của em!. Cảm ơn em đã đến bên anh, tin tưởng và sát cánh bên anh. Có em, anh thấy cuộc đời mình trở nên tươi sáng và đầy ý nghĩa hơn. Em tựa như chiếc cầu vồng chiếu sáng, sưởi ấm tâm hồn anh. Cảm ơn em mang cho anh những ngày tháng hạnh phúc nhất!. Chúc mừng sinh nhật em, cô công chúa anh yêu thương nhất!!!. '

// var pageNext1 =
// "Đến trang tiếp theo"

// Typing Speed (Khuyến khích value:75) - (value càng GIẢM speed càng CAO)
durationWrite = 40 


// Hiệu ứng gõ chữ
function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})