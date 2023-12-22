var sitename = document.getElementById('sname');
var url = document.getElementById('URL');
var urlmsg=document.getElementById('urlmsg')

var bookmarkContainer = [];
if (localStorage.getItem('sites') != null) {
    bookmarkContainer = JSON.parse(localStorage.getItem('sites'));
    display();
}

function add() {
   if (validate()==true) {
    var bookmark = {
        sitename: sitename.value,
        url: url.value,
    };
    console.log(bookmark.url);
    bookmarkContainer.push(bookmark);
    display();
    localStorage.setItem('sites', JSON.stringify(bookmarkContainer));
}
   }

function display() {
    var cartona = ' ';
    for (var i = 0; i < bookmarkContainer.length; i++) {
        cartona += `<tr>
        <td>${[i + 1]}</td>
        <td>${bookmarkContainer[i].sitename}</td>
        <td>${bookmarkContainer[i].url}</td>
        <td><button class="btn btn-success" onclick="visit(${[i]})"><img src="download (1).jpeg" alt="" class="rounded-3">Visit</button></td>
        <td><button class="btn btn-danger" onclick="deleteitem(${[i]})"><img src="delete.png" alt=""> Delete</button></td>
    </tr>`;
    }
    document.getElementById('tb').innerHTML = cartona;
}

function visit(index) {
    window.location.href = bookmarkContainer[index].url;
}

function deleteitem(i) {
    bookmarkContainer.splice(i, 1);
    display();
}

function validate() {
    var text=url.value;
    var regexurl= /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    if( regexurl.test(text)){
        url.classList.add('is-valid')
         url.classList.remove('is-invalid')
         urlmsg.classList.add('d-none')
         return true;
    }
   else{
    url.classList.add('is-invalid')
    url.classList.remove('is-valid')
    urlmsg.classList.remove('d-none')
    return false;
   }
    
}