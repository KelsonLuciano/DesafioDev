
function formulario() {
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('estado').value=("");
    document.getElementById('ibge').value=("");
}

function consulta(infos) {
    if (!("erro" in infos)) {
        document.getElementById('rua').value=(infos.logradouro);
        document.getElementById('bairro').value=(infos.bairro);
        document.getElementById('cidade').value=(infos.localidade);
        document.getElementById('estado').value=(infos.estado);
        document.getElementById('ibge').value=(infos.ibge);
    } 
    else {
        formulario();
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
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=consulta';
            document.body.appendChild(script);
        } 
        else {
            formulario();
            alert("Formato de CEP inválido.");
        }
    } 
    else {
        formulario();
    }
};