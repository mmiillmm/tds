let index = 0,
    interval = 1000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = csil => {
    csil.style.setProperty("--csil-left", `${rand(-10, 100)}%`);
    csil.style.setProperty("--csil-top", `${rand(-40, 80)}%`);

    csil.style.animation = "none";
    csil.offsetHeight;
    csil.style.animation = "";
}

for(const csil of document.getElementsByClassName("mag-csil")) {
    setTimeout(() => {
    animate(csil);
    
    setInterval(() => animate(csil), 1000);
  }, index++ * (interval / 3))
}