"use strict";(self.webpackChunktest_car_rental=self.webpackChunktest_car_rental||[]).push([[219],{219:function(n,t,e){e.r(t),e.d(t,{default:function(){return R}});var r,i,o,c,a,s,l,u,d,h,f,x=e(439),p=e(791),g=e(434),m=e(75),j=function(n){return n.cars.allCars},b=function(n){return n.cars.isLoading},v=function(n){return n.cars.error},Z=function(n){return n.favorite.favoriteArray},w=function(){return{allCars:(0,g.v9)(j),isLoading:(0,g.v9)(b),error:(0,g.v9)(v),favorite:(0,g.v9)(Z)}},y=e(649),k=e(184),P=function(){return(0,k.jsx)("div",{children:"Filter form"})},C=e(168),F=e(444),L=F.ZP.li(r||(r=(0,C.Z)(["\n  position: relative;\n  //   flex-basis: calc((100% - 87px) / 5);\n  height: 426px;\n  border-radius: 12px;\n  transition: box-shadow 300ms\n      ",",\n    scale 300ms ",";\n\n  &:hover {\n    box-shadow: ",";\n    scale: 1.04;\n  }\n"])),(function(n){return n.theme.transition.timingFunction}),(function(n){return n.theme.transition.timingFunction}),(function(n){return n.theme.colors.shadow})),z=F.ZP.button(i||(i=(0,C.Z)(["\n  position: absolute;\n  right: 14px;\n  top: 14px;\n  width: 20px;\n  height: 20px;\n  display: flex;\n  background-color: transparent;\n  border: transparent;\n  padding: 0;\n  justify-content: center;\n  align-items: center;\n\n  svg {\n    width: 18px;\n    height: 18px;\n    fill: transparent;\n    opacity: 90%;\n    stroke: ",";\n  }\n"])),(function(n){return n.theme.colors.white})),_=F.ZP.img(o||(o=(0,C.Z)(["\n  margin-bottom: 14px;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 14px;\n"]))),D=F.ZP.div(c||(c=(0,C.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]))),E=F.ZP.div(a||(a=(0,C.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n"]))),I=(0,F.ZP)(E)(s||(s=(0,C.Z)([""]))),J=F.ZP.span(l||(l=(0,C.Z)(["\n  color: ",";\n"])),(function(n){return n.theme.colors.accentLight})),S=F.ZP.ul(u||(u=(0,C.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),A=(0,F.ZP)(S)(d||(d=(0,C.Z)(["\n  margin-top: 4px;\n"]))),M=F.ZP.li(h||(h=(0,C.Z)(["\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.5;\n  color: ",";\n  &:not(:last-child) {\n    border-right: 2px solid ",";\n    padding-right: 6px;\n  }\n  &:not(:first-child) {\n    padding-left: 6px;\n  }\n"])),(function(n){return n.theme.colors.secondaryText}),(function(n){return n.theme.colors.line})),Q=F.ZP.button(f||(f=(0,C.Z)(["\n  width: 274px;\n  height: 44px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n  margin-top: 28px;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.43;\n  border-radius: 12px;\n  border: transparent;\n  background-color: ",";\n  color: ",";\n  transition: background-color 300ms\n    ",";\n\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.colors.accentLight}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.transition.timingFunction}),(function(n){return n.theme.colors.accentDark}));var T=e.p+"static/media/heart.fef107dce91098c91a44365de4630f46.svg";var X,q,B=e.p+"static/media/heartFill.1ef74a4779d2ba8d7b9d7889fcbb6a50.svg",G=e(161),H=function(n){var t=n.dataCar,e=w().favorite,r=(0,g.I0)(),i=t.id,o=t.img,c=t.make,a=t.model,s=t.year,l=t.rentalPrice,u=t.address,d=t.rentalCompany,h=t.type,f=t.accessories,x=u.split(","),p=x[2],m=x[1],j=f[2];console.log("favorite :>> ",e);return(0,k.jsxs)(L,{children:[(0,k.jsx)(z,{type:"button",onClick:function(){return function(n){e.some((function(t){return t.id===n.id}))?r((0,G.QJ)(n)):r((0,G.Jh)(n))}(t)},children:e.some((function(n){return n.id===t.id}))?(0,k.jsx)("svg",{children:(0,k.jsx)("use",{href:B+"#heart-fill"})}):(0,k.jsx)("svg",{children:(0,k.jsx)("use",{href:T+"#heart"})})}),(0,k.jsx)(_,{src:o,alt:"".concat(c," ").concat(a),width:"274",height:"268"}),(0,k.jsxs)(D,{children:[(0,k.jsxs)(E,{children:[c,(0,k.jsxs)(J,{children:[" ",a]}),", ",s]}),(0,k.jsx)(I,{children:l})]}),(0,k.jsxs)(S,{children:[(0,k.jsx)(M,{children:m}),(0,k.jsx)(M,{children:p}),(0,k.jsx)(M,{children:d})]}),(0,k.jsxs)(A,{children:[(0,k.jsx)(M,{children:h}),(0,k.jsx)(M,{children:c}),(0,k.jsx)(M,{children:i}),(0,k.jsx)(M,{children:j})]}),(0,k.jsx)(Q,{type:"button",children:"Learn more"})]})},K=F.ZP.ul(X||(X=(0,C.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 29px 50px;\n  margin-bottom: 100px;\n  text-align: center;\n"]))),N=function(n){var t=n.data;return console.log(t),(0,k.jsx)(k.Fragment,{children:(0,k.jsx)(K,{children:t.map((function(n){return(0,k.jsx)(H,{dataCar:n},n.id)}))})})},O=F.ZP.button(q||(q=(0,C.Z)(["\n  background-color: transparent;\n  border: transparent;\n  margin: 0 auto;\n  display: flex;\n  color: ",";\n  text-decoration: underline;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  transition: color 300ms\n      ",",\n    scale 300ms ",";\n\n  &:hover {\n    color: ",";\n    scale: 1.2;\n  }\n"])),(function(n){return n.theme.colors.accentLight}),(function(n){return n.theme.transition.timingFunction}),(function(n){return n.theme.transition.timingFunction}),(function(n){return n.theme.colors.accentDark})),R=function(){var n=(0,g.I0)(),t=w(),e=t.allCars,r=t.isLoading,i=(0,p.useState)(1),o=(0,x.Z)(i,2),c=o[0],a=o[1],s=(0,p.useState)(!1),l=(0,x.Z)(s,2),u=l[0],d=l[1];console.log(e),console.log("page :>> ",c),(0,p.useEffect)((function(){n((0,y.XM)()),d(!1)}),[n]),(0,p.useEffect)((function(){n((0,m.x)(c)),d(!0)}),[n,c]);var h=e.length/8>=c&&!r&&u;return(0,k.jsxs)("div",{children:[(0,k.jsx)(P,{}),(0,k.jsxs)("section",{children:[0!==e.length&&(0,k.jsx)(N,{data:e}),h&&(0,k.jsx)(O,{onClick:function(){a((function(n){return n+1}))},children:"Load more"})]})]})}}}]);
//# sourceMappingURL=219.d4d295ac.chunk.js.map