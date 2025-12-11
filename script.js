document.addEventListener(('DOMContentLoaded'),()=>{
    let btn=document.querySelector('#menu-bar');
    let container=document.querySelector('#menu');
    let body=document.querySelector('body');
    let arrow=document.querySelector('.img-fluid');
    btn.addEventListener(('click'),()=>{
        container.classList.toggle('hidden');
        if(container.classList.contains('hidden')===false)
        {
           body.classList.add('scrollable');
           arrow.style.display='none';
        }
        else{
            body.classList.remove('scrollable');
            arrow.style.display='inline-block';
        }
    })
    window.addEventListener(('resize'),()=>{
        if(window.innerWidth>=750)
        {
            arrow.style.display='inline-block';
        }
        else if(window.innerWidth<=750 && container.classList.contains('hidden')==false)
        {
            arrow.style.display='none';
        }
    })
})