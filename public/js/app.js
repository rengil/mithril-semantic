var m = require('mithril');
var app = {};

app.state = {
  primeiraTela: function () {
    m.route('/primeiraTela');
  }
}


app.view = function () {
  return
     <div class='ui very thin visible horizontal top inverted blue sidebar icon menu'>
        <a onclick={app.state.primeiraTela} class='item is-one-third'>
             <i class='material-icons'> cloud </i>
        </a>
        <a onclick={app.state.primeiraTela} class='item is-one-third'>
             <i class='material-icons'> view_column </i>
        </a>
        <a onclick={app.state.primeiraTela} class='item is-one-third'>
             <i class='material-icons'> power_settings_new </i>
        </a>
