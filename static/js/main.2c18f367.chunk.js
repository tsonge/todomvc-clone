(this["webpackJsonptodo-react"]=this["webpackJsonptodo-react"]||[]).push([[0],{11:function(e,t,a){e.exports=a(12)},12:function(e,t,a){"use strict";a.r(t);var n=a(10),o=a(1),r=a(2),c=a(4),l=a(3),s=a(5),u=a(0),d=a.n(u),i=a(8),m=a.n(i),p=(a(17),a(9)),h=a.n(p),b=a(6),f=a.n(b),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).state={todos:[{text:"Go to gym",completed:!1},{text:"Buy groceries",completed:!1},{text:"Walk the dog",completed:!1}]},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"update",value:function(e){this.setState({todos:[].concat(Object(n.a)(this.state.todos),[{text:e,completed:!1}])})}},{key:"updateCompleted",value:function(e){var t=f()(this.state.todos);t[e]={text:t[e].text,completed:!t[e].completed},this.setState({todos:t})}},{key:"deleteTodo",value:function(e){var t=f()(this.state.todos);t=t.filter((function(t,a){return a!==e})),this.setState({todos:t})}},{key:"render",value:function(){var e=this;return d.a.createElement(d.a.Fragment,null,d.a.createElement("h1",null,"todos"),d.a.createElement("div",{className:"maintodocontent"},d.a.createElement(y,{update:function(t){return e.update(t)}}),d.a.createElement(E,{todos:this.state.todos,updateCompleted:function(t){return e.updateCompleted(t)},deleteTodo:function(t){return e.deleteTodo(t)}})))}}]),t}(d.a.Component),y=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).handleKeyDown=function(e){"Enter"===e.key&&(a.props.update(e.target.value),e.target.value="")},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return d.a.createElement("input",{className:"inputt",placeholder:"What need's to be done?",onKeyDown:this.handleKeyDown})}}]),t}(d.a.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement(d.a.Fragment,null,this.props.todos.map((function(t,a){var n=h()();return d.a.createElement(d.a.Fragment,{key:a},d.a.createElement("div",{className:"checkbox"},d.a.createElement("input",{type:"checkbox",id:n,onChange:function(){return e.props.updateCompleted(a)}}),d.a.createElement("label",{htmlFor:n})),d.a.createElement("div",{className:"todo",style:t.completed?{textDecorationColor:"black"}:{}},t.text),d.a.createElement("div",{className:"delete-todo-btn",onClick:function(){return e.props.deleteTodo(a)}},d.a.createElement("div",{className:"cbar1"}),d.a.createElement("div",{className:"cbar2"})),d.a.createElement("hr",null))})))}}]),t}(d.a.Component);m.a.render(d.a.createElement(v,null),document.getElementById("root"))},17:function(e,t,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.2c18f367.chunk.js.map