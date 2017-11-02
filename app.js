/*window.onload=function(){
    let search=document.getElementById("search");
    let result=document.getElementById("result");
    search.addEventListener("click",function(){
        let request = new XMLHttpRequest();
        request.onreadystatechange = function(){
            if(request.readyState === 4 && request.status === 200){
                result.innerHTML="<h3>Result</h3>"+request.responseText;
            }
        };
        request.open("GET","request.php?q="+document.getElementById("lookup").value,true);
        request.send();
    });
};*/
window.onload = function() {
     var search = document.getElementById('search');

     search.addEventListener('click', function(ele) {
         ele.preventDefault();
         var text = document.getElementById('lookup').value;
         var request = new XMLHttpRequest();
         request.onreadystatechange = getOneDefintion;
         request.open('GET', 'request.php?q=&all=true', true);
         request.setRequestHeader('Content-Type', 'application/j-www-form-urlencoded');
         request.send();

         function getOneDefintion() {
             if (request.readyState === XMLHttpRequest.DONE) {
                 if (request.status === 200 && request.readyState === 4) {
                     var response = request.responseXML;
                     var result = document.getElementById('result');
                     var definitions1 = response.getElementsByTagName("definition");
                     var block = document.createElement('div');
                     var h = document.createElement("H1");
                     var t = document.createTextNode("Result");
                     h.appendChild(t);
                     result.appendChild(h);
                     result.appendChild(block);
                     for (var i = 0; i < definitions1.length; i++) {
                         var author = definitions1[i].getAttribute("name");
                         var header1 = document.createElement("h1");
                         var author2 = document.createTextNode(author);
                         var para = document.createElement("P");
                         var definition = document.createTextNode(definitions1[i].childNodes[0].nodeValue);
                         header1.appendChild(author2);
                         para.appendChild(definition);
                         if (definitions1[i].getAttribute("name") == text) {

                             block.appendChild(header1);
                             block.appendChild(para);
                         }
                     }

                 } else {
                     alert('There was a problem with the request.');
                 }
             }
         }
     });

     var allDef = document.getElementById('all');
     allDef.addEventListener('click', function(ele) {
         ele.preventDefault();
         var request2 = new XMLHttpRequest();
         request2.onreadystatechange = Showall;
         request2.open('GET', 'request.php?q=&all=true');
         request2.setRequestHeader('Content-Type', 'application/j-www-form-urlencoded');
         request2.send();

         function Showall() {
             if (request2.readyState === XMLHttpRequest.DONE) {
                 if (request2.status === 200) {
                     var response = request2.responseXML;
                     var definitions2 = response.getElementsByTagName('definition');
                     var all = "<h1> Result</h1>" + "<ol>";
                     for (var j = 0; j < definitions2.length; j++) {
                         all += "<li><h3>" + definitions2[j].getAttributeNode("name").value + "</h3>" +
                             "<p>" + definitions2[j].childNodes[0].nodeValue + "</p>" +
                             "<p> - " + definitions2[j].getAttributeNode("author").value + "</p>"
                         "</li>";
                     }
                     all += "</ol>";
                     document.getElementById("result").innerHTML = all;
                 } else {
                     alert('There was a problem with the request.');
                 }
             }
         }

     });
 };
