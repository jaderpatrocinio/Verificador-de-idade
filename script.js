function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verificar os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 15) {
                //crianca
                img.setAttribute('src', 'fotocriancamenino.jpg')
            } else if (idade < 35) {
                //jovem
                img.setAttribute('src', 'fotohomemjovem.jpg')
            }else if ( idade < 50) {
                //adulto
                img.setAttribute('src', 'fotohomem40.jpg')
            }else {
                //idoso
                img.setAttribute('src', 'fotoidoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 15) {
                //crianca
                img.setAttribute('src', 'fotocriancamenina.jpg')
            } else if (idade < 35) {
                //jovem
                img.setAttribute('src', 'fotomulherjovem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'fotomulher40.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'fotoidosa.webp')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}