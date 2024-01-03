import mainStyles from './main-styles.css'
import createWordSlider from './scrolling-text.js'


let scrollTextContainer = document.querySelector('.scroll-text-container');
let scrollTextList = document.querySelectorAll('.scroll-test')


window.addEventListener('load',()=>{
    createWordSlider(scrollTextContainer, scrollTextList)
})
