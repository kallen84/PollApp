

Structure for our APP

The speaker, presentation title, audience and questions will 
be stored in memory on the server. We holds all of this data
in JS-varibles that we have created in our server.js

Every client connect while have the same root component, app.js
Here will get information about the speaker, presentation title,
audience members and qusetions which will all be stored in the 
state of the app-component 

--------------------------------------------------------------

-Speaker-
Our app is going to be used by "Speakers" when they're 
giving  a presentation. 

1. We will need an "object" to store our "speakers information". 

2. We also need an a varible to hold the presentation title.

--------------------------------------------------------------

-Audience-
Everyone else who is joining the presentation is an  
"Audience"

1. We need to track how many audience members are connected

2. We also need information about each audience members

--------------------------------------------------------------

-Questions-
Will contains of Questions for our audience to answer.

1. App need to store all the questions 

2. Collect audience response to each questions and store that
   as well
