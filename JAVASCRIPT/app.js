!function(){var e,t,i=[item0={id:"item0",name:"Feels Bad Man",firstPrice:10,price:10,pps:1,amount:0,totalPps:0},item1={id:"item1",name:"MADE YOU LOOK",firstPrice:250,price:250,pps:10,amount:0,totalPps:0},item2={id:"item2",name:"Salt",firstPrice:2e3,price:2e3,pps:100,amount:0,totalPps:0},item3={id:"item3",name:"Wednesday Frog",firstPrice:22500,price:22500,pps:1e3,amount:0,totalPps:0},item4={id:"item4",name:"Kermit",firstPrice:240700,price:240700,pps:5500,amount:0,totalPps:0},item5={id:"item5",name:"Spongebob",firstPrice:264e4,price:264e4,pps:23e3,amount:0,totalPps:0},item6={id:"item6",name:"Dat Boi",firstPrice:31416e3,price:31416e3,pps:113e3,amount:0,totalPps:0},item7={id:"item7",name:"Spooky Scary Skeleton",firstPrice:398e6,price:398e6,pps:85e4,amount:0,totalPps:0},item8={id:"item8",name:"Distracted Boyfriend",firstPrice:514688e4,price:514688e4,pps:47e5,amount:0,totalPps:0},item9={id:"item9",name:"Feels Amazing Man",firstPrice:705123e5,price:705123e5,pps:294e5,amount:0,totalPps:0},item10={id:"item10",name:"Gachi",firstPrice:0xf642e8e4d0,price:0xf642e8e4d0,pps:199e6,amount:0,totalPps:0},item11={id:"item11",name:"Grey Face",firstPrice:17980636738e3,price:17980636738e3,pps:9814e5,amount:0,totalPps:0}],r=[upgrade0={upgradedItem:item0,effectivness:50,price:250,bought:!1},upgrade1={upgradedItem:item0,effectivness:100,price:2300,bought:!1},upgrade2={upgradedItem:item1,effectivness:50,price:2500,bought:!1},upgrade3={upgradedItem:item1,effectivness:100,price:6e4,bought:!1},upgrade4={upgradedItem:item2,effectivness:50,price:35e3,bought:!1},upgrade5={upgradedItem:item2,effectivness:100,price:118e4,bought:!1},upgrade6={upgradedItem:item3,effectivness:50,price:368e3,bought:!1},upgrade7={upgradedItem:item3,effectivness:100,price:21e6,bought:!1},upgrade8={upgradedItem:item4,effectivness:50,price:174e4,bought:!1},upgrade9={upgradedItem:item4,effectivness:100,price:1995e5,bought:!1},upgrade10={upgradedItem:item5,effectivness:50,price:23e6,bought:!1},upgrade11={upgradedItem:item5,effectivness:100,price:21e8,bought:!1},upgrade12={upgradedItem:item6,effectivness:50,price:24e7,bought:!1},upgrade13={upgradedItem:item6,effectivness:100,price:34625e5,bought:!1},upgrade14={upgradedItem:item7,effectivness:50,price:42e8,bought:!1},upgrade15={upgradedItem:item7,effectivness:100,price:2803e8,bought:!1},upgrade16={upgradedItem:item8,effectivness:50,price:4e10,bought:!1},upgrade17={upgradedItem:item8,effectivness:100,price:6312e9,bought:!1},upgrade18={upgradedItem:item9,effectivness:50,price:72e10,bought:!1},upgrade19={upgradedItem:item9,effectivness:100,price:147312e9,bought:!1},upgrade20={upgradedItem:item10,effectivness:50,price:10798e9,bought:!1},upgrade21={upgradedItem:item10,effectivness:100,price:15e14,bought:!1},upgrade22={upgradedItem:item11,effectivness:50,price:199233e9,bought:!1},upgrade23={upgradedItem:item11,effectivness:100,price:261e14,bought:!1}],p=document.getElementsByClassName("shop-item"),n=document.getElementsByClassName("upgrade-image"),a=0,s=0,d=document.getElementById("test-pepes");function c(){for(var e=0;e<i.length;e++)document.getElementById(i[e].id).querySelector("span.shop-item-amount").innerHTML=o(i[e].amount),document.getElementById(i[e].id).querySelector("span.shop-item-pps").innerHTML="PPS: "+o(i[e].pps),document.getElementById(i[e].id).querySelector("span.shop-item-price").innerHTML=o(i[e].price);for(var t=0;t<r.length;t++)!0===r[t].bought&&(document.getElementById("upgrade"+t).style.display="none")}function o(e){switch(!0){case e>=1e18:e=(e/1e18).toFixed(3)+" S";break;case e>=1e15:e=(e/1e15).toFixed(3)+" Q";break;case e>=1e12:e=(e/1e12).toFixed(3)+" T";break;case e>=1e9:e=(e/1e9).toFixed(3)+" B";break;case e>=1e6:e=(e/1e6).toFixed(3)+" M";break;case e>=1e3:e=(e/1e3).toFixed(3)+" K"}return e}function m(){for(var e=0,t=0;t<i.length;t++)e+=i[t].totalPps;e=Math.round(e),s=e,h()}function u(e){document.getElementById(e.id).querySelector("span.shop-item-pps").innerHTML="PPS: "+o(e.totalPps)}function g(e){if(a>=e.price){a-=e.price,e.amount++,e.price=Math.floor(e.firstPrice*Math.pow(1.2,e.amount)),e.totalPps=e.amount*e.pps;var t=document.getElementById(e.id);t.querySelector("span.shop-item-amount").innerHTML=o(e.amount),t.querySelector("span.shop-item-price").innerHTML=o(e.price),m(),u(e)}}null!==localStorage.getItem("save")?(console.log("loading"),e=JSON.parse(localStorage.getItem("save")),a=e.pepes,s=e.gpps,i=e.items,r=e.upgrades,c(),I()):d.style.display="initial",document.getElementById("main-pepe-button").addEventListener("click",function(){a+=1},!1);for(var l=0;l<i.length;l++)p[l].addEventListener("click",g.bind(this,i[l]),!1);for(var f=0;f<r.length;f++)n[f].addEventListener("click",y.bind(this,r[f]),!1);function y(e){a>=e.price&&!1===e.bought&&(a-=e.price,e.bought=!0,e.upgradedItem.pps+=Math.round(e.upgradedItem.pps*(e.effectivness/100)*100)/100,e.upgradedItem.totalPps=e.upgradedItem.amount*e.upgradedItem.pps,m(),event.target.style.display="none",u(e.upgradedItem))}function I(){d.style.display="none"}function h(){void 0!=t&&t.terminate(),(t=new Worker(URL.createObjectURL(new Blob(["("+worker_function.toString()+")()"],{type:"text/javascript"})))).onmessage=function(e){a+=e.data},t.postMessage(s)}document.getElementById("test-pepes-accept").addEventListener("click",function(){a+=9e8,I()},!1),document.getElementById("test-pepes-decline").addEventListener("click",I,!1),document.getElementById("test-pepes-caller").addEventListener("click",function(){d.style.display="initial"},!1),c(),h(),setInterval(function(){document.getElementById("pepe-counter").innerHTML=o(Math.round(a))+" Pepes",document.getElementById("gpps-counter").innerHTML=o(s)+" PPS";for(var e=0;e<i.length;e++)a>=i[e].price?(document.getElementById(i[e].id).style.opacity="1",document.getElementById(i[e].id).style.filter="none"):(document.getElementById(i[e].id).style.opacity="0.45",document.getElementById(i[e].id).style.filter="grayscale(100%)"),0==i[e].amount?document.getElementById(i[e].id).querySelector("span.shop-item-pps").style.opacity="0.4":document.getElementById(i[e].id).querySelector("span.shop-item-pps").style.opacity="1";for(var t=0;t<n.length;t++)n[t].querySelector("span.upgrade-price").innerHTML.replace(/\s/g,""),a<r[t].price?(n[t].querySelector("span.upgrade-price").style.opacity="0.4",n[t].querySelector("img").style.opacity="0.4"):(n[t].querySelector("span.upgrade-price").style.opacity="1",n[t].querySelector("img").style.opacity="1")},40),setInterval(function(){var e={pepes:a,gpps:s,items:i,upgrades:r};localStorage.setItem("save",JSON.stringify(e))},3e3)}();