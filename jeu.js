 let money = 500;

function updateWallet(amount) {
  money += amount;
  document.getElementById('money').textContent = money;
}

// Exemple de cuisson :
function cook(panId, type) {
  const pan = document.getElementById(panId);
  pan.textContent = "Cuisson...";
  setTimeout(() => {
    pan.textContent = `Pâté ${type}`;
    pan.dataset.ready = type;
  }, 3000);
}

function serve(type) {
  const pan1 = document.getElementById("pan1");
  const pan2 = document.getElementById("pan2");

  if (pan1.dataset.ready === type) {
    pan1.textContent = "Vide";
    delete pan1.dataset.ready;
    updateWallet(50);
  } else if (pan2.dataset.ready === type) {
    pan2.textContent = "Vide";
    delete pan2.dataset.ready;
    updateWallet(50);
  } else {
    updateWallet(-20); // pénalité
  }
}
