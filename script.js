function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')  
    var date = new Date()
    var hora = date.getHours()
    
    
    if (hora >= 0 && hora < 12) {
        //BOM DIAAA!!
        img.src = 'fotodamanha.png'
        document.body.style.backgroundImage = "URL('fundodamanha.png')";
        msg.innerHTML = `Agora são ${hora} horas... <br>
        Bom dia!`
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDEEE!!
        img.src = 'fotodatarde.png' 
        document.body.style.backgroundImage = "URL('fundodatarde.png')";
        msg.innerHTML = `Agora são ${hora} horas... <br>
        Boa tarde!`
    
    }else {
        //BOA NOITEE!!
        img.src = 'fotodanoite.png' 
        document.body.style.backgroundImage = "URL('fundodanoite.png')";
        msg.innerHTML = `Agora são ${hora} horas... <br> 
        Boa Noite!`
        // <br> usado para quebrar linha!
    }
    img.appendChild(img) 

}




'#af7827'