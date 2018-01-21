function addPost()
{
  var name = prompt("Name");
  var blogpost = prompt("Blog Test:");

  var mainBlog = document.getElementById("blogs");
  mainBlog.innerHTML += "<article><h1>" + name + "</h1><p>" + blogpost + "</p></article>";
}


//function credit to author at: https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
function previewFiles() {

  var preview = document.querySelector('#preview');
  var files   = document.querySelector('input[type=file]').files;

  function readAndPreview(file) {

    // Make sure `file.name` matches our extensions criteria
    if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
      var reader = new FileReader();

      reader.addEventListener("load", function () {
        var image = new Image();
        image.height = 100;
        image.title = file.name;
        image.src = this.result;
        preview.appendChild( image );
      }, false);

      reader.readAsDataURL(file);
    }

  }

  if (files) {
    [].forEach.call(files, readAndPreview);
  }
}

function punArr() {
    var puns[4] = {"test", "is", "a", "test"};
    document.getElementById("pun").innerHTML = puns[Math.floor((Math.random() * 4) + 1)];
}