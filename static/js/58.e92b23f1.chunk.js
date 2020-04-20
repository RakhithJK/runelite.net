(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[58],{328:function(e,n){e.exports={title:"1.4.17 Release",description:"Loot tracker grouping, home and minigame cooldown timers, minigame and quest world map icons, and various bug fixes and enhancements",author:"Jordan",__content:'<p>The Loot tracker plugin now has a setting to group loot by NPC/event. In addition, a right-click\nmenu has been added to view details of a specific NPC&#39;s loots. Thanks to\n<a href="https://github.com/psikoi">@psikoi</a> for this feature!</p>\n<p><img src="/img/blog/1.4.17-Release/grouped-loot-tracker.gif" alt="grouped-loot-tracker"/></p>\n<p>Home and minigame teleports will now add a timer for their cooldowns.</p>\n<p><img src="/img/blog/1.4.17-Release/home-minigame-teleport-timers.png" alt="home-minigame-teleport-timers"/></p>\n<p>The World Map plugin now displays tooltips for quest and minigame names, thanks to\n<a href="https://github.com/johnhamilto">@johnhamilto</a> and <a href="https://github.com/MagicfTail">@MagicfTail</a>.</p>\n<p><img src="/img/blog/1.4.17-Release/quest-tooltips.png" alt="quest-tooltips"/>\n<img src="/img/blog/1.4.17-Release/minigame-tooltips.png" alt="minigame-tooltips"/></p>\n<p>There are also numerous smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The Achievement Diary plugin has been fixed</li>\n<li>The idle notifier now considers mouse clicks, not mouse movement, to determine when players are\nno longer idle for the Idle Notifier plugin</li>\n<li>Fixed Fishing plugin inventory and equipment check</li>\n<li>The Player-owned House plugin now displays the new Troll stronghold teleport portal</li>\n<li>The farming tracker now tracks the Weiss herb patch</li>\n<li>The bottom-right snap corner no longer moves when the collapsible chatbox is opened</li>\n<li>Cutting sacred eels will no longer incorrectly trigger the Idle Notifier plugin</li>\n<li>Time tracking tabs have been better ordered by priority</li>\n<li>The vanilla Tithe farm overlay has been made layoutable and now replaces the previous custom\noverlay</li>\n<li>Wizard&#39;s tower clue solutions now indicate the nearby fairy ring for convenience</li>\n<li>The stairway to the task-only Kurask room and Godwars crossbow climbing rocks are now highlighted</li>\n<li>Weiss and Troll stronghold basalt teleports and Kharedst&#39;s Memoirs teleports have been added to\nthe World Map plugin</li>\n<li>The Ape Atoll Arceuus teleport location has been fixed in the World Map plugin</li>\n<li>Dark crabs have been added to the Fishing plugin</li>\n<li>Quest screenshots now use a standardized naming format</li>\n<li>The Chambers of Xeric party size overlay indicator is now hidden when raiding solo</li>\n<li>Ogre bellows now display the number of charges they contain</li>\n<li>NPCs highlighted with the slayer plugin are now immediately un-highlighted upon task completion</li>\n<li>Fixed 2005 interface swapper sprites for quest and spellbook icons</li>\n<li>The clue scroll plugin now checks for sets across the user&#39;s inventory and equipped items</li>\n<li>Upon killing Grotesque Guardians, a timer is created showing the time until the instance closes</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 14 contributors this release!</p>\n<pre><code>Adam (2):\n      http-service: add caching for hiscore lookups\n      http-api: use https for hiscore urls\n\nDamen (1):\n      Add Grotesque Guardians instance close timer (#4338)\n\nJordan Atwood (8):\n      interface styles plugin: Add more error handling\n      Fix SpriteIDs from 2018/08/30 update\n      clue scroll plugin: Check for sets across inventory and equipment\n      timers plugin: Reset fields on shutdown\n      Add home teleport animation and graphic definitions\n      Add minigame teleport button widget info\n      Add home teleport widget info\n      timers plguin: Add teleport cooldown timers\n\nMack Bryan (3):\n      Add ogre bellows to item charges plugin (#5323)\n      Moved hot-cold dig location 3 tiles east into the correct range.\n      Remove npc highlights on task completed message. (#5416)\n\nMagic fTail (3):\n      Add Quest to quest screenshots\n      WorldMapPlugin: Add tooltip to minigame icons\n      Don&#39;t show party size in overlay when solo raiding\n\nMax Weber (7):\n      diaryreqs: Update scrollbar with new length\n      cache: name InterfaceDefinition fields\n      cache: Disassemble CS1s\n      runelite-api: Update widget field names\n      cache: Store ID in ScriptLoader\n      cache: add various world map related opcodes\n      runelite-mixins: Add setter for varcint\n\nRon Young (1):\n      Add missing widget types to WidgetType class (#5306)\n\nRuben Amendoeira (1):\n      loot tracker: add view for grouping loot by npc/event\n\nSebastiaan Vanspauwen (6):\n      Added Kurask Slayer Room Overlay\n      Added Godwars Crossbow Shortcut\n      Worldmap: Added Weiss and Troll Stronghold teleports\n      Worldmap: Fixed Ape Atoll Arceuus Location\n      Worldmap: Added Kharedst&#39;s Memoirs teleports\n      Fishing: Added Dark Crab Overlay\n\nSpencer (1):\n      Added fairy ring code to wizard tower clue solutions\n\nTomas Slusny (14):\n      Make bottom-right snap corner not account for chatbox\n      Fix fishing plugin inventory/equipment check\n      Fix Achievment Diary widget ids\n      Add Sacred Eeels cutting to idle notifier\n      Make fishing overlays use hidden instead of manager\n      Make cannon plugin use hidden instead of manager\n      Make Kourend library use hidden field instead of manager\n      Reorder time tracker tabs by priority\n      Replace Tithe Farm overlay with layoutable widget\n      Deprecate queries with already existing events\n      Add mappings for mouse last pressed millis\n      Use mouse/keyboard idle state properly in IdleNotifier\n      Simulate ItemContainerChange events on plugin startup\n      Remove unnecessary fishing spot configuration\n\ndavidyip50 (1):\n      Add troll stronghold portal icon support to POH (#5404)\n\njohnhamilto (1):\n      Add quest name tooltips to the world map (#5410)\n\noplosthee (1):\n      Add Weiss herb patch to the farming tracker\n</code></pre>'}}}]);
//# sourceMappingURL=58.e92b23f1.chunk.js.map