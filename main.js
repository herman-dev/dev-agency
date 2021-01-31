window.onload=function(){
    var choix=document.querySelectorAll('li');
    
    choix.forEach(ch => {
        ch.addEventListener('click', function(){
            var httpRequest = new XMLHttpRequest();
            httpRequest.onreadystatechange= function(){
                console.log('this is Ajax by Herman');
            }
            httpRequest.open('GET', 'text.txt', true);
            httpRequest.send();
        })
    })
}