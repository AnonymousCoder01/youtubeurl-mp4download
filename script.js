var convertBtn = document.querySelector("#btn");
var URLinput = document.querySelector("#URL-input");

convertBtn.addEventListener("click", function() {
   console.log(`URL : ${URLinput.value}`);
   sendURL(URLinput.value);
});

function sendURL(URL){
    window.location.href = `http://localhost:4000/download?URL=${URL}`, {quality: 18};
}

convertBtn.addEventListener('click', function(){
 var url_input = document.querySelector("#URL-input");

 if(url_input == ""){
     alert("You must enter a URL.");
 }
});