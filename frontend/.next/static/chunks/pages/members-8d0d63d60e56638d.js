(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[483],{9416:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/members",function(){return i(6872)}])},6872:function(e,s,i){"use strict";i.r(s),i.d(s,{__N_SSP:function(){return m}});var t=i(5893),a=i(9034),c=i.n(a),l=i(4623),r=i(4305),n=i(6154),d=i(2131),o=i(8470),m=!0;s.default=function(e){let{nft:s,expiry:i}=e,[a,m]=r.ZP.useMessage();async function u(){let e=new d.Q(window.ethereum);await e.send("eth_requestAccounts",[]);let t=await e.getSigner();(await t.sendTransaction({to:"0x0D411733722ABD798579e5478503414BfC467907",value:(0,o.fi)("0.1")})).wait().then(async e=>{await n.Z.get("http://localhost:3001/extraMonth",{params:{id:s.token_id,expiry:i}}),a.success("Subscription Extended - Reloading Page in 4 seconds."),setTimeout(()=>{location.reload()},4e3)})}return(0,t.jsxs)(t.Fragment,{children:[m,(0,t.jsx)("img",{className:c().bannerImg,alt:"bannerImg",src:"/pitch.jpg"}),(0,t.jsxs)("div",{className:c().exclusiveContent,children:[(0,t.jsxs)("div",{className:c().creatorInfo,children:[(0,t.jsx)("img",{src:"/messi.png",alt:"creator",className:c().creatorProfileImg}),(0,t.jsx)("div",{className:c().creatorProfileName,children:"Lionel Messi"}),(0,t.jsx)("div",{className:c().creatorProfileOccupation,children:"Football Player"}),(0,t.jsx)("img",{className:c().socials,alt:"socials",src:"/socials.png"}),(0,t.jsx)("div",{className:c().numOfMembers,children:"10M"}),(0,t.jsx)("div",{className:c().numOfMembersTitle,children:"Members"})]}),(0,t.jsxs)("div",{className:c().feed,children:[(0,t.jsx)("div",{className:c().feedTitle,children:"Exclusive Feed"}),(0,t.jsxs)("div",{className:c().feedItems,children:[(0,t.jsx)("h2",{style:{textAlign:"left",width:"100%"},children:"World Cup 2022"}),(0,t.jsx)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/ZmKy_fnRM_E",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})]}),(0,t.jsxs)("div",{className:c().feedItems,children:[(0,t.jsx)("h2",{style:{textAlign:"left",width:"100%"},children:"All 32 Goals For PSG"}),(0,t.jsx)("iframe",{width:"100%",height:"315",src:"https://www.youtube.com/embed/bth3AQSqd7I",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})]})]}),(0,t.jsxs)("div",{className:c().subInfo,children:[(0,t.jsx)("div",{className:c().timeLeft,children:"Member Status"}),(0,t.jsxs)(l.Z,{title:"Member",className:c().yourMembership,children:[(0,t.jsx)("div",{className:c().cardTitle,children:"Number"}),(0,t.jsx)("div",{children:s.token_id}),(0,t.jsx)("div",{className:c().cardTitle,children:"Expiry"}),(0,t.jsx)("div",{children:new Date(i).toLocaleString()}),(0,t.jsx)("div",{className:c().cardTitle,children:"Scope"}),(0,t.jsx)("div",{children:"Full Access to Lionel Messi's exclusive content."}),(0,t.jsx)("div",{className:c().extend,onClick:u,children:"Add 1 Month"}),(0,t.jsx)("div",{className:c().opensea,onClick:()=>{window.open("https://testnets.opensea.io/assets/mumbai/0xbddbF0Fc68982C307030A0D0053CF398D51d4184/".concat(s.token_id))},children:"View on Opensea"})]})]})]})]})}}},function(e){e.O(0,[959,623,774,888,179],function(){return e(e.s=9416)}),_N_E=e.O()}]);