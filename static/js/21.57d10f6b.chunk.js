(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[21],{291:function(e,n){e.exports={title:"1.2.13 Release",description:"RuneLite 1.2.13 is released!",author:"Adam",__content:'<p>This release includes several notable features, including:</p>\n<p><a href="https://github.com/UniquePassive">@UniquePassive</a> added a screenshot plugin,\noverlay layers, which automatically takes a screen shot on level up, clue\ncompletion, and quest completion. The screenshots may optionally be\nautomatically uploaded to imgur.</p>\n<p>You may manually take a screenshot by clicking the camera icon in the titlebar:</p>\n<p><img src="/img/blog/1.2.13-Release/screenshotplugin.png" alt="screenshot-plugin"/></p>\n<p>If you enjoy the old Low Detail mode, <a href="https://github.com/deathbeam">@deathbeam</a>\ncontributed a low detail mode plugin which lets you toggle it.</p>\n<p><img src="/img/blog/1.2.13-Release/lowdetail.png" alt="lowdetail"/></p>\n<p>Finally, <a href="https://github.com/someonewithaninternetconnection">@SomeoneWithAnInternetConnection</a>\nadded a metronome plugin to aid with timing game ticks.</p>\n<p>There were also several smaller improvements, including:</p>\n<ul>\n<li>Fixed ground items overlay to correctly account for tile height when drawing item names.</li>\n<li>Allow plugin panels, including the configuration panel, to keep state between\nbeing collapsed and expanded.</li>\n<li>Fix idle notifier to more reliably notify you</li>\n<li>Fix broken glyphs which are evident on some overlays</li>\n<li>Add infernal eel to fishing plugin</li>\n</ul>\n<p>On a more serious note, Jagex has requested removal of the Zulrah Helper,\nVolcanic Mine Helper, Teamcape Overlay, and AoE Plugin for being in violation of\nthe game rules. These plugins have been removed.</p>\n<p>Additionally, support for loading external plugins has been removed upon request\nfrom Jagex.</p>\n<p>- Adam</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 13 contributors this release!</p>\n<pre><code>Adam (19):\n      cache service: lazily load store\n      cache service: skip loading filedata as it is not necessary for cache updater\n      cache service: move database updating to happen during download\n      cache service: don&#39;t skip already up to date archives\n      cache service: use an identity hashmap as equals checks archive contents\n      Revert &quot;cache service: use an identity hashmap as equals checks archive contents&quot;\n      Revert &quot;cache service: don&#39;t skip already up to date archives&quot;\n      Revert &quot;cache service: move database updating to happen during download&quot;\n      cache service: remove unused import\n      item service: set cache-control: public too\n      config panel: don&#39;t show groups with no visible config items\n      runelite-client: move all main loop checks info try/catch\n      infobox manager: check infobox isn&#39;t null\n      xp tracker: don&#39;t reset on logout or hop\n      http-service: split hiscore service from controller\n      http-service: add beginning of xp tracker\n      deobfuscator: map classes of static fields which are initialized in clinit\n      Add maven central to be tried before repo.runelite.net\n      runelite-client: remove version and account name from title\n\nCameron Moberg (2):\n      Fixed Slayer task infobox only updating on state change\n      Changed how idle checks in combat\n\nDreyri (16):\n      add setter for textColor\n      add setter for spriteId\n      add setter for width\n      add setter for height\n      add setter for name\n      add setter for contentType\n      add setter for type\n      add getter/setter for scrollX\n      add getter/setter for scrollY\n      add setter/getter for originalX\n      add getter/setter for originalY\n      add getter for paddingX\n      add getter for paddingY\n      add setter for paddingX\n      add setter for paddingY\n      dev tools: allow editing widget settings\n\nMartin Tuskevicius (1):\n      Swapped viewport width and height fields.\n\nMax Weber (1):\n      Allow PluginPanels to keep state\n\nSeth (1):\n      Add Clue Scroll/Barrows to screenshot plugin\n\nSomeoneWithAnInternetConnection (7):\n      Name some internal runescape audio bits\n      Implement sound-playing API\n      Add collection of named SoundEffect IDs\n      Add metronome plugin\n      Rename debug boundingbox drawmode enums\n      Expose runescape click/boundingbox display mode\n      Add bounding/clickbox buttons to the devtools plugin\n\nSteveOSRS (1):\n      Added infernal eel to fishing plugin\n\nTomas Slusny (14):\n      Add startUp method for attack indicators plugin\n      Fix startup and shutdown method of AccountPlugin\n      Add shutDown to BossTimersPlugin\n      Add shutDown to ConfigPlugin\n      Add shutDown to DevtoolsPlugin\n      Add shutDown method to HiscorePlugin\n      Add startup and shutdown methods to SlayerPlugin\n      Add shutDown method to TimersPlugin\n      Add shutDown method to XpTrackerPlugin\n      Fix NPE in ScreenShotPlugin\n      Fix idle notifications for animation changes\n      Update Project Lombok version to 1.16.20\n      runescape-client: rename low detail fields\n      Add low memory mode plugin\n\nTyler Hardy (1):\n      Add gargoyle boss to aoe plugin\n\nUniquePassive (7):\n      runescape-client: Fix broken glyphs\n      Notify before 5 minute idle and 6h logout\n      Add nullcheck for counter in SlayerPlugin#onConfigChanged\n      runelite-client: update to substance 8.0.00-dev\n      runelite-client: add client ui loaded event\n      runelite-client: add screenshot plugin\n      http-service: fix exception on empty config setKey request body\n\nnoremac201 (2):\n      Progress Bar Component to not show 2 decimals percent\n      Standardize xpglobe tooltip width\n\noplosthee (1):\n      Incorporate height into the GroundItems overlay\n</code></pre>'}}}]);
//# sourceMappingURL=21.57d10f6b.chunk.js.map