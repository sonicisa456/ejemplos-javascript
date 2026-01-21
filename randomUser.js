class Usuario {
    //constructor
    constructor(nombre, email, foto){
        this.nombre = nombre;
        this.email = email;
        this.foto = foto;
    }


    mostrar(){
        return `
            <div class="card">
                <img src="${this.foto}" alt="${this.nombre}">
                <h3>${this.nombre}</h3>
                <p>${this.email}</p>
            </div>
        `;
    }
};

const renderUsuarios = (usuarios) => { //funcion para renderizar los usuarios
    const contenedor = document.getElementById('usuarios'); //selecciona el contenedor
    contenedor.innerHTML = usuarios.map(u => u.mostrar()).join("");//mapea los usuarios y los muestra
};

//promesa con async / await para consumir API
const obtenerUsuarios = async (cantidad) => {
    try {
        const respuesta = await fetch(`https://randomuser.me/api/?results=${cantidad}`);
        const datos = await respuesta.json();
        
        let listaUsuarios = [];
        
        datos.results.forEach(u => {
            listaUsuarios.push(new Usuario(u.name.first, u.email, u.picture.medium));
        });

        renderUsuarios(listaUsuarios);

    } catch (error) {
        console.log("Ocurrio un error al obtener los usuarios", error);
    }
}

//evento de boton
const boton = document.getElementById('btnCargar');
boton.addEventListener("click", () => obtenerUsuarios(7));