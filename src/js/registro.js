
btnRegistrar.addEventListener('click', e => {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let personVisit = document.getElementById('personVisit').value;
    let company = document.getElementById('company').value;

    // if (name === ''){
    //     alert("Ingresa tu nombre");
    // } if (email === ''){
    //     alert("Ingresa tu correo");
    // } if (personVisit === ''){
    //     alert("Ingresa el nombre de la persona que visitas");
    // } if (company === ''){
    //     alert("Ingresa la compañia");
    // } else {
        db.collection("visitors").add({
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            name: name,
            mail: email,
            personVisit: personVisit,
            company: company
        })
            .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
                document.getElementById('name').value = "";
                document.getElementById('email').value = "";
                document.getElementById('personVisit').value = "";
                document.getElementById('company').value = "";

            })
            .catch(function (error) {
                console.error("Error adding document: ", error);
            });
    // }
});



