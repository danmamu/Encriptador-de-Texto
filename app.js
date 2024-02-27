let textoACifrar;

function capturarTextoU(){
    textoACifrar= document.getElementById('texto-usuario').value;

    let cifrado=textoACifrar    .replace(/e/gi, 'enter')
                                .replace(/i/gi, 'ider')
                                .replace(/a/gi, 'ae')
                                .replace(/o/gi, 'osi')
                                .replace(/u/gi, 'umas');
    /*Para que el encriptado pueda funcionar, los replace deben tener vocales que ya 
    hayan sido reemplazadas, por ejemplo la i, en el encriptado debe tener solo la i y la e 
    que ya fue encriptada, si ponemos otra letra no funcionara ya que las demas no la ha 
    leido el programa aun, va de arriba hacia abajo */

    if(textoACifrar.length !=0){
        document.getElementById("texto-usuario").value=cifrado;
        let status= document.getElementById('status').innerHTML='Texto cifrado exitosamente';
    }else{
        alert('favor ingresa un texto para cifrar');
    }
}

function desencriptar(){
    let textoACifrar= document.getElementById('texto-usuario').value;
    let descifrado= textoACifrar
                                .replace(/enter/gi, 'e')
                                .replace(/ider/gi, 'i')
                                .replace(/ae/gi, 'a')
                                .replace(/osi/gi, 'o')
                                .replace(/umas/gi, 'u');
    
    console.log(descifrado);
    if(textoACifrar.length!=0){
        document.getElementById('texto-usuario').value=descifrado;
        let status= document.getElementById('status').innerHTML='Texto descifrado exitosamente';
    }else{
        alert('Ingresa un texto para descifrar');
    }

}

function copiarTexto() {
    var textoCopiado = document.getElementById("texto-usuario");

        if(textoCopiado.length!=0){
                // Seleccionar el elemento que contiene el texto a copiar

            textoCopiado.select();
            textoCopiado.setSelectionRange(0, 99999);
            document.execCommand("copy");
            // Mostrar un mensaje de éxito (esto es opcional)
            alert("Texto copiado al portapapeles: " + textoCopiado.innerText);
        }else{
            alert('No hay ningun texto escrito para copiar');
        }

}



