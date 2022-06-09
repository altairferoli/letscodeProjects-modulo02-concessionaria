console.log("===CARROS===");

let formatter = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'BRL',
  // These options are needed to round to whole numbers if that's what you want.
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const carros = [];
const precos = [];
let index = 0;
let total = 0;

let carro = {
  modelo: null,
  ano: null,
  cor: null,
  condicao: null,
  preco: null,
};

let lista = document.getElementById("lista");

function listaCarros() {
  //ENTRADAS
  carro = {
    modelo: document.getElementById("modelo").value,
    ano: document.getElementById("ano").value,
    cor: document.getElementById("cor").value,
    condicao: document.getElementById("condicao").value,
    preco: document.getElementById("preco").value
  };
  carros.push(carro);
  precos.push(Number(carro.preco));
  index++;

  //SAÍDA
  console.table(carros);

  document.getElementById("qtdVeiculos").textContent = index;
  
  lista.innerHTML = carros.map(function (carro, index) {
    return `<tr>
    <td>${index}</td>
    <td>${carro.modelo}</td>
    <td>${carro.ano}</td>
    <td>${carro.cor}</td>
    <td>${carro.condicao}</td>
    <td>${formatter.format(carro.preco)}</td>
    </tr>`;    
  }).join("");
  

  total = precos.reduce(function (previous, current) {
    return previous + current;    
  });
  document.getElementById("totalVeiculos").textContent = formatter.format(total);
  
  modelo.value =  "";
  ano.value =  "";
  cor.value =  "0";
  condicao.value =  "Novo";
  preco.value =  "";
  
  modelo.focus();
}

