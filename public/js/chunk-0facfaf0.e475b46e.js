(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0facfaf0"],{"1dde":function(t,e,o){var n=o("d039"),a=o("b622"),r=o("2d00"),s=a("species");t.exports=function(t){return r>=51||!n((function(){var e=[],o=e.constructor={};return o[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,o){var n=o("861d"),a=o("e8b5"),r=o("b622"),s=r("species");t.exports=function(t,e){var o;return a(t)&&(o=t.constructor,"function"!=typeof o||o!==Array&&!a(o.prototype)?n(o)&&(o=o[s],null===o&&(o=void 0)):o=void 0),new(void 0===o?Array:o)(0===e?0:e)}},8418:function(t,e,o){"use strict";var n=o("c04e"),a=o("9bf2"),r=o("5c6c");t.exports=function(t,e,o){var s=n(e);s in t?a.f(t,s,r(0,o)):t[s]=o}},a434:function(t,e,o){"use strict";var n=o("23e7"),a=o("23cb"),r=o("a691"),s=o("50c4"),i=o("7b0b"),c=o("65f0"),u=o("8418"),l=o("1dde"),d=o("ae40"),f=l("splice"),m=d("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,v=Math.min,h=9007199254740991,b="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f||!m},{splice:function(t,e){var o,n,l,d,f,m,g=i(this),x=s(g.length),_=a(t,x),w=arguments.length;if(0===w?o=n=0:1===w?(o=0,n=x-_):(o=w-2,n=v(p(r(e),0),x-_)),x+o-n>h)throw TypeError(b);for(l=c(g,n),d=0;d<n;d++)f=_+d,f in g&&u(l,d,g[f]);if(l.length=n,o<n){for(d=_;d<x-n;d++)f=d+n,m=d+o,f in g?g[m]=g[f]:delete g[m];for(d=x;d>x-n+o;d--)delete g[d-1]}else if(o>n)for(d=x-n;d>_;d--)f=d+n-1,m=d+o-1,f in g?g[m]=g[f]:delete g[m];for(d=0;d<o;d++)g[d+_]=arguments[d+2];return g.length=x-n+o,l}})},ae40:function(t,e,o){var n=o("83ab"),a=o("d039"),r=o("5135"),s=Object.defineProperty,i={},c=function(t){throw t};t.exports=function(t,e){if(r(i,t))return i[t];e||(e={});var o=[][t],u=!!r(e,"ACCESSORS")&&e.ACCESSORS,l=r(e,0)?e[0]:c,d=r(e,1)?e[1]:void 0;return i[t]=!!o&&!a((function(){if(u&&!n)return!0;var t={length:-1};u?s(t,1,{enumerable:!0,get:c}):t[1]=1,o.call(t,l,d)}))}},b727:function(t,e,o){var n=o("0366"),a=o("44ad"),r=o("7b0b"),s=o("50c4"),i=o("65f0"),c=[].push,u=function(t){var e=1==t,o=2==t,u=3==t,l=4==t,d=6==t,f=5==t||d;return function(m,p,v,h){for(var b,g,x=r(m),_=a(x),w=n(p,v,3),y=s(_.length),N=0,C=h||i,E=e?C(m,y):o?C(m,0):void 0;y>N;N++)if((f||N in _)&&(b=_[N],g=w(b,N,x),t))if(e)E[N]=g;else if(g)switch(t){case 3:return!0;case 5:return b;case 6:return N;case 2:c.call(E,b)}else if(l)return!1;return d?-1:u||l?l:E}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},c740:function(t,e,o){"use strict";var n=o("23e7"),a=o("b727").findIndex,r=o("44d2"),s=o("ae40"),i="findIndex",c=!0,u=s(i);i in[]&&Array(1)[i]((function(){c=!1})),n({target:"Array",proto:!0,forced:c||!u},{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),r(i)},c93e:function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("h1",[t._v("Laboratorios")]),o("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:"warning"},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(t._s(t.mensaje.texto))]),t.editar?o("form",{on:{submit:function(e){return e.preventDefault(),t.editarNota(t.notaEditar)}}},[o("h3",[t._v("Editar datos")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.notaEditar.RUT,expression:"notaEditar.RUT"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"RUT"},domProps:{value:t.notaEditar.RUT},on:{input:function(e){e.target.composing||t.$set(t.notaEditar,"RUT",e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.notaEditar.Nombre,expression:"notaEditar.Nombre"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Nombre"},domProps:{value:t.notaEditar.Nombre},on:{input:function(e){e.target.composing||t.$set(t.notaEditar,"Nombre",e.target.value)}}}),o("b-button",{staticClass:"btn-warning my-2 mx-2",attrs:{type:"submit"}},[t._v("Editar")]),o("b-button",{staticClass:"my-2",attrs:{type:"submit"},on:{click:function(e){t.editar=!1}}},[t._v("Cancelar")])],1):t._e(),t.editar?t._e():o("form",{on:{submit:function(e){return e.preventDefault(),t.agregarNota(e)}}},[o("h3",[t._v("Ingreso de datos")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.nota.RUT,expression:"nota.RUT"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"RUT"},domProps:{value:t.nota.RUT},on:{input:function(e){e.target.composing||t.$set(t.nota,"RUT",e.target.value)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.nota.Nombre,expression:"nota.Nombre"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Nombre"},domProps:{value:t.nota.Nombre},on:{input:function(e){e.target.composing||t.$set(t.nota,"Nombre",e.target.value)}}}),o("b-button",{staticClass:"bt-success my-2",attrs:{type:"submit"}},[t._v("Agregar")])],1),o("table",{staticClass:"table"},[t._m(0),o("tbody",t._l(t.notas,(function(e,n){return o("tr",{key:n},[o("th",{attrs:{scope:"row"}},[t._v(t._s(e._id))]),o("td",[t._v(t._s(e.RUT))]),o("td",[t._v(t._s(e.Nombre))]),o("td",[o("b-button",{staticClass:"btn-danger btn-sm mx-2",on:{click:function(o){return t.eliminarNota(e._id)}}},[t._v("Eliminar")]),o("b-button",{staticClass:"btn-warning btn-sm",on:{click:function(o){return t.activarEdicion(e._id)}}},[t._v("Editar")])],1)])})),0)])],1)},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("thead",[o("tr",[o("th",{attrs:{scope:"col"}},[t._v("ID")]),o("th",{attrs:{scope:"col"}},[t._v("RUT")]),o("th",{attrs:{scope:"col"}},[t._v("Nombre")]),o("th",{attrs:{scope:"col"}},[t._v("Accion")])])])}],r=(o("c740"),o("a434"),{data:function(){return{notas:[],mensaje:{color:"",texto:""},dismissSecs:5,dismissCountDown:0,nota:{RUT:null,Nombre:""},editar:!1,notaEditar:{}}},created:function(){this.listarNotas()},methods:{alerta:function(){this.mensaje.color="success",this.mensaje.texto="Alerta",this.showAlert()},listarNotas:function(){var t=this;this.axios.get("/nota").then((function(e){console.log(e),t.notas=e.data})).catch((function(t){console.log(t.response)}))},agregarNota:function(){var t=this;console.log(this.nota),this.axios.post("/nueva-nota",this.nota).then((function(e){t.notas.push(e.data),t.nota.nombre="",t.nota.rut=null,t.mensaje.color="success",t.mensaje.texto="Agregado con exito",t.showAlert()})).catch((function(e){console.log(e.response),e.response.data.error.errors.Nombre.message?t.mensaje.texto=e.response.data.error.errors.Nombre.message:e.data.error.errors.RUT.message?t.mensaje.texto=e.data.error.errors.RUT.message:t.mensaje.texto="Error no especificado",t.mensaje.color="danger",t.showAlert()}))},eliminarNota:function(t){var e=this;console.log(t),this.axios.delete("/nota/".concat(t)).then((function(t){var o=e.notas.findIndex((function(e){return e._id===t.data._id}));e.notas.splice(o,1),e.mensaje.color="alert",e.mensaje.texto="Fila eliminada",e.showAlert()})).catch((function(t){console.log(t.response)}))},activarEdicion:function(t){var e=this;this.editar=!0,console.log(t),this.axios.get("/nota/".concat(t)).then((function(t){e.notaEditar=t.data})).catch((function(t){console.log(t.response)}))},editarNota:function(t){var e=this;this.axios.put("/nota/".concat(t._id),t).then((function(t){var o=e.notas.findIndex((function(e){return e._id===t.data._id}));e.notas[o].RUT=t.data.RUT,e.notas[o].Nombre=t.data.Nombre,e.mensaje.color="success",e.mensaje.texto="Fila editada",e.showAlert(),e.editar=!1})).catch((function(t){console.log(t.response)}))},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}}}),s=r,i=o("2877"),c=Object(i["a"])(s,n,a,!1,null,null,null);e["default"]=c.exports},e8b5:function(t,e,o){var n=o("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=chunk-0facfaf0.e475b46e.js.map