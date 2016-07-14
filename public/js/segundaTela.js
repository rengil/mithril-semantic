var segundaTela = {};

segundaTela.view = function () {
  return <div class='ui text container basic segment'>
          <div class='ui cards'>

            <div class='ui card'>
              <div class='header'> Rua Maranhão, 725 </div>
              <div class='content'> Lugar legal manolo </div>
              <button class='ui blue button'> Já Explorei </button>
            </div>

            <div class='ui card'>
              <div class='header'> Rua Do Trigo, 725 </div>
              <div class='content'> Teste </div>
              <button class='ui red button'> Voltar para não explorado </button>
            </div>
          </div>
         </div>;

}
module.exports = segundaTela;
