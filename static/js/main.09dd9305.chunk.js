(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{10:function(e,t,n){e.exports=n(20)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),i=(n(15),n(3)),l=n(4),s=n(7),u=n(6),h=n(8),m=(n(16),function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc bg-dark-blue dib br3 pa3 ma2 grow bw2 shadow-5",id:"robotDiv"},r.a.createElement("img",{alt:"photo",src:"https://robohash.org/".concat(a)}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))}),d=function(e){var t=e.robots,n=t.map((function(e,n){return r.a.createElement(m,{id:t[n].id,name:t[n].name,email:t[0].email})}));return r.a.createElement("div",null,n)},f=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{classname:"pa3",type:"search",placeholder:"Search Robots...",onChange:t}))},b=(n(17),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"550px"}},e.children)}),p=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robofriends"),r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement(b,null,r.a.createElement(d,{robots:a}))):r.a.createElement("h1",null,"Loading")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(18),n(19);c.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.09dd9305.chunk.js.map