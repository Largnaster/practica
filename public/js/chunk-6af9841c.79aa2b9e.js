(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6af9841c"],{"1dde":function(t,e,n){var o=n("d039"),a=n("b622"),r=n("2d00"),s=a("species");t.exports=function(t){return r>=51||!o((function(){var e=[],n=e.constructor={};return n[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"65f0":function(t,e,n){var o=n("861d"),a=n("e8b5"),r=n("b622"),s=r("species");t.exports=function(t,e){var n;return a(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?o(n)&&(n=n[s],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},8418:function(t,e,n){"use strict";var o=n("c04e"),a=n("9bf2"),r=n("5c6c");t.exports=function(t,e,n){var s=o(e);s in t?a.f(t,s,r(0,n)):t[s]=n}},a434:function(t,e,n){"use strict";var o=n("23e7"),a=n("23cb"),r=n("a691"),s=n("50c4"),i=n("7b0b"),l=n("65f0"),u=n("8418"),c=n("1dde"),d=n("ae40"),m=c("splice"),f=d("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,v=Math.min,h=9007199254740991,b="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!m||!f},{splice:function(t,e){var n,o,c,d,m,f,g=i(this),x=s(g.length),_=a(t,x),w=arguments.length;if(0===w?n=o=0:1===w?(n=0,o=x-_):(n=w-2,o=v(p(r(e),0),x-_)),x+n-o>h)throw TypeError(b);for(c=l(g,o),d=0;d<o;d++)m=_+d,m in g&&u(c,d,g[m]);if(c.length=o,n<o){for(d=_;d<x-o;d++)m=d+o,f=d+n,m in g?g[f]=g[m]:delete g[f];for(d=x;d>x-o+n;d--)delete g[d-1]}else if(n>o)for(d=x-o;d>_;d--)m=d+o-1,f=d+n-1,m in g?g[f]=g[m]:delete g[f];for(d=0;d<n;d++)g[d+_]=arguments[d+2];return g.length=x-o+n,c}})},ae40:function(t,e,n){var o=n("83ab"),a=n("d039"),r=n("5135"),s=Object.defineProperty,i={},l=function(t){throw t};t.exports=function(t,e){if(r(i,t))return i[t];e||(e={});var n=[][t],u=!!r(e,"ACCESSORS")&&e.ACCESSORS,c=r(e,0)?e[0]:l,d=r(e,1)?e[1]:void 0;return i[t]=!!n&&!a((function(){if(u&&!o)return!0;var t={length:-1};u?s(t,1,{enumerable:!0,get:l}):t[1]=1,n.call(t,c,d)}))}},b727:function(t,e,n){var o=n("0366"),a=n("44ad"),r=n("7b0b"),s=n("50c4"),i=n("65f0"),l=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,c=4==t,d=6==t,m=5==t||d;return function(f,p,v,h){for(var b,g,x=r(f),_=a(x),w=o(p,v,3),y=s(_.length),E=0,A=h||i,C=e?A(f,y):n?A(f,0):void 0;y>E;E++)if((m||E in _)&&(b=_[E],g=w(b,E,x),t))if(e)C[E]=g;else if(g)switch(t){case 3:return!0;case 5:return b;case 6:return E;case 2:l.call(C,b)}else if(c)return!1;return d?-1:u||c?c:C}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},bb51:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("Colegio")]),n("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:"warning"},on:{dismissed:function(e){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(t._s(t.mensaje.texto))]),t.editar?n("form",{on:{submit:function(e){return e.preventDefault(),t.editarAlumno(t.alumnoEditar)}}},[n("h3",[t._v("Editar datos")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.alumnoEditar.id,expression:"alumnoEditar.id"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"RUT"},domProps:{value:t.alumnoEditar.id},on:{input:function(e){e.target.composing||t.$set(t.alumnoEditar,"id",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.alumnoEditar.nombre,expression:"alumnoEditar.nombre"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Nombre"},domProps:{value:t.alumnoEditar.nombre},on:{input:function(e){e.target.composing||t.$set(t.alumnoEditar,"nombre",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.alumnoEditar.edad,expression:"alumnoEditar.edad"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Edad"},domProps:{value:t.alumnoEditar.edad},on:{input:function(e){e.target.composing||t.$set(t.alumnoEditar,"edad",e.target.value)}}}),n("b-button",{staticClass:"btn-warning my-2 mx-2",attrs:{type:"submit"}},[t._v("Editar")]),n("b-button",{staticClass:"my-2",attrs:{type:"submit"},on:{click:function(e){t.editar=!1}}},[t._v("Cancelar")])],1):t._e(),t.editar?t._e():n("form",{on:{submit:function(e){return e.preventDefault(),t.agregarAlumno(e)}}},[n("h3",[t._v("Ingreso de datos")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.alumno.id,expression:"alumno.id"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"ID"},domProps:{value:t.alumno.id},on:{input:function(e){e.target.composing||t.$set(t.alumno,"id",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.alumno.nombre,expression:"alumno.nombre"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Nombre"},domProps:{value:t.alumno.nombre},on:{input:function(e){e.target.composing||t.$set(t.alumno,"nombre",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.alumno.edad,expression:"alumno.edad"}],staticClass:"form-control my-2",attrs:{type:"text",placeholder:"Edad"},domProps:{value:t.alumno.edad},on:{input:function(e){e.target.composing||t.$set(t.alumno,"edad",e.target.value)}}}),n("b-button",{staticClass:"bt-success my-2",attrs:{type:"submit"}},[t._v("Agregar")])],1),n("table",{staticClass:"table"},[t._m(0),n("tbody",t._l(t.alumnos,(function(e,o){return n("tr",{key:o},[n("th",{attrs:{scope:"row"}},[t._v(t._s(e._id))]),n("td",[t._v(t._s(e.id))]),n("td",[t._v(t._s(e.nombre))]),n("td",[t._v(t._s(e.edad))]),n("td",[n("b-button",{staticClass:"btn-danger btn-sm mx-2",on:{click:function(n){return t.eliminarAlumno(e._id)}}},[t._v("Eliminar")]),n("b-button",{staticClass:"btn-warning btn-sm",on:{click:function(n){return t.activarEdicion(e._id)}}},[t._v("Editar")])],1)])})),0)])],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("MongoID")]),n("th",{attrs:{scope:"col"}},[t._v("AlumnoID")]),n("th",{attrs:{scope:"col"}},[t._v("Nombre")]),n("th",{attrs:{scope:"col"}},[t._v("Edad")]),n("th",{attrs:{scope:"col"}},[t._v("Opciones")])])])}],r=(n("c740"),n("a434"),{data:function(){return{alumnos:[],mensaje:{color:"",texto:""},dismissSecs:5,dismissCountDown:0,alumno:{id:"",nombre:"",edad:""},editar:!1,alumnoEditar:{}}},created:function(){this.listarAlumnos()},methods:{alerta:function(){this.mensaje.color="success",this.mensaje.texto="Alerta",this.showAlert()},listarAlumnos:function(){var t=this;this.axios.get("/alumno").then((function(e){console.log(e),t.alumnos=e.data})).catch((function(t){console.log(t.response)}))},agregarAlumno:function(){var t=this;console.log(this.alumno),this.axios.post("/nuevo-alumno",this.alumno).then((function(e){t.alumnos.push(e.data),t.alumno.id="",t.alumno.nombre="",t.alumno.edad="",t.mensaje.color="success",t.mensaje.texto="Agregado con exito",t.showAlert()})).catch((function(e){console.log(e.response),""==t.alumno.id?t.mensaje.texto=e.response.data.error.errors.id.message:""==t.alumno.nombre?t.mensaje.texto=e.response.data.error.errors.nombre.message:t.mensaje.texto="Error no especificado",t.mensaje.color="danger",t.showAlert()}))},eliminarAlumno:function(t){var e=this;console.log(t),this.axios.delete("/alumno/".concat(t)).then((function(t){var n=e.alumnos.findIndex((function(e){return e._id===t.data._id}));e.alumnos.splice(n,1),e.mensaje.color="alert",e.mensaje.texto="Fila eliminada",e.showAlert()})).catch((function(t){console.log(t.response)}))},activarEdicion:function(t){var e=this;this.editar=!0,console.log(t),this.axios.get("/alumno/".concat(t)).then((function(t){e.alumnoEditar=t.data})).catch((function(t){console.log(t.response)}))},editarAlumno:function(t){var e=this;this.axios.put("/alumno/".concat(t._id),t).then((function(t){var n=e.alumnos.findIndex((function(e){return e._id===t.data._id}));e.alumnos[n].id=t.data.id,e.alumnos[n].nombre=t.data.nombre,e.alumnos[n].edad=t.data.edad,e.mensaje.color="success",e.mensaje.texto="Fila editada",e.showAlert(),e.editar=!1})).catch((function(t){console.log(t.response)}))},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}}}),s=r,i=n("2877"),l=Object(i["a"])(s,o,a,!1,null,null,null);e["default"]=l.exports},c740:function(t,e,n){"use strict";var o=n("23e7"),a=n("b727").findIndex,r=n("44d2"),s=n("ae40"),i="findIndex",l=!0,u=s(i);i in[]&&Array(1)[i]((function(){l=!1})),o({target:"Array",proto:!0,forced:l||!u},{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),r(i)},e8b5:function(t,e,n){var o=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}}}]);
//# sourceMappingURL=chunk-6af9841c.79aa2b9e.js.map