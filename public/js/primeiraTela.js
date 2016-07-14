var m = require('mithril');
var primeiraTela = {};

primeiraTela.state = {
  visualizar: function () {
    m.route('/segundaTela');
  }
}

primeiraTela.view = function () {
  return <div class = 'ui text container no-margin-left  basic segment'>
           <div class='ui divided items'>
             <div class='item'>
               <div class='content'>
                  <div class='header'>Regiões de São Paulo</div>
                  <div class='meta'>
                    <span> Enviada : 13/02/2016 </span>
                  </div>
                  <div class='extra'>
                    <button class='ui right floated green big button'>
                     Falar com autor do pedido
                    </button>

                    <button onclick={primeiraTela.state.visualizarclass}
                            class='ui right floated button big button'>
                            Ver detalhes
                    </button>
                  </div>
             </div>
           </div>
         </div>
       </div>;
  }


module.exports = primeiraTela;
