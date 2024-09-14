import{_ as r,o as c,c as l,a as e,b as s,w as d,e as a,d as o,r as t}from"./app.4d248835.js";const p={},u=e("h1",{id:"vmtool",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vmtool","aria-hidden":"true"},"#"),a(" vmtool")],-1),h=e("div",{class:"custom-container tip"},[e("p",{class:"custom-container-title"},"TIP"),e("p",null,"@since 3.5.1")],-1),m={href:"https://arthas.aliyun.com/3.x/doc/arthas-tutorials.html?language=en&id=command-vmtool",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"vmtool",-1),b=a(" online tutorial"),g=e("p",null,[e("code",null,"vmtool"),a(" uses the "),e("code",null,"JVMTI"),a(" to support "),e("code",null,"getInstances"),a(" in jvm and "),e("code",null,"forceGc"),a(".")],-1),k={href:"https://docs.oracle.com/javase/8/docs/platform/jvmti/jvmti.html",target:"_blank",rel:"noopener noreferrer"},f=a("JVM Tool Interface"),x=o(`<h2 id="getinstances" tabindex="-1"><a class="header-anchor" href="#getinstances" aria-hidden="true">#</a> getInstances</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ vmtool <span class="token parameter variable">--action</span> getInstances <span class="token parameter variable">--className</span> java.lang.String <span class="token parameter variable">--limit</span> <span class="token number">10</span>
@String<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span>
    @String<span class="token punctuation">[</span>com/taobao/arthas/core/shell/session/Session<span class="token punctuation">]</span>,
    @String<span class="token punctuation">[</span>com.taobao.arthas.core.shell.session.Session<span class="token punctuation">]</span>,
    @String<span class="token punctuation">[</span>com/taobao/arthas/core/shell/session/Session<span class="token punctuation">]</span>,
    @String<span class="token punctuation">[</span>com/taobao/arthas/core/shell/session/Session<span class="token punctuation">]</span>,
    @String<span class="token punctuation">[</span>com/taobao/arthas/core/shell/session/Session.class<span class="token punctuation">]</span>,
    @String<span class="token punctuation">[</span>com/taobao/arthas/core/shell/session/Session.class<span class="token punctuation">]</span>,
    @String<span class="token punctuation">[</span>com/taobao/arthas/core/shell/session/Session.class<span class="token punctuation">]</span>,
    @String<span class="token punctuation">[</span>com/<span class="token punctuation">]</span>,
    @String<span class="token punctuation">[</span>java/util/concurrent/ConcurrentHashMap<span class="token variable">$ValueIterator</span><span class="token punctuation">]</span>,
    @String<span class="token punctuation">[</span>java/util/concurrent/locks/LockSupport<span class="token punctuation">]</span>,
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Through the <code>--limit</code> parameter, you can limit the number of return values to avoid pressure on the JVM when obtaining large data. The default value of limit is 10.</p></div><h2 id="specify-classloader-name" tabindex="-1"><a class="header-anchor" href="#specify-classloader-name" aria-hidden="true">#</a> Specify classloader name</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vmtool <span class="token parameter variable">--action</span> getInstances <span class="token parameter variable">--classLoaderClass</span> org.springframework.boot.loader.LaunchedURLClassLoader <span class="token parameter variable">--className</span> org.springframework.context.ApplicationContext
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="specify-classloader-hash" tabindex="-1"><a class="header-anchor" href="#specify-classloader-hash" aria-hidden="true">#</a> Specify classloader hash</h2><p>The classloader that loads the class can be found through the <code>sc</code> command.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ sc <span class="token parameter variable">-d</span> org.springframework.context.ApplicationContext
 class-info org.springframework.boot.context.embedded.AnnotationConfigEmbeddedWebApplicationContext
 code-source file:/private/tmp/demo-arthas-spring-boot.jar<span class="token operator">!</span>/BOOT-INF/lib/spring-boot-1.5.13.RELEASE.jar<span class="token operator">!</span>/
 name org.springframework.boot.context.embedded.AnnotationConfigEmbeddedWebApplicationContext
<span class="token punctuation">..</span>.
 class-loader +-org.springframework.boot.loader.LaunchedURLClassLoader@19469ea2
                     +-sun.misc.Launcher<span class="token variable">$AppClassLoader</span>@75b84c92
                       +-sun.misc.Launcher<span class="token variable">$ExtClassLoader</span>@4f023edb
 classLoaderHash 19469ea2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then use the <code>-c</code>/<code>--classloader</code> parameter to specify:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vmtool <span class="token parameter variable">--action</span> getInstances <span class="token parameter variable">-c</span> 19469ea2 <span class="token parameter variable">--className</span> org.springframework.context.ApplicationContext
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="specify-the-number-of-expanded-layers-of-returned-results" tabindex="-1"><a class="header-anchor" href="#specify-the-number-of-expanded-layers-of-returned-results" aria-hidden="true">#</a> Specify the number of expanded layers of returned results</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The return result of the <code>getInstances</code> action is bound to the <code>instances</code> variable, which is an array.</p><p>The expansion level of the result can be specified by the <code>-x</code>/<code>--expand</code> parameter, the default value is 1.</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vmtool <span class="token parameter variable">--action</span> getInstances <span class="token parameter variable">-c</span> 19469ea2 <span class="token parameter variable">--className</span> org.springframework.context.ApplicationContext <span class="token parameter variable">-x</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="execute-expression" tabindex="-1"><a class="header-anchor" href="#execute-expression" aria-hidden="true">#</a> Execute expression</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The return result of the <code>getInstances</code> action is bound to the <code>instances</code> variable, which is an array. The specified expression can be executed through the <code>--express</code> parameter.</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vmtool <span class="token parameter variable">--action</span> getInstances <span class="token parameter variable">--classLoaderClass</span> org.springframework.boot.loader.LaunchedURLClassLoader <span class="token parameter variable">--className</span> org.springframework.context.ApplicationContext --express<span class="token string">&#39;instances[0].getBeanDefinitionNames()&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="force-gc" tabindex="-1"><a class="header-anchor" href="#force-gc" aria-hidden="true">#</a> Force GC</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vmtool <span class="token parameter variable">--action</span> forceGc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,18),_=a("Use the "),S=e("code",null,"vmoption",-1),L=a(" command to dynamically turn on the "),y=e("code",null,"PrintGC",-1),C=a(" option."),I=o(`<h2 id="interrupt-\u6307\u5B9A\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#interrupt-\u6307\u5B9A\u7EBF\u7A0B" aria-hidden="true">#</a> interrupt \u6307\u5B9A\u7EBF\u7A0B</h2><p>The thread id is specified by the <code>-t</code> parameter. It can be obtained using the <code>thread</code> command.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>vmtool <span class="token parameter variable">--action</span> interruptThread <span class="token parameter variable">-t</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3);function T(w,A){const n=t("ExternalLinkIcon"),i=t("RouterLink");return c(),l("div",null,[u,h,e("p",null,[e("a",m,[v,b,s(n)])]),g,e("ul",null,[e("li",null,[e("a",k,[f,s(n)])])]),x,e("ul",null,[e("li",null,[_,s(i,{to:"/en/doc/vmoption.html"},{default:d(()=>[S]),_:1}),L,y,C])]),I])}const E=r(p,[["render",T],["__file","vmtool.html.vue"]]);export{E as default};
