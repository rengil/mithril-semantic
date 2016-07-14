var m = require('mithril');
var primeiraTela = require('./primeiraTela');
var segundaTela = require('./segundaTela');
var chefia = require('./chefia');
var app = require('./app');

m.route.mode = 'hash';

m.mount(document.getElementById('sidebar'), app);

m.route(document.getElementById('content'), '/chefia', {
  '/primeiraTela': primeiraTela,
  '/segundaTela': segundaTela,
  '/chefia': chefia
});
