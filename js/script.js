function analisar() {
  let chaveAcesso = document.getElementById("inputChave").value;

  if (chaveAcesso.length != 44) {
    alert("É necessário que a chave de acesso tenha 44 digitos!");

  } else {
    var cUF = document.getElementById("cUF");
    var anoMes = document.getElementById("anoMes");
    var cnpj = document.getElementById("cnpj");
    var modelo = document.getElementById("modelo");
    var serie = document.getElementById("serie");
    var nNF = document.getElementById("nNF");
    var tipoEmissao = document.getElementById("tipoEmissao");
    var cNF = document.getElementById("cNF");

    cUF.innerText = "Código UF: " + getParteChave(0, 2) + " - " + getUF(getParteChave(0, 2));
    anoMes.innerText = "Data (MMAA): " + getParteChave(4, 6) + "/" + getParteChave(2, 4);
    cnpj.innerText = "CNPJ: " + getMascaraCNPJ(getParteChave(6, 20));
    modelo.innerText = "Modelo NF: " + getParteChave(20, 22);
    serie.innerText = "Série NF: " + getParteChave(22, 25);
    nNF.innerText = "Número NF: " + getParteChave(25, 34);
    tipoEmissao.innerText = "Tipo Emissão: " + getParteChave(34, 35);
    cNF.innerText = "Código NF: " + getParteChave(35, 43);
  }
}

function getParteChave(a, b) {
  let chaveAcesso = document.getElementById("inputChave").value;
  return chaveAcesso.substring(a, b);
}

function removerEspacos() {
  var campoChaveAcesso = document.getElementById("inputChave");
  campoChaveAcesso.value = campoChaveAcesso.value.replace(/ /g, "");
}

function getMascaraCNPJ(cnpj) {
  //00.000.000/0000-00
  return cnpj.substring(0, 2)
    + "." + cnpj.substring(2, 5)
    + "." + cnpj.substring(5, 8)
    + "/" + cnpj.substring(8, 12)
    + "-" + cnpj.substring(12, 14);
}

function copiarCNPJ() {
  let cnpj = document.getElementById("cnpj").textContent;
  navigator.clipboard.writeText(cnpj.substring(5));
  alert("CNPJ copiado!");
}

function getUF(cUF) {
  switch (cUF) {
    case "12":
      return "AC";
      break;

    case "27":
      return "AL";
      break;

    case "13":
      return "AM";
      break;

    case "16":
      return "AP";
      break;

    case "29":
      return "BA";
      break;

    case "23":
      return "CE";
      break;

    case "53":
      return "DF";
      break;

    case "32":
      return "ES";
      break;

    case "52":
      return "GO";
      break;

    case "21":
      return "MA";
      break;

    case "31":
      return "MG";
      break;

    case "50":
      return "MS";
      break;

    case "51":
      return "MT";
      break;

    case "15":
      return "PA";
      break;

    case "25":
      return "PB";
      break;

    case "26":
      return "PE";
      break;

    case "22":
      return "PI";
      break;

    case "41":
      return "PR";
      break;

    case "33":
      return "RJ";
      break;

    case "24":
      return "RN";
      break;

    case "11":
      return "RO";
      break;

    case "14":
      return "RR";
      break;

    case "43":
      return "RS";
      break;

    case "42":
      return "SC";
      break;

    case "28":
      return "SE";
      break;

    case "35":
      return "SP";
      break;

    case "17":
      return "TO";
      break;

    default:
      break;
  }
}