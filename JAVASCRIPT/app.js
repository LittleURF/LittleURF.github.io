!function(){if(null!==localStorage.getItem("save"))var r=[item0={id:"item0",name:"Feels Bad Man",firstPrice:10,price:10,pps:1,amount:0,totalPps:0},item1={id:"item1",name:"MADE YOU LOOK",firstPrice:250,price:250,pps:10,amount:0,totalPps:0},item2={id:"item2",name:"Salt",firstPrice:2e3,price:2e3,pps:100,amount:0,totalPps:0},item3={id:"item3",name:"Wednesday Frog",firstPrice:22500,price:22500,pps:1e3,amount:0,totalPps:0},item4={id:"item4",name:"Kermit",firstPrice:240700,price:240700,pps:5500,amount:0,totalPps:0},item5={id:"item5",name:"Spongebob",firstPrice:264e4,price:264e4,pps:23e3,amount:0,totalPps:0},item6={id:"item6",name:"Dat Boi",firstPrice:31416e3,price:31416e3,pps:113e3,amount:0,totalPps:0},item7={id:"item7",name:"Spooky Scary Skeleton",firstPrice:398e6,price:398e6,pps:85e4,amount:0,totalPps:0},item8={id:"item8",name:"Distracted Boyfriend",firstPrice:514688e4,price:514688e4,pps:47e5,amount:0,totalPps:0},item9={id:"item9",name:"Feels Amazing Man",firstPrice:705123e5,price:705123e5,pps:294e5,amount:0,totalPps:0},item10={id:"item10",name:"Gachi",firstPrice:0xf642e8e4d0,price:0xf642e8e4d0,pps:199e6,amount:0,totalPps:0},item11={id:"item11",name:"Grey Face",firstPrice:17980636738e3,price:17980636738e3,pps:9814e5,amount:0,totalPps:0}],p=[upgrade0={upgradedItem:r[0],effectivness:50,price:250,bought:!1},upgrade1={upgradedItem:r[0],effectivness:100,price:2300,bought:!1},upgrade2={upgradedItem:item1,effectivness:50,price:2500,bought:!1},upgrade3={upgradedItem:item1,effectivness:100,price:6e4,bought:!1},upgrade4={upgradedItem:item2,effectivness:50,price:35e3,bought:!1},upgrade5={upgradedItem:item2,effectivness:100,price:118e4,bought:!1},upgrade6={upgradedItem:item3,effectivness:50,price:368e3,bought:!1},upgrade7={upgradedItem:item3,effectivness:100,price:21e6,bought:!1},upgrade8={upgradedItem:item4,effectivness:50,price:174e4,bought:!1},upgrade9={upgradedItem:item4,effectivness:100,price:1995e5,bought:!1},upgrade10={upgradedItem:item5,effectivness:50,price:23e6,bought:!1},upgrade11={upgradedItem:item5,effectivness:100,price:21e8,bought:!1},upgrade12={upgradedItem:item6,effectivness:50,price:24e7,bought:!1},upgrade13={upgradedItem:item6,effectivness:100,price:34625e6,bought:!1},upgrade14={upgradedItem:item7,effectivness:50,price:42e8,bought:!1},upgrade15={upgradedItem:item7,effectivness:100,price:2803e8,bought:!1},upgrade16={upgradedItem:item8,effectivness:50,price:4e10,bought:!1},upgrade17={upgradedItem:item8,effectivness:100,price:6312e9,bought:!1},upgrade18={upgradedItem:item9,effectivness:50,price:72e10,bought:!1},upgrade19={upgradedItem:item9,effectivness:100,price:147312e9,bought:!1},upgrade20={upgradedItem:item10,effectivness:50,price:10798e9,bought:!1},upgrade21={upgradedItem:item10,effectivness:100,price:15e14,bought:!1},upgrade22={upgradedItem:item11,effectivness:50,price:199233e9,bought:!1},upgrade23={upgradedItem:item11,effectivness:100,price:261e14,bought:!1}];var e,t=document.getElementsByClassName("shop-item"),i=document.getElementsByClassName("upgrade-image"),n=0,a=0,s=document.getElementById("test-pepes");function o(){for(var e=0;e<r.length;e++)document.getElementById(r[e].id).querySelector("span.shop-item-amount").innerHTML=d(r[e].amount),document.getElementById(r[e].id).querySelector("span.shop-item-pps").innerHTML="PPS: "+d(r[e].totalPps),document.getElementById(r[e].id).querySelector("span.shop-item-price").innerHTML=d(r[e].price);for(var t=0;t<p.length;t++)!0===p[t].bought&&(document.getElementById("upgrade"+t).style.display="none")}function d(e,t){function i(e){for(var t=2;0<=t;t--){0==e.toString().split("").pop()&&(e=parseFloat(e).toFixed(t))}return e}switch(!0){case 1e18<=e:e=(e/1e18).toFixed(3),t||(e=i(e)),e+=" S";break;case 1e15<=e:e=(e/1e15).toFixed(3),t||(e=i(e)),e+=" Q";break;case 1e12<=e:e=(e/1e12).toFixed(3),t||(e=i(e)),e+=" T";break;case 1e9<=e:e=(e/1e9).toFixed(3),t||(e=i(e)),e+=" B";break;case 1e6<=e:e=(e/1e6).toFixed(3),t||(e=i(e)),e+=" M";break;case 1e3<=e:e=(e/1e3).toFixed(3),t||(e=i(e)),e+=" K"}return e}function c(){for(var e=0,t=0;t<r.length;t++)e+=r[t].totalPps;e=Math.round(e),a=e,I()}function m(e){document.getElementById(e.id).querySelector("span.shop-item-pps").innerHTML="PPS: "+d(e.totalPps)}function u(e){if(n>=e.price){n-=e.price,e.amount++,e.price=Math.floor(e.firstPrice*Math.pow(1.2,e.amount)),e.totalPps=e.amount*e.pps;var t=document.getElementById(e.id);t.querySelector("span.shop-item-amount").innerHTML=d(e.amount),t.querySelector("span.shop-item-price").innerHTML=d(e.price),c(),m(e)}}null!==localStorage.getItem("save")?(console.log("loading"),function(){var e=JSON.parse(localStorage.getItem("save"));n=e.pepes,a=e.gpps;for(var t=0;t<r.length;t++)r[t].price=e.items[t].price,r[t].pps=e.items[t].pps,r[t].amount=e.items[t].amount,r[t].totalPps=e.items[t].totalPps;for(var i=0;i<p.length;i++)p[i].bought=e.upgrades[i].bought;o()}(),y()):s.style.display="initial",document.getElementById("main-pepe-button").addEventListener("click",function(){n+=1},!1);for(var g=0;g<r.length;g++)t[g].addEventListener("click",u.bind(this,r[g]),!1);for(var l=0;l<p.length;l++)i[l].addEventListener("click",f.bind(this,p[l]),!1);function f(e){n>=e.price&&!1===e.bought&&(console.log(e.upgradedItem.totalPps),n-=e.price,e.bought=!0,e.upgradedItem.pps+=Math.round(e.upgradedItem.pps*(e.effectivness/100)*100)/100,e.upgradedItem.totalPps=e.upgradedItem.amount*e.upgradedItem.pps,c(),event.target.style.display="none",m(e.upgradedItem),o(),console.log(e.upgradedItem.totalPps))}function y(){s.style.display="none"}function I(){null!=e&&e.terminate(),(e=new Worker(URL.createObjectURL(new Blob(["("+worker_function.toString()+")()"],{type:"text/javascript"})))).onmessage=function(e){n+=e.data},e.postMessage(a)}document.getElementById("test-pepes-accept").addEventListener("click",function(){n+=9e8,y()},!1),document.getElementById("test-pepes-decline").addEventListener("click",y,!1),document.getElementById("test-pepes-caller").addEventListener("click",function(){s.style.display="initial"},!1),o(),I(),setInterval(function(){document.getElementById("pepe-counter").innerHTML=d(Math.round(n),!0)+" Pepes",document.getElementById("gpps-counter").innerHTML=d(a)+" PPS";for(var e=0;e<r.length;e++)n>=r[e].price?(document.getElementById(r[e].id).style.opacity="1",document.getElementById(r[e].id).style.filter="none"):(document.getElementById(r[e].id).style.opacity="0.45",document.getElementById(r[e].id).style.filter="grayscale(100%)"),0==r[e].amount?document.getElementById(r[e].id).querySelector("span.shop-item-pps").style.opacity="0.4":document.getElementById(r[e].id).querySelector("span.shop-item-pps").style.opacity="1";for(var t=0;t<i.length;t++)n<p[t].price?(i[t].querySelector("span.upgrade-price").style.opacity="0.4",i[t].querySelector("img").style.opacity="0.4"):(i[t].querySelector("span.upgrade-price").style.opacity="1",i[t].querySelector("img").style.opacity="1")},40),setInterval(function(){var e={pepes:n,gpps:a,items:r,upgrades:p};localStorage.setItem("save",JSON.stringify(e))},3e3)}();