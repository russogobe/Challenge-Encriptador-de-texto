# 🔐 Encriptador de Texto

Bienvenido a **Encriptador de texto** 🎉, una herramienta interactiva diseñada para proteger y transformar tus mensajes de texto de una manera simple pero efectiva. Este proyecto permite encriptar y desencriptar texto con solo unos clics, brindándote la capacidad de codificar información sensible o simplemente divertirte con un cifrado personalizado.

## 📜 ¿Qué hace este proyecto?

Este proyecto ofrece una funcionalidad clave: **encriptar** y **desencriptar** texto en tiempo real. A través de un conjunto de reglas predefinidas, cada letra del texto que ingresas se convierte en una secuencia única de caracteres, haciendo que el mensaje sea ilegible a simple vista. ¿Quieres volver a leer tu mensaje? Solo presiona el botón de desencriptar y listo, tu texto original estará de vuelta.

### Características principales:
- **Encriptación personalizada:** Convierte tus mensajes en texto cifrado utilizando un algoritmo sencillo basado en reglas de sustitución.
- **Desencriptación instantánea:** Recupera tu texto original al instante con el botón de desencriptar.
- **Copiado rápido:** Transfiere fácilmente el texto encriptado o desencriptado con un solo clic.
- **Interfaz amigable:** Un diseño limpio y funcional que hace que el proceso sea intuitivo y accesible para todos.

## 🌟 ¿Por qué es útil este proyecto?

En un mundo donde la privacidad es cada vez más importante, tener una herramienta rápida y fácil para cifrar mensajes puede ser muy útil. **Encriptador de texto** es ideal para:
- **Mantener conversaciones privadas:** Codifica mensajes que no deseas que otros lean fácilmente.
- **Aprender sobre encriptación:** Es una excelente manera de explorar cómo funcionan los algoritmos de sustitución simples.
- **Divertirse con amigos:** Crea códigos secretos y compártelos con amigos para descifrarlos.

## 🛠️ Cómo funciona

El encriptador de texto se basa en un algoritmo simple que reemplaza las vocales por secuencias de caracteres. Aquí está el proceso en detalle:

1. **Encriptación:** 
   - `e` se convierte en `enter`
   - `i` se convierte en `imes`
   - `a` se convierte en `ai`
   - `o` se convierte en `ober`
   - `u` se convierte en `ufat`

2. **Desencriptación:** 
   - El proceso inverso, donde `enter` se convierte en `e`, y así sucesivamente, devolviendo el texto a su forma original.

## 🚀 Cómo empezar

Para comenzar con este proyecto, sigue los siguientes pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/russogobe/Challenge-Encriptador-de-texto.git]
   ```
2. **Abrir el archivo `index.html`:**
   Puedes abrir el archivo `index.html` en tu navegador favorito para ver la aplicación en acción.

3. **Interactuar con la interfaz:**
   - Escribe un texto en el área de entrada.
   - Haz clic en "Encriptar" para cifrar el texto.
   - Haz clic en "Desencriptar" para revertir el cifrado.
   - Usa el botón "Copiar" para duplicar el texto cifrado en el área de entrada.
   - Usa el botón "Resetear" para limpiar todos los campos.

## 📂 Estructura del proyecto

```plaintext
├── index.html         # Archivo principal que contiene la estructura HTML
├── style.css          # Archivo CSS para estilos de la aplicación
├── script.js          # Archivo JavaScript que contiene la lógica de encriptación
├── assets/            # Carpeta que contiene imágenes y otros recursos
└── normalize.css      # Archivo CSS para normalizar estilos en diferentes navegadores
```

## 🎨 Diseño y Estilos

El estilo visual de **Encriptador de texto** está diseñado para ser limpio, moderno y funcional, utilizando la paleta de colores y tipografía Inter para una experiencia agradable al usuario.

### Estilos Clave

- **Body:** El fondo de la aplicación es de un color suave (#F3F5FC) que asegura la lectura fácil y reduce la fatiga visual.
- **Logo:** Posicionado en la parte superior izquierda, el logo se ajusta a un tamaño pequeño y se alinea con el espacio superior de la página.
- **Áreas de Texto:** Tanto el área de entrada como la de salida tienen un diseño sin bordes para una apariencia minimalista, y el texto es transformado en minúsculas automáticamente.
- **Botones:** Los botones de encriptar y desencriptar tienen efectos visuales al hacer clic, como cambios de sombra y opacidad, que indican su estado de habilitación.
- **Diseño Responsivo:** El diseño se adapta automáticamente a diferentes tamaños de pantalla, con disposición en columnas para tablets y móviles, y disposición en filas para pantallas más grandes.

### Responsividad

El diseño de la página es responsivo y ajusta su disposición según el tamaño de la pantalla:

- **Desktop (≥ 1024px):** Disposición en dos columnas para aprovechar el espacio horizontal.
- **Tablet (768px - 1024px):** Disposición en una sola columna, con botones de acción alineados horizontalmente.
- **Móvil (≤ 768px):** Disposición en una sola columna, con botones de acción apilados verticalmente para maximizar el uso del espacio en pantallas pequeñas.
