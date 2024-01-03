import textScrollStyles from './scrolling-text-styles.css';
let container;
let wordArray = [];
let index=0;

export default function createWordSlider(containerNode, wordArr){
    console.log('createWordSlider runs')
    // set variables
    container = containerNode;
    wordArray = wordArr;

    container.classList.add('scroll-container')//add class to container for styling
    // timer to control sliding words

    for(let i = 0;i<wordArray.length;i++){// add class of scroll-text to each word for styling
        wordArray[i].classList.add('scroll-text')
    }

    console.log('word array ')
    console.log(wordArray)

    setInterval(() => {
        console.log('setinterval runs')
        console.log('index '+index)

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
    console.log('slide in runs')
    node.classList.remove('scroll-out')
    console.log(node.style.left)
    node.classList.add('scroll-in')
    console.log(node.style.left)
    
}

// make element slide out
function slideOut(node){
    node.classList.remove('scroll-in')
    console.log('slideout runs')
    node.classList.add('scroll-out')
    
}