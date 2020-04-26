document.getElementById('imagenCerrar').style.display = 'none'
document.getElementById('imagenGuardar').style.display = 'none'

function SubirFoto(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var filePreview = document.createElement('img');
            filePreview.id = 'file-preview';
            //e.target.result contents the base64 data from the image uploaded
            filePreview.src = e.target.result;
            console.log(e.target.result);
            var previewZone = document.getElementById('imprimeimg');
            previewZone.appendChild(filePreview);
        }
        reader.readAsDataURL(input.files[0]);
    }
    document.getElementById('imagenCerrar').style.display = 'block'
    document.getElementById('imagenGuardar').style.display = 'block'
}

var fileUpload = document.getElementById('file-upload');
fileUpload.onchange = function(e) {
    SubirFoto(e.srcElement);
}

function CerrarImagen() {
    document.getElementById('imprimeimg').style.display = 'none'

}