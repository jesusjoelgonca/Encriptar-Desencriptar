

let texto = document.getElementById("texto");
let vocales = ["a", "e", "i", "o", "u"];
let cifrado = ["ai", "enter", "imes", "ober", "ufat"];
let cambio = "";
let texto_normal = [];
let index = [];


function Encriptar() {

    if (texto.value.match(/[A-Z]/g)) {
        alert("No se puede ingresar mayusculas!")
    } else if (texto.value.match(/[!@#$%^&*(),.?":{}|<>]/g)) {
        alert("No puede tener caracteres especiales!");
    }
    else {
        for (let i = 0; i < texto.value.length; i++) {
            texto_normal.push(texto.value[i]);
        }

        for (let i = 0; i < texto_normal.length; i++) {
            if (texto_normal[i] == "a") {
                index.push(i);
            }
            if (texto_normal[i] == "e") {
                index.push(i);
            }
            if (texto_normal[i] == "i") {
                index.push(i);
            }
            if (texto_normal[i] == "o") {
                index.push(i);
            }
            if (texto_normal[i] == "u") {
                index.push(i);
            }
        }

        for (let j = 0; j < index.length; j++) {
            if (texto_normal[index[j]] == "a") {
                texto_normal[index[j]] = cifrado[0];
            }
            if (texto_normal[index[j]] == "e") {
                texto_normal[index[j]] = cifrado[1];
            }
            if (texto_normal[index[j]] == "i") {
                texto_normal[index[j]] = cifrado[2];
            }
            if (texto_normal[index[j]] == "o") {
                texto_normal[index[j]] = cifrado[3];
            }
            if (texto_normal[index[j]] == "u") {
                texto_normal[index[j]] = cifrado[4];
            }
        }

        for (let i = 0; i < texto_normal.length; i++) {
            cambio += texto_normal[i];
        }

        texto.value = "";
        texto_normal = [];
        MostrarMensaje(cambio);
    }

}


function Desencriptar() {

    if (texto.value.match(/[A-Z]/g)) {
        alert("No se puede ingresar mayusculas!")
    } else if (texto.value.match(/[!@#$%^&*(),.?":{}|<>]/g)) {
        alert("No puede tener caracteres especiales!");
    }
    else {
        t = texto.value.replace(/ai/g, "a");
        tt = t.replace(/ober/g, "o");
        ttt = tt.replace(/enter/g, "e");
        tttt = ttt.replace(/imes/g, "i");
        ttttt = tttt.replace(/ufat/g, "u");

        texto.value = "";
        texto_normal = [];
        MostrarMensaje(ttttt);
    }

}

function MostrarMensaje(cambio) {
    BorrarImagen();
    borrarMensaje();
    let elemento = document.getElementById("mensaje");
    elemento.className = "mensaje-3";
    elemento.innerHTML = cambio;
    MostrarBoton();
}

function borrarMensaje() {
    const borrar_mensaje = document.getElementById("borrar-mensaje");
    borrar_mensaje.innerHTML = "";

}

function BorrarImagen() {
    const quitar_imagen = document.getElementById("borrar-imagen");
    quitar_imagen.style.visibility = "hidden";
}

function Copiar() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#mensaje');
    cb.writeText(paragraph.innerText).then(() => alert('Texto copiado!'));

}

function MostrarBoton() {
    document.getElementById("btn-copiar").style.display = "block";
}


