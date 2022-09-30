//Criando objeto:
let pessoa = {
    nome: 'Mateus',
    idade: 22,
    curso: 'Análise e Desenvolvimento de Sistemas',
    altura: 1.72,
    nota: [8.2, 10, 9.3]
}

function botao1(){
    alert(`Olá, meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos, curso ${pessoa.curso} e tenho ${pessoa.altura} m de altura`);
}

function botao2(){
    alert(`Nota 1: ${pessoa.nota[0]}, nota 2: ${pessoa.nota[1]}, nota 3: ${pessoa.nota[2]}`);
}

function botao3(){
    alert(`Sua média é: ${(pessoa.nota[0] + pessoa.nota[1] + pessoa.nota[2])/3}`);
}

function exibeData(){
    let data = new Date();
    alert(data.getDate());
}