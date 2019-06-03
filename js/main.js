function makeMarque() {
    // get all elements with a class name
    const marquee = document.getElementsByClassName('marquee');

    // convert 'html array' into a JS array
    // 'map' over each item in the array
    Array.from(marquee).map((span, i)=>{
      i % 2 ? span.className = "marquee-right" : span.className = "marquee-left";
      let title  = span.textContent;
      let marqueeText = new Array(50).fill(title).join(' — ')
      span.innerHTML = marqueeText
    })

  }

  makeMarque();