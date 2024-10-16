const botao = document.getElementById('clicar');
const menu = document.getElementById('fechar');

botao.addEventListener('click', function(){
    if(menu.style.display === 'block'){
        menu.style.display = 'none'
    }else {
        menu.style.display = 'block'
    }
})