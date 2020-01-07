//loop over sections and replace image with canvas

const sections = document.querySelectorAll("section")

sections.forEach(section => {
  const originalImage = section.querySelector("img")
  const originalImageSource = originalImage.getAttribute("src")
  
section.innerHTML = ""


//pixi set up
const app = new PIXI.Application({
  width: 752,
  height: 600,
  transparent: true
});
//add pixi to application
section.appendChild(app.view)
  //make new image

  let image = null
  let displacementImage = null
  //loader 
  const loader = new PIXI.loaders.Loader()
	
  //load in image
  loader.add("image", originalImageSource)
  loader.add("displacement", "displacement1.jpg")
  loader.load((loader, resources) => {
    //once image is loaded do thing
    const image = new PIXI.Sprite(resources.image.texture)
    displacementImage = new PIXI.Sprite(resources.displacement.texture)
    
    
    image.x =  376
    image.y = 300
    image.width = 752
    image.height = 600
    image.interactive = true
    
    image.anchor.x = 0.5
    image.anchor.y = 0.5
    
    displacementImage.width = 1200
    displacementImage.height = 1200
    displacementImage.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT
    
    image.filters=[

//       new PIXI.filters.BlurFilter(3,5),
//       new PIXI.filters.NoiseFilter(0.2)
      new PIXI.filters.DisplacementFilter(displacementImage, 50),
    ]
    //add image to app
    app.stage.addChild(image)
    app.stage.addChild(displacementImage)
    
// 	 add animations
//      app.ticker.add(() => {
//     	displacementImage.x = displacementImage.x + 1
// 	    displacementImage.y = displacementImage.y + 1

//      })
    
  })
  
  let currentX = 0
  let aimX = 0
  let currentY = 0
  let aimY = 0
  
  //listener events for stuff
  section.addEventListener("mousemove", function (event) {
    aimX = event.pageX
    aimY = event.pageY
 //     displacementImage.y = event.pageY
                           
})

  //make animation in js
  
  const animate = function () {
//     currentX wants to be aimX
    const diffX = aimX - currentX
    const diffY = aimY - currentY
    
    currentX = currentX + (diffX * 0.1)
    currentY = currentY + (diffY * 0.025)
    // check displacement has loaded and move it
    if (displacementImage) {
      displacementImage.x = currentX
      displacementImage.y = displacementImage.y + 1 + (diffY * 0.1)
      
    }
    //repeat animation each frame
    requestAnimationFrame(animate)
  }
  
  //run animation
  animate()
  
})








