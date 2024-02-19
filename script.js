const cellElements = document.querySelectorAll("[data-cell]")

for(const cell of cellElements){
    cell.addEventListener("click", handleClick, { once: true});
}

const handleClick = () => {
     // colocar a marca (x ou Círculo)
     // Verificar por vitória
     // Verificar por empate
     // Mudar o símbolo
}