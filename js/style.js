let link =document.querySelectorAll('.nav-link')

link.forEach((item, index)=>{
    
    item.addEventListener("click", function(){
            removeActive()
            item.classList.add('active')
        
        
    })
})


function removeActive(){
    link.forEach(item=>{
        item.classList.remove('active')
    })
}