// Fonction pour effacer les valeurs es champs
function wipeOff(){
  // value='' ca efface les données des champs du formulaire
  document.getElementById('lastname').value = '';
  document.getElementById('firstname').value = '';
  document.getElementById('city').value = '';
}

// function qui permet de remettre les valeurs par defaut
function resetValues(){
  document.getElementbyId('informations').reset();
}
