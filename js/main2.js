var config = {
  apiKey: "AIzaSyBLfbxx620z3BBi1IzzjP9we6pTcjiskuI",
  authDomain: "checkpoint-fire-base.firebaseapp.com",
  databaseURL: "https://checkpoint-fire-base.firebaseio.com",
  projectId: "checkpoint-fire-base",
  storageBucket: "",
  messagingSenderId: "615497413620"
};
firebase.initializeApp(config);


  $("#formulaire").submit(function(e){
    e.preventDefault()
    afficher()
})

  function afficher(){
      let nom = $("#nom").val()
      let feedBacksRef = firebase.database().ref('feedbacks/'+nom);
      /*A ref in Firebase is like an Excel table, with different attributes and values.*/
      feedBacksRef.once('value').then(function(snapshot) {
        let msg = snapshot.val()
        let mail = msg.email
        let message = msg.prenom
        let lastname=msg.nom
        /*JQUERY*/
     $("#nom").val(nom) /*on va attribuer la valeur saisie de nom dans #nom*/
        $("#nom").val(lastname)
        $("#message").val(message)
        $("#mail").val(mail)
      });

  }


