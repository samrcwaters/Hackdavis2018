function addPost()
{
	var name = prompt("Name");
	var blogpost = prompt("Blog Test:");

	var mainBlog = document.getElementById("blogs");
	mainBlog.innerHTML += "<article><h1>" + name + "</h1><p>" + blogpost + "</p></article>";
}

function inputPicture() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}