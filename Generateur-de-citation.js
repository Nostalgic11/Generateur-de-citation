
var quotes = [

  "\"Le premier savoir est le savoir de mon ignorance : c'est le début de l'intelligence\".<br>"+
  "<h4>_Socrate</h4>",

  "\"À vaincre sans péril, on triomphe sans gloire\".<br>"+
  "<h4>_Piere Corneille</h4>",

  "\"A la fin, nous nous souviendrons non pas des mots de nos ennemis, mais des silences de nos amis.\"<br>"+
  "<h4>_Martin Luther King</h4>",

  "\"La beauté est dans les yeux de celui qui regarde\".<br>"+
  "<h4>_Oscar Wilde</h4>",

  "\"Je suis jeune, il est vrai ; mais aux âmes bien nées la valeur n'attend pas le nombre des années.\"<br>"+
  "<h4>_Piere Corneille</h4>",

  "\"Le courage n'est pas l'absence de peur, mais la capacité de vaincre ce qui fait peur.\"<br>"+
  "<h4>_Nelson Mandela</h4>",

  "\"Celui qui ne connaît pas l'histoire est condamné à la revivre.\"<br>"+
  "<h4>_Karl Marx</h4>",

  "\"Tout n'est pas politique, mais la politique s'intéresse à tout.\"<br>"+
  "<h4>_Nicolas Machiavel</h4>",

  "\"L'imagination est plus importante que le savoir.\"<br>"+
  "<h4>_Albert Einstein</h4>",

  "\"Ce que l'on conçoit bien s'énonce clairement, et les mots pour le dire arrivent aisément.\"<br>"+
  "<h4>_Nicolas Boileau</h4>",
]
//Creer des numeros aleatoire qui vont etre remplacer par les citations
Math.floor(Math.random() * (max - min + 1)) + min;

//Stocker les citations dans une variable
var randomNumber = Math.floor(Math.random()*quotes.length);

//Afficher les citations dans le navigateur grace a l'Id dans le HTML
document.getElementById('quotes').innerHTML = quotes[randomNumber];

//Stocker les variables et le resultat dans un foonction
function newQuote(){
    var randomNumber = Math.floor(Math.random()*quotes.length);
    document.getElementById('quotes').innerHTML = quotes[randomNumber];
}







      