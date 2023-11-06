function trocar(){
    let linkA = "./imagens/judeComemoracao.png"
    let linkB = "./imagens/judeReal.png"
    let imagem = document.getElementById("click")
    let atributo = imagem.getAttribute("src")
    console.log(imagem)
    console.log(atributo)

    if(atributo == linkA){
        imagem.setAttribute('src',linkB)
    }else{
        imagem.setAttribute('src',linkA)
    }
    
    
}