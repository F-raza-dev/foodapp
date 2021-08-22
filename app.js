const sigup = ()=>{
  var email = document.getElementById("email").value
  var name = document.getElementById("name").value
  var password = document.getElementById("password").value
  var select = document.getElementById("select").value
  // console.log(email,name,password,select)

  if(email==''||name=='' ||password=="" ||select==""){
      alert("Enter Correct Values")
  }
  else{
      firebase.auth().createUserWithEmailAndPassword(email, password )
        .then((result) => {
          var user = result.user;
          console.log("User :",user)
          console.log("User Uid:",user.uid)
 

          var obj = {
              Name : name,
              email : email,
              password :password,
              type : select,
              uid : user.uid
          }

          firebase.database().ref(`/${select}`).child(user.uid).set(obj)
          .then((data)=>{
          window.location='login.html'

          })
          // window.location='login.html'
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage)
          // ..
        });
  }

}


const sigin = ()=>{
  var email = document.getElementById("email").value
  var password = document.getElementById("password").value
  if(email=='' ||password=="" ){
      alert("Enter Correct Values")
  }
  else{
      firebase.auth().signInWithEmailAndPassword(email, password )
      .then((result) => {
        var user = result.user;
        // console.log(user)
        // console.log("User Email :",user.email)
        // console.log("User Uid :",user.uid)

        localStorage.setItem('Current_user Uid',user.uid)

        window.location='user.html'

        firebase.database().ref('Resturant').orderByChild('uid').equalTo(user.uid).once('value')
        .then( (snap)=>{
            console.log("snap",snap.toJSON()) 


            if (data == null){
              firebase.database().ref("users").orderByChild('uid').equalTo(CurrentUserId).once('value')
              .then((snap) =>{
                var data = snap.toJSON();
                window.location='user.html'
                });
        
            }
                 
            else {
                          window.location='resturant.html'

            }
          });
                            

       



        var obj = {
            Name : name,
            email : email,
            password :password,
            type : select,
            uid : user.uid
        }

        firebase.database().ref(`/${select}`).child(user.uid).set(obj)
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
        // ..
      });

  }

}
// const usigup = ()=>{
//     var name = document.getElementById("name").value
//     var email = document.getElementById("email").value
//     var country = document.getElementById("country").value
//     var city = document.getElementById("city").value
//     var phone = document.getElementById("phone").value
//     var password = document.getElementById("password").value
//     // var select = document.getElementById("select").value
//     // var select = document.getElementById("select").value
//     // console.log(name,email,country,city,phone,password,select,)
//     // if(name==''||email==''||country==''||city==''||phone==''||password==""||select==""){
//     //     alert("Enter Correct Values")
//     // }
//     // else{
//         firebase.auth().createUserWithEmailAndPassword(email,password)
//           .then((result) => {
//             var user = result.user;
//             // console.log("User :",user)
//             // console.log("User Uid:",user.uid)
//             var obj = {
//                 Name : name,
//                 Email : email,
//                 Country : country,
//                 City : city,
//                 Phone : phone,
//                 Password :password,
//                 // Type : select,
//                 uid : user.uid
//             }
//             firebase.database().ref('User').child(user.uid).set(obj)
//             .then((data)=>{
//             // window.location='login.html'
//             })
//           })
//           .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             console.log(errorMessage)
//           });
//     }
// const rsignup = ()=>{
//   var name = document.getElementById("rname").value
//   var email = document.getElementById("remail").value
//   var country = document.getElementById("rcountry").value
//   var city = document.getElementById("rcity").value
//   var phone = document.getElementById("rphone").value
//   var password = document.getElementById("rpassword").value
//   firebase.auth().createUserWithEmailAndPassword(remail,rpassword)
//         .then((result) => {
//           var user = result.user;
//           var obj = {
//             Name : rname,
//             Email : remail,
//             Country : rcountry,
//             City : rcity,
//             Phone : rphone,
//             Password : rpassword,
//             uid : user.uid
//             .firebase.database().ref('Resturant').child(user.uid).set(obj)
//             .then((data) => {
//             });
//           }
//   // console.log(name,email,country,city,phone,password,select,)
// //   if(name==''||email==''||country==''||city==''||phone==''||password==""||select==""){
// //       alert("Enter Correct Values")
// //   }
// //   else{
      
// //           console.log("User :",user)
// //           console.log("User Uid:",user.uid)
// //           var obj = {
// //               Name : name,
// //               Email : email,
// //               Country : country,
// //               City : city,
// //               Phone : phone,
// //               Password :password,
// //               Type : select,
// //               uid : user.uid
// //           }
// //           firebase.database().ref(`/${select}`).child(user.uid).set(obj)
// //           .then((data)=>{
// //           window.location='login.html'
// //           })
// //         })
// //         .catch((error) => {
// //           var errorCode = error.code;
// //           var errorMessage = error.message;
// //           console.log(errorMessage)
// //         });
// //   }
// // }
// const sigin = ()=>{
//     var email = document.getElementById("email").value
//     var password = document.getElementById("password").value
//     firebase.auth().signInWithEmailAndPassword(email, password )
//     .then((result) => {
//       var user = result.user;
//       localStorage.setItem('Current_user_ID',user.uid)
//       var CurrentUserId =  localStorage.getItem('Current_user_ID')
//       firebase.database().ref().child(users).orderByChild('uid').equalTo(CurrentUserId).once('value')
//       .then((snap) =>{
//         var data = snap.toJSON();
//         if (data == null){
//           firebase.database().ref().child(users).orderByChild('uid').equalTo(CurrentUserId).once('value')
//           .then((snap) =>{
//             var data = snap.toJSON();
//             window.location='user-home.html'
//             const myvalue = Object.values(data)
//             var CurrentUserId =  localStorage.getItem('Current_user_ID')
//             localStorage.setItem('Current_user_name',myvalue[0].username)
//         });
        
//       }
// //     
//     else{
        
//           window.location='dashbord.html'
//         .catch((error) => {
//           var errorCode = error.code;
//           var errorMessage = error.message;
//           console.log(errorMessage)
//         });
//     }
// }
// const sigin = ()=>{
//       var email = document.getElementById("email").value
//       var password = document.getElementById("password").value
// firebase.auth().signInWithEmailAndPassword(email, password)
//         .then((userCredential) => {
//           var user = userCredential.user;

//           // Adding current user in local Storage to utilize user info in UI
//           localStorage.setItem('Current_user_ID' ,user.uid)
//           localStorage.setItem('Current_user_name' ,user.uid)

//           var currentUserId = localStorage.getItem('Current_user_ID')

//             console.log(currentUserId)

//             // Search ID within Resturant collection
//             firebase.database().ref().child('Resturants').orderByChild('uid').equalTo(currentUserId).once('value')
//             .then((snap) => {
//                 var data = snap.toJSON();

//                 if (data == null) {
//                     // Search ID within Users collection
//                     firebase.database().ref().child('Users').orderByChild('uid').equalTo(currentUserId).once('value')
//                     .then((snap) => {
//                         var data = snap.toJSON();
//                          // This is a User so we take it to Ordering page.
//                         window.location='user-home.html'            
//                     });
//                 }
//                 else{
//                     // This is a Resturant owner so we take it to the dashboard
//                     window.location='dashboard.html' 
               
//             });
//     })
//     .catch((error) => {
//                 var errorCode = error.code;
//                 var errorMessage = error.message;
//                 console.log(errorMessage)
//               });
//             }
//           }