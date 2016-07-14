var primeiraTela = {};

primeiraTela.view = function () {
  return <div>
           <form class='ui large form'>
             <div class='field'>
               <input name="text" type="text"
                      placeholder="login"
                />
             </div>
             <div class='field'>
               <input name="text" type="pass    word"
                      placeholder="password"
                />
             </div>
           </form>
         </div>
}


module.exports = primeiraTela;
