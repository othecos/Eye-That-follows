// @ts-nocheck
document.querySelector('body').addEventListener('mousemove', eyeball);
document.querySelectorAll('.face').forEach((face)=>{
    face.addEventListener('click', killface);
})
function killface(event){
   let face = event.target
   face.classList.toggle('kill')
   if(face.classList.contains('kill')){
       face.style.cursor = 'url('+ 'injection.png'+ ') 2 2 !important'
       console.log(face.style)
   }
}
function eyeball(event) {
    var eye = document.querySelectorAll('.eye')
    eye.forEach(function (eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2)
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2)
        let radin = Math.atan2(event.pageX - x, event.pageY - y)
        let rot = (radin * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate(" + rot + "deg)";
    })
}