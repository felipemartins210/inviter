For crud Learning

Invite List App

We could anote any persons to invite.

# Solving Warnings

If you are viwing warning when trying to add a new person, to this.

Acess this file: node_modules / react-native / Libraries / Core / Timer / JSTimers.js
Find "MAX_TIMER_DURATION_MS"
Change from 60 * 1000 to 10000 * 1000

Save the file and rebuild your app.