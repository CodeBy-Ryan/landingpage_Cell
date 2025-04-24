// Seleciona os itens do carrossel e os indicadores fixos
const items = document.querySelectorAll(".item");
const indicators = document.querySelectorAll(".indicators li");
const number = document.querySelector(".indicators .number");

let current = 0;

// Função para atualizar o carrossel
function updateCarousel(index) {
  // Atualiza a exibição dos itens
  items.forEach((item, i) => {
    item.style.display = i === index ? "flex" : "none";
  });

  // Atualiza a numeração
  number.textContent = `0${index + 1}`;

  // Atualiza os indicadores fixos (alternando entre 3 indicadores)
  indicators.forEach((dot, i) => {
    dot.classList.toggle("active", i === index % 3);
  });
}

// Função para ir para o próximo item
function nextItem() {
  current = (current + 1) % items.length;
  updateCarousel(current);
}

// Função para ir para o item anterior
function prevItem() {
  current = (current - 1 + items.length) % items.length;
  updateCarousel(current);
}

// Adiciona os eventos para as setas
const arrows = document.querySelectorAll(".arrows button");
arrows[0].addEventListener("click", prevItem);
arrows[1].addEventListener("click", nextItem);

// Inicializa o carrossel
updateCarousel(current);
