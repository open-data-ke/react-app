(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,n){e.exports=n(44)},29:function(e,t,n){},31:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),i=n(4),c=n.n(i),s=(n(29),n(14)),o=n(15),r=n(23),u=n(16),h=n(22),d=n(2),m=(n(31),n(5)),b=n(6),p=n(17),v=function(e,t){return e.map(function(e){return n=e,a=t,Object.keys(n).reduce(function(e,t){return Object(p.a)({},e,Object(b.a)({},a[t]||t,n[t]))},{});var n,a})},S=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(r.a)(this,Object(u.a)(t).call(this,e))).handleNext=function(e){n.state.visibleSections.actionSelect&&null!==n.state.selectedAction&&n.onChange(e)},n.handlePrev=function(){},n.componentDidMount=function(){fetch("http://opendata.test/api/v1/actions").then(function(e){return e.json()}).then(function(e){var t=v(e,{id:"value",description:"label"});n.setState({possibleActions:t})}),fetch("http://opendata.test/api/v1/countries").then(function(e){return e.json()}).then(function(e){var t=v(e,{id:"value",name:"label"});n.setState({availableCountries:t})})},n.addPhone=function(e){"Enter"===e.key&&n.setState({visibleSections:{"action-select":!0,phone:!0,email:!0,"country-select":!1,"location-select":!1,"mines-select":!1,buttons:!1}})},n.addEmail=function(e){"Enter"===e.key&&n.setState({visibleSections:{"action-select":!0,phone:!0,email:!0,"country-select":!0,"location-select":!1,"mines-select":!1,buttons:!1}})},n.handleSelect=function(e){n.setState({visibleSections:{"action-select":!0,phone:!0,email:!0,"country-select":!0,"location-select":!1,"mines-select":!1,buttons:!1},selectedCountry:e._id},function(){n.getLocations()})},n.onChange=function(e){n.setState({visibleSections:{"action-select":!0,phone:!0,email:!1,"country-select":!1,"location-selecte":!1,buttons:!1},selectedAction:e._id})},n.state={possibleActions:[],availableCountries:[],availableMines:[],availableLocations:[],selectedAction:"",selectedCountry:"",selectedLocation:"",selectedMine:"",phone:"",email:"",visibleSections:{"action-select":!0,phone:!1,email:!1,"country-select":!1,"location-select":!1,"mines-select":!1,buttons:!1}},n.onChange=n.onChange.bind(Object(d.a)(Object(d.a)(n))),n.addPhone=n.addPhone.bind(Object(d.a)(Object(d.a)(n))),n.handleSelect=n.handleSelect.bind(Object(d.a)(Object(d.a)(n))),n.addEmail=n.addEmail.bind(Object(d.a)(Object(d.a)(n))),n.handleLocationSelect=n.handleLocationSelect.bind(Object(d.a)(Object(d.a)(n))),n.handleMineSelect=n.handleMineSelect.bind(Object(d.a)(Object(d.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(Object(d.a)(n))),n}return Object(h.a)(t,e),Object(o.a)(t,[{key:"getLocations",value:function(){var e=this;fetch("http://opendata.test/api/v1/countries/"+this.state.selectedCountry+"/locations").then(function(e){return e.json()}).then(function(t){var n=v(t,{id:"value",name:"label"});e.setState({visibleSections:{"action-select":!0,phone:!0,email:!0,"country-select":!0,"location-select":!0,"mines-select":!1,buttons:!1},availableLocations:n})})}},{key:"handleLocationSelect",value:function(e){var t=this;this.setState({selectedLocation:e._id},function(){t.getMines()})}},{key:"getMines",value:function(){var e=this;fetch("http://opendata.test/api/v1/locations/"+this.state.selectedLocation+"/mines").then(function(e){return e.json()}).then(function(t){var n=v(t,{id:"value",name:"label"});e.setState({visibleSections:{"action-select":!0,phone:!0,email:!0,"country-select":!0,"location-select":!0,"mines-select":!0,buttons:!1},availableMines:n})})}},{key:"handleMineSelect",value:function(e){var t=this;this.setState({selectedMine:e._id},function(){t.setButtonVisibility()})}},{key:"setButtonVisibility",value:function(){this.setState({visibleSections:{"action-select":!0,phone:!0,email:!0,"country-select":!0,"location-select":!0,"mines-select":!0,buttons:!0}})}},{key:"handleSubmit",value:function(){var e=this.state;delete e.possibleActions,delete e.availableCountries,delete e.availableMines,delete e.availableLocations,delete e.visibleSections,fetch("http://opendata.test/api/v1/subscriptions",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(){return alert("successfully posted data")})}},{key:"render",value:function(){var e=this,t=this.state,n=t.possibleActions,a=t.visibleSections;return l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"banner"},l.a.createElement("h1",null,"MYNR"),l.a.createElement("p",null,"local resource"),l.a.createElement("hr",null)),l.a.createElement("div",{className:"torso"},a["action-select"]?l.a.createElement("div",{className:"stage action-select"},l.a.createElement("h4",null,"I want to ..."),l.a.createElement(m.a,{options:n,isSearchable:"true",autoFocus:"true",placeholder:"type/select action",onChange:this.onChange})):l.a.createElement("span",{className:"hidden"}),a.phone?l.a.createElement("div",{className:"stage phone-email"},l.a.createElement("h4",null,"Enter Phone"),l.a.createElement("input",{type:"text",name:"phone",onKeyPress:this.addPhone,onChange:function(t){return e.setState({phone:t.target.value})},placeholder:"enter phone"})):l.a.createElement("span",{className:"hidden"}),a.email?l.a.createElement("div",{className:"stage phone-email"},l.a.createElement("h4",null,"Enter Email"),l.a.createElement("input",{type:"email",name:"email",onKeyPress:this.addEmail,onChange:function(t){return e.setState({email:t.target.value})},placeholder:"enter email"})):l.a.createElement("span",{className:"hidden"}),a["country-select"]?l.a.createElement("div",{className:"stage country-select"},l.a.createElement("h4",null,"Select Country"),l.a.createElement(m.a,{options:this.state.availableCountries,isSearchable:"true",placeholder:"",onChange:this.handleSelect})):l.a.createElement("span",{className:"hidden"}),a["location-select"]?l.a.createElement("div",{className:"stage location-select"},l.a.createElement("h4",null,"Select Location"),l.a.createElement(m.a,{options:this.state.availableLocations,isSearchable:"true",placeholder:"",onChange:this.handleLocationSelect})):l.a.createElement("span",{className:"hidden"}),a["mines-select"]?l.a.createElement("div",{className:"stage mines-select"},l.a.createElement("h4",null,"Select Mine"),l.a.createElement(m.a,{options:this.state.availableMines,isSearchable:"true",placeholder:"",onChange:this.handleMineSelect})):l.a.createElement("span",{className:"hidden"}),a.buttons?l.a.createElement("div",{className:"stage country-select"},l.a.createElement("button",{type:"button",onClick:this.handleSubmit},"Process Form Information")):l.a.createElement("span",{className:"hidden"})),l.a.createElement("div",{className:"footer"}),l.a.createElement("button",{className:"btn prev",onClick:this.handlePrev},"Prev"),l.a.createElement("button",{className:"btn next",onClick:this.handleNext},"Next"))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,2,1]]]);
//# sourceMappingURL=main.4617e1c3.chunk.js.map