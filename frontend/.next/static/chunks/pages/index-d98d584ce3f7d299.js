(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6616)}])},6616:function(e,s,n){"use strict";n.r(s);var a=n(5893),i=n(9034),t=n.n(i),c=n(4305),l=n(1163),o=n(2131),r=n(7583),d=n(8470),u=n(6154),m=n(3299);s.default=function(){let[e,s]=c.ZP.useMessage(),{push:n}=(0,l.useRouter)(),{status:i}=(0,m.useSession)();async function h(){if("authenticated"===i){let s=new o.Q(window.ethereum);await s.send("eth_requestAccounts",[]);let n=await s.getSigner(),a=new r.CH("0xbddbF0Fc68982C307030A0D0053CF398D51d4184",["function safeMint(address to, string memory uri) public payable"],n),i=await a.safeMint(n.address,"",{value:(0,d.fi)("0.1")});i.wait().then(async s=>{console.log(s),console.log(s.logs[2].topics[3]);let n=parseInt(s.logs[2].topics[3]);await u.Z.get("http://localhost:3001/extraMonth",{params:{id:n}}),e.success("NFT Purchased")})}else e.warning("Please connect wallet first")}return(0,a.jsxs)(a.Fragment,{children:[s,(0,a.jsxs)("main",{className:t().main,children:[(0,a.jsxs)("div",{className:t().firstRow,children:[(0,a.jsxs)("div",{className:t().slogan,children:[(0,a.jsx)("div",{className:t().line}),(0,a.jsxs)("div",{className:t().sloganText,children:[(0,a.jsx)("div",{children:"Messi"}),(0,a.jsx)("div",{children:"Exclusive"}),(0,a.jsx)("div",{children:"Content"})]})]}),(0,a.jsxs)("div",{className:t().creatorFrame,children:[(0,a.jsx)("img",{src:"/messi.png",alt:"creator",className:t().creatorImg}),(0,a.jsx)("div",{className:t().creatorName,children:"Messi"})]})]}),(0,a.jsxs)("div",{className:t().secondRow,children:[(0,a.jsx)("p",{className:t().infoPara,children:"Become a member and gain access to my exclusive content."}),(0,a.jsx)("button",{className:t().infoButton,style:{backgroundColor:"#EB5254"},onClick:h,children:"Become A Member"}),(0,a.jsx)("button",{className:t().infoButton,style:{backgroundColor:"black"},onClick:()=>n("/members"),children:"Already A Member?"})]}),(0,a.jsx)("div",{className:t().thirdRow,children:(0,a.jsx)("div",{className:t().bottomStyling})})]})]})}}},function(e){e.O(0,[959,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);