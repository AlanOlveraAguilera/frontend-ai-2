// almaceno TODOS los elementos que contengan la clase categoria
const categorias = document.querySelectorAll(".categoria")
// almaceno un elemento que contenga el id
const contenido = document.querySelector("#contenido")

categorias.forEach(categoria => {
    categoria.addEventListener("cick", async(e)=>{
        const nombreArchivo = e.currentTarget.getAttribute("data-seccion"))
        try{
            const archivo = await fetch('${npmbreArchivo}.html')

        }
    
      }
    )
})