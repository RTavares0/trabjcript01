# trabjcript01

https://rtavares0.github.io/trabjcript01/

Este código consiste em duas funções, criarCampos e listarAlunos, que trabalham em conjunto para criar campos de texto dinamicamente e exibir seus valores em uma lista.

A função criarCampos é chamada quando o usuário preenche o campo "quantidade" e clica no botão "Criar campos". 
Ela obtém a quantidade de campos a serem criados, limpa o conteúdo do elemento com id "campos" e, em seguida, cria a quantidade especificada de labels e campos de texto.
Os campos de texto são nomeados "aluno1", "aluno2", ..., "alunoN", onde N é a quantidade especificada.

A função listarAlunos é chamada quando o usuário clica no botão "Listar alunos". 
Ela obtém a quantidade de campos criados anteriormente e, em seguida, itera sobre os campos de texto para obter os valores digitados pelo usuário e armazená-los em um array chamado alunos. 
Depois disso, ela cria uma lista não ordenada (ul) e itera sobre o array alunos para criar um item de lista (li) para cada aluno. 
Por fim, ela substitui o conteúdo do elemento com id "campos" pela lista criada.

Em resumo, a função criarCampos cria os campos de texto e a função listarAlunos obtém seus valores e os exibe em uma lista. 
Juntas, essas funções permitem ao usuário criar uma lista de alunos dinamicamente e exibi-la na página.
