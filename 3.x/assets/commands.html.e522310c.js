import{_ as n,o as c,c as i,a as o,b as e,w as l,e as t,d as h,r as d}from"./app.4d248835.js";const a={},r=o("h1",{id:"\u547D\u4EE4\u5217\u8868",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u547D\u4EE4\u5217\u8868","aria-hidden":"true"},"#"),t(" \u547D\u4EE4\u5217\u8868")],-1),u=o("h2",{id:"jvm-\u76F8\u5173",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#jvm-\u76F8\u5173","aria-hidden":"true"},"#"),t(" jvm \u76F8\u5173")],-1),m=t("dashboard"),f=t(" - \u5F53\u524D\u7CFB\u7EDF\u7684\u5B9E\u65F6\u6570\u636E\u9762\u677F"),p=t("getstatic"),g=t(" - \u67E5\u770B\u7C7B\u7684\u9759\u6001\u5C5E\u6027"),b=t("heapdump"),x=t(" - dump java heap, \u7C7B\u4F3C jmap \u547D\u4EE4\u7684 heap dump \u529F\u80FD"),v=t("jvm"),j=t(" - \u67E5\u770B\u5F53\u524D JVM \u7684\u4FE1\u606F"),y=t("logger"),V=t(" - \u67E5\u770B\u548C\u4FEE\u6539 logger"),k=t("mbean"),w=t(" - \u67E5\u770B Mbean \u7684\u4FE1\u606F"),J=t("memory"),A=t(" - \u67E5\u770B JVM \u7684\u5185\u5B58\u4FE1\u606F"),M=t("ognl"),N=t(" - \u6267\u884C ognl \u8868\u8FBE\u5F0F"),L=t("perfcounter"),R=t(" - \u67E5\u770B\u5F53\u524D JVM \u7684 Perf Counter \u4FE1\u606F"),B=t("sysenv"),C=t(" - \u67E5\u770B JVM \u7684\u73AF\u5883\u53D8\u91CF"),E=t("sysprop"),I=t(" - \u67E5\u770B\u548C\u4FEE\u6539 JVM \u7684\u7CFB\u7EDF\u5C5E\u6027"),S=t("thread"),q=t(" - \u67E5\u770B\u5F53\u524D JVM \u7684\u7EBF\u7A0B\u5806\u6808\u4FE1\u606F"),F=t("vmoption"),G=t(" - \u67E5\u770B\u548C\u4FEE\u6539 JVM \u91CC\u8BCA\u65AD\u76F8\u5173\u7684 option"),P=t("vmtool"),T=t(" - \u4ECE jvm \u91CC\u67E5\u8BE2\u5BF9\u8C61\uFF0C\u6267\u884C forceGc"),z=o("h2",{id:"class-classloader-\u76F8\u5173",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#class-classloader-\u76F8\u5173","aria-hidden":"true"},"#"),t(" class/classloader \u76F8\u5173")],-1),D=t("classloader"),H=t(" - \u67E5\u770B classloader \u7684\u7EE7\u627F\u6811\uFF0Curls\uFF0C\u7C7B\u52A0\u8F7D\u4FE1\u606F\uFF0C\u4F7F\u7528 classloader \u53BB getResource"),K=t("dump"),O=t(" - dump \u5DF2\u52A0\u8F7D\u7C7B\u7684 byte code \u5230\u7279\u5B9A\u76EE\u5F55"),Q=t("jad"),U=t(" - \u53CD\u7F16\u8BD1\u6307\u5B9A\u5DF2\u52A0\u8F7D\u7C7B\u7684\u6E90\u7801"),W=t("mc"),X=t(" - \u5185\u5B58\u7F16\u8BD1\u5668\uFF0C\u5185\u5B58\u7F16\u8BD1"),Y=o("code",null,".java",-1),Z=t("\u6587\u4EF6\u4E3A"),$=o("code",null,".class",-1),tt=t("\u6587\u4EF6"),ot=t("redefine"),et=t(" - \u52A0\u8F7D\u5916\u90E8\u7684"),st=o("code",null,".class",-1),lt=t("\u6587\u4EF6\uFF0Credefine \u5230 JVM \u91CC"),dt=t("retransform"),_t=t(" - \u52A0\u8F7D\u5916\u90E8\u7684"),nt=o("code",null,".class",-1),ct=t("\u6587\u4EF6\uFF0Cretransform \u5230 JVM \u91CC"),it=t("sc"),ht=t(" - \u67E5\u770B JVM \u5DF2\u52A0\u8F7D\u7684\u7C7B\u4FE1\u606F"),at=t("sm"),rt=t(" - \u67E5\u770B\u5DF2\u52A0\u8F7D\u7C7B\u7684\u65B9\u6CD5\u4FE1\u606F"),ut=o("h2",{id:"monitor-watch-trace-\u76F8\u5173",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#monitor-watch-trace-\u76F8\u5173","aria-hidden":"true"},"#"),t(" monitor/watch/trace \u76F8\u5173")],-1),mt=o("div",{class:"custom-container warning"},[o("p",{class:"custom-container-title"},"\u6CE8\u610F"),o("p",null,[t("\u8BF7\u6CE8\u610F\uFF0C\u8FD9\u4E9B\u547D\u4EE4\uFF0C\u90FD\u901A\u8FC7\u5B57\u8282\u7801\u589E\u5F3A\u6280\u672F\u6765\u5B9E\u73B0\u7684\uFF0C\u4F1A\u5728\u6307\u5B9A\u7C7B\u7684\u65B9\u6CD5\u4E2D\u63D2\u5165\u4E00\u4E9B\u5207\u9762\u6765\u5B9E\u73B0\u6570\u636E\u7EDF\u8BA1\u548C\u89C2\u6D4B\uFF0C\u56E0\u6B64\u5728\u7EBF\u4E0A\u3001\u9884\u53D1\u4F7F\u7528\u65F6\uFF0C\u8BF7\u5C3D\u91CF\u660E\u786E\u9700\u8981\u89C2\u6D4B\u7684\u7C7B\u3001\u65B9\u6CD5\u4EE5\u53CA\u6761\u4EF6\uFF0C\u8BCA\u65AD\u7ED3\u675F\u8981\u6267\u884C "),o("code",null,"stop"),t(" \u6216\u5C06\u589E\u5F3A\u8FC7\u7684\u7C7B\u6267\u884C "),o("code",null,"reset"),t(" \u547D\u4EE4\u3002")])],-1),ft=t("monitor"),pt=t(" - \u65B9\u6CD5\u6267\u884C\u76D1\u63A7"),gt=t("stack"),bt=t(" - \u8F93\u51FA\u5F53\u524D\u65B9\u6CD5\u88AB\u8C03\u7528\u7684\u8C03\u7528\u8DEF\u5F84"),xt=t("trace"),vt=t(" - \u65B9\u6CD5\u5185\u90E8\u8C03\u7528\u8DEF\u5F84\uFF0C\u5E76\u8F93\u51FA\u65B9\u6CD5\u8DEF\u5F84\u4E0A\u7684\u6BCF\u4E2A\u8282\u70B9\u4E0A\u8017\u65F6"),jt=t("tt"),yt=t(" - \u65B9\u6CD5\u6267\u884C\u6570\u636E\u7684\u65F6\u7A7A\u96A7\u9053\uFF0C\u8BB0\u5F55\u4E0B\u6307\u5B9A\u65B9\u6CD5\u6BCF\u6B21\u8C03\u7528\u7684\u5165\u53C2\u548C\u8FD4\u56DE\u4FE1\u606F\uFF0C\u5E76\u80FD\u5BF9\u8FD9\u4E9B\u4E0D\u540C\u7684\u65F6\u95F4\u4E0B\u8C03\u7528\u8FDB\u884C\u89C2\u6D4B"),Vt=t("watch"),kt=t(" - \u65B9\u6CD5\u6267\u884C\u6570\u636E\u89C2\u6D4B"),wt=o("h2",{id:"profiler-\u706B\u7130\u56FE",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#profiler-\u706B\u7130\u56FE","aria-hidden":"true"},"#"),t(" profiler/\u706B\u7130\u56FE")],-1),Jt=t("profiler"),At=t(" - \u4F7F\u7528"),Mt={href:"https://github.com/jvm-profiling-tools/async-profiler",target:"_blank",rel:"noopener noreferrer"},Nt=t("async-profiler"),Lt=t("\u5BF9\u5E94\u7528\u91C7\u6837\uFF0C\u751F\u6210\u706B\u7130\u56FE"),Rt=t("jfr"),Bt=t(" - \u52A8\u6001\u5F00\u542F\u5173\u95ED JFR \u8BB0\u5F55"),Ct=o("h2",{id:"\u9274\u6743",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u9274\u6743","aria-hidden":"true"},"#"),t(" \u9274\u6743")],-1),Et=t("auth"),It=t(" - \u9274\u6743"),St=o("h2",{id:"options",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),t(" options")],-1),qt=t("options"),Ft=t(" - \u67E5\u770B\u6216\u8BBE\u7F6E Arthas \u5168\u5C40\u5F00\u5173"),Gt=o("h2",{id:"\u7BA1\u9053",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u7BA1\u9053","aria-hidden":"true"},"#"),t(" \u7BA1\u9053")],-1),Pt=o("p",null,[t("Arthas \u652F\u6301\u4F7F\u7528\u7BA1\u9053\u5BF9\u4E0A\u8FF0\u547D\u4EE4\u7684\u7ED3\u679C\u8FDB\u884C\u8FDB\u4E00\u6B65\u7684\u5904\u7406\uFF0C\u5982"),o("code",null,"sm java.lang.String * | grep 'index'")],-1),Tt=t("grep"),zt=t(" - \u641C\u7D22\u6EE1\u8DB3\u6761\u4EF6\u7684\u7ED3\u679C"),Dt=o("li",null,"plaintext - \u5C06\u547D\u4EE4\u7684\u7ED3\u679C\u53BB\u9664 ANSI \u989C\u8272",-1),Ht=o("li",null,"wc - \u6309\u884C\u7EDF\u8BA1\u8F93\u51FA\u7ED3\u679C",-1),Kt=o("h2",{id:"\u540E\u53F0\u5F02\u6B65\u4EFB\u52A1",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u540E\u53F0\u5F02\u6B65\u4EFB\u52A1","aria-hidden":"true"},"#"),t(" \u540E\u53F0\u5F02\u6B65\u4EFB\u52A1")],-1),Ot=t("\u5F53\u7EBF\u4E0A\u51FA\u73B0\u5076\u53D1\u7684\u95EE\u9898\uFF0C\u6BD4\u5982\u9700\u8981 watch \u67D0\u4E2A\u6761\u4EF6\uFF0C\u800C\u8FD9\u4E2A\u6761\u4EF6\u4E00\u5929\u53EF\u80FD\u624D\u4F1A\u51FA\u73B0\u4E00\u6B21\u65F6\uFF0C\u5F02\u6B65\u540E\u53F0\u4EFB\u52A1\u5C31\u6D3E\u4E0A\u7528\u573A\u4E86\uFF0C\u8BE6\u60C5\u8BF7\u53C2\u8003"),Qt=t("\u8FD9\u91CC"),Ut=h('<ul><li>\u4F7F\u7528 <code>&gt;</code> \u5C06\u7ED3\u679C\u91CD\u5199\u5411\u5230\u65E5\u5FD7\u6587\u4EF6\uFF0C\u4F7F\u7528 <code>&amp;</code> \u6307\u5B9A\u547D\u4EE4\u662F\u540E\u53F0\u8FD0\u884C\uFF0Csession \u65AD\u5F00\u4E0D\u5F71\u54CD\u4EFB\u52A1\u6267\u884C\uFF08\u751F\u547D\u5468\u671F\u9ED8\u8BA4\u4E3A 1 \u5929\uFF09</li><li>jobs - \u5217\u51FA\u6240\u6709 job</li><li>kill - \u5F3A\u5236\u7EC8\u6B62\u4EFB\u52A1</li><li>fg - \u5C06\u6682\u505C\u7684\u4EFB\u52A1\u62C9\u5230\u524D\u53F0\u6267\u884C</li><li>bg - \u5C06\u6682\u505C\u7684\u4EFB\u52A1\u653E\u5230\u540E\u53F0\u6267\u884C</li></ul><h2 id="\u57FA\u7840\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u547D\u4EE4" aria-hidden="true">#</a> \u57FA\u7840\u547D\u4EE4</h2>',2),Wt=t("base64"),Xt=t(" - base64 \u7F16\u7801\u8F6C\u6362\uFF0C\u548C linux \u91CC\u7684 base64 \u547D\u4EE4\u7C7B\u4F3C"),Yt=t("cat"),Zt=t(" - \u6253\u5370\u6587\u4EF6\u5185\u5BB9\uFF0C\u548C linux \u91CC\u7684 cat \u547D\u4EE4\u7C7B\u4F3C"),$t=t("cls"),to=t(" - \u6E05\u7A7A\u5F53\u524D\u5C4F\u5E55\u533A\u57DF"),oo=t("echo"),eo=t(" - \u6253\u5370\u53C2\u6570\uFF0C\u548C linux \u91CC\u7684 echo \u547D\u4EE4\u7C7B\u4F3C"),so=t("grep"),lo=t(" - \u5339\u914D\u67E5\u627E\uFF0C\u548C linux \u91CC\u7684 grep \u547D\u4EE4\u7C7B\u4F3C"),_o=t("help"),no=t(" - \u67E5\u770B\u547D\u4EE4\u5E2E\u52A9\u4FE1\u606F"),co=t("history"),io=t(" - \u6253\u5370\u547D\u4EE4\u5386\u53F2"),ho=t("keymap"),ao=t(" - Arthas \u5FEB\u6377\u952E\u5217\u8868\u53CA\u81EA\u5B9A\u4E49\u5FEB\u6377\u952E"),ro=t("pwd"),uo=t(" - \u8FD4\u56DE\u5F53\u524D\u7684\u5DE5\u4F5C\u76EE\u5F55\uFF0C\u548C linux \u547D\u4EE4\u7C7B\u4F3C"),mo=t("quit"),fo=t(" - \u9000\u51FA\u5F53\u524D Arthas \u5BA2\u6237\u7AEF\uFF0C\u5176\u4ED6 Arthas \u5BA2\u6237\u7AEF\u4E0D\u53D7\u5F71\u54CD"),po=t("reset"),go=t(" - \u91CD\u7F6E\u589E\u5F3A\u7C7B\uFF0C\u5C06\u88AB Arthas \u589E\u5F3A\u8FC7\u7684\u7C7B\u5168\u90E8\u8FD8\u539F\uFF0CArthas \u670D\u52A1\u7AEF\u5173\u95ED\u65F6\u4F1A\u91CD\u7F6E\u6240\u6709\u589E\u5F3A\u8FC7\u7684\u7C7B"),bo=t("session"),xo=t(" - \u67E5\u770B\u5F53\u524D\u4F1A\u8BDD\u7684\u4FE1\u606F"),vo=t("stop"),jo=t(" - \u5173\u95ED Arthas \u670D\u52A1\u7AEF\uFF0C\u6240\u6709 Arthas \u5BA2\u6237\u7AEF\u5168\u90E8\u9000\u51FA"),yo=t("tee"),Vo=t(" - \u590D\u5236\u6807\u51C6\u8F93\u5165\u5230\u6807\u51C6\u8F93\u51FA\u548C\u6307\u5B9A\u7684\u6587\u4EF6\uFF0C\u548C linux \u91CC\u7684 tee \u547D\u4EE4\u7C7B\u4F3C"),ko=t("version"),wo=t(" - \u8F93\u51FA\u5F53\u524D\u76EE\u6807 Java \u8FDB\u7A0B\u6240\u52A0\u8F7D\u7684 Arthas \u7248\u672C\u53F7");function Jo(Ao,Mo){const s=d("RouterLink"),_=d("ExternalLinkIcon");return c(),i("div",null,[r,u,o("ul",null,[o("li",null,[e(s,{to:"/doc/dashboard.html"},{default:l(()=>[m]),_:1}),f]),o("li",null,[e(s,{to:"/doc/getstatic.html"},{default:l(()=>[p]),_:1}),g]),o("li",null,[e(s,{to:"/doc/heapdump.html"},{default:l(()=>[b]),_:1}),x]),o("li",null,[e(s,{to:"/doc/jvm.html"},{default:l(()=>[v]),_:1}),j]),o("li",null,[e(s,{to:"/doc/logger.html"},{default:l(()=>[y]),_:1}),V]),o("li",null,[e(s,{to:"/doc/mbean.html"},{default:l(()=>[k]),_:1}),w]),o("li",null,[e(s,{to:"/doc/memory.html"},{default:l(()=>[J]),_:1}),A]),o("li",null,[e(s,{to:"/doc/ognl.html"},{default:l(()=>[M]),_:1}),N]),o("li",null,[e(s,{to:"/doc/perfcounter.html"},{default:l(()=>[L]),_:1}),R]),o("li",null,[e(s,{to:"/doc/sysenv.html"},{default:l(()=>[B]),_:1}),C]),o("li",null,[e(s,{to:"/doc/sysprop.html"},{default:l(()=>[E]),_:1}),I]),o("li",null,[e(s,{to:"/doc/thread.html"},{default:l(()=>[S]),_:1}),q]),o("li",null,[e(s,{to:"/doc/vmoption.html"},{default:l(()=>[F]),_:1}),G]),o("li",null,[e(s,{to:"/doc/vmtool.html"},{default:l(()=>[P]),_:1}),T])]),z,o("ul",null,[o("li",null,[e(s,{to:"/doc/classloader.html"},{default:l(()=>[D]),_:1}),H]),o("li",null,[e(s,{to:"/doc/dump.html"},{default:l(()=>[K]),_:1}),O]),o("li",null,[e(s,{to:"/doc/jad.html"},{default:l(()=>[Q]),_:1}),U]),o("li",null,[e(s,{to:"/doc/mc.html"},{default:l(()=>[W]),_:1}),X,Y,Z,$,tt]),o("li",null,[e(s,{to:"/doc/redefine.html"},{default:l(()=>[ot]),_:1}),et,st,lt]),o("li",null,[e(s,{to:"/doc/retransform.html"},{default:l(()=>[dt]),_:1}),_t,nt,ct]),o("li",null,[e(s,{to:"/doc/sc.html"},{default:l(()=>[it]),_:1}),ht]),o("li",null,[e(s,{to:"/doc/sm.html"},{default:l(()=>[at]),_:1}),rt])]),ut,mt,o("ul",null,[o("li",null,[e(s,{to:"/doc/monitor.html"},{default:l(()=>[ft]),_:1}),pt]),o("li",null,[e(s,{to:"/doc/stack.html"},{default:l(()=>[gt]),_:1}),bt]),o("li",null,[e(s,{to:"/doc/trace.html"},{default:l(()=>[xt]),_:1}),vt]),o("li",null,[e(s,{to:"/doc/tt.html"},{default:l(()=>[jt]),_:1}),yt]),o("li",null,[e(s,{to:"/doc/watch.html"},{default:l(()=>[Vt]),_:1}),kt])]),wt,o("ul",null,[o("li",null,[e(s,{to:"/doc/profiler.html"},{default:l(()=>[Jt]),_:1}),At,o("a",Mt,[Nt,e(_)]),Lt]),o("li",null,[e(s,{to:"/doc/jfr.html"},{default:l(()=>[Rt]),_:1}),Bt])]),Ct,o("ul",null,[o("li",null,[e(s,{to:"/doc/auth.html"},{default:l(()=>[Et]),_:1}),It])]),St,o("ul",null,[o("li",null,[e(s,{to:"/doc/options.html"},{default:l(()=>[qt]),_:1}),Ft])]),Gt,Pt,o("ul",null,[o("li",null,[e(s,{to:"/doc/grep.html"},{default:l(()=>[Tt]),_:1}),zt]),Dt,Ht]),Kt,o("p",null,[Ot,e(s,{to:"/doc/async.html"},{default:l(()=>[Qt]),_:1})]),Ut,o("ul",null,[o("li",null,[e(s,{to:"/doc/base64.html"},{default:l(()=>[Wt]),_:1}),Xt]),o("li",null,[e(s,{to:"/doc/cat.html"},{default:l(()=>[Yt]),_:1}),Zt]),o("li",null,[e(s,{to:"/doc/cls.html"},{default:l(()=>[$t]),_:1}),to]),o("li",null,[e(s,{to:"/doc/echo.html"},{default:l(()=>[oo]),_:1}),eo]),o("li",null,[e(s,{to:"/doc/grep.html"},{default:l(()=>[so]),_:1}),lo]),o("li",null,[e(s,{to:"/doc/help.html"},{default:l(()=>[_o]),_:1}),no]),o("li",null,[e(s,{to:"/doc/history.html"},{default:l(()=>[co]),_:1}),io]),o("li",null,[e(s,{to:"/doc/keymap.html"},{default:l(()=>[ho]),_:1}),ao]),o("li",null,[e(s,{to:"/doc/pwd.html"},{default:l(()=>[ro]),_:1}),uo]),o("li",null,[e(s,{to:"/doc/quit.html"},{default:l(()=>[mo]),_:1}),fo]),o("li",null,[e(s,{to:"/doc/reset.html"},{default:l(()=>[po]),_:1}),go]),o("li",null,[e(s,{to:"/doc/session.html"},{default:l(()=>[bo]),_:1}),xo]),o("li",null,[e(s,{to:"/doc/stop.html"},{default:l(()=>[vo]),_:1}),jo]),o("li",null,[e(s,{to:"/doc/tee.html"},{default:l(()=>[yo]),_:1}),Vo]),o("li",null,[e(s,{to:"/doc/version.html"},{default:l(()=>[ko]),_:1}),wo])])])}const Lo=n(a,[["render",Jo],["__file","commands.html.vue"]]);export{Lo as default};
