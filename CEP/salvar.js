const salvar = document.querySelector("#salvar");
const buscas = document.querySelector("#buscas");


salvar.addEventListener("click", function(){

    const rua = document.getElementById('rua').value;
    const bairro = document.getElementById('bairro').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const ibge = document.getElementById('ibge').value;
    let id = localStorage.length+1;

    const end = { rua: rua, bairro: bairro, cidade: cidade, estado: estado, ibge: ibge, id: id };
    localStorage.setItem(id, JSON.stringify(end));
});

buscas.addEventListener("click", function(){
 
    document.body.innerHTML = '<ol id="myList"></ol>'

    let list = document.getElementById("myList");
    for (i = 1; i <= localStorage.length; ++i) {

        let li = document.createElement('li');
        end =JSON.parse(localStorage.getItem(i))

        li.innerHTML += 
        `<li>Id : ${end.id}</li>

        <li>Rua : ${end.rua}</li>

        <li>bairro : ${end.bairro}</li>

        <li>Cidade : ${end.cidade}</li>
  
        <li>estado : ${end.estado}</li>
  
        <li>ibge : ${end.ibge}</li>
        <p>&nbsp;</p>`

        list.appendChild(li);
    }

    let li = document.createElement('li');

    li.innerHTML += `<select name="opcoes" id="opcoes">
    <option value="cidade">Cidade</option>
    <option value="bairro">Bairro</option>
    <option value="estado">Estado</option>
    </select>

    <select name="opcoesC" id="opcoesC">
    <option value="crescente">crescente</option>
    <option value="decrescente">decrescente</option>
    </select>
    <input type="button" id="ordenar" value="ordenar">`   

    list.appendChild(li);
});
