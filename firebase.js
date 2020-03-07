var firebase = require("firebase")

class  FirebaseService {

    initialize(){
        firebase.initializeApp({
            serviceAccount: "./google-services.json",
            databaseURL: "https://cci-review.firebaseio.com"
        })
    };
    
    list() {
        firebase.database().ref("users").orderByKey().on("child_added",function(snapshot){
            var data = snapshot.val();
            console.log(data);
        });
    };

    add(product){
        firebase.database().ref("products").push(value={
            barcode: "78929878978897",
            title: "Soro fisiologico"
        },onComplete=(data)=>{
            console.log(data);
        });
    };

}

var f = new FirebaseService();
f.initialize();
f.list();
f.add({});