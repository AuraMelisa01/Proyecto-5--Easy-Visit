const tableBody = document.getElementById('table-body-visitors');
const visitorsRef = db.collection('visitors');

visitorsRef.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    let name = doc.data().name;
    let mailVisitor = doc.data().mail;
    let companyVisited = doc.data().company;
    let personVisited = doc.data().personVisit;
    let hourArrive = doc.data().createdAt;
    
    tableBody.innerHTML += `<tr>
                            <td>${name}</td>
                            <td>${mailVisitor}</td>
                            <td>${hourArrive}</td>
                            <td>${companyVisited}</td>
                            <td>${personVisited}</td>
                            </tr>`;
  });
});
