
function toHsl(hex,value) {

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);

    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0; 
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    s = s * 100;
    s = Math.round(s);
    l = l * 100;
    l = Math.round(l);
    h = Math.round(360 * h);


  switch (value) {
      case '1':
          complimentaries(h,s,l)
          
          break;
      case '2':
          splitComplimentaries(h,s,l)
          
          break;
      case '3':
         Tradiac(h,s,l)
          
          break;
      case '4':
          analogous(h,s,l)
          
          break;
  
      default:
          break;
  }




}



const filterBtns = document.querySelectorAll('.form')
const input = document.querySelector('.hsl')
input.addEventListener('input',()=>{
    const hexa = document.querySelector('.hsl')
    var hex = hexa.value
    filterBtns.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
         const value =   e.currentTarget.dataset.id
      
         toHsl(hex,value)
         
        })
    })

})






function complimentaries(h, s, l) {

    var firstColor = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
    var body = document.querySelector('.color-2')
    var text = document.querySelector('.color-3')
    text.style.background = firstColor;

    var hn = 0
    if (h > 180) {
        hn = h - 180
    }
    else {
        hn = h + 180;

    }
    var nl = 100 - l
    var ns = 100 - s
    var newColor = 'hsl(' + hn + ', ' + ns + '%, ' + nl + '%)';
    body.style.background = newColor
    document.querySelector('.hsl-2').value = firstColor
    document.querySelector('.hsl-3').value = newColor

}






function analogous(h, s, l) {
    var firstolor = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';

    var hn = 0
    var hn = 0
    if (h > 180) {
        hn = h - 180
    }
    else {
        hn = h + 180;

    }
    var nl = 100 - l
    var ns = 100 - s
    var newColor = 'hsl(' + hn + ', ' + ns + '%, ' + nl + '%)';
    if(hn>330){
        var afterHue = (hn+30)-360
    }else if(hn<30){
        var beforeHue = (hn-30)+360

    }else {
        var afterHue = hn+30
        var beforeHue = hn-30
    }
    var SecondColor = 'hsl(' + afterHue + ', ' + ns + '%, ' + nl + '%)'
    var thirdColor = 'hsl(' + beforeHue + ', ' + ns + '%, ' + nl + '%)'

    const  color = document.querySelector('.color-1')
    const  colorTwo = document.querySelector('.color-2')
    const  colorThree = document.querySelector('.color-3')
    const  colorFour = document.querySelector('.color-4')
    
    color.style.background = newColor
    colorTwo.style.background = firstolor
    colorThree.style.background= thirdColor
    colorFour.style.background= SecondColor

    document.querySelector('.hsl-1').value = newColor
    document.querySelector('.hsl-2').value = firstolor
    document.querySelector('.hsl-3').value = thirdColor
    document.querySelector('.hsl-4').value = SecondColor


    




}


function Tradiac(h,s,l){
    var firstolor = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';

    var hn = 0
    var hn = 0
    if (h > 180) {
        hn = h - 180
    }
    else {
        hn = h + 180;

    }
    var nl = 100 - l
    var ns = 100 - s
    var newColor = 'hsl(' + hn + ', ' + ns + '%, ' + nl + '%)';
    if(hn>330){
        var afterHue = (hn+60)-360
    }else if(hn<30){
        var beforeHue = (hn-60)+360

    }else {
        var afterHue = hn+60
        var beforeHue = hn-60
    }
    var SecondColor = 'hsl(' + afterHue + ', ' + ns + '%, ' + nl + '%)'
    var thirdColor = 'hsl(' + beforeHue + ', ' + ns + '%, ' + nl + '%)'

    const  color = document.querySelector('.color-1')
    const  colorTwo = document.querySelector('.color-2')
    const  colorThree = document.querySelector('.color-3')
    const  colorFour = document.querySelector('.color-4')
    
    color.style.background = newColor
    colorTwo.style.background = firstolor
    colorThree.style.background= thirdColor
    colorFour.style.background= SecondColor

    document.querySelector('.hsl-1').value = newColor
    document.querySelector('.hsl-2').value = firstolor
    document.querySelector('.hsl-3').value = thirdColor
    document.querySelector('.hsl-4').value = SecondColor

    }




function splitComplimentaries(h,s,l){
    var firstolor = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';

    var hn = 0
    var hn = 0
    if (h > 180) {
        hn = h - 180
    }
    else {
        hn = h + 180;

    }
    var nl = 100 - l
    var ns = 100 - s
    var newColor = 'hsl(' + hn + ', ' + ns + '%, ' + nl + '%)';
    if(hn>330){
        var afterHue = (hn+90)-360
    }else if(hn<30){
        var beforeHue = (hn-90)+360

    }else {
        var afterHue = hn+90
        var beforeHue = hn-90
    }
    var SecondColor = 'hsl(' + afterHue + ', ' + ns + '%, ' + nl + '%)'
    var thirdColor = 'hsl(' + beforeHue + ', ' + ns + '%, ' + nl + '%)'

    const  color = document.querySelector('.color-1')
    const  colorTwo = document.querySelector('.color-2')
    const  colorThree = document.querySelector('.color-3')
    const  colorFour = document.querySelector('.color-4')
    
    color.style.background = newColor
    colorTwo.style.background = firstolor
    colorThree.style.background= thirdColor
    colorFour.style.background= SecondColor

    document.querySelector('.hsl-1').value = newColor
    document.querySelector('.hsl-2').value = firstolor
    document.querySelector('.hsl-3').value = thirdColor
    document.querySelector('.hsl-4').value = SecondColor
   
}

const copyToClipboard = document.querySelectorAll('.hsll')
copyToClipboard.forEach((copy)=>{
    copy.addEventListener("click",(e)=>{
        var copyText =e.currentTarget

        copyText.select();
        copyText.setSelectionRange(0, 99999); 
      

        document.execCommand("copy");
        alert("Copied the text: " + copyText.value);
        
    })
})




