(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[35],{305:function(e,n){e.exports={title:"1.3.7 Release",description:"Farming plugin, demonic gorilla plugin, and cerberus plugin",author:"Adam",__content:'<p>This release adds a farming tracker plugin, which keeps track of what time your\ncrops were planted and will notify you after a time when it would be fully\ngrown. Thanks to <a href="https://github.com/abextm">@abextm</a> and\n<a href="https://github.com/NotFoxtrot">@NotFoxtrot</a> for their work on this over the\nlast few weeks.</p>\n<p><img src="/img/blog/1.3.7-Release/farming.png" alt="farming"/></p>\n<p><a href="https://github.com/wooxsolo">@WooxSolo</a> contributed a demonic gorilla plugin,\nwhich counts the attacks against you so you can tell when it will switch attack\nstyles. After it switches, the new style is displayed.</p>\n<p><img src="/img/blog/1.3.7-Release/gorillas.png" alt="gorillas"/></p>\n<p>A Cerberus plugin has been added, from\n<a href="https://github.com/deathbeam">@deathbeam</a> which shows the ghost order.</p>\n<p><img src="/img/blog/1.3.7-Release/cerberus.png" alt="cerberus"/></p>\n<p>Also, a special thanks to Brandon Kase, FatalWaffles, Jordan Atwood, Maiddog,\nNotFoxtrot, and Rprrr for continuing to correct and update the clues.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The cannonball count plugin tracks the count correctly again</li>\n<li>The side toolbar can now be hidden via a button in the menu bar, or ctrl+f11</li>\n<li>There is now a toggle for highlighting agility shortcuts</li>\n<li>A vengeance other timer has been added</li>\n<li>The XP orbs stay on screen while hovered</li>\n<li>Third age tools added to idle notifier</li>\n<li>XP tracker &quot;actions left&quot; no longer rounds down, and doesn&#39;t get confused by\nhopping accounts anymore</li>\n<li>Screenshots can now be taken with the &quot;insert&quot; key</li>\n<li>Add ability to disable low HP and prayer notifications</li>\n<li>Add skill progress bar to hiscore panel</li>\n<li>Add stat change indicator to boosts plugin when indicators are selected</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 25 contributors this release!</p>\n<pre><code>Adam (22):\n      update check: set read timeout on socket, move off of request thread\n      item controller: remove all synchronous fetching\n      item service: move overflow of pending lookups log message to debug\n      ws service: optimize session storage\n      Revert &quot;Fix cannon cannonball count&quot;\n      runelite: fix check for client before requesting itemmanager\n      runelite: add --disable-update-check\n      account service: fix not setting autoincrement on user id\n      runescape-client: export changedSkills and changedSkillsCount\n      runelite-api: add VisibleForDevtools annotation for methods only visible for use in devtools\n      devtools: add addxp\n      runelite-api: add headicon enum\n      demonic gorilla plugin: use headicon api\n      http-service: fix sql2o statement leak\n      Add maven-compiler-plugin to plugin management\n      devtools: post xp changed event too\n      runescape-client: export world map related symbols\n      Use only southermost ghost wave for cerb plugin\n      scripts: update comand script from live\n      scripts: update options panel rebuilder from live\n      scripts: apply zoom limits to options panel rebuilder\n      scripts: apply command callback to command script\n\nBrandon Kase (2):\n      Adjust stomp dragon-axe clue location\n      Add missing comma to hard cryptic\n\nDennis (1):\n      fix prayer reorder shutdown\n\nFatalWaffles (1):\n      Fix Beckon in Digsite location\n\nGrant (1):\n      Add Agility shortcut highlight toggle\n\nHydrox6 (2):\n      Add Vengeance Other indicator\n      Reorder Timer configuration options\n\nJeroen (1):\n      XpGlobe now stays on screen while hovered over it.\n\nJordan (1):\n      Add Zeah Altar elite map clue (#2283)\n\nJordan Atwood (5):\n      Add missing Pyramid emote clue item\n      Fix Shayzien command tent emote clue\n      Fix hard cryptic clue\n      Allow &quot;degree&quot; and &quot;minute&quot; in coordinate clues\n      Use British floor numbering in clue scroll hints\n\nKamiel (6):\n      Expose Actor animation and actionFrame to API\n      Add anim command to developer tools\n      Expose Actor graphic and spotAnimFrame to API\n      Add gfx command to developer tools\n      Add logger command to change the logger level\n      Add 3rd Age Axe and 3rd Age Pickaxe animations to Idle Notifier\n\nLevi (2):\n      Refactor overlay renderer screenshot code into a draw manager\n      xp tracker: rewrite tracking datastructures\n\nLotto (1):\n      cluescrolls: support any type of ring of dueling in emote clues\n\nMaiddog (3):\n      clues: fix spotted cape not being detected\n      clues: change npc name check to nameEquals\n      Fix various clue objects and locations.\n\nMantautas Jurksa (1):\n      Fix master fire cape emote clue\n\nMarcus Heine (1):\n      Enable screenshotting with INSERT\n\nMax Weber (17):\n      Initialize ItemManager to a complete state\n      Allow ClientThread to re-run invokeLater-ed methods\n      Allow ItemManager to be ran off the client thread\n      Use ItemManager in KourendLibraryPlugin\n      Use ItemManager in GrandExchangePlugin\n      cache: Name ObjectDefiniton&#39;s varpID and configID correctly\n      Add various animation IDs\n      Add UsernameChanged event\n      Add WorldPoint::getRegionID\n      Allow PluginPanels to opt-out of the scrollbar\n      Add FarmingTracker plugin\n      configmanager: Allow multiple delimiters\n      Add missing U+00A0 NO-BREAK SPACE character\n      Rename Setting to VarPlayer\n      Merge Varcs into Client::getVar\n      Rename SettingsTracker\n      farmingtracker: Prevent saving when teleporting\n\nMorgan Lewis (1):\n      Add support for mapping parameter names\n\nNotFoxtrot (2):\n      Fix cryptic elite clue: Father Aereck\n      Fix master clue emote: Entrana church\n\nReasel (1):\n      Add ability to disable HP and Prayer notifications (#2007)\n\nRprrr (2):\n      screenshot plugin: fix exception when taking screenshots on login\n      Fixes #2146 (Brother Tranquility &#39;talk-to&#39; &amp; &#39;&#39;transport&#39; option swap w/Menu Swapper plugin)\n\nSamuel Beresford (1):\n      Adds skill progress bar to hiscore panel Matches existing progress bar (look&amp;feel) as xp tracker\n\nSeth (6):\n      boosts overlay: move next change text to display at the top\n      boosts plugin: Add stat change indicator when indicators are selected\n      opponent info: reduce padding size\n      clue scroll: add toggle for hint arrows\n      clue scroll: fix easy clue\n      farming panel: reset progress bar background\n\nSoyChai (5):\n      Correct misspellings of &quot;transparent&quot;\n      Add underscores to minigame names in WidgetInfo\n      agilityplugin: Rename plugin package to agility\n      reportbutton: Double frequency of time updates to avoid skipping seconds\n      discord: Display skill icons in Discord while training\n\nTomas Slusny (10):\n      Agility plugin small code cleanup\n      Do not draw text on top of Mark Of Grace\n      Add support for hiding the sidebar\n      Fix clue requiring platebody, but wanting legs\n      Remove unused imports in ClientUI (#2061)\n      Reset clues based on item ID\n      Reset clue on unknown clues\n      Add Cerberus plugin\n      Verify game&#39;s minimum size\n      Add mappings for currentLoginField\n\nWooxSolo (12):\n      Add rectangle support to config\n      Remember screen position after closing and reopening\n      Add ability to lock client to screen\n      runescape-client: export hitsplatValues and applyActorHitsplat\n      runelite-api: add hitsplat applied event\n      runelite-api: export collision data\n      runelite-api: add line of sight algorithm\n      runelite-api: add WorldArea\n      devtools: add line of sight and valid moves\n      Add demonic gorilla plugin\n      cannon plugin: fix cannonball count when loading and firing on the same tick\n      cannon plugin: add granite cannonball to unload check\n\noplosthee (1):\n      Add toggle for drawing overhead player names to PlayerIndicators plugin\n\nu6077743 (1):\n      Improved low hp notif. by considering nmz absorption, 2210\n</code></pre>'}}}]);
//# sourceMappingURL=35.ba60d515.chunk.js.map