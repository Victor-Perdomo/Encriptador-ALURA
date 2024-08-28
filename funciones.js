function encriptarTexto() {
    let texto = document.getElementById("inputTexto").value;

    if (!validarTexto(texto)) {
        alert("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    let textoEncriptado = texto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");

    document.getElementById("resultado").value = textoEncriptado;
}

function desencriptarTexto() {
    let texto = document.getElementById("inputTexto").value;

    if (!validarTexto(texto)) {
        alert("Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    let textoDesencriptado = texto.replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ai/g, "a")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");

    document.getElementById("resultado").value = textoDesencriptado;
}

function copiarTexto() {
    let textoACopiar = document.getElementById("resultado").value;
    navigator.clipboard.writeText(textoACopiar)
        .then(() => {
            alert("Texto copiado al portapapeles.");
        })
        .catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
}

function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}
