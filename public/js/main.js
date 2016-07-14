var m = require('mithril');
var primeiraTela = require('./primeiraTela')

m.route.mode = 'hash';

m.route(document.getElementById('content'), '/', {
  '/': primeiraTela
});
