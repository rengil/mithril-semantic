var m = require('mithril');
var chefia = {};


chefia.state =  {
  loading: m.prop(true),
  finishLoad: function ()  {
    setTimeout(function(){
      m.startComputation();
      chefia.state.loading(false);
      m.endComputation();
     },
    500);
  }
}

chefia.view = function () {
  return <div class='ui container two column stackable divided grid' config={chefia.state.finishLoad()}>
            <div class='row'>
              <div class={'ui ten wide ' + (chefia.state.loading() ? 'loading' : '') +
               ' segment column '}>
                <h1 class='ui header'> Resumo das Oportunidades </h1>
                <p> 2393 Oportunidades Geradas</p>
                <p> 2393 Oportunidades Em Progresso</p>
                <p> 2393 Conversões</p>
              </div>
              <div class={'ui six wide ' + (chefia.state.loading() ? 'loading' : '') +
               ' segment column '}>
                  <h1 class='ui header'> Status  </h1>
                  <h2 class='ui sub-header'>  120% em Leads </h2>
                  <h2 class='ui sub-header'>  120% em Processo </h2>
                  <h2 class='ui sub-header'>  120% em Conversão </h2>
                </div>
              </div>
            <div class='row'>
            <div class={'ui sixteen wide ' + (chefia.state.loading() ? 'loading' : '') +
             ' basic segment column '}>
              <h1 class='ui header'> Vendedores </h1>
                <table class="ui selectable sortable celled table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Região</th>
                    <th>Recebidos</th>
                    <th>Convertidos</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Júlio Parra</td>
                    <td>Diadema</td>
                    <td>65</td>
                    <td>33</td>
                    <td><button class='ui fluid grey button'>Ver Detalhes </button></td>
                  </tr>
                  <tr>
                    <td>Renan Lazarini Gil</td>
                    <td>Liberdade</td>
                    <td>88</td>
                    <td>2</td>
                    <td><button class='ui fluid grey button'>Ver Detalhes </button></td>
                  </tr>
                  <tr>
                    <td>Junior Contrim</td>
                    <td>São Paulo</td>
                    <td>99</td>
                    <td>11</td>
                    <td><button class='ui fluid grey button'>Ver Detalhes </button></td>
                  </tr>
                  <tr>
                    <td>Alex Kobayashi</td>
                    <td>São Bernardo</td>
                    <td>20</td>
                    <td>10</td>
                    <td><button class='ui fluid grey button'>Ver Detalhes </button></td>
                  </tr>
                  <tr>
                    <td>Lucas Martins</td>
                    <td>Campinas</td>
                    <td>230</td>
                    <td>78</td>
                    <td><button class='ui fluid grey button'>Ver Detalhes </button></td>
                  </tr>
              </tbody>
              </table>

            </div>

            </div>

         </div>
}

module.exports = chefia;
