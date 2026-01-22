class Usuario {
    constructor(nombre, email, foto){
        this.nombre = nombre;
        this.email = email;
        this.foto = foto;
    }

    // Definimos mostrar aquí para que TODOS los usuarios puedan usuarlo
    mostrar(){
        return `
            <div class="card">
                <img src="${this.foto}" alt="${this.nombre}">
                <h3>${this.nombre}</h3>
                ${this.rol ? `<h4>${this.rol}</h4>` : ''} 
                <p>${this.email}</p>
            </div>
        `;
    }
}

class UsuarioConRol extends Usuario {
    constructor(nombre, email, foto, rol) {
        super(nombre, email, foto);
        this.rol = rol;
    }
    // Ya no necesitas definir mostrar() aquí, lo hereda del padre
}

const renderUsuarios = (usuarios) => { //funcion para renderizar los usuarios
    const contenedor = document.getElementById('usuarios'); //selecciona el contenedor
    contenedor.innerHTML = usuarios.map(u => u.mostrar()).join("");//mapea los usuarios y los muestra
};

//promesa con async / await para consumir API
const obtenerUsuarios = async (cantidad) => {
    try {
        const respuesta = await fetch(`https://randomuser.me/api/?results=${cantidad}`);
        const datos = await respuesta.json();
        const roles = ['Admin', 'Editor', 'Viewer']
        
        let listaUsuarios = [];
        
        datos.results.forEach((u,i) => {
            //usuario normal
            if (i % 2 === 0) {
                listaUsuarios.push(new Usuario(u.name.first, u.email, u.picture.medium));
            }
            else {
                listaUsuarios.push(new UsuarioConRol(
                    u.name.first + '' + u.name.last,
                    u.email,
                    u.picture.medium,
                    roles[i % roles.length]
                ))
            }
            
        });

        renderUsuarios(listaUsuarios);

    } catch (error) {
        console.log("Ocurrio un error al obtener los usuarios", error);
    }
}

//evento de boton
const boton = document.getElementById('btnCargar');
boton.addEventListener("click", () => obtenerUsuarios(7));