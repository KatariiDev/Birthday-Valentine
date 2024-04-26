// Nội dung thiệp
var letterContent = 
"Chúc mừng sinh nhật"

var pageNext1 =
"Đến trang tiếp theo"

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

function effectWrite1 () {
    var boxPage = document.querySelector(".pageNext1")
    pageNext1Splited = pageNext1.split("")
    
    pageNext1Splited.forEach((val, index) => {
        setTimeout(() => {
            boxPage.innerHTML += val    
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