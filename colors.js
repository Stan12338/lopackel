//yes this code is very unorganised and i could make it better but whatever



//gets the variables to change
var root = document.querySelector(':root');
//accent color buttons
var accredbutton = document.getElementById("accredbutton")
var accgreenbutton = document.getElementById("accgreenbutton")
var acccustombutton = document.getElementById("acccustombutton")
var acccustomselector = document.getElementById("acccolorsel")

//bg color buttons
var bgdarkbutton = document.getElementById("bgdarkbutton")
var bglightbutton = document.getElementById("bglightbutton")
var bgcustombutton = document.getElementById("bgcustombutton")
var bgcustomselector = document.getElementById("bgcolorsel")

 //bg image buttons
var bgimgdefault = document.getElementById("bgimgdefault")
var bgimgnone = document.getElementById("bgimgnone")
var customimgbtn = document.getElementById("customimgbtn")
var customimg = document.getElementById("customimg")

var background = document.getElementById("background")



var resetbtn = document.getElementById("resetbutton")


function setall() {
    root.style.setProperty("--maincomp", localStorage.getItem("--maincomp"))
    root.style.setProperty("--mainbg", localStorage.getItem("--mainbg"))
    root.style.setProperty("--textcolor", localStorage.getItem("--textcolor"))
    root.style.setProperty("--bgimg", localStorage.getItem("--bgimg"))
    root.style.setProperty("--mdbg", localStorage.getItem("--mdbg"))
}

function resetall() {
    root.style.setProperty("--maincomp", "#FF0000")
    root.style.setProperty("--mainbg", "#162027")
    root.style.setProperty("--textcolor", "#FFFFFF")
    root.style.setProperty("--bgimg", "initial")
    root.style.setProperty("--mdbg", "rgba(22, 32, 39, 0.75)")
    localStorage.setItem("--maincomp", "#FF0000")
    localStorage.setItem("--mainbg", "#162027")
    localStorage.setItem("--textcolor", "#FFFFFF")
    localStorage.setItem("--bgimg", "initial")
    localStorage.setItem("--mdbg", "rgba(22, 32, 39, 0.75)")
}

setall()

function setclr(element, clr) {
    root.style.setProperty(element, clr)
    localStorage.setItem(element, clr)
}
accredbutton.addEventListener("click", () =>{
   setclr("--maincomp", "#ff0000")
})
accgreenbutton.addEventListener("click", () =>{
    setclr("--maincomp", "#00ff00")
})

acccustombutton.addEventListener("click", () =>{
    setclr("--maincomp", acccustomselector.value)
})

bgdarkbutton.addEventListener("click", () =>{
    setclr("--mainbg", "#162027")
    setclr("--mdbg", "rgba(22, 32, 39, 0.75)")
    setclr("--textcolor", "#FFFFFF")
})

bglightbutton.addEventListener("click", () =>{
    setclr("--mainbg", "#FFFFFF")
    setclr("--mdbg", "rgba(255, 255, 255, 0.3)")
    setclr("--textcolor", "#000000")
})

bgcustombutton.addEventListener("click", () =>{
    setclr("--mainbg", bgcustomselector.value)
    setclr("--mdbg", "rgba(255, 255, 255, 0.3)")
    setclr("--textcolor", localStorage.getItem("--maincomp"))
})

bgimgdefault.addEventListener("click", () =>{
    setclr("--bgimg", "initial");
    background.src = "https://specials-images.forbesimg.com/imageserve/678b5bfa16f1f66f3b5f978d/Gundam-GQuuuuuuX/960x0.jpg?fit=scale"
})

bgimgnone.addEventListener("click", () =>{
    setclr("--bgimg", "none");
})

resetbtn.addEventListener("click", () =>{
    resetall()
})

customimgbtn.addEventListener("click", () =>{
    background.src = customimg.value
})

customimg.addEventListener('change', (event) => {
    const fileList = event.target.files;
    console.log(fileList);
});

customimg.addEventListener("change", async () => {
  const [file] = customimg.files;
  console.log(file)

  if (file) {
    background.src = await file.value;
  }
});