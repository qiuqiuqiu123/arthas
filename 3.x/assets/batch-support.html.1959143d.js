import{_ as t,o as d,c as i,a as e,b as o,w as c,d as a,e as s,r}from"./app.4d248835.js";const l={},p=a('<h1 id="\u6279\u5904\u7406\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#\u6279\u5904\u7406\u529F\u80FD" aria-hidden="true">#</a> \u6279\u5904\u7406\u529F\u80FD</h1><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u901A\u8FC7\u6279\u5904\u7406\u529F\u80FD\uFF0Carthas \u652F\u6301\u4E00\u6B21\u6027\u6279\u91CF\u8FD0\u884C\u591A\u4E2A\u547D\u4EE4\uFF0C\u5E76\u53D6\u5F97\u547D\u4EE4\u6267\u884C\u7684\u7ED3\u679C\u3002\u53EF\u7ED3\u5408 <code>--select</code> \u53C2\u6570\u53EF\u4EE5\u6307\u5B9A\u8FDB\u7A0B\u540D\u5B57\u4E00\u8D77\u4F7F\u7528\u3002</p></div><h2 id="\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u6CD5</h2><h3 id="\u7B2C\u4E00\u6B65-\u521B\u5EFA\u4F60\u7684\u6279\u5904\u7406\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u6B65-\u521B\u5EFA\u4F60\u7684\u6279\u5904\u7406\u811A\u672C" aria-hidden="true">#</a> \u7B2C\u4E00\u6B65\uFF1A\u521B\u5EFA\u4F60\u7684\u6279\u5904\u7406\u811A\u672C</h3><p>\u8FD9\u91CC\u6211\u4EEC\u65B0\u5EFA\u4E86\u4E00\u4E2A<code>test.as</code>\u811A\u672C\uFF0C\u4E3A\u4E86\u89C4\u8303\uFF0C\u6211\u4EEC\u91C7\u7528\u4E86.as \u540E\u7F00\u540D\uFF0C\u4F46\u4E8B\u5B9E\u4E0A\u4EFB\u610F\u7684\u6587\u672C\u6587\u4EF6\u90FD ok\u3002</p>',5),h={class:"custom-container tip"},u=e("p",{class:"custom-container-title"},"\u63D0\u793A",-1),m=e("li",null,"\u76EE\u524D\u9700\u8981\u6BCF\u4E2A\u547D\u4EE4\u5360\u4E00\u884C",-1),v=e("li",null,[s("dashboard \u52A1\u5FC5\u6307\u5B9A\u6267\u884C\u6B21\u6570 ("),e("code",null,"-n"),s(")\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u6279\u5904\u7406\u811A\u672C\u65E0\u6CD5\u7EC8\u6B62")],-1),_=e("li",null,[s("watch/tt/trace/monitor/stack \u7B49\u547D\u4EE4\u52A1\u5FC5\u6307\u5B9A\u6267\u884C\u6B21\u6570 ("),e("code",null,"-n"),s(")\uFF0C\u5426\u5219\u4F1A\u5BFC\u81F4\u6279\u5904\u7406\u811A\u672C\u65E0\u6CD5\u7EC8\u6B62")],-1),b=s("\u53EF\u4EE5\u4F7F\u7528\u5F02\u6B65\u540E\u53F0\u4EFB\u52A1\uFF0C\u5982 "),g=e("code",null,"watch c.t.X test returnObj > &",-1),k=s("\uFF0C\u8BA9\u547D\u4EE4\u4E00\u76F4\u5728\u540E\u53F0\u8FD0\u884C\uFF0C\u901A\u8FC7\u65E5\u5FD7\u83B7\u53D6\u7ED3\u679C\uFF0C"),x=s("\u83B7\u53D6\u66F4\u591A\u5F02\u6B65\u4EFB\u52A1\u7684\u4FE1\u606F"),f=a(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u279C  arthas git:(develop) cat /var/tmp/test.as
help
dashboard -n 1
session
thread
sc -d org.apache.commons.lang.StringUtils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7B2C\u4E8C\u6B65-\u8FD0\u884C\u4F60\u7684\u6279\u5904\u7406\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E8C\u6B65-\u8FD0\u884C\u4F60\u7684\u6279\u5904\u7406\u811A\u672C" aria-hidden="true">#</a> \u7B2C\u4E8C\u6B65\uFF1A\u8FD0\u884C\u4F60\u7684\u6279\u5904\u7406\u811A\u672C</h3><p>\u901A\u8FC7<code>-f</code>\u6267\u884C\u811A\u672C\u6587\u4EF6\uFF0C\u6279\u5904\u7406\u811A\u672C\u9ED8\u8BA4\u4F1A\u8F93\u51FA\u5230\u6807\u51C6\u8F93\u51FA\u4E2D\uFF0C\u53EF\u4EE5\u5C06\u7ED3\u679C\u91CD\u5B9A\u5411\u5230\u6587\u4EF6\u4E2D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./as3.sh <span class="token parameter variable">-f</span> /var/tmp/test.as <span class="token operator">&lt;</span>pid<span class="token operator">&gt;</span> <span class="token operator">&gt;</span> test.out <span class="token comment"># pid \u53EF\u4EE5\u901A\u8FC7 jps \u547D\u4EE4\u67E5\u770B</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u901A\u8FC7 <code>-c</code> \u6765\u6307\u5B9A\u6307\u884C\u7684\u547D\u4EE4\uFF0C\u6BD4\u5982</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./as3.sh <span class="token parameter variable">-c</span> <span class="token string">&#39;sysprop; thread&#39;</span> <span class="token operator">&lt;</span>pid<span class="token operator">&gt;</span> <span class="token operator">&gt;</span> test.out <span class="token comment"># pid \u53EF\u4EE5\u901A\u8FC7 jps \u547D\u4EE4\u67E5\u770B</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u7B2C\u4E09\u6B65-\u67E5\u770B\u8FD0\u884C\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E09\u6B65-\u67E5\u770B\u8FD0\u884C\u7ED3\u679C" aria-hidden="true">#</a> \u7B2C\u4E09\u6B65\uFF1A\u67E5\u770B\u8FD0\u884C\u7ED3\u679C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> test.out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8);function w(N,V){const n=r("RouterLink");return d(),i("div",null,[p,e("div",h,[u,e("ul",null,[m,v,_,e("li",null,[b,g,k,o(n,{to:"/doc/async.html"},{default:c(()=>[x]),_:1})])])]),f])}const B=t(l,[["render",w],["__file","batch-support.html.vue"]]);export{B as default};
