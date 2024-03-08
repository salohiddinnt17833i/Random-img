let wrapper = document.getElementById('wrapper')
const random = Math.trunc(Math.random() * 5)

function createImg() {
    return `
    <img src="./img/IMAGE-${random}.png" alt="">
   `
}
document.addEventListener('DOMContentLoaded', function () {
    let c = createImg()
    wrapper.innerHTML = c   
})