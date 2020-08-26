//selectors
const clock = document.querySelector('.clock');
//todo selector
const addtodo = document .querySelector('.add');

// create a time function.
function tiktok(){
//add a new date and time to the clock
        const now = new Date();

        const h = now.getHours();
        const m = now.getMinutes();
        const s = now.getSeconds();
        const milli = now.getMilliseconds();

        const html =`
        <span>${h}</span> :
        <span>${m}</span> :
        <span>${s}</span>`;
    
        clock.innerHTML = html;
        
}

setInterval(tiktok,1000);

//add an event listener to the form.
addtodo.addEventListener('click',(e)=>{
    
})