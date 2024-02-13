//Projeto de Certificação 01 DEVstart - Nota dos Atletas
//Aluna - Poliana Bozzano Lazzarin

let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];


   function calcularMedia(notas) {
    notas = notas.sort(function(a, b){
      return a - b; // Retorna a matriz em ordem crescente dos números
    });

    let notaDosAtletas = notas.slice(0,4); // Elimina o menor e maior valor


    let soma = 0;
    notaDosAtletas.forEach(function(nota){
      soma += nota; // Faz a soma de todas as notas restantes
    });

    let mediaDasNotas = soma / notaDosAtletas.length;
    return mediaDasNotas; // Retorna a média das notas restantes
   }


   function calcularResultados(atletas) {
    atletas.forEach(function(atleta){
      let nome = atleta.nome; 
      let notas = atleta.notas;
      let mediaDasNotas = calcularMedia(notas);
      let notasComputadas = notas.join(", ");

      console.log(`Atleta: ${nome}`); // Mostra o nome do Atleta
      console.log(`Notas Computadas: ${notasComputadas}`); // Mostra todas as notas do Atleta
      console.log(`Media Vália: ${mediaDasNotas}`); // Mostra a média das notas do Atleta

    });
  
   }

   calcularResultados(atletas); 