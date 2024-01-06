import textScrollStyles from './scrolling-text-styles.css';
let container;
let wordArray = [];
let index=0;

export default function createWordSlider(containerNode, wordArr){

    // set variables
    container = containerNode;
    wordArray = wordArr;

    container.classList.add('scroll-container')//add class to container for styling
    // timer to control sliding words

    for(let i = 0;i<wordArray.length;i++){// add class of scroll-text to each word for styling
        wordArray[i].classList.add('scroll-text')
    }

    slideIn(wordArray[0])
    setInterval(() => {

    slideOut(wordArray[index])
        if(index>=wordArray.length-1){
            index = 0
        }else{
            index++
        }
         slideIn(wordArray[index])
    }, 1500);
}

// make element slide in
function slideIn(node){
    node.classList.remove('scroll-out')
    node.classList.add('scroll-in')
    
}

// make element slide out
function slideOut(node){
    node.classList.remove('scroll-in')
    node.classList.add('scroll-out')
    
}