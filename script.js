document.addEventListener('DOMContentLoaded', () => {
    // Selección de elementos del DOM
    const textareaInput = document.querySelector('.input-text');
    const textareaOutput = document.querySelector('.output-text');
    const copyButton = document.querySelector('#copy-btn'); 
    const encryptButton = document.querySelector('#encrypt-btn'); 
    const decryptButton = document.querySelector('#decrypt-btn'); 
    const noMessage = document.querySelector('.message-not-found');
    const resetButton= document.querySelector('.clear-copy');
    const rightSide = document.querySelector('.right-side'); // Selecciona el contenedor con el background-image

    // Verifica que todos los elementos se seleccionaron correctamente
    if (!textareaInput || !textareaOutput || !copyButton || !encryptButton || !decryptButton  || !noMessage || !resetButton || !rightSide) {
        console.error('Uno o más elementos del DOM no se encontraron. Verifica los selectores.');
        return;
    }

    // Función de encriptación con las llaves requeridas
    function encryptText(text) {
        const replacements = {
            e: 'enter',
            i: 'imes',
            a: 'ai',
            o: 'ober',
            u: 'ufat'
        };
        return text.split('').map(char => replacements[char] || char).join('');
    }

    // Función de desencriptación
    function decryptText(text) {
        const reverseReplacements = {
            'enter': 'e',
            'imes': 'i',
            'ai': 'a',
            'ober': 'o',
            'ufat': 'u'
        };
        for (let [encrypted, original] of Object.entries(reverseReplacements)) {
            const regex = new RegExp(encrypted, 'g');
            text = text.replace(regex, original);
        }
        return text;
    }

    // Función para actualizar el estado del textareaOutput y el botón de copiar
    function updateInterfaz() {
        if (textareaOutput.value) {
            copyButton.disabled = false;
            noMessage.style.display = 'none';
            
        } else {
            copyButton.disabled = true;
            noMessage.style.display = 'block';
        }
    }

    // Evento para el botón de encriptación
    encryptButton.addEventListener('click', () => {
        const textToEncrypt = textareaInput.value.toLowerCase();
        
        console.log('Texto a encriptar:', textToEncrypt);  // Depuración: Verificar el contenido
    
        // Validar que solo contiene letras minúsculas sin acentos
        if (/^[a-z]+$/.test(textToEncrypt)) {
            const encryptedText = encryptText(textToEncrypt);
            textareaOutput.value = encryptedText;
        } else {
            alert('Por favor, introduce solo letras minúsculas sin acentos.');
        }

            // Limpiar textareaInput y ajustar botones solo si la entrada es válida
            textareaInput.value = '';   
            encryptButton.disabled = true;
            decryptButton.disabled = false;
    
            updateInterfaz();
    });



    // Evento para el botón de desencriptación
    decryptButton.addEventListener('click', () => {
        const textToDecrypt = textareaInput.value; // Usar textareaInput para obtener el texto a desencriptar
        if (textToDecrypt) {
            const decryptedText = decryptText(textToDecrypt);
            textareaOutput.value = decryptedText; // Mostrar el texto desencriptado en textareaOutput
            textareaInput.value = ''; // Limpiar textareaInput
        }

        encryptButton.disabled = false;
        decryptButton.disabled = true;

        updateInterfaz();
    });

    // Evento para el botón de copiar el texto encriptado
    copyButton.addEventListener('click', () => {
        textareaOutput.select();
        document.execCommand('copy');
        
        // Copiar el texto encriptado a textareaInput
        textareaInput.value = textareaOutput.value;
        
        // Limpiar textareaOutput
        textareaOutput.value = '';

        // Actualiza el estado de la interfaz
        updateInterfaz();
    });

    // Evento para el botón de resetear
    resetButton.addEventListener('click', () => {
        // Limpiar campos de entrada y salida
        textareaInput.value = '';
        textareaOutput.value = '';

        // Restaurar estado inicial de los botones
        encryptButton.disabled = false;
        decryptButton.disabled = true;

        // Llamar a la función para actualizar la interfaz
        updateInterfaz();
    });
});
