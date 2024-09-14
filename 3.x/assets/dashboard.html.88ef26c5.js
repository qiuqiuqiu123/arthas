import{_ as n}from"./dashboard.eb1e1fee.js";import{_ as d,o as l,c as s,a as e,b as t,e as a,d as r,r as c}from"./app.4d248835.js";const o={},h=e("h1",{id:"dashboard",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#dashboard","aria-hidden":"true"},"#"),a(" dashboard")],-1),m={href:"https://arthas.aliyun.com/3.x/doc/arthas-tutorials.html?language=cn&id=command-dashboard",target:"_blank",rel:"noopener noreferrer"},u=e("code",null,"dashboard",-1),v=a("\u5728\u7EBF\u6559\u7A0B"),b=r(`<div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5F53\u524D\u7CFB\u7EDF\u7684\u5B9E\u65F6\u6570\u636E\u9762\u677F\uFF0C\u6309 ctrl+c \u9000\u51FA\u3002</p></div><p>\u5F53\u8FD0\u884C\u5728 Ali-tomcat \u65F6\uFF0C\u4F1A\u663E\u793A\u5F53\u524D tomcat \u7684\u5B9E\u65F6\u4FE1\u606F\uFF0C\u5982 HTTP \u8BF7\u6C42\u7684 qps, rt, \u9519\u8BEF\u6570, \u7EBF\u7A0B\u6C60\u4FE1\u606F\u7B49\u7B49\u3002</p><h2 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h2><table><thead><tr><th style="text-align:right;">\u53C2\u6570\u540D\u79F0</th><th style="text-align:left;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;">[i:]</td><td style="text-align:left;">\u5237\u65B0\u5B9E\u65F6\u6570\u636E\u7684\u65F6\u95F4\u95F4\u9694 (ms)\uFF0C\u9ED8\u8BA4 5000ms</td></tr><tr><td style="text-align:right;">[n:]</td><td style="text-align:left;">\u5237\u65B0\u5B9E\u65F6\u6570\u636E\u7684\u6B21\u6570</td></tr></tbody></table><h2 id="\u4F7F\u7528\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u53C2\u8003" aria-hidden="true">#</a> \u4F7F\u7528\u53C2\u8003</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ dashboard
ID   NAME                           GROUP           PRIORITY   STATE     %CPU      DELTA_TIME TIME      INTERRUPTE DAEMON
-1   C2 CompilerThread0             -               -1         -         1.55      0.077      0:8.684   false      true
53   Timer-for-arthas-dashboard-07b system          5          RUNNABLE  0.08      0.004      0:0.004   false      true
22   scheduling-1                   main            5          TIMED_WAI 0.06      0.003      0:0.287   false      false
-1   C1 CompilerThread0             -               -1         -         0.06      0.003      0:2.171   false      true
-1   VM Periodic Task Thread        -               -1         -         0.03      0.001      0:0.092   false      true
49   arthas-NettyHttpTelnetBootstra system          5          RUNNABLE  0.02      0.001      0:0.156   false      true
16   Catalina-utility-1             main            1          TIMED_WAI 0.0       0.000      0:0.029   false      false
-1   G1 Young RemSet Sampling       -               -1         -         0.0       0.000      0:0.019   false      true
17   Catalina-utility-2             main            1          WAITING   0.0       0.000      0:0.025   false      false
34   http-nio-8080-ClientPoller     main            5          RUNNABLE  0.0       0.000      0:0.016   false      true
23   http-nio-8080-BlockPoller      main            5          RUNNABLE  0.0       0.000      0:0.011   false      true
-1   VM Thread                      -               -1         -         0.0       0.000      0:0.032   false      true
-1   Service Thread                 -               -1         -         0.0       0.000      0:0.006   false      true
-1   GC Thread#5                    -               -1         -         0.0       0.000      0:0.043   false      true
Memory                     used     total    max      usage    GC
heap                       36M      70M      4096M    0.90%    gc.g1_young_generation.count   12
g1_eden_space              6M       18M      -1       33.33%                                  86
g1_old_gen                 30M      50M      4096M    0.74%    gc.g1_old_generation.count     0
g1_survivor_space          491K     2048K    -1       24.01%   gc.g1_old_generation.time(ms)  0
nonheap                    66M      69M      -1       96.56%
codeheap_&#39;non-nmethods&#39;    1M       2M       5M       22.39%
metaspace                  46M      47M      -1       98.01%
Runtime
os.name                                                        Mac OS X
os.version                                                     10.15.4
java.version                                                   15
java.home                                                      /Library/Java/JavaVirtualMachines/jdk-15.jdk/Contents/Home
systemload.average                                             10.68
processors                                                     8
uptime                                                         272s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6570\u636E\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u8BF4\u660E" aria-hidden="true">#</a> \u6570\u636E\u8BF4\u660E</h2><ul><li>ID: Java \u7EA7\u522B\u7684\u7EBF\u7A0B ID\uFF0C\u6CE8\u610F\u8FD9\u4E2A ID \u4E0D\u80FD\u8DDF jstack \u4E2D\u7684 nativeID \u4E00\u4E00\u5BF9\u5E94\u3002</li><li>NAME: \u7EBF\u7A0B\u540D</li><li>GROUP: \u7EBF\u7A0B\u7EC4\u540D</li><li>PRIORITY: \u7EBF\u7A0B\u4F18\u5148\u7EA7, 1~10 \u4E4B\u95F4\u7684\u6570\u5B57\uFF0C\u8D8A\u5927\u8868\u793A\u4F18\u5148\u7EA7\u8D8A\u9AD8</li><li>STATE: \u7EBF\u7A0B\u7684\u72B6\u6001</li><li>CPU%: \u7EBF\u7A0B\u7684 cpu \u4F7F\u7528\u7387\u3002\u6BD4\u5982\u91C7\u6837\u95F4\u9694 1000ms\uFF0C\u67D0\u4E2A\u7EBF\u7A0B\u7684\u589E\u91CF cpu \u65F6\u95F4\u4E3A 100ms\uFF0C\u5219 cpu \u4F7F\u7528\u7387=100/1000=10%</li><li>DELTA_TIME: \u4E0A\u6B21\u91C7\u6837\u4E4B\u540E\u7EBF\u7A0B\u8FD0\u884C\u589E\u91CF CPU \u65F6\u95F4\uFF0C\u6570\u636E\u683C\u5F0F\u4E3A<code>\u79D2</code></li><li>TIME: \u7EBF\u7A0B\u8FD0\u884C\u603B CPU \u65F6\u95F4\uFF0C\u6570\u636E\u683C\u5F0F\u4E3A<code>\u5206:\u79D2</code></li><li>INTERRUPTED: \u7EBF\u7A0B\u5F53\u524D\u7684\u4E2D\u65AD\u4F4D\u72B6\u6001</li><li>DAEMON: \u662F\u5426\u662F daemon \u7EBF\u7A0B</li></ul><h3 id="jvm-\u5185\u90E8\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#jvm-\u5185\u90E8\u7EBF\u7A0B" aria-hidden="true">#</a> JVM \u5185\u90E8\u7EBF\u7A0B</h3><p>Java 8 \u4E4B\u540E\u652F\u6301\u83B7\u53D6 JVM \u5185\u90E8\u7EBF\u7A0B CPU \u65F6\u95F4\uFF0C\u8FD9\u4E9B\u7EBF\u7A0B\u53EA\u6709\u540D\u79F0\u548C CPU \u65F6\u95F4\uFF0C\u6CA1\u6709 ID \u53CA\u72B6\u6001\u7B49\u4FE1\u606F\uFF08\u663E\u793A ID \u4E3A-1\uFF09\u3002 \u901A\u8FC7\u5185\u90E8\u7EBF\u7A0B\u53EF\u4EE5\u89C2\u6D4B\u5230 JVM \u6D3B\u52A8\uFF0C\u5982 GC\u3001JIT \u7F16\u8BD1\u7B49\u5360\u7528 CPU \u60C5\u51B5\uFF0C\u65B9\u4FBF\u4E86\u89E3 JVM \u6574\u4F53\u8FD0\u884C\u72B6\u51B5\u3002</p><ul><li>\u5F53 JVM \u5806(heap)/\u5143\u6570\u636E(metaspace)\u7A7A\u95F4\u4E0D\u8DB3\u6216 OOM \u65F6\uFF0C\u53EF\u4EE5\u770B\u5230 GC \u7EBF\u7A0B\u7684 CPU \u5360\u7528\u7387\u660E\u663E\u9AD8\u4E8E\u5176\u4ED6\u7684\u7EBF\u7A0B\u3002</li><li>\u5F53\u6267\u884C<code>trace/watch/tt/redefine</code>\u7B49\u547D\u4EE4\u540E\uFF0C\u53EF\u4EE5\u770B\u5230 JIT \u7EBF\u7A0B\u6D3B\u52A8\u53D8\u5F97\u66F4\u9891\u7E41\u3002\u56E0\u4E3A JVM \u70ED\u66F4\u65B0 class \u5B57\u8282\u7801\u65F6\u6E05\u9664\u4E86\u6B64 class \u76F8\u5173\u7684 JIT \u7F16\u8BD1\u7ED3\u679C\uFF0C\u9700\u8981\u91CD\u65B0\u7F16\u8BD1\u3002</li></ul><p>JVM \u5185\u90E8\u7EBF\u7A0B\u5305\u62EC\u4E0B\u9762\u51E0\u79CD\uFF1A</p><ul><li>JIT \u7F16\u8BD1\u7EBF\u7A0B: \u5982 <code>C1 CompilerThread0</code>, <code>C2 CompilerThread0</code></li><li>GC \u7EBF\u7A0B: \u5982<code>GC Thread0</code>, <code>G1 Young RemSet Sampling</code></li><li>\u5176\u5B83\u5185\u90E8\u7EBF\u7A0B: \u5982<code>VM Periodic Task Thread</code>, <code>VM Thread</code>, <code>Service Thread</code></li></ul><h2 id="\u622A\u56FE\u5C55\u793A" tabindex="-1"><a class="header-anchor" href="#\u622A\u56FE\u5C55\u793A" aria-hidden="true">#</a> \u622A\u56FE\u5C55\u793A</h2><p><img src="`+n+'" alt="" title="dashboard"></p>',15);function p(_,T){const i=c("ExternalLinkIcon");return l(),s("div",null,[h,e("p",null,[e("a",m,[u,v,t(i)])]),b])}const g=d(o,[["render",p],["__file","dashboard.html.vue"]]);export{g as default};
