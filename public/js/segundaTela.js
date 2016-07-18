var m = require('mithril');

var pointOfInterest = {};

pointOfInterest.state = {
  init: function () {
    pointOfInterest.state.address = m.prop('Avenida Luciano Gualberto, 22');
    pointOfInterest.state.lattng = m.prop('');
  },

  sendToMap: function () {
    window.location =
    'www.google.com.br/maps/dir/' + pointOfInterest.state(latlgn);
  },
},

pointOfInterest.controller = function () {
  pointOfInterest.state.init();
},

pointOfInterest.view = function () {
  return <div class='ui text container basic segment'>
           <div class="ui very relaxed items">
            <div class="item">
            <div class="left aligned content">
              <div class="header">{pointOfInterest.state.address()}</div>
            </div>
            <div class="middle aligned content">
              <a  text='ver no mapa'  class='item tootip'>
               <i
                 class="material-icons point-interest-icon">room
               </i>
              </a>
            </div>
        </div>
          </div>
        </div>;

};

module.exports = pointOfInterest;
