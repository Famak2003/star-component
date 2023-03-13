const starList = document.querySelectorAll('i')
const starBox = document.querySelector('.starBottom')
const starListArr = Array.from(starList)
    // console.log(starBox);


// console.log(starList[0])
let count;
starBox.addEventListener('click', function(e) {
    const num = Number(e.target.dataset.num)
    if (e.target.classList.contains('star')) {
        if (count === num) {
            starListArr.forEach((item, idx) => {
                item.classList.remove('active')
            })
            count = undefined
        } else {
            count = num
            starList.forEach((item, idx) => {

                if (idx <= num) {
                    item.classList.add('active')
                }
                if (idx > num) {
                    item.classList.remove("active")
                }

            })
        }
    }

})

starBox.addEventListener("mouseover", function(e) {
    const num = Number(e.target.dataset.num);
    if (e.target.classList.contains('star')) {
        starList.forEach((item, idx) => {
            if (item.classList.contains("active")) return
            if (idx <= num) {
                item.classList.add('hovered')
            }
        })
    }
})

starBox.addEventListener("mouseout", function(e) {
    const num = Number(e.target.dataset.num);
    if (e.target.classList.contains('star')) {
        starList.forEach((item, idx) => {

            item.classList.remove('hovered')

        })
    }
})