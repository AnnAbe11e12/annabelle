
import createWordSlider from './scrolling-text.js'



let scrollTextContainer = document.querySelector('.scroll-text-container');
let scrollTextList = document.querySelectorAll('.scroll-test')


window.addEventListener('load',()=>{
    console.log('load event fires')
    console.log('container '+scrollTextContainer)
    console.log('list '+scrollTextList)
    console.log(createWordSlider)
    createWordSlider(scrollTextContainer, scrollTextList)
})
