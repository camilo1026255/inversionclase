

function simulador(){
    const camponombre = document.getElementById("nombres").value
    const campotelefon = document.getElementById("telefono").value
    const campoemail = document.getElementById("email").value
    const campoinvernsion = parseInt(document.getElementById("inversion").value)
    const campotiempo = parseInt(document.getElementById("tiempo").value)
    const showtiempo = document.getElementById("tiempo-show")
    const interesshow = document.getElementById("interes-show")
    const pre = document.getElementById("pre")
    const post = document.getElementById("post")
    let interes = 0
    let total = 0
    const showganacias = document.getElementById("ganancia-show")
    const showtotal = document.getElementById("total-show")


    post.classList.remove("disabled")
    pre.classList.add("disabled")

    switch (campotiempo) {
        case 1: 
            showtiempo.innerText = "12 Meses"
            interesshow.innerText = "0.8%"
            interes = (campoinvernsion * 0.008) *12
            total = campoinvernsion + interes
            showganacias.innerText = interes
            showtotal.innerText = total
           

            break;


        case 2:
            showtiempo.innerText = "24 Meses"
            interesshow.innerText = "1.3"
            interes = (campoinvernsion * 0.013) *24
            total = campoinvernsion + interes
            showganacias.innerText = interes
            showtotal.innerText = total
            
            break;

        case 3:
            
            showtiempo.innerText = "36 Meses"
            interesshow.innerText = "1.7"
            interes = (campoinvernsion * 0.017) *36
            total = campoinvernsion + interes
            showganacias.innerText = interes
            showtotal.innerText = total
            break;
    
        default:
            break;
    }

    const shownombres = document.getElementById("nombres-show")
    const emailshow = document.getElementById("email-show")

    shownombres.innerText = camponombre
    emailshow.innerText = campoemail


}



const button = document.getElementById("simulador-btn")

button.addEventListener("click",simulador )


