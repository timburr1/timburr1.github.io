import{r as n,o as s,c as a,a as t,b as e,F as p,d as o,f as i}from"./app.554c1b80.js";const c={},l=t("h1",{id:"working-with-audit-logs",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#working-with-audit-logs","aria-hidden":"true"},"#"),o(" Working with Audit Logs")],-1),u=t("h2",{id:"some-quick-background",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#some-quick-background","aria-hidden":"true"},"#"),o(" Some quick background")],-1),r=t("p",null,[o("Audit logs are an excellent moderation tool offered by Discord to know what happened in a server and usually by whom. At the moment, these are the only method to help you determine who the executor of a mod action was on the server. Relevant events such as "),t("code",null,"messageDelete"),o(" and "),t("code",null,"guildMemberLeave"),o(" unfortunately do not provide info on the moderation actions having triggered them, making the fetch for audit logs a necessity.")],-1),k=o("There are quite a few cases where you may use audit logs. This guide will limit itself to the most common use cases. Feel free to consult the "),d={href:"https://discord.com/developers/docs/resources/audit-log",target:"_blank",rel:"noopener noreferrer"},h=o("relevant Discord API page"),g=o(" for more information."),m=t("div",{class:"custom-container warning"},[t("p",{class:"custom-container-title"},"WARNING"),t("p",null,"It is crucial that you first understand two details about audit logs:"),t("ol",null,[t("li",null,"They are not guaranteed to arrive when you expect them (if at all)."),t("li",null,"There is no event which triggers when an audit log is created.")])],-1),b=o("Let's start by glancing at the "),v=o(" method and how to work with it. Like many discord.js methods, it returns a Promise containing the "),f=o(" object. In most cases, only the "),w=t("code",null,"entries",-1),y=o(" property will be of interest, as it holds a collection of "),A=o(" objects, and consequently, the information you usually want. You can always take a look at the options"),x=i('<p>The following examples will explore a straightforward case for some auditLog types. Some basic error handling is performed, but these code segments are by no means foolproof and are meant to teach you how fetching audit logs work. You will most likely need to expand on the examples based on your own goals for a rigorous system.</p><h2 id="who-deleted-a-message" tabindex="-1"><a class="header-anchor" href="#who-deleted-a-message" aria-hidden="true">#</a> Who deleted a message?</h2><p>One of the most common use cases for audit logs would be understanding who deleted any given message in a Discord server.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>At the time of writing, Discord does not emit an audit log if the person who deleted the message is a bot deleting a single message or is the author of the message itself.</p></div><p>For now, we&#39;ll focus on the <code>messageDelete</code> event.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>client<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;messageDelete&#39;</span><span class="token punctuation">,</span> <span class="token parameter">message</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">A message by </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>message<span class="token punctuation">.</span>author<span class="token punctuation">.</span>tag<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> was deleted, but we don&#39;t know by who yet.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>So far, nothing should seem new or complicated. You get the message deleted event and log that a message was removed from a channel. More information from the message object can be extracted, but that is left as an exercise for the reader.</p><p>For simplicity, set a fetch limit of 1 and accept only the <code>MESSAGE_DELETE</code> type.</p><p>Placing this into the previous code, you get the following. Note that this also makes the function async to make use of <code>await</code>. In addition, make sure to ignore DMs.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>client<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;messageDelete&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token parameter">message</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\t<span class="token comment">// Ignore direct messages</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>message<span class="token punctuation">.</span>guild<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>\n\t<span class="token keyword">const</span> fetchedLogs <span class="token operator">=</span> <span class="token keyword">await</span> message<span class="token punctuation">.</span>guild<span class="token punctuation">.</span><span class="token function">fetchAuditLogs</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\t\tlimit<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n\t\ttype<span class="token operator">:</span> <span class="token string">&#39;MESSAGE_DELETE&#39;</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token comment">// Since there&#39;s only 1 audit log entry in this collection, grab the first one</span>\n\t<span class="token keyword">const</span> deletionLog <span class="token operator">=</span> fetchedLogs<span class="token punctuation">.</span>entries<span class="token punctuation">.</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t<span class="token comment">// Perform a coherence check to make sure that there&#39;s *something*</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>deletionLog<span class="token punctuation">)</span> <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">A message by </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>message<span class="token punctuation">.</span>author<span class="token punctuation">.</span>tag<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> was deleted, but no relevant audit logs were found.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t<span class="token comment">// Now grab the user object of the person who deleted the message</span>\n\t<span class="token comment">// Also grab the target of this action to double-check things</span>\n\t<span class="token keyword">const</span> <span class="token punctuation">{</span> executor<span class="token punctuation">,</span> target <span class="token punctuation">}</span> <span class="token operator">=</span> deletionLog<span class="token punctuation">;</span>\n\n\t<span class="token comment">// Update the output with a bit more information</span>\n\t<span class="token comment">// Also run a check to make sure that the log returned was for the same author&#39;s message</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span>id <span class="token operator">===</span> message<span class="token punctuation">.</span>author<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">A message by </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>message<span class="token punctuation">.</span>author<span class="token punctuation">.</span>tag<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> was deleted by </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>executor<span class="token punctuation">.</span>tag<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">A message by </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>message<span class="token punctuation">.</span>author<span class="token punctuation">.</span>tag<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> was deleted, but we don&#39;t know by who.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>With this, you now have a very simple logger telling you who deleted a message authored by another person.</p><h2 id="who-kicked-a-user" tabindex="-1"><a class="header-anchor" href="#who-kicked-a-user" aria-hidden="true">#</a> Who kicked a user?</h2><p>Similar to the <code>messageDelete</code> case, let&#39;s look at the <code>guildMemberRemove</code> event.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>client<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;guildMemberRemove&#39;</span><span class="token punctuation">,</span> <span class="token parameter">member</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>member<span class="token punctuation">.</span>user<span class="token punctuation">.</span>tag<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> left the guild... but was it of their own free will?</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>The same as before: set the fetch limit to 1 and accept only the <code>MEMBER_KICK</code> type.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>client<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;guildMemberRemove&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token parameter">member</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">const</span> fetchedLogs <span class="token operator">=</span> <span class="token keyword">await</span> member<span class="token punctuation">.</span>guild<span class="token punctuation">.</span><span class="token function">fetchAuditLogs</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\t\tlimit<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n\t\ttype<span class="token operator">:</span> <span class="token string">&#39;MEMBER_KICK&#39;</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token comment">// Since there&#39;s only 1 audit log entry in this collection, grab the first one</span>\n\t<span class="token keyword">const</span> kickLog <span class="token operator">=</span> fetchedLogs<span class="token punctuation">.</span>entries<span class="token punctuation">.</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t<span class="token comment">// Perform a coherence check to make sure that there&#39;s *something*</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>kickLog<span class="token punctuation">)</span> <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>member<span class="token punctuation">.</span>user<span class="token punctuation">.</span>tag<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> left the guild, most likely of their own will.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t<span class="token comment">// Now grab the user object of the person who kicked the member</span>\n\t<span class="token comment">// Also grab the target of this action to double-check things</span>\n\t<span class="token keyword">const</span> <span class="token punctuation">{</span> executor<span class="token punctuation">,</span> target <span class="token punctuation">}</span> <span class="token operator">=</span> kickLog<span class="token punctuation">;</span>\n\n\t<span class="token comment">// Update the output with a bit more information</span>\n\t<span class="token comment">// Also run a check to make sure that the log returned was for the same kicked member</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span>id <span class="token operator">===</span> member<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>member<span class="token punctuation">.</span>user<span class="token punctuation">.</span>tag<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> left the guild; kicked by </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>executor<span class="token punctuation">.</span>tag<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>member<span class="token punctuation">.</span>user<span class="token punctuation">.</span>tag<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> left the guild, audit log fetch was inconclusive.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="who-banned-a-user" tabindex="-1"><a class="header-anchor" href="#who-banned-a-user" aria-hidden="true">#</a> Who banned a user?</h2><p>The logic for this will be very similar to the above kick example, except that this time, the <code>guildBanAdd</code> event will be used.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>client<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;guildBanAdd&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token parameter">ban</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ban<span class="token punctuation">.</span>user<span class="token punctuation">.</span>tag<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> got hit with the swift hammer of justice in the guild </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ban<span class="token punctuation">.</span>guild<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>As was the case in the previous examples, you can see what happened, to whom it happened, but not who executed the action. Enter once again audit logs fetching limited to 1 entry and only the <code>MEMBER_BAN_ADD</code> type. The <code>guildBanAdd</code> listener then becomes:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>client<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;guildBanAdd&#39;</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token parameter">ban</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">const</span> fetchedLogs <span class="token operator">=</span> <span class="token keyword">await</span> ban<span class="token punctuation">.</span>guild<span class="token punctuation">.</span><span class="token function">fetchAuditLogs</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n\t\tlimit<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n\t\ttype<span class="token operator">:</span> <span class="token string">&#39;MEMBER_BAN_ADD&#39;</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token comment">// Since there&#39;s only 1 audit log entry in this collection, grab the first one</span>\n\t<span class="token keyword">const</span> banLog <span class="token operator">=</span> fetchedLogs<span class="token punctuation">.</span>entries<span class="token punctuation">.</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t<span class="token comment">// Perform a coherence check to make sure that there&#39;s *something*</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>banLog<span class="token punctuation">)</span> <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ban<span class="token punctuation">.</span>user<span class="token punctuation">.</span>tag<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> was banned from </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ban<span class="token punctuation">.</span>guild<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> but no audit log could be found.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t<span class="token comment">// Now grab the user object of the person who banned the member</span>\n\t<span class="token comment">// Also grab the target of this action to double-check things</span>\n\t<span class="token keyword">const</span> <span class="token punctuation">{</span> executor<span class="token punctuation">,</span> target <span class="token punctuation">}</span> <span class="token operator">=</span> banLog<span class="token punctuation">;</span>\n\n\t<span class="token comment">// Update the output with a bit more information</span>\n\t<span class="token comment">// Also run a check to make sure that the log returned was for the same banned member</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span>target<span class="token punctuation">.</span>id <span class="token operator">===</span> ban<span class="token punctuation">.</span>user<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ban<span class="token punctuation">.</span>user<span class="token punctuation">.</span>tag<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> got hit with the swift hammer of justice in the guild </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ban<span class="token punctuation">.</span>guild<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, wielded by the mighty </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>executor<span class="token punctuation">.</span>tag<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n\t\tconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ban<span class="token punctuation">.</span>user<span class="token punctuation">.</span>tag<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> got hit with the swift hammer of justice in the guild </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>ban<span class="token punctuation">.</span>guild<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, audit log fetch was inconclusive.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="highlight-lines"><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>',21);c.render=function(o,i){const c=n("OutboundLink"),L=n("DocsLink");return s(),a(p,null,[l,u,r,t("p",null,[k,t("a",d,[h,e(c)]),g]),m,t("p",null,[b,e(L,{path:"class/Guild?scrollTo=fetchAuditLogs",type:"method"}),v,e(L,{path:"class/GuildAuditLogs"}),f,w,y,e(L,{path:"class/GuildAuditLogsEntry"}),A]),x],64)};export{c as default};