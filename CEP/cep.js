
function limpaForm() {
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('estado').value=("");
    document.getElementById('ibge').value=("");
}

function validarCEP(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('estado').value=(conteudo.estado);
        document.getElementById('ibge').value=(conteudo.ibge);
    } 
    else {
        limpaForm();
        alert("CEP não encontrado.");
    }
}

function pesquisa(valor) {

    var cep = valor.replace(/\D/g, '');

    if (cep != "") {

        var validacep = /^[0-9]{8}$/;
        if(validacep.test(cep)) {

            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('estado').value="...";
            document.getElementById('ibge').value="...";

            var script = document.createElement('script');

            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=validarCEP';

            document.body.appendChild(script);

        } 
        else {
            limpaForm();
            alert("Formato de CEP inválido.");
        }
    } 
    else {
        limpaForm();
    }
};