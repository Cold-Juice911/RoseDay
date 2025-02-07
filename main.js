function displayText() {
    var text = document.getElementById("lol");
    text.style.display = "block";
    var btn = document.getElementById("click");
    btn.style.display = "none";
  }

  gsap.from(".petal8",{
    y:-250,
    x:30,
    duration:2,
    delay:4,
    rotate:360,
    scale:0.5,
    opacity:0,
  })

  gsap.from(".petal1",{
    rotateZ:-5,
    duration:1,
    delay:2.3,
    x:-30,
    y:-20,
    scale:0.5,
    opacity:0,
  })

  gsap.from(".petal3",{
    rotateZ:-5,
    duration:1,
    delay:2.2,
    x:-10,
    y:10,
    scale:0.5,
    opacity:0,
  })

  gsap.from(".petal5",{
    rotateZ:-5,
    duration:1,
    delay:2,
    x:5,
    y:30,
    scale:0.5,
    opacity:0,
  })

  gsap.from(".petal7",{
    rotateZ:-5,
    duration:1,
    delay:2.4,
    x:-35,
    y:-50,
    scale:0.5,
    opacity:0,
  })

  gsap.from(".petal2",{
    rotateZ:5,
    duration:1,
    delay:2.3,
    x:40,
    y:-20,
    scale:0.5,
    opacity:0,
  })

  gsap.from(".petal4",{
    rotateZ:5,
    duration:1,
    delay:2.2,
    x:20,
    y:10,
    scale:0.5,
    opacity:0,
  })

  gsap.from(".petal6",{
    rotateZ:5,
    duration:1,
    delay:2,
    x:10,
    y:34,
    scale:0.5,
    opacity:0,
  })

  gsap.from(".stem",{
    height:0,
    x:1,
    y:-45,
    duration:1.5,
    delay:2.3,
  })

  gsap.from(".leaf1",{
    height:0,
    width:0,
    x:40,
    y:25,
    duration:1.5,
    delay:3.5,
  })

  gsap.from(".leaf2",{
    height:0,
    width:0,
    x:-15,
    y:20,
    duration:1.5,
    delay:3.7,
  })

  gsap.from(".heading",{
    duration:1.5,
    delay:1,
    scale:0,
    opacity:0,
  })

  gsap.from("#rose",{
    opacity:0,
    delay:2,
    duration:1.5,
    fontSize:0,
  })

  gsap.from(".para",{
    height:0,
    opacity:0,
    duration:2,
    delay:4,
  })

