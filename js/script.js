let formulario = document.getElementById('formulario')

formulario.addEventListener('submit', function(e){
  e.preventDefault()
  let nome = document.getElementById('nome').value
  let email = document.getElementById('email').value
  let telefone = document.getElementById('telefone').value
  
  console.log({ nome, email, telefone})
})
