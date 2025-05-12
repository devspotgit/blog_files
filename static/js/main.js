


const resizeObserver = new ResizeObserver( entries => {
    entries.forEach(entry => {
        if(entry.target == document.querySelector(".main")){
            if(entry.target.offsetWidth<=700 && ! entry.target.hasAttribute("mobile")){
                entry.target.setAttribute("mobile", "")
                // console.log("mobile attribute added")
            }
            else if(entry.target.offsetWidth > 700 && entry.target.hasAttribute("mobile")){
                entry.target.removeAttribute("mobile")
                // console.log("mobile attribute removed")
            }
        }
    })
})


resizeObserver.observe(document.querySelector(".main"))


document.querySelector(".side-open").addEventListener("click", ()=>{
    document.querySelector(".side").setAttribute("open", "")
    document.querySelector(".transparent").setAttribute("show", "")
})

document.querySelector(".side-close").addEventListener("click", ()=>{
    document.querySelector(".side").removeAttribute("open")
    document.querySelector(".transparent").removeAttribute("show")
})

document.querySelector(".transparent").addEventListener("click", ()=>{
    document.querySelector(".side").removeAttribute("open")
    document.querySelector(".transparent").removeAttribute("show")
})





