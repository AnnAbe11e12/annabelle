import scrollAnimations from './scroll-animations.css'

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
    
      entry.target.classList.add('show-animation')
    }else{
      entry.target.classList.remove('show-animation')
    }

  })
 
})

export default function fadeInOnScroll(list){
  console.log('fadeInOn Scroll runs')
  for(let i = 0;i<list.length;i++){
    list[i].classList.add('hidden')
    observer.observe(list[i])
  }
 
}


