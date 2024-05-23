const infos = {
  nome: 'Bruna',
  cargo: 'Dev Front End',
  imagem: "https://github.com/brunacdp.png",
  github: 'https://github.com/brunacdp',
  linkedin: 'https://www.linkedin.com/in/brunacdp/',
  instagram: 'https://www.instagram.com/brunnhildev/',
  minibio: 'Olá! Sou a Bruna, desenvolvedora Web / Front End e estudante de desenvolvimento Full Stack.',
}

document.getElementById("imagem").src = infos.imagem;
document.getElementById("nome").innerHTML = infos.nome;
document.getElementById("cargo").innerHTML = infos.cargo;
document.getElementById("minibio").innerHTML = infos.minibio;
document.getElementById("github").href = infos.github;
document.getElementById("linkedin").href = infos.linkedin;
document.getElementById("instagram").href = infos.instagram;
