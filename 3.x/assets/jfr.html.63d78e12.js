import{_ as r}from"./arthas-output-recording.5e4ef7bc.js";import{_ as i,o,c as d,a as e,b as s,e as t,t as l,d as n,r as c}from"./app.4d248835.js";const p={},u=e("h1",{id:"jfr",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#jfr","aria-hidden":"true"},"#"),t(" jfr")],-1),h={href:"https://arthas.aliyun.com/3.x/doc/arthas-tutorials.html?language=en&id=command-jfr",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"jfr",-1),m=t(" online tutorial"),f=n(`<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Java Flight Recorder (JFR) is a tool for collecting diagnostic and profiling data about a running Java application. It is integrated into the Java Virtual Machine (JVM) and causes almost no performance overhead, so it can be used even in heavily loaded production environments.</p></div><p>The <code>jfr</code> command supports starting and stopping JFR recordings during dynamic program running. Recording collects data about <em>events</em>. Events occur in the JVM or the Java application at a specific point in time. Each event has a name, a time stamp, and an optional <em>payload</em>. The payload is the data associated with an event, for example, the CPU usage, the Java heap size before and after the event, the thread ID of the lock holder, and so on.</p><p>The basic usage of the <code>jfr</code> command is<code>jfr cmd [actionArg]</code></p><blockquote><p>Note: jfr is supported only after the 8u262 version of jdk8</p></blockquote><h3 id="supported-options" tabindex="-1"><a class="header-anchor" href="#supported-options" aria-hidden="true">#</a> Supported Options</h3><table><thead><tr><th style="text-align:right;">Name</th><th style="text-align:left;">Specification</th></tr></thead><tbody><tr><td style="text-align:right;"><em>cmd</em></td><td style="text-align:left;">Command to execute, support\u3010start\uFF0Cstatus\uFF0Cdump\uFF0Cstop\u3011</td></tr><tr><td style="text-align:right;"><em>actionArg</em></td><td style="text-align:left;">Attribute name pattern</td></tr><tr><td style="text-align:right;">[n:]</td><td style="text-align:left;">Name of recording</td></tr><tr><td style="text-align:right;">[r:]</td><td style="text-align:left;">Recording id</td></tr><tr><td style="text-align:right;">[dumponexit:]</td><td style="text-align:left;">When the program exits, whether to dump the .jfr file. (boolean false)</td></tr><tr><td style="text-align:right;">[d:]</td><td style="text-align:left;">Duration of recording, i.e. 60s, 2m, 5h, 3d. default no delay</td></tr><tr><td style="text-align:right;">[duration:]</td><td style="text-align:left;">Duration of recording, default forever.</td></tr><tr><td style="text-align:right;">[s:]</td><td style="text-align:left;">Server-side template, The default is default.jfc located at <code>$JAVA_HOME/lib/jfr/default.jfc</code></td></tr><tr><td style="text-align:right;">[f:]</td><td style="text-align:left;">Resulting recording filename</td></tr><tr><td style="text-align:right;">[maxage:]</td><td style="text-align:left;">Maximum age of buffer data</td></tr><tr><td style="text-align:right;">[maxsize:]</td><td style="text-align:left;">Maximum size of buffers in bytes</td></tr><tr><td style="text-align:right;">[state:]</td><td style="text-align:left;">Recording state</td></tr></tbody></table><h2 id="start-jfr-recording" tabindex="-1"><a class="header-anchor" href="#start-jfr-recording" aria-hidden="true">#</a> Start jfr recording</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ jfr start
Started recording 1. No limit specified, using maxsize=250MB as default.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>The default JFR record is started.</p></div><p>Start the JFR recording, specify the recording name, duration, file saving path.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ jfr start -n myRecording --duration 60s -f /tmp/myRecording.jfr
Started recording 2. The result will be written to:
/tmp/myRecording.jfr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>##View jfr recordings status</p><p>The default is to view all JFR recordings.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ jfr status
Recording: <span class="token assign-left variable">recording</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">name</span><span class="token operator">=</span>Recording-1 <span class="token punctuation">(</span>running<span class="token punctuation">)</span>
Recording: <span class="token assign-left variable">recording</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">name</span><span class="token operator">=</span>myRecording <span class="token assign-left variable">duration</span><span class="token operator">=</span>PT1M <span class="token punctuation">(</span>closed<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>View the records of the specified recording ID.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ jfr status <span class="token parameter variable">-r</span> <span class="token number">1</span>
Recording: <span class="token assign-left variable">recording</span><span class="token operator">=</span><span class="token number">1</span> <span class="token assign-left variable">name</span><span class="token operator">=</span>Recording-1 <span class="token punctuation">(</span>running<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>View recordings in a specified state.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ jfr status <span class="token parameter variable">--state</span> closed
Recording: <span class="token assign-left variable">recording</span><span class="token operator">=</span><span class="token number">2</span> <span class="token assign-left variable">name</span><span class="token operator">=</span>myRecording <span class="token assign-left variable">duration</span><span class="token operator">=</span>PT1M <span class="token punctuation">(</span>closed<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dump-jfr-recording" tabindex="-1"><a class="header-anchor" href="#dump-jfr-recording" aria-hidden="true">#</a> dump jfr recording</h2>`,19),v=t("The "),b=e("code",null,"jfr dump",-1),x=e("br",null,null,-1),k=t(" Specifies the record output path."),_=n(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ jfr dump <span class="token parameter variable">-r</span> <span class="token number">1</span> <span class="token parameter variable">-f</span> /tmp/myRecording1.jfr
Dump recording <span class="token number">1</span>, The result will be written to:
/tmp/myRecording1.jfr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The file output path is not specified. By default, it is saved to the <code>arthas-output</code> directory</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ jfr dump <span class="token parameter variable">-r</span> <span class="token number">1</span>
Dump recording <span class="token number">1</span>, The result will be written to:
/tmp/test/arthas-output/20220819-200915.jfr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="stop-jfr-recording" tabindex="-1"><a class="header-anchor" href="#stop-jfr-recording" aria-hidden="true">#</a> Stop jfr recording</h2><p>No recording output path is specified, default is saved to <code>arthas-output</code> directory.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ jfr stop <span class="token parameter variable">-r</span> <span class="token number">1</span>
Stop recording <span class="token number">1</span>, The result will be written to:
/tmp/test/arthas-output/20220819-202049.jfr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>notice: A recording can only be stopped once.</p></blockquote><p>You can also specify the record output path.</p><h2 id="view-jfr-recording-results-under-arthas-output-via-browser" tabindex="-1"><a class="header-anchor" href="#view-jfr-recording-results-under-arthas-output-via-browser" aria-hidden="true">#</a> View JFR recording results under arthas-output via browser</h2>`,9),y=t("By default, arthas uses http port 8563 , which can be opened:"),j={href:"http://localhost:8563/arthas-output/",target:"_blank",rel:"noopener noreferrer"},w=t("http://localhost:8563/arthas-output/"),R=t(" View the "),J=e("code",null,"arthas-output",-1),T=t(" directory below JFR recording results:"),S=e("p",null,[e("img",{src:r,alt:""})],-1),V=e("p",null,"The resulting results can be viewed with tools that support the JFR format. Such as:",-1),F=e("ul",null,[e("li",null,"JDK Mission Control \uFF1A https://github.com/openjdk/jmc")],-1);function M(N,$){const a=c("ExternalLinkIcon");return o(),d("div",null,[u,e("p",null,[e("a",h,[g,m,s(a)])]),f,e("p",null,[v,b,t(l()+" command will output the recordings from the start until the execution of the command to a JFR file, without stopping the recording.",1),x,k]),_,e("p",null,[y,e("a",j,[w,s(a)]),R,J,T]),S,V,F])}const A=i(p,[["render",M],["__file","jfr.html.vue"]]);export{A as default};
