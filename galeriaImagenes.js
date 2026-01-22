class Imagen{
    constructor(url){
        this.direccion = url;
    }

    mostrar(){
        return `
            <div class="card" style="width: 300px; margin: 10px; display: inline-block;">
                <img src="${this.direccion}" alt="Imagen" style="width: 100%; border-radius: 8px;">
            </div>
        `
    }
}



const obtenerImagenes = async () => {
    const res = await fetch("https://picsum.photos/v2/list?page=2&limit=6")
    const datos = await res.json();

    let lista = datos.map((img) => {
        return new Imagen(img.download_url);
    });

    document.getElementById("galeria").innerHTML
    = lista.map(i => i.mostrar()).join("");
}

//listener para cargar imagenes con el click
let button = document.getElementById("btnAccion");
button.addEventListener("click", obtenerImagenes);
