import{_ as i,o as l,c as p,a as n,b as e,w as o,e as s,d,r as c}from"./app.4d248835.js";const r={},u=n("h1",{id:"redefine",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#redefine","aria-hidden":"true"},"#"),s(" redefine")],-1),m={class:"custom-container tip"},h=n("p",{class:"custom-container-title"},"TIP",-1),k=s("Recommend to use the "),v=s("retransform"),f=s(" command."),b={href:"https://arthas.aliyun.com/3.x/doc/arthas-tutorials?language=en&id=command-mc-redefine",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"mc-redefine",-1),_=s(" online tutorial"),y=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"TIP"),n("p",null,[s("Load the external "),n("code",null,"*.class"),s(" files to re-define the loaded classes in JVM.")])],-1),w=s("Reference: "),x={href:"https://docs.oracle.com/javase/8/docs/api/java/lang/instrument/Instrumentation.html#redefineClasses-java.lang.instrument.ClassDefinition...-",target:"_blank",rel:"noopener noreferrer"},T=s("Instrumentation#redefineClasses"),I=n("h2",{id:"frequently-asked-questions",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#frequently-asked-questions","aria-hidden":"true"},"#"),s(" Frequently asked questions")],-1),C={class:"custom-container tip"},j=n("p",{class:"custom-container-title"},"TIP",-1),L=s("Recommend to use the "),q=s("retransform"),S=s(" command."),N=d(`<ul><li><p>The class of <code>redefine</code> cannot modify, add or delete the field and method of the class, including method parameters, method names and return values.</p></li><li><p>If <code>mc</code> fails, you can compile the class file in the local development environment, upload it to the target system, and use <code>redefine</code> to hot load the class.</p></li><li><p>At present, <code>redefine</code> conflicts with <code>watch / trace / jad / tt</code> commands. Reimplementing <code>redefine</code> function in the future will solve this problem.</p></li></ul><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Notes: Re-defined classes cannot be restored. There are chances that redefining may fail due to some reasons, for example: there&#39;s new field introduced in the new version of the class, pls. refer to JDK&#39;s documentation for the limitations.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The <code>reset</code> command is not valid for classes that have been processed by <code>redefine</code>. If you want to reset, you need <code>redefine</code> the original bytecode.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The <code>redefine</code> command will conflict with the <code>jad</code>/<code>watch</code>/<code>trace</code>/<code>monitor</code>/<code>tt</code> commands. After executing <code>redefine</code>, if you execute the above mentioned command, the bytecode of the class will be reset. The reason is that in the JDK <code>redefine</code> and <code>retransform</code> are different mechanisms. When two mechanisms are both used to update the bytecode, only the last modified will take effect.</p></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><table><thead><tr><th style="text-align:right;">Name</th><th style="text-align:left;">Specification</th></tr></thead><tbody><tr><td style="text-align:right;"><code>[c:]</code></td><td style="text-align:left;">hashcode of the class loader</td></tr><tr><td style="text-align:right;"><code>[classLoaderClass:]</code></td><td style="text-align:left;">The class name of the ClassLoader that executes the expression.</td></tr></tbody></table><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>redefine /tmp/Test.class
redefine <span class="token parameter variable">-c</span> 327a647b /tmp/Test.class /tmp/Test<span class="token punctuation">\\</span><span class="token variable">$Inner</span>.class
redefine <span class="token parameter variable">--classLoaderClass</span> sun.misc.Launcher<span class="token variable">$AppClassLoader</span> /tmp/Test.class /tmp/Test<span class="token punctuation">\\</span><span class="token variable">$Inner</span>.class
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="use-with-the-jad-mc-command" tabindex="-1"><a class="header-anchor" href="#use-with-the-jad-mc-command" aria-hidden="true">#</a> Use with the jad/mc command</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>jad --source-only com.example.demo.arthas.user.UserController <span class="token operator">&gt;</span> /tmp/UserController.java

<span class="token function">mc</span> /tmp/UserController.java <span class="token parameter variable">-d</span> /tmp

redefine /tmp/com/example/demo/arthas/user/UserController.class
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Use <code>jad</code> command to decompile bytecode, and then you can use other editors, such as vim to modify the source code.</li><li><code>mc</code> command to compile the modified code</li><li>Load new bytecode with <code>redefine</code> command</li></ul><h2 id="tips-for-uploading-class-files-to-the-server" tabindex="-1"><a class="header-anchor" href="#tips-for-uploading-class-files-to-the-server" aria-hidden="true">#</a> Tips for uploading .class files to the server</h2><p>The <code>mc</code> command may fail. You can modify the code locally, compile it, and upload it to the server. Some servers do not allow direct uploading files, you can use the <code>base64</code> command to bypass.</p><ol><li><p>Convert the <code>.class</code> file to base64 first, then save it as result.txt</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Base64 <span class="token operator">&lt;</span> Test.class <span class="token operator">&gt;</span> result.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Login the server, create and edit <code>result.txt</code>, copy the local content, paste and save</p></li><li><p>Restore <code>result.txt</code> on the server to <code>.class</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Base64 -d &lt; result.txt &gt; Test.class
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Use the md5 command to verify that the <code>.class</code> files are consistent.</p></li></ol><h2 id="restrictions-of-the-redefine-command" tabindex="-1"><a class="header-anchor" href="#restrictions-of-the-redefine-command" aria-hidden="true">#</a> Restrictions of the redefine command</h2><ul><li>New field/method is not allowed</li><li>The function that is running, no exit can not take effect, such as the new <code>System.out.println</code> added below, only the <code>run()</code> function will take effect.</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MathGame</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">MathGame</span> game <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MathGame</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            game<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// This doesn&#39;t work because the code keeps running in while</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;in loop&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token comment">// This works because the run() function ends completely every time</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function R(U,E){const a=c("RouterLink"),t=c("ExternalLinkIcon");return l(),p("div",null,[u,n("div",m,[h,n("p",null,[k,e(a,{to:"/en/doc/retransform.html"},{default:o(()=>[v]),_:1}),f])]),n("p",null,[n("a",b,[g,_,e(t)])]),y,n("p",null,[w,n("a",x,[T,e(t)])]),I,n("div",C,[j,n("p",null,[L,e(a,{to:"/en/doc/retransform.html"},{default:o(()=>[q]),_:1}),S])]),N])}const B=i(r,[["render",R],["__file","redefine.html.vue"]]);export{B as default};
