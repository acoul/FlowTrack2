Ongoing devlog. Will cover research stuff, notes, and progress
2016.Feb.13
-----------
Turns out the repeater for the grid headers changed a little bit.  All fixed.

2016.Feb.10
-----------
Getting back into the code after a long break.  Cleaned up the e2e tests a bit,
updated dependencies, made config selection a little more sane.  All in prep
to actually get e2e working on the data grid.


2015.Jun.13
-----------
Got unit tests fixed up a bit. Got a full cycle of flow -> db -> web UI done.
The web view is crap right now, but working.  :)

2015.Jun.10
-----------
Added the first query.  GetFlowsForLast and hooked it up to the webservice. I'm still figuring out the best way to unit test this stuff
but I think I'm getting a handle on it.

2015.May.30
-----------
Restructured webservice startup to follow the pattern outlined by express-generator.  Basically isolating my app in it's own module, then starting it with createserver in the main bin.  Makes UT a bit easier.

2015.May.27
-----------
Bunch of stuff over the last few days.  Got the basic expressjs scaffold into place.  Webserver is started, unit tests for same added.

2015.May.24
-----------
Added bunyan for logging.  Not super thrilled with the way I've integrated it, but it seems to work, and I can spruce it up later

2015.May.23
-----------
Got unit testing better.  Needed a little refactoring, and a bit more smarts in the stubs/spies.  Seems to be working now.

2015.May.21
-----------
Fought with adding unit tests and mocks/spies to ```NetFlowStorage```.  Couldn't quite figure it out.  Posted to stackoverflow.  

2015.May.19
-----------
I got unit testing setup and started along with code coverage.  Kinda stumbled into getting it working, not sure if I've chosen the right stack (mocha/chai/sinon/istanbul).

2015.May.17
-----------

Setup a scaffold using grunt.  Seems to be the right way to structure projects

First pass at moving stuff into a module/creating an object.  used the bind keyword in a callback to get access to the client property of the object.  Just kinda typed until things seemed to work, need to grok it at some pt.


2015.May.16
-----------
First major commit!

The main collector stuff works.  Grab flows, put them in ES.  Tried throwing a huge tcpreplay at it, system fell over pretty quickly, handles normal load quite well.  I want to play around with the replay to see how many flows per second I can actually take.

I'm not thrilled with the overall structure of the code.  I'm brand new to any significant javascript so I'm not comfortable with the idioms and "proper" way to do things.  First thing up is figuring out the package and object system.

Think I want to package my libs as local npm modules and I think grunt is the makefile to get everything working.
