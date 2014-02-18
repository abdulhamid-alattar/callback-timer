callback-timer
==============

The idea to create some timers modules, that can be reused as skeletons for other work.

Ajax Callback Timer 
-------------------
Countdown timer, this module can be used to create a timer with update Ajax request. 
The ajax request will be synced with the timer. Whenever the Ajax call completes, it will reset the timer. The callback is added to be triggered when the timer reaches 0.

Code contains 2 places TODO, the one in the ajax call is to replace with json data manipulation (it can be some stocks feeds, that got updated every 2 minutes).

the second to-do in the countdown ticks ( it will trigger with every second) it can be used for UI elements.

While both can be rewritten to be passed with the initialization . 

Another version to come soon.


