db.collection('events').onSnapshot(snapshot => {
    // Handle the latest event
    const newestEvent = snapshot.docChanges()[0].doc.data()
    const id = snapshot.docChanges()[0].doc.id
    showLatestEvent(newestEvent, id);
 // delete the latest event element
 snapshot.docChanges().shift()
    
 snapshot.docChanges().forEach(event => {
     showEvents(event.doc.data(), event.doc.id)
 });
})