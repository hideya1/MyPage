var url = "https://api.github.com/search/repositories?q=javascript";
var xhr = new XMLHttpRequest();
 
xhr.open('GET', url);
xhr.send();
 
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4 && xhr.status === 200) {
      
    console.log( JSON.parse(xhr.responseText) );
      
  }
}