function ajouter(){
  var produit = document.getElementById("prod").value;
  var qte = document.getElementById("qte").value;

  localStorage.setItem(produit,qte);

  document.getElementById("prod").value="";
  document.getElementById("qte").value="";
  afficher();
};

function modifier(){
  var produit = document.getElementById("prod").value;
  document.getElementById("qte").value = localStorage.getItem(produit);
  afficher();
};

function supprimer(){
  var produit = document.getElementById("prod").value;
  localStorage.removeItem(produit);
  document.getElementById("prod").value="";
  document.getElementById("qte").value="";
  afficher();
};

function doClear(){
  localStorage.clear();
  afficher();
};

function afficher (){
  var key ="";
  var paires = "<tr class='first'><td><b>Produit</b></td><td><b>Quantitée</b></td></tr>"; //sinon on peut metre \" pour échaper le "
  var i=0;

  for(i=0; i<=localStorage.length-1; i++){
    key = localStorage.key(i);
    paires += "<tr><td>"+key+"</td>\n<td>"+localStorage.getItem(key)+"</td></tr>";
  }

  if(paires== "<tr class='first'><td><b>Produit</b></td><td><b>Quantitée</b></td></tr>"){
    paires += "<tr><td><i>Vide</i></td><td><i>Vide</i></td></tr>"
  }

  document.getElementById('paires').innerHTML = paires;
}
