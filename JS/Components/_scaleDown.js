export const scaleDown = () => {
    let tanjiro = document.querySelector('.tanjiro-div')
    tanjiro.addEventListener("mousedown", () => {
        tanjiro.style.transform = 'scale(0.98)'
        /* tanjiro.style.transform = 'scale(1.0)' */
    })
    tanjiro.addEventListener("mouseup", () => {
        tanjiro.style.transform = 'scale(1.0)'
        /* tanjiro.style.transform = 'scale(1.0)' */
    })
}