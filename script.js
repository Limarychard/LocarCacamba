function mostrarTexto(idTexto) {
    var textos = document.querySelectorAll('.textoMostrado');
    textos.forEach(function(texto) {
        if (texto.id === idTexto) {
            texto.style.display = 'block'; // Mostra o texto correspondente ao ID clicado
        } else {
            texto.style.display = 'none'; // Esconde os outros textos
        }
    });

    // Remove a classe 'selected' de todos os botões
    var botoes = document.querySelectorAll('.botaoAlugar');
    botoes.forEach(function(botao) {
        botao.classList.remove('selected');
    });

    // Adiciona a classe 'selected' ao botão clicado
    var botaoSelecionado = document.querySelector(`button[onclick="mostrarTexto('${idTexto}')"]`);
    botaoSelecionado.classList.add('selected');
}

var zap_telefone = '5521986246466';
var zap_mensagem = '';
var zap_exibirPulsar = eval(('True').toLowerCase());
var zap_apresentarContato = eval(('True').toLowerCase());

function detectarDispositivoPrincipal() {
    let linkRedirecionamentoWhatsapp = "";

    if (zap_apresentarContato) {
        linkRedirecionamentoWhatsapp = ('https://wa.me/' + zap_telefone + '?text=' + zap_mensagem);
    }
    else {
        if (WURFL.is_mobile) {
            linkRedirecionamentoWhatsapp = ('https://api.whatsapp.com/send?phone=' + zap_telefone + '&text=' + zap_mensagem);
        } else {
            linkRedirecionamentoWhatsapp = ('https://web.whatsapp.com/send?phone=' + zap_telefone + '&text=' + zap_mensagem);
        }
    }

    if (typeof GoogleAds_HashWhatsapp != "undefined" && GoogleAds_HashWhatsapp.length > 0) {
        GoogleAds_gtag_report_conversion(linkRedirecionamentoWhatsapp, GoogleAds_HashWhatsapp);
    } else {
        window.open(linkRedirecionamentoWhatsapp, '_blank');
    }
}