function criarCampos() {
    var quantidade = parseInt(document.getElementById("quantidade").value);
    var campos = document.getElementById("campos");
  
    // Limpa os campos existentes
    campos.innerHTML = "";
  
    // Cria os campos de texto
    for (var i = 1; i <= quantidade; i++) {
      var label = document.createElement("label");
      label.setAttribute("for", "aluno" + i);
      label.textContent = "Aluno " + i + ":";
  
      var input = document.createElement("input");
      input.setAttribute("type", "text");
      input.setAttribute("id", "aluno" + i);
      input.setAttribute("name", "aluno" + i);
  
      campos.appendChild(label);
      campos.appendChild(input);
    }
  }
  
  function listarAlunos() {
    var quantidade = parseInt(document.getElementById("quantidade").value);
    var alunos = [];
  
    // Obtém os valores dos campos de texto
    for (var i = 1; i <= quantidade; i++) {
      var aluno = document.getElementById("aluno" + i).value;
      alunos.push(aluno);
    }
  
    // Exibe os valores em uma lista
    var lista = document.createElement("ul");
  
    for (var i = 0; i < alunos.length; i++) {
      var item = document.createElement("li");
      item.textContent = alunos[i];
      lista.appendChild(item);
    }
  
    var campos = document.getElementById("campos");
    campos.innerHTML = "";
    campos.appendChild(lista);
  }
  