(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{23:function(e,t,n){e.exports=n(72)},28:function(e,t,n){},29:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},30:function(e,t,n){},61:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(17),c=n.n(r),i=(n(28),n(29),n(30),n(3)),l=n.n(i),s=n(5),u=n(4),m=n(18),f=n(21),d=n.n(f).a.create({baseURL:"https://api.themoviedb.org/3"}),v="267eabd47194f973be04a1305bb4be4c",h={fetchTreanding:"/trending/all/week?api_key=".concat(v,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(v,"&width_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(v,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(v,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(v,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(v,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(v,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(v,"&with_genres=99")},p=(n(61),n(22)),g=n.n(p);var b=function(e){var t=e.title,n=e.fetchUrl,r=e.isLargeRow,c=Object(a.useState)([]),i=Object(u.a)(c,2),f=i[0],v=i[1],p=Object(a.useState)(""),b=Object(u.a)(p,2),w=b[0],_=b[1];return Object(a.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(n);case 2:return t=e.sent,v(t.data.results),e.abrupt("return",h);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),console.log(f),o.a.createElement("div",{className:"row"},o.a.createElement("h2",null,t),o.a.createElement("div",{className:"row__posters"},f.map((function(e){return o.a.createElement("img",{key:e.id,onClick:function(){return function(e){w?_(""):g()((null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);_(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row__poster ".concat(r&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(r?e.poster_path:e.backdrop_path),alt:e.name})}))),w&&o.a.createElement(m.a,{videoId:w,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}}))};n(70);var w=function(){var e,t,n=Object(a.useState)([]),r=Object(u.a)(n,2),c=r[0],i=r[1];return Object(a.useEffect)((function(){function e(){return(e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get(h.fetchNetflixOriginals);case 2:t=e.sent,i(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),console.log("lalit kumar",Math.floor(Math.random()*t.data.results.length-1));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),o.a.createElement("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:"url('https://image.tmdb.org/t/p/original/".concat(null===c||void 0===c?void 0:c.backdrop_path,"')")}},o.a.createElement("div",{className:"banner__contents"},o.a.createElement("h1",{className:"banner__title"},(null===c||void 0===c?void 0:c.titile)||(null===c||void 0===c?void 0:c.name)||(null===c||void 0===c?void 0:c.original_name)),o.a.createElement("div",{className:"banner__buttons"},o.a.createElement("button",{className:"banner__button"},"Play"),o.a.createElement("button",{className:"banner__button"},"My List")),o.a.createElement("h1",{className:"banner__description"},(e=null===c||void 0===c?void 0:c.overview,t=400,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e))),o.a.createElement("div",{className:"banner--fadeBottom"}))};n(71);var _=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){window.addEventListener("scroll",(function(){return window.scrollY>100?r(!0):r(!1),function(){window.removeEventListener("scroll")}}))}),[]),o.a.createElement("div",{className:"nav ".concat(n&&"nav__black")},o.a.createElement("img",{className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:"Netflix Logo"}),o.a.createElement("img",{src:"https://www.startupdelta.org/wp-content/uploads/2018/04/No-profile-LinkedIn.jpg",alt:"avatar",className:"nav__avatar"}))};var E=function(){return Object(a.useEffect)((function(){"production"==="Production".toLowerCase()&&(console.log=function(){return 0},console.info=function(){return 0},console.warn=function(){return 0},console.error=function(){return 0},console.debug=function(){return 0})})),o.a.createElement("div",{className:"app"},o.a.createElement(_,null),o.a.createElement(w,null),o.a.createElement(b,{title:"NETFLIX ORIGINALS",fetchUrl:h.fetchNetflixOriginals,isLargeRow:!0}),o.a.createElement(b,{title:"Trending Now",fetchUrl:h.fetchTreanding}),o.a.createElement(b,{title:"Top Rated",fetchUrl:h.fetchTopRated}),o.a.createElement(b,{title:"Action Movies",fetchUrl:h.fetchActionMovies}),o.a.createElement(b,{title:"Comedy Movies",fetchUrl:h.fetchComedyMovies}),o.a.createElement(b,{title:"Horror Movies",fetchUrl:h.fetchHorrorMovies}),o.a.createElement(b,{title:"Romance Movies",fetchUrl:h.fetchRomanceMovies}),o.a.createElement(b,{title:"Documentry Movies",fetchUrl:h.fetchDocumentaries}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.128a03b6.chunk.js.map