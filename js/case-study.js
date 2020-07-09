

function makeMarque() {
    // get all elements with a class name
    const marquee = document.getElementsByClassName('marquee');

    // convert 'html array' into a JS array
    // 'map' over each item in the array
    Array.from(marquee).map((span, i)=>{
      // span.style.fontSize = Math.random(i*100) * 100 + 'px'
      // span.style.color = 'rgba(' + Math.random(i) * 255 + '255, 255, 1)'
      let title  = span.textContent;
      let marqueeText = new Array(200).fill(title).join(' — ')
      span.innerHTML = marqueeText
    })

  }
makeMarque();




 