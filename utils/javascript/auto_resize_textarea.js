const textAreas = document.querySelectorAll("textarea");

textAreas.forEach(textArea => {

    textArea.addEventListener("keyup", e => {
        textArea.style.height = "auto";

        let scrollHeight = e.target.scrollHeight;
        textArea.style.height = `${scrollHeight}px`;
    });
});

/* 

** No CSS

textarea {
    min-height: 8rem; // Valor inicial do textarea
    resize: none; // Desabilitar o auto-resize nativo pra ser redimensionado dinamicamente, de acordo com a digitação
}

*/