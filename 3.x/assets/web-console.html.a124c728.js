import{_ as r}from"./web-console-local.156ba0ce.js";import{_ as c,o as h,c as l,a as e,b as o,w as i,e as t,d,r as a}from"./app.4d248835.js";const u={},_=e("h1",{id:"web-console",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#web-console","aria-hidden":"true"},"#"),t(" Web Console")],-1),p={href:"https://arthas.aliyun.com/3.x/doc/arthas-tutorials.html?language=en&id=case-web-console",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"Web Console",-1),m=t(" online tutorial"),f=e("h2",{id:"connect-arthas-through-the-browser",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#connect-arthas-through-the-browser","aria-hidden":"true"},"#"),t(" Connect arthas through the browser")],-1),g=t("Arthas supports the Web Console. After attach success, the user can access: "),k={href:"http://127.0.0.1:8563/",target:"_blank",rel:"noopener noreferrer"},w=t("http://127.0.0.1:8563/"),v=t("."),x=e("p",null,"The user can fill in the IP and connect the remote arthas on other machines.",-1),C=e("p",null,[e("img",{src:r,alt:""})],-1),y=e("div",{class:"custom-container warning"},[e("p",{class:"custom-container-title"},"WARNING"),e("p",null,[t("By default, arthas only listens to "),e("code",null,"127.0.0.1"),t(", so if you want to connect from a remote, you can use the "),e("code",null,"--target-ip"),t(" parameter to specify the IP. See the help description for "),e("code",null,"-h"),t(" for more information.")])],-1),I=t("If you have suggestions for the Web Console, please leave a message here: "),W={href:"https://github.com/alibaba/arthas/issues/15",target:"_blank",rel:"noopener noreferrer"},L=t("https://github.com/alibaba/arthas/issues/15"),N=t("Copy and paste shortcut keys in Web Console: "),R={href:"https://github.com/alibaba/arthas/issues/1056",target:"_blank",rel:"noopener noreferrer"},B=t("https://github.com/alibaba/arthas/issues/1056"),T=d('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Since 3.5.4, you can right-click to copy and paste in the Web Console.</p></div><h2 id="scrollback-url-parameters" tabindex="-1"><a class="header-anchor" href="#scrollback-url-parameters" aria-hidden="true">#</a> scrollback URL parameters</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Since 3.5.5</p></div><p>By default, the number of rows that the Web Console supports to roll back upwards is 1000. It can be specified with <code>scrollback</code> in the URL. for example</p>',4),A={href:"http://127.0.0.1:8563/?scrollback=3000",target:"_blank",rel:"noopener noreferrer"},P=t("http://127.0.0.1:8563/?scrollback=3000"),S=e("h2",{id:"connect-remote-arthas-through-arthas-tunnel-server",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#connect-remote-arthas-through-arthas-tunnel-server","aria-hidden":"true"},"#"),t(" Connect remote arthas through arthas tunnel server")],-1),V=t("Reference: "),E=t("Arthas Tunnel");function U(G,j){const s=a("ExternalLinkIcon"),n=a("RouterLink");return h(),l("div",null,[_,e("p",null,[e("a",p,[b,m,o(s)])]),f,e("p",null,[g,e("a",k,[w,o(s)]),v]),x,C,y,e("p",null,[I,e("a",W,[L,o(s)])]),e("ul",null,[e("li",null,[N,e("a",R,[B,o(s)])])]),T,e("p",null,[e("a",A,[P,o(s)])]),S,e("p",null,[V,o(n,{to:"/en/doc/tunnel.html"},{default:i(()=>[E]),_:1})])])}const D=c(u,[["render",U],["__file","web-console.html.vue"]]);export{D as default};
