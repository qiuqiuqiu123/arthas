import{_ as e,o as t,c as a,d as i}from"./app.4d248835.js";const o={},r=i(`<h1 id="arthas-properties" tabindex="-1"><a class="header-anchor" href="#arthas-properties" aria-hidden="true">#</a> Arthas Properties</h1><p>The <code>arthas.properties</code> file is in the arthas directory.</p><ul><li>If it is automatically downloaded arthas, the directory is under <code>~/.arthas/lib/3.x.x/arthas/</code></li><li>If it is a downloaded complete package, under the decompression directory of arthas</li></ul><h2 id="supported-configuration-items" tabindex="-1"><a class="header-anchor" href="#supported-configuration-items" aria-hidden="true">#</a> Supported configuration items</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Note that the configuration must be <code>camel case</code>, which is different from the <code>-</code> style of spring boot. Only the spring boot application supports both <code>camel case</code> and <code>-</code> style configuration.</p></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#arthas.config.overrideAll=true
arthas.telnetPort=3658
arthas.httpPort=8563
arthas.ip=127.0.0.1

# seconds
arthas.sessionTimeout=1800

#arthas.appName=demoapp
#arthas.tunnelServer=ws://127.0.0.1:7777/ws
#arthas.agentId=mmmmmmyiddddd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>If the configuration of <code>arthas.telnetPort</code> is -1, the telnet port will not be listened. <code>arthas.httpPort</code> is similar.</li><li>If you configure <code>arthas.telnetPort</code> to 0, then random listen telnet port, you can find the random port log in <code>~/logs/arthas/arthas.log</code>. <code>arthas.httpPort</code> is similar.</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you want to prevent multiple arthas port conflicts on a machine. It can be configured as a random port, or configured as -1, and use arthas through the tunnel server.</p></div><h3 id="disable-specify-commands" tabindex="-1"><a class="header-anchor" href="#disable-specify-commands" aria-hidden="true">#</a> disable specify commands</h3><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>since 3.5.2</p></div><p>Such as configuration:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>arthas.disabledCommands=stop,dump
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>It can also be configured on the command line: <code>--disabled-commands stop,dump</code>.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>By default, arthas-spring-boot-starter will disable the <code>stop</code> command.</p></div><h2 id="configured-order" tabindex="-1"><a class="header-anchor" href="#configured-order" aria-hidden="true">#</a> Configured order</h2><p>The order of configuration is: command line parameters &gt; System Env &gt; System Properties &gt; arthas.properties.</p><p>such as:</p><ul><li><code>./as3.sh --telnet-port 9999</code> command line configuration will overwrite the default value <code>arthas.telnetPort=3658</code> in <code>arthas.properties</code>.</li><li>If the application itself sets system properties <code>arthas.telnetPort=8888</code>, it will override the default value <code>arthas.telnetPort=3658</code> in <code>arthas.properties</code>.</li></ul><p>If you want <code>arthas.properties</code> to have the highest order, you can configure <code>arthas.config.overrideAll=true</code>.</p>`,19),s=[r];function n(d,c){return t(),a("div",null,s)}const h=e(o,[["render",n],["__file","arthas-properties.html.vue"]]);export{h as default};
