var xhr = new XMLHttpRequest(); //it holds the ajax request
     xhr.onreadystatechange = function() { //callback 
             if(xhr.readyState === 4) {
               var data = JSON.parse(xhr.responseText);//it takes the string from the response and it converts it in a javascript object
               var people = data.people;
                 for (var i=0; i<people.length; i += 1) {
                      var htmlCode = "<p>" + people[i].name + "</p>";
                 }                
                      document.getElementById('personName').innerHTML = htmlCode;
     } else {
         console.log(xhr.readyState);
     }
 };
 xhr.open('GET', 'team.json');
 xhr.send();
 $("#search").click(function() {
  let requestData = { title: $("#title").val() };
  $.get("lookup.php", requestData, function(data) {
     $("#movieinfo").html("<cite>" + data.title + 
        "</cite>: Rated " + data.rating + 
        ", released in " + data.year);
  }, "json");
});