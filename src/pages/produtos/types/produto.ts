interface Produto {
  nome: string;
  descricao: string;
  marca: string;
  departamento: "Eletronicos" | "Moveis" | "Comidas";
  preco: string;
}

export default Produto;
