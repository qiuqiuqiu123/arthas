import{_ as t,o as r,c as l,a as s,b as e,e as n,d as o,r as c}from"./app.4d248835.js";const p={},i=s("h1",{id:"retransform",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#retransform","aria-hidden":"true"},"#"),n(" retransform")],-1),u={href:"https://arthas.aliyun.com/3.x/doc/arthas-tutorials?language=cn&id=command-mc-retransform",target:"_blank",rel:"noopener noreferrer"},d=s("code",null,"mc-retransform",-1),m=n("\u5728\u7EBF\u6559\u7A0B"),k=s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"\u63D0\u793A"),s("p",null,[n("\u52A0\u8F7D\u5916\u90E8\u7684"),s("code",null,".class"),n("\u6587\u4EF6\uFF0Cretransform jvm \u5DF2\u52A0\u8F7D\u7684\u7C7B\u3002")])],-1),v=n("\u53C2\u8003\uFF1A"),h={href:"https://docs.oracle.com/javase/8/docs/api/java/lang/instrument/Instrumentation.html#retransformClasses-java.lang.Class...-",target:"_blank",rel:"noopener noreferrer"},b=n("Instrumentation#retransformClasses"),f=o(`<h2 id="\u4F7F\u7528\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u53C2\u8003" aria-hidden="true">#</a> \u4F7F\u7528\u53C2\u8003</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>   retransform /tmp/Test.class
   retransform <span class="token parameter variable">-l</span>
   retransform <span class="token parameter variable">-d</span> <span class="token number">1</span>                    <span class="token comment"># delete retransform entry</span>
   retransform <span class="token parameter variable">--deleteAll</span>             <span class="token comment"># delete all retransform entries</span>
   retransform <span class="token parameter variable">--classPattern</span> demo.*   <span class="token comment"># triger retransform classes</span>
   retransform <span class="token parameter variable">-c</span> 327a647b /tmp/Test.class /tmp/Test<span class="token punctuation">\\</span><span class="token variable">$Inner</span>.class
   retransform <span class="token parameter variable">--classLoaderClass</span> <span class="token string">&#39;sun.misc.Launcher$AppClassLoader&#39;</span> /tmp/Test.class
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="retransform-\u6307\u5B9A\u7684-class-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#retransform-\u6307\u5B9A\u7684-class-\u6587\u4EF6" aria-hidden="true">#</a> retransform \u6307\u5B9A\u7684 .class \u6587\u4EF6</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ retransform /tmp/MathGame.class
retransform success, size: <span class="token number">1</span>, classes:
demo.MathGame
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u52A0\u8F7D\u6307\u5B9A\u7684 .class \u6587\u4EF6\uFF0C\u7136\u540E\u89E3\u6790\u51FA class name\uFF0C\u518D retransform jvm \u4E2D\u5DF2\u52A0\u8F7D\u7684\u5BF9\u5E94\u7684\u7C7B\u3002\u6BCF\u52A0\u8F7D\u4E00\u4E2A <code>.class</code> \u6587\u4EF6\uFF0C\u5219\u4F1A\u8BB0\u5F55\u4E00\u4E2A retransform entry.</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5982\u679C\u591A\u6B21\u6267\u884C retransform \u52A0\u8F7D\u540C\u4E00\u4E2A class \u6587\u4EF6\uFF0C\u5219\u4F1A\u6709\u591A\u6761 retransform entry.</p></div><h2 id="\u67E5\u770B-retransform-entry" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B-retransform-entry" aria-hidden="true">#</a> \u67E5\u770B retransform entry</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ retransform <span class="token parameter variable">-l</span>
Id              ClassName       TransformCount  LoaderHash      LoaderClassName
<span class="token number">1</span>               demo.MathGame   <span class="token number">1</span>               null            null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>TransformCount \u7EDF\u8BA1\u5728 ClassFileTransformer#transform \u51FD\u6570\u91CC\u5C1D\u8BD5\u8FD4\u56DE entry \u5BF9\u5E94\u7684 .class \u6587\u4EF6\u7684\u6B21\u6570\uFF0C\u4F46\u5E76\u4E0D\u8868\u660E transform \u4E00\u5B9A\u6210\u529F\u3002</li></ul><h2 id="\u5220\u9664\u6307\u5B9A-retransform-entry" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u6307\u5B9A-retransform-entry" aria-hidden="true">#</a> \u5220\u9664\u6307\u5B9A retransform entry</h2><p>\u9700\u8981\u6307\u5B9A id\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>retransform <span class="token parameter variable">-d</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5220\u9664\u6240\u6709-retransform-entry" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u6240\u6709-retransform-entry" aria-hidden="true">#</a> \u5220\u9664\u6240\u6709 retransform entry</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>retransform <span class="token parameter variable">--deleteAll</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u663E\u5F0F\u89E6\u53D1-retransform" tabindex="-1"><a class="header-anchor" href="#\u663E\u5F0F\u89E6\u53D1-retransform" aria-hidden="true">#</a> \u663E\u5F0F\u89E6\u53D1 retransform</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ retransform <span class="token parameter variable">--classPattern</span> demo.MathGame
retransform success, size: <span class="token number">1</span>, classes:
demo.MathGame
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6CE8\u610F\uFF1A\u5BF9\u4E8E\u540C\u4E00\u4E2A\u7C7B\uFF0C\u5F53\u5B58\u5728\u591A\u4E2A retransform entry \u65F6\uFF0C\u5982\u679C\u663E\u5F0F\u89E6\u53D1 retransform \uFF0C\u5219\u6700\u540E\u6DFB\u52A0\u7684 entry \u751F\u6548(id \u6700\u5927\u7684)\u3002</p></blockquote><h2 id="\u6D88\u9664-retransform-\u7684\u5F71\u54CD" tabindex="-1"><a class="header-anchor" href="#\u6D88\u9664-retransform-\u7684\u5F71\u54CD" aria-hidden="true">#</a> \u6D88\u9664 retransform \u7684\u5F71\u54CD</h2><p>\u5982\u679C\u5BF9\u67D0\u4E2A\u7C7B\u6267\u884C retransform \u4E4B\u540E\uFF0C\u60F3\u6D88\u9664\u5F71\u54CD\uFF0C\u5219\u9700\u8981\uFF1A</p><ul><li>\u5220\u9664\u8FD9\u4E2A\u7C7B\u5BF9\u5E94\u7684 retransform entry</li><li>\u91CD\u65B0\u89E6\u53D1 retransform</li></ul><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5982\u679C\u4E0D\u6E05\u9664\u6389\u6240\u6709\u7684 retransform entry\uFF0C\u5E76\u91CD\u65B0\u89E6\u53D1 retransform \uFF0C\u5219 arthas stop \u65F6\uFF0Cretransform \u8FC7\u7684\u7C7B\u4ECD\u7136\u751F\u6548\u3002</p></div><h2 id="\u7ED3\u5408-jad-mc-\u547D\u4EE4\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u5408-jad-mc-\u547D\u4EE4\u4F7F\u7528" aria-hidden="true">#</a> \u7ED3\u5408 jad/mc \u547D\u4EE4\u4F7F\u7528</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>jad --source-only com.example.demo.arthas.user.UserController <span class="token operator">&gt;</span> /tmp/UserController.java

<span class="token function">mc</span> /tmp/UserController.java <span class="token parameter variable">-d</span> /tmp

retransform /tmp/com/example/demo/arthas/user/UserController.class
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>jad \u547D\u4EE4\u53CD\u7F16\u8BD1\uFF0C\u7136\u540E\u53EF\u4EE5\u7528\u5176\u5B83\u7F16\u8BD1\u5668\uFF0C\u6BD4\u5982 vim \u6765\u4FEE\u6539\u6E90\u7801</li><li>mc \u547D\u4EE4\u6765\u5185\u5B58\u7F16\u8BD1\u4FEE\u6539\u8FC7\u7684\u4EE3\u7801</li><li>\u7528 retransform \u547D\u4EE4\u52A0\u8F7D\u65B0\u7684\u5B57\u8282\u7801</li></ul><h2 id="\u4E0A\u4F20-class-\u6587\u4EF6\u5230\u670D\u52A1\u5668\u7684\u6280\u5DE7" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20-class-\u6587\u4EF6\u5230\u670D\u52A1\u5668\u7684\u6280\u5DE7" aria-hidden="true">#</a> \u4E0A\u4F20 .class \u6587\u4EF6\u5230\u670D\u52A1\u5668\u7684\u6280\u5DE7</h2><p>\u4F7F\u7528<code>mc</code>\u547D\u4EE4\u6765\u7F16\u8BD1<code>jad</code>\u7684\u53CD\u7F16\u8BD1\u7684\u4EE3\u7801\u6709\u53EF\u80FD\u5931\u8D25\u3002\u53EF\u4EE5\u5728\u672C\u5730\u4FEE\u6539\u4EE3\u7801\uFF0C\u7F16\u8BD1\u597D\u540E\u518D\u4E0A\u4F20\u5230\u670D\u52A1\u5668\u4E0A\u3002\u6709\u7684\u670D\u52A1\u5668\u4E0D\u5141\u8BB8\u76F4\u63A5\u4E0A\u4F20\u6587\u4EF6\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>base64</code>\u547D\u4EE4\u6765\u7ED5\u8FC7\u3002</p><ol><li><p>\u5728\u672C\u5730\u5148\u8F6C\u6362<code>.class</code>\u6587\u4EF6\u4E3A base64\uFF0C\u518D\u4FDD\u5B58\u4E3A result.txt</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>base64 <span class="token operator">&lt;</span> Test.class <span class="token operator">&gt;</span> result.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5230\u670D\u52A1\u5668\u4E0A\uFF0C\u65B0\u5EFA\u5E76\u7F16\u8F91<code>result.txt</code>\uFF0C\u590D\u5236\u672C\u5730\u7684\u5185\u5BB9\uFF0C\u7C98\u8D34\u518D\u4FDD\u5B58</p></li><li><p>\u628A\u670D\u52A1\u5668\u4E0A\u7684 <code>result.txt</code>\u8FD8\u539F\u4E3A<code>.class</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>base64 -d &lt; result.txt &gt; Test.class
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u7528 md5 \u547D\u4EE4\u8BA1\u7B97\u54C8\u5E0C\u503C\uFF0C\u6821\u9A8C\u662F\u5426\u4E00\u81F4</p></li></ol><h2 id="retransform-\u7684\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#retransform-\u7684\u9650\u5236" aria-hidden="true">#</a> retransform \u7684\u9650\u5236</h2><ul><li>\u4E0D\u5141\u8BB8\u65B0\u589E\u52A0 field/method</li><li>\u6B63\u5728\u8DD1\u7684\u51FD\u6570\uFF0C\u6CA1\u6709\u9000\u51FA\u4E0D\u80FD\u751F\u6548\uFF0C\u6BD4\u5982\u4E0B\u9762\u65B0\u589E\u52A0\u7684<code>System.out.println</code>\uFF0C\u53EA\u6709<code>run()</code>\u51FD\u6570\u91CC\u7684\u4F1A\u751F\u6548</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MathGame</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">MathGame</span> game <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MathGame</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            game<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// \u8FD9\u4E2A\u4E0D\u751F\u6548\uFF0C\u56E0\u4E3A\u4EE3\u7801\u4E00\u76F4\u8DD1\u5728 while\u91CC</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;in loop&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8FD9\u4E2A\u751F\u6548\uFF0C\u56E0\u4E3Arun()\u51FD\u6570\u6BCF\u6B21\u90FD\u53EF\u4EE5\u5B8C\u6574\u7ED3\u675F</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;call run()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> number <span class="token operator">=</span> random<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> primeFactors <span class="token operator">=</span> <span class="token function">primeFactors</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">print</span><span class="token punctuation">(</span>number<span class="token punctuation">,</span> primeFactors<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;illegalArgumentCount:%3d, &quot;</span><span class="token punctuation">,</span> illegalArgumentCount<span class="token punctuation">)</span> <span class="token operator">+</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function g(x,y){const a=c("ExternalLinkIcon");return r(),l("div",null,[i,s("p",null,[s("a",u,[d,m,e(a)])]),k,s("p",null,[v,s("a",h,[b,e(a)])]),f])}const w=t(p,[["render",g],["__file","retransform.html.vue"]]);export{w as default};
