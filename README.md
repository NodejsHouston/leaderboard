# Leaderboard

Curious to see how you stack-up against your fellow NodeJS Houston members?
We're gamifying _Code Node_ engagement! The leaderboard is intended to track
contributions to
[NodeJS Houston repositories](https://github.com/NodeJSHouston), event
attendance and participation. It's really a launchpad for ideas and designed as
a fun project to hack on without requiring a huge initial commitment outside of
the _Code Node_ evenings.

## UI Wireframes

Below you will find wireframes of the leaderboard's design.

### Main page view

The main page is what most users will see each time they visit the
leaderboard. It is a tabular display of members sorted by the "points" they
have earned. There may also be "badges" awarded for special events (conference
attendance, giving a meetup talk, etc.) or other user attributes

[![Precursor](https://precursorapp.com/document/Leaderboard-Wireframe-17592203636153.svg?auth-token=)](https://precursorapp.com/document/Leaderboard-Wireframe-17592203636153.svg)

### Member Detail view

The member detail view is available from the leaderboard main page, it presents
more information submitted by users (and potentially gathered from GitHub).

[![Precursor](https://precursorapp.com/document/User-detail-view-17592203719773.svg?auth-token=)](https://precursorapp.com/document/User-detail-view-17592203719773.svg)

### Admin Dashboard view

The admin view is the management for the leaderboard, it allows an
administrator to edit a member's information, delete a member, etc. A member
will need to be identified as an Admin to access this screen.

[![Precursor](https://precursorapp.com/document/Admin-Dashboard-17592203719750.svg?auth-token=)](https://precursorapp.com/document/Admin-Dashboard-17592203719750.svg)

## Technology

 - Database, [SQLite](http://sqlite.org/)
   - With its single-file format and ubiquity SQLite will allow everyone to
     keep their own copy of the database without requiring a database server
     setup.
 - Server, [Hapi](http://hapijs.com/)
   - Robust and low barriers to entry, if you haven't used it before this
     could be a good opportunity to pair-up.
 - Frontend, [React](http://facebook.github.io/react/)
   - With a clean separation between components teams can tackle different
     portions of the app without stepping on each other's toes.
