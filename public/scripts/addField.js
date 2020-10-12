// Procurar o botão 
document.querySelector("#add-time")
// Quando clicar, executar ação
.addEventListener('click', cloneField)
function cloneField() {

    // Duplica os campos, quais?

    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
    // pegar campos, como/quais?
    
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada um, limpar

    fields.forEach(function(field) {
        // pegar field, e limpa
        field.value = ""
    })

    // colocar na pagina, onde?

    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}

