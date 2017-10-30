window.onload=function(){
     let search=document.getElementById("search");
     search.addEventListener("click",function(){
         let request = new XMLHttpRequest();
         request.onreadystatechange = function(){
             if(request.readyState === 4 && request.status === 200){
                 alert(request.responseText);
             }
         };
         request.open("GET","request.php?q=definition",true);
         request.send();
});
};