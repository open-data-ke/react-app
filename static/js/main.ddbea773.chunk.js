(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(44)},29:function(e,t,a){},31:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(4),c=a.n(s),i=(a(29),a(6)),o=a(7),r=a(11),m=a(8),d=a(10),u=a(2),h=(a(31),a(5)),p=a(9),v=a(19),E=function(e,t){return e.map(function(e){return a=e,n=t,Object.keys(a).reduce(function(e,t){return Object(v.a)({},e,Object(p.a)({},n[t]||t,a[t]))},{});var a,n})},b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(r.a)(this,Object(m.a)(t).call(this,e))).handleNext=function(){a.state.visibleSections.actionSelect&&""!==a.state.selectedAction&&a.setState({visibleSections:{actionSelect:!1,phone:!0,email:!0,"country-select":!1,"location-select":!1,buttons:!1}}),a.state.visibleSections.phone&&null!==a.state.email&&null!==a.state.phone&&a.setState({visibleSections:{actionSelect:!1,phone:!1,email:!1,"country-select":!0,"location-select":!1,buttons:!1}})},a.handlePrev=function(){},a.componentDidMount=function(){fetch("http://opendata.test/api/v1/actions").then(function(e){return e.json()}).then(function(e){var t=E(e,{id:"value",description:"label"});a.setState({possibleActions:t})}),fetch("http://opendata.test/api/v1/countries").then(function(e){return e.json()}).then(function(e){var t=E(e,{id:"value",name:"label"});a.setState({availableCountries:t})})},a.handleSelect=function(e){a.setState({visibleSections:{actionSelect:!1,phone:!1,email:!1,"country-select":!0,"location-select":!1,"mines-select":!1,buttons:!1},selectedCountry:e._id},function(){a.getLocations()})},a.onChange=function(e){a.setState({selectedAction:e._id})},a.state={possibleActions:[],availableCountries:[],availableMines:[],availableLocations:[],selectedAction:"",selectedCountry:"",selectedLocation:"",selectedMine:"",phone:"",email:"",wizardButtons:!0,visibleSections:{actionSelect:!0,phone:!1,email:!1,"country-select":!1,"location-select":!1,"mines-select":!1,buttons:!1}},a.onChange=a.onChange.bind(Object(u.a)(Object(u.a)(a))),a.handleSelect=a.handleSelect.bind(Object(u.a)(Object(u.a)(a))),a.handleLocationSelect=a.handleLocationSelect.bind(Object(u.a)(Object(u.a)(a))),a.handleMineSelect=a.handleMineSelect.bind(Object(u.a)(Object(u.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(u.a)(Object(u.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"getLocations",value:function(){var e=this;fetch("http://opendata.test/api/v1/countries/"+this.state.selectedCountry+"/locations").then(function(e){return e.json()}).then(function(t){var a=E(t,{id:"value",name:"label"});e.setState({visibleSections:{actionSelect:!1,phone:!1,email:!1,"country-select":!0,"location-select":!0,"mines-select":!1,buttons:!1},availableLocations:a})})}},{key:"handleLocationSelect",value:function(e){var t=this;this.setState({selectedLocation:e._id},function(){t.getMines()})}},{key:"getMines",value:function(){var e=this;fetch("http://opendata.test/api/v1/locations/"+this.state.selectedLocation+"/mines").then(function(e){return e.json()}).then(function(t){var a=E(t,{id:"value",name:"label"});e.setState({visibleSections:{actionSelect:!1,phone:!1,email:!1,"country-select":!0,"location-select":!0,"mines-select":!0,buttons:!1},availableMines:a})})}},{key:"handleMineSelect",value:function(e){var t=this;this.setState({selectedMine:e._id},function(){t.setButtonVisibility()})}},{key:"setButtonVisibility",value:function(){this.setState({visibleSections:{actionSelect:!1,phone:!1,email:!1,"country-select":!0,"location-select":!0,"mines-select":!0,buttons:!0},wizardButtons:!1})}},{key:"handleSubmit",value:function(){var e=this.state;delete e.possibleActions,delete e.availableCountries,delete e.availableMines,delete e.availableLocations,delete e.visibleSections,fetch("http://opendata.test/api/v1/subscriptions",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(){return alert("successfully posted data")})}},{key:"render",value:function(){var e=this,t=this.state,a=t.possibleActions,n=t.visibleSections;return l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"banner"},l.a.createElement("h1",null,"EIMOG"),l.a.createElement("hr",null)),l.a.createElement("div",{className:"torso"},n.actionSelect?l.a.createElement("div",{className:"stage actionSelect"},l.a.createElement("h4",null,"I want to ..."),l.a.createElement(h.a,{options:a,isSearchable:"true",autoFocus:"true",placeholder:"type/select action",onChange:this.onChange})):l.a.createElement("span",{className:"hidden"}),n.email?l.a.createElement("div",{className:"stage phone-email"},l.a.createElement("h4",null,"Enter Email"),l.a.createElement("input",{className:"form-control",type:"email",name:"email",onChange:function(t){return e.setState({email:t.target.value})},placeholder:"enter email",style:{padding:"5px"}})):l.a.createElement("span",{className:"hidden"}),n.phone?l.a.createElement("div",{className:"stage phone-email"},l.a.createElement("h4",null,"Enter Phone"),l.a.createElement("input",{type:"text",name:"phone",className:"form-control",onChange:function(t){return e.setState({phone:t.target.value})},placeholder:"enter phone",style:{padding:"5px"}})):l.a.createElement("span",{className:"hidden"}),n["country-select"]?l.a.createElement("div",{className:"stage country-select"},l.a.createElement("h4",null,"Select Country"),l.a.createElement(h.a,{options:this.state.availableCountries,isSearchable:"true",placeholder:"",onChange:this.handleSelect})):l.a.createElement("span",{className:"hidden"}),n["location-select"]?l.a.createElement("div",{className:"stage location-select"},l.a.createElement("h4",null,"Select Location"),l.a.createElement(h.a,{options:this.state.availableLocations,isSearchable:"true",placeholder:"",onChange:this.handleLocationSelect})):l.a.createElement("span",{className:"hidden"}),n["mines-select"]?l.a.createElement("div",{className:"stage mines-select"},l.a.createElement("h4",null,"Select Mine"),l.a.createElement(h.a,{options:this.state.availableMines,isSearchable:"true",placeholder:"",onChange:this.handleMineSelect})):l.a.createElement("span",{className:"hidden"}),n.buttons?l.a.createElement("div",{className:"stage country-select"},l.a.createElement("button",{type:"button",onClick:this.handleSubmit},"Process Form Information")):l.a.createElement("span",{className:"hidden"})),l.a.createElement("div",{className:"footer"}),this.state.wizardButtons&&l.a.createElement("div",null,l.a.createElement("button",{className:"btn prev",onClick:this.handlePrev},"Prev"),l.a.createElement("button",{className:"btn next",onClick:this.handleNext},"Next")))}}]),t}(n.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(r.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"container wow fadeInUp delay-03s mb-0 pt-0"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"logo text-center"},l.a.createElement("p",{ltyle:"fontSize: 20px;"},l.a.createElement("b",null,"Extractive Information")),l.a.createElement("h2",null,"Extractive Informations Mining Oil and Gas")))),l.a.createElement("section",{id:"about wow fadeInUp delay-03s",className:"section-padding"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12 col-sm-12 text-center"},l.a.createElement("div",{className:"about-title"},l.a.createElement("h2",null,"About Us"),l.a.createElement("p",null,"A collaborative platform that contains all extractive informations for informed citizenly")),l.a.createElement("div",{className:"col-md-3 col-sm-6 col-xs-12 wow fadeInUp delay-02s"},l.a.createElement("div",{className:"img"},l.a.createElement("i",{className:"fa fa-refresh"})),l.a.createElement("h3",{className:"abt-hd"},"Our process"),l.a.createElement("p",null,"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores")),l.a.createElement("div",{className:"col-md-3 col-sm-6 col-xs-12 wow fadeInUp delay-04s"},l.a.createElement("div",{className:"img"},l.a.createElement("i",{className:"fa fa-eye"})),l.a.createElement("h3",{className:"abt-hd"},"Our Vision"),l.a.createElement("p",null,"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores")),l.a.createElement("div",{className:"col-md-3 col-sm-6 col-xs-12 wow fadeInUp delay-06s"},l.a.createElement("div",{className:"img"},l.a.createElement("i",{className:"fa fa-cogs"})),l.a.createElement("h3",{className:"abt-hd"},"Our Approach"),l.a.createElement("p",null,"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores")),l.a.createElement("div",{className:"col-md-3 col-sm-6 col-xs-12 wow fadeInUp delay-08s"},l.a.createElement("div",{className:"img"},l.a.createElement("i",{className:"fa fa-dot-circle-o"})),l.a.createElement("h3",{className:"abt-hd"},"Our Objective"),l.a.createElement("p",null,"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores")))))),l.a.createElement("section",null,l.a.createElement("h2",{className:"subs-title text-center"},"Subscribe now to get Recent updates!!!"),l.a.createElement("div",{className:"subcription-info text-center"},l.a.createElement("form",{className:"subscribe_form",action:"#",method:"post"},l.a.createElement("input",{required:"",value:"",placeholder:"Enter your email...",className:"email",id:"email",name:"email",type:"email"}),l.a.createElement("input",{className:"subscribe",name:"email",value:"Subscribe!",type:"submit"})),l.a.createElement("p",{className:"sub-p"},"We Promise to never span you."))),l.a.createElement("section",{style:{marginBottom:"30px"}},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row bort text-center"},l.a.createElement("div",{className:"social"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},l.a.createElement("i",{className:"fa fa-facebook"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},l.a.createElement("i",{className:"fa fa-twitter"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"/#"},l.a.createElement("i",{className:"fa fa-linkedin"})))))))),l.a.createElement("div",{id:"contact-info"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"contact-title"},l.a.createElement(b,null))),l.a.createElement("div",{className:"contact col-md-6 wow fadeIn delay-08s"},l.a.createElement("div",{className:"col-md-10 col-md-offset-1"},l.a.createElement("div",{id:"note"}),l.a.createElement("div",{id:"sendmessage"},"Your message has been sent. Thank you!"),l.a.createElement("div",{id:"errormessage"}),l.a.createElement("form",{action:"",method:"post",className:"contactForm"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",name:"name",className:"form-control",id:"name",placeholder:"Your Name","data-rule":"minlen:4","data-msg":"Please enter at least 4 chars"}),l.a.createElement("div",{className:"validation"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"email",className:"form-control",name:"email",id:"email",placeholder:"Your Email","data-rule":"email","data-msg":"Please enter a valid email"}),l.a.createElement("div",{className:"validation"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",name:"subject",id:"subject",placeholder:"Subject","data-rule":"minlen:4","data-msg":"Please enter at least 8 chars of subject"}),l.a.createElement("div",{className:"validation"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{className:"form-control",name:"message",rows:"5","data-rule":"required","data-msg":"Please write something for us",placeholder:"Message"}),l.a.createElement("div",{className:"validation"})),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{type:"submit",className:"contact-submit"},"Send Message"))))))))),l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row bort"},l.a.createElement("div",{className:"copyright",style:{fontFamily:"sans-serif"}},"\xa9 Copyright Extractive Mining Oil and Gas. All rights reserved.",l.a.createElement("div",{className:"credits"},"Designed by ",l.a.createElement("a",{href:"/"},"Extractive Informations")))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,2,1]]]);
//# sourceMappingURL=main.ddbea773.chunk.js.map