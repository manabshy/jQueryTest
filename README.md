developer-js-test
=================

Developer JavaScript Test

Developer Test

This page is using a jQuery plug-in (see: jquery.doLogging.js). The plugin has not got any bugs in it.

Abstract
The click event is not being bound properly. If the plug-in is implemented correctly you will see the word 'Success' being logged to the console every time you click a link. Read this line again!

Objective 1:
Implement the plug-in correctly so you observe the behaviour described in the Abstract.

Objective 2:
Amend the console output to include the value of the attribute currently named data-log. This task requires you to make a change in the jquery.doLogging.js plugin file.

Example: 'Success /link1/subfolder/'

What NOT to do:
Do not write your own selector to bind the event:

          $('a').on('click', function(e){
            e.preventDefault();
            console.log('Success');
          });

IMPLEMENT THE PLUG-IN!

Note:
There is more than one solution here. Feel free to submit multiple solutions in separate HTML / JS files.