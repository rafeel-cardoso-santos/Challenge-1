function criptografar() {
    var texto = document.getElementById('input').value;
    var textoCriptografado = '';
    var listaDeCriptografia = {
        'A': 'B', 'a': 'b',
        'B': 'C', 'b': 'c',
        'C': 'D', 'c': 'd',
        'D': 'E', 'd': 'e',
        'E': 'F', 'e': 'f',
        'F': 'G', 'f': 'g',
        'G': 'H', 'g': 'h',
        'H': 'I', 'h': 'i',
        'I': 'J', 'i': 'j',
        'J': 'K', 'j': 'k',
        'K': 'L', 'k': 'l',
        'L': 'M', 'l': 'm',
        'M': 'N', 'm': 'n',
        'N': 'O', 'n': 'o',
        'O': 'P', 'o': 'p',
        'P': 'Q', 'p': 'q',
        'Q': 'R', 'q': 'r',
        'R': 'S', 'r': 's',
        'S': 'T', 's': 't',
        'T': 'U', 't': 'u',
        'U': 'V', 'u': 'v',
        'V': 'W', 'v': 'w',
        'W': 'X', 'w': 'x',
        'X': 'Y', 'x': 'y',
        'Y': 'Z', 'y': 'z',
        'Z': 'A', 'z': 'a'
    };
    for (var i = 0; i < texto.length; i++) {
        var caracter = texto.charAt(i);
        if (listaDeCriptografia[caracter]) {
            textoCriptografado += listaDeCriptografia[caracter];
        } else {
            textoCriptografado += caracter;
        }
    }
    document.getElementById('mensagemPadrao').innerText = textoCriptografado;
    document.getElementById('textoPadrao').innerText = "Texto criptografado.";
    document.getElementById('menina').src = "./assets/bi_exclamation-circle-fill.png"; 
    document.getElementById('copiar').disabled = false;
}

function descriptografar() {
    var texto = document.getElementById('input').value;
    var textoDescriptografado = '';
    var listaDeCriptografia = {
        'B': 'A', 'b': 'a',
        'C': 'B', 'c': 'b',
        'D': 'C', 'd': 'c',
        'E': 'D', 'e': 'd',
        'F': 'E', 'f': 'e',
        'G': 'F', 'g': 'f',
        'H': 'G', 'h': 'g',
        'I': 'H', 'i': 'h',
        'J': 'I', 'j': 'i',
        'K': 'J', 'k': 'j',
        'L': 'K', 'l': 'k',
        'M': 'L', 'm': 'l',
        'N': 'M', 'n': 'm',
        'O': 'N', 'o': 'n',
        'P': 'O', 'p': 'o',
        'Q': 'P', 'q': 'p',
        'R': 'Q', 'r': 'q',
        'S': 'R', 's': 'r',
        'T': 'S', 't': 's',
        'U': 'T', 'u': 't',
        'V': 'U', 'v': 'u',
        'W': 'V', 'w': 'v',
        'X': 'W', 'x': 'w',
        'Y': 'X', 'y': 'x',
        'Z': 'Y', 'z': 'y',
        'A': 'Z', 'a': 'z'
    };
    for (var i = 0; i < texto.length; i++) {
        var caracter = texto.charAt(i);
        if (listaDeCriptografia[caracter]) {
            textoDescriptografado += listaDeCriptografia[caracter];
        } else {
            textoDescriptografado += caracter;
        }
    }
    document.getElementById('mensagemPadrao').innerText = textoDescriptografado;
    document.getElementById('textoPadrao').innerText = "Texto descriptografado.";
    document.getElementById('menina').src = "./assets/bi_exclamation-circle-fill.png";
    document.getElementById('copiar').disabled = false;
}

function copiarTexto() {
    var texto = document.getElementById('mensagemPadrao').innerText;
    var elementoTemporario = document.createElement('textarea');
    elementoTemporario.value = texto;
    document.body.appendChild(elementoTemporario);
    elementoTemporario.select();
    document.execCommand('copy');
    document.body.removeChild(elementoTemporario);

    document.getElementById('input').value = '';
    document.getElementById('mensagemPadrao').innerText = 'Nenhuma mensagem encontrada';
    document.getElementById('textoPadrao').innerText = 'Digite um texto para iniciar a criptografia ou descriptografia.';
    document.getElementById('menina').src = './assets/menina-procurando.png'; 
    document.getElementById('copiar').disabled = true;
}

function copiarTexto() {
    navigator.clipboard.writeText(document.getElementById('mensagemPadrao').innerText);

    document.getElementById('input').value = '';
    document.getElementById('mensagemPadrao').innerText = 'Nenhuma mensagem encontrada';
    document.getElementById('textoPadrao').innerText = 'Digite um texto para iniciar a criptografia ou descriptografia.';
    document.getElementById('menina').src = './assets/menina-procurando.png'; 
    document.getElementById('copiar').disabled = true;
}

