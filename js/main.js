var config = {
    apiKey: "AIzaSyBLfbxx620z3BBi1IzzjP9we6pTcjiskuI",
    authDomain: "checkpoint-fire-base.firebaseapp.com",
    databaseURL: "https://checkpoint-fire-base.firebaseio.com",
    projectId: "checkpoint-fire-base",
    storageBucket: "",
    messagingSenderId: "615497413620"
  };
  firebase.initializeApp(config);


function enregistrer(){
   let nom25 =$("#lnom").val()
   let prenom =$("#nom").val()
   let mail =$("#mail").val()
firebase.database().ref("feedbacks/"+prenom).set({
    nom:nom25,
    email:mail,
    prenom:prenom,   
})
document.querySelector('.alert').style.display = 'block';

}

//set au lieu de push donne un identifiant et change au fur et àmesure les data
$("#formulaire").submit(function(e){
    e.preventDefault()
    enregistrer()
})
/*e in the parameters means "event", meaning the event that just happened (submit, click, hover etc...)
preventDefault is a function that will cancel the default action of the event (if a form should submit, it won't)
e.preventDefault() in this case will stop the form from submitting & therefore refreshing.*/


// Show alert
document.querySelector('.alert').style.display = 'none';
// Hide alert after 3 seconds

//firebase.com/développer/database/realtime database/regles true true/données


