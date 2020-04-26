document.getElementById('btnCerrar').style.display = 'none'
document.getElementById('btnTomar').style.display = 'none'

function PrenderCamara() {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        console.log(stream)
        let video = document.getElementById('video')
        video.srcObject = stream
    }).catch((err) => console.log(err))
    document.getElementById('btnCerrar').style.display = 'block'
    document.getElementById('btnTomar').style.display = 'block'

}

function CerrarCamara() {
    document.getElementById('video').style.display = 'none'
    document.getElementById('btnCerrar').style.display = 'none'
    document.getElementById('btnTomar').style.display = 'none'




}