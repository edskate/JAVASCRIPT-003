const idade = 16;
if (idade < 13) {
  console.log("Criança");
} else if (idade < 20) {
  console.log("Adolecente");
} else {
  console.log("Adulto");
}

if (false) {
  console.log("Isso executa");
} else {
  console.log("Isso agora é executado!");
}

// Switch

const fruta = "Banana";

switch (fruta) {
  case "Banana":
    console.log("Banana é fruta!");
  case "Maçã":
    console.log("Maçã é fruta!");
    break;
    default:
        console.log("fruta não encontrada!");
}
