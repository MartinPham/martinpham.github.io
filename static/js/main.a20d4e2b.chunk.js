(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){e.exports=a(44)},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),o=a(9),c=a.n(o),s=a(4),i=a(0),u=a(8),l=a(21),f=a(29),m=a(12),h=a(22),d=a(28),p=a(30),b=a(23);function g(){var e=Object(r.useRef)(),t=Object(u.d)(),a=t.scene,o=t.gl,c=t.size,s=t.camera,l=Object(r.useMemo)(function(){return new i.Vector2(c.width,c.height)},[c]);return Object(r.useEffect)(function(){e.current.setSize(c.width,c.height)},[c]),Object(u.c)(function(){return e.current.render()},1),n.a.createElement("effectComposer",{ref:e,args:[o]},n.a.createElement("renderPass",{attachArray:"passes",scene:a,camera:s}),n.a.createElement("sSAOPass",{attachArray:"passes",args:[a,s],kernelRadius:.6,maxDistance:.03}),n.a.createElement("unrealBloomPass",{attachArray:"passes",args:[l,2,1,.991]}),n.a.createElement("shaderPass",{attachArray:"passes",args:[b.a],"material-uniforms-resolution-value":[1/c.width,1/c.height],renderToScreen:!0}))}Object(u.b)({EffectComposer:f.a,ShaderPass:m.a,RenderPass:h.a,SSAOPass:d.a,UnrealBloomPass:p.a});a(43);var E=new i.Object3D,O=new i.Color;function v(){var e=Object(r.useState)(),t=Object(s.a)(e,2),a=t[0],o=t[1],c=Object(r.useRef)();Object(r.useEffect)(function(){c.current=a},[a]);var f=Object(r.useMemo)(function(){return new Array(1e3).fill().map(function(){return l[17][Math.floor(5*Math.random())]})},[]),m=Object(r.useMemo)(function(){for(var e=new Float32Array(3e3),t=0;t<1e3;t++)O.set(f[t]),O.toArray(e,3*t);return e},[f]),h=Object(r.useRef)(),d=Object(r.useRef)();return Object(u.c)(function(e){var t=e.clock.getElapsedTime();h.current.rotation.x=Math.sin(t/4),h.current.rotation.y=Math.sin(t/2);for(var r=0,n=0;n<10;n++)for(var o=0;o<10;o++)for(var s=0;s<10;s++){var i=r++;E.position.set(5-n,5-o,5-s),E.rotation.y=Math.sin(n/4+t)+Math.sin(o/4+t)+Math.sin(s/4+t),E.rotation.z=2*E.rotation.y,a!==c.current&&(O.set(i===a?"white":f[i]),O.toArray(m,3*i),d.current.needsUpdate=!0);var u=i===a?2:1;E.scale.set(u,u,u),E.updateMatrix(),h.current.setMatrixAt(i,E.matrix)}h.current.instanceMatrix.needsUpdate=!0}),n.a.createElement("instancedMesh",{ref:h,args:[null,null,1e3],onPointerMove:function(e){return o(e.instanceId)},onPointerOut:function(e){return o(void 0)}},n.a.createElement("boxBufferGeometry",{attach:"geometry",args:[.7,.7,.7]},n.a.createElement("instancedBufferAttribute",{ref:d,attachObject:["attributes","color"],args:[m,3]})),n.a.createElement("meshPhongMaterial",{attach:"material",vertexColors:i.VertexColors}))}var M=function(){return n.a.createElement(u.a,{gl:{antialias:!1,alpha:!1},camera:{position:[0,0,15],near:5,far:20},onCreated:function(e){var t=e.gl;t.toneMapping=i.Uncharted2ToneMapping,t.setClearColor(new i.Color("black"))}},n.a.createElement("ambientLight",null),n.a.createElement("pointLight",{position:[150,150,150],intensity:.55}),n.a.createElement(v,null),n.a.createElement(g,null))},j=document.getElementById("root");c.a.render(n.a.createElement(M,null),j)}},[[31,1,2]]]);
//# sourceMappingURL=main.a20d4e2b.chunk.js.map