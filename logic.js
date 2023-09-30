function navegar(id){
    const dois = document.getElementById(id)
    dois.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
}