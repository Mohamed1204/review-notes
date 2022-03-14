-----Description------
We are building a new application that has wide range of functionalities related to audit. One of the features of the application is called "Review notes" (See the mockup file). 
They could be explained as a sticky notes someone can create to perform some tasks or act as a memory. 
They can be composed by different properties such as type, priority, status, creator, responsible/assignees, etc.
The review notes can be accessed by a specific URL, ex. /review-notes, where the user will get a list of them as shown at the attached image. 
This list can be also filtered using some predefined filters. 
To provide a good experience and reduce the load time, the initial number of items which can be seen within the list of review notes is 10.

------Task-------
First, not everything may be clear, and self-explained from the attached image, and this is fine. 
Use your imagination and feel free to add as much as comments within the code as you may think are needed.
The task is to create the list of review notes and to be accessible when a specific URL is opened within a browser. 
On this page users should see a breadcrumb (hint: make it static), a page title with a button next to it, 
which once clicked, the user can get some small overlay with a text as a content saying something like: "Here will be the form to create a new review note".
Then a block of filters. Important, do not implement the real logic or API connection. Only the filtering elements with possible static data.

Finally, a list of review notes. This list must be loaded using a call to an actual API endpoint which you have to create. 
You may use the provided json file of dummy reviewnotes and users, to serve as a datasource in the API.
Also, as you can see from the image, users can "load more" so it will be good if you can implement this functionality as well.

-----Additional info------
Currently we use Vue.js, Vuetify, Node.js & co. thus, these technologies are preferred for use for this task. Using JS or TS is up to you.
In case you cannot create some part of the task using the specified technologies and you think you can make it faster using something else, feel free to do it, 
but provide us with detailed information what it is and how we can run it in case there is a need of extra software installation.
We all know that if anyone needs some help, we can easily search around internet or ask some colleague or a friend and if you do so, please append this info to your code.

------Deliverables------
We expect you to send us a link to a repository where we can get the code ourselves and execute it reading your indications. 
Feel free to use your personal github, gitlab, bitbucket or any other service.
Estimated time: 5 hours.

Happy coding :) 
