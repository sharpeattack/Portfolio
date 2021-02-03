// Tagline stuff
const taglines = [
  "Thought Leader",
  "Human focussed, like all humans",
  "Assistant to the regional principle designer",
  "Senior Principle Headmaster of Experience",
  "My work transforms lives...",
  "A universe–centric designer",
  "CEO–centric designer",
  "Follow me on Tiktok",
  "Working at the intersection of [INSERT TERM] and [INSERT TERM]"

];

const randomItem = taglines[Math.floor(Math.random()*taglines.length)];
document.querySelector(".tagline").innerHTML = randomItem;


function makeMarque() {
    // get all elements with a class name
    const marquee = document.getElementsByClassName('marquee');

    // convert 'html array' into a JS array
    // 'map' over each item in the array
    Array.from(marquee).map((span, i)=>{
      // span.style.fontSize = Math.random(i*100) * 100 + 'px'
      // span.style.color = 'rgba(' + Math.random(i) * 255 + '255, 255, 1)'
      i % 2 ? span.className = "marquee-right" : span.className = "marquee-left";
      let title  = span.textContent;
      let marqueeText = new Array(50).fill(title).join(' — ')
      span.innerHTML = marqueeText
    })

  }

  makeMarque();






  // HERO Section Gallery


  // const images = [
  //   "../img/image-01.png","../img/image-02.png","../img/image-03.png","../img/image-04.png",
  //   "../img/image-05.png","../img/image-06.png","../img/image-07.png","../img/image-08.png"
  // ]
  
  // let i = 0
  
  
  // var hero = document.getElementsByClassName('hero-section')[0];
  // // var imgArea = document.getElementsByClassName('hero-images') [0];

  // function placeImage(x,y) {
  //   const nextImage = images[i]
    
  //   const img = document.createElement("img")
  //   img.setAttribute("src", nextImage)
  //   img.style.left = x + "px"
  //   img.style.top = y + "px"
    
  //  hero.appendChild(img)
    
  //   i = i + 1
  //   if (i >= images.length) {
  //     i = 0
  //   }
  // }
  
  // hero.addEventListener("click", function(event) {
  //   event.preventDefault()
  //   placeImage(event.pageX,event.pageY)
  // })
  
  // hero.addEventListener("touchend", function(event) {
  //   event.preventDefault()
  //   placeImage(event.pageX,event.pageY)
  // })