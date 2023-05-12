/* here main work is -->
    1) 1st div url have Active clase which pic have large screen
    2) but whene click on other pic so --> that pic shown in large frame 
    i.e. active class remove from 1st div and set on that div where you click 
*/
//here store all panel class div in panels arrey like
const panels = document.querySelectorAll('.panel');

console.log(panels);
function removeActiveClass(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    })
}

panels.forEach((panel)=>{
    panel.addEventListener('click', ()=>{
       // console.log(123)
       removeActiveClass();
       panel.classList.add('active')
    })
})