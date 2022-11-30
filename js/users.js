var users = JSON.parse(localStorage.getItem('users')) || [];
var Conect = JSON.parse(localStorage.getItem('Conect')) || [];
function affiche(){
if(Conect == ''){
    document.location.href = 'acceuil.html';
} 
if (Conect.Role == 'client') {
    document.location.href = 'acceuil.client.html';
} else {
    let i=1;
    let table = ``;
    users.forEach(element => {
        table += `
        <tr>
        <td>${i} </td>
        <td>${element.nom}</td>
        <td>${element.prénom}</td>
        <td>${element.mail}</td>
        <td> <button type="button" class="btn btn-danger"  onclick="Delete( ${i-1})">  Delete  </button> </td>
        </tr>
        `
        i++ ;
    });
    document.getElementById('Post').innerHTML = table ;
}
function Delete(x){
    produit.splice(x,1);
localStorage.setItem('users',JSON.stringify(users));
affiche();
}  
}