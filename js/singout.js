function logout(){
    localStorage.removeItem('Conect');
    document.location.href ='acceuil.html';
}
function test(){
let Conect = JSON.parse(localStorage.getItem('Conect')) || [] ;
if (Conect =='') {
  document.location.href= 'acceuil.html';  
}
if (Conect.Role == 'admin') {
    document.location.href= 'admin.html';
}
}