/*  A Regra eh:
    1 - Cao ativo  ou sedentario
    2 - Idade:
        Jovem ou idoso
    3 - Peso:
    4 - EM: */
/* Variáveis globais*/
var atividade;
var quantidade;
/* Exemplo do porte para dar nocao ao usuario */
function mudaCao(){
    caoExemplo.src = porte.children[porte.selectedIndex].getAttribute('url');
}
function alteraDiv(){
    atividade = $("input[name='atividade']:checked").val()
        if(($('#porte').val() == 1) && (atividade == 1 || atividade == 2)){
            $("#mini").show();
            $("#pequeno").hide();
            $("#medio").hide();
            $("#grande").hide();
            $("#gigante").hide();
            $("#idade").show();
            $("#emAlimento").show();
            $("#calcular").show();
        }
        if(($('#porte').val() == 2) && (atividade == 1 || atividade == 2)){
            $("#mini").hide();
            $("#pequeno").show();
            $("#medio").hide();
            $("#grande").hide();
            $("#gigante").hide();
            $("#idade").show();
            $("#emAlimento").show();
            $("#calcular").show();
        }
        if(($('#porte').val() == 3) && (atividade == 1 || atividade == 2)){
            $("#mini").hide();
            $("#pequeno").hide();
            $("#medio").show();
            $("#grande").hide();
            $("#gigante").hide();
            $("#idade").show();
            $("#emAlimento").show();
            $("#calcular").show();
        }
        if(($('#porte').val() == 4) && (atividade == 1 || atividade == 2)){
            $("#mini").hide();
            $("#pequeno").hide();
            $("#medio").hide();
            $("#grande").show();
            $("#gigante").hide();
            $("#idade").show();
            $("#emAlimento").show();
            $("#calcular").show();
        }
        if(($('#porte').val() == 5) && (atividade == 1 || atividade == 2)){
            $("#mini").show();
            $("#pequeno").hide();
            $("#medio").hide();
            $("#grande").hide();
            $("#gigante").show();
            $("#idade").show();
            $("#emAlimento").show();
            $("#calcular").show();
        }
        if($('#porte').val() == 0){
            $("#mini").hide();
            $("#pequeno").hide();
            $("#medio").hide();
            $("#grande").hide();
            $("#gigante").hide();
            $("#idade").hide();
            $("#emAlimento").hide();
            $("#calcular").hide();
        }
}
/* Calcular */
function calculo(){
    var idadeSelecionada = $("#p1").val();
    var em = $("input[name=em]").val();
    var peso = $("input[name=peso]").val();
    var rotinaCao;
    var resultPorte = $("#porte option:selected").text();
    var resultIdade = $("#idade option:selected").text();
    var formOK = false;

    if(em != "" && peso != "" && idadeSelecionada != 0){
        if(atividade == 1 && idadeSelecionada == 1){
            /*NE = 140 * (peso)*0,75 */
            quantidade = (140*(peso*0.75))/em;
            quantidade = quantidade.toFixed(3);
            rotinaCao = "C\u00e3o ativo";
            formOK = true;
        }
        if(atividade == 1 && idadeSelecionada == 2){
            /*NE = 130 * (peso)*0,75 */
            quantidade = (130*(peso*0.75))/em;
            quantidade = quantidade.toFixed(3);
            rotinaCao = "C\u00e3o ativo";
            formOK = true;
        }
        if(atividade == 1 && idadeSelecionada == 3){
            /*NE = 105 * (peso)*0,75 */
            quantidade = (105*(peso*0.75))/em;
            quantidade = quantidade.toFixed(3);
            rotinaCao = "C\u00e3o ativo";
            formOK = true;
        }
        if(atividade == 2 && idadeSelecionada == 1){
            /*NE = 132 * (peso)*0,75  sedentario jovem*/
            quantidade = (132*(peso*0.75))/em;
            quantidade = quantidade.toFixed(3);
            rotinaCao = "C\u00e3o sedent\u00e1rio";
            formOK = true;
        }
        if(atividade == 2 && idadeSelecionada == 2){
            /*NE = 130 * (peso)*0,75 sedentario adulto*/
            quantidade = (130*(peso*0.75))/em;
            quantidade = quantidade.toFixed(3);
            rotinaCao = "C\u00e3o sedent\u00e1rio";
            formOK = true;
        }
        if(atividade == 2 && idadeSelecionada == 3){
            /*NE = 95 * (peso)*0,75 */
            quantidade = (95*(peso*0.75))/em;
            quantidade = quantidade.toFixed(3);
            rotinaCao = "C\u00e3o sedent\u00e1rio";
            formOK = true;
        }
    } else if(em == "" || peso == "" || idadeSelecionada == "0"){
        alert("Favor preencher os campos Peso, EM e Idade");
    }
    if(formOK){
        $(".resultRotina").html(rotinaCao);
        $(".resultPorte").html(resultPorte);
        $(".resulIdade").html(resultIdade);
        $(".resultPeso").html(peso);
        $(".resultEM").html(em);
        $(".resultQtd").html(quantidade);
        ocultarDivs();
    }

}
function ocultarDivs(){
    $("#filAdulto").hide();
    $("#porteTamanho").hide();
    $("#mini").hide();
    $("#pequeno").hide();
    $("#medio").hide();
    $("#grande").hide();
    $("#gigante").hide();
    $("#idade").hide();
    $("#emAlimento").hide();
    $("#calcular").hide();
    $("#resultado").show();
    $("#imprimir").show();
}

/*
NE = PC * (kg)0,75 = X
X / EM = quantidade

NE  Necessidade Energética
PC  Peso metabólico em Kg = 35
EM  Energia Metabólica do Alimento = 4.250

    NE = 130 * (35)*0,75 = 1.8707,75
18707 / 4.250 = 0.440*/