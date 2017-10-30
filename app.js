window.onload=function(){
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
};