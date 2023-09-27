## Inspiration
We, like many people, have busy lives, but we still want to connect with our friends. However, scheduling times to hangout can be difficult when everyone has very specific schedules, so were inspired to automate the process, saving time for actually meeting people rather than planning how and when to meet them.

## What it does
_Scheduling With Friends_ pulls data from your Google calendar, and those of your friends, and shows you when you have opportunities to meet up with each other. It also makes it really easy to plan events, especially when the events get automatically saved to your personal Google Calendar !

## How we built it
We used _React Native_ and _Android Studio_ to build our front end, and _Firebase_ for our back end.

## Challenges we ran into
We had numerous difficulties setting up our development environments, running into problems specifically with installing packages, Android Studio and version discrepancies for Gradle, Kotlin and Java. For some of our teammates, it took most of Saturday to get our development environments working again. By Saturday night we were even considering starting over entirely and creating a progressive-web app in React JS. We also struggled significantly with our back end tools (Google Authentication and Firebase) because we are all relatively new to it. Google Authentication kept returning 'FATAL: Error', making it very difficult to debug. Our main struggle with Firebase was designing how to efficiently store and manipulate the data, as well as the actual implementation aspect.

## Accomplishments that we're proud of
We are proud that everyone stepped out of their comfort zones this weekend. One of our teammates is not even in Computer Science, and we all made an effort to take initiative and try to work on aspects of the technical project that we were not previously comfortable/familiar with.

## What we learned
Throughout the process of this app we all learned how to use create an API in React Native using Firebase.

## What's next for _**Scheduling With Friends**_?
The following features are our future plans for _**Scheduling With Friends**_ in no particular order:
1. **The ability to block out 'Me Time':**
This would be especially relevant for nights, as most people would be considered 'free' in terms of their Google Calendar, but likely planned to sleep then. Similarly, those that love to stay up late, but hate waking up early, can block out their mornings to make sure no one invites them on a 5am run.  
2. **View recommendations for activities to do:** 
When a user clicks on a hangout suggestion time, the event creator will also have a short list of things to do around the area that is relevant to the time and day. This would be likely done by web scraping for events happening in the area, for example if a new movie came out or there was a concert. This would also be a great way to monetize the app, by allowing sponsored recommendations.
3. **Location tracking:** 
By allowing users the option to enable location tracking, the app would be able to provide them with more relevant recommendations for things to do, as well as people to hang out with. It would allow you to still stay connected with a friend who moved  away and still receive suggestions on when to hang out when they are back in time; however, you would not be bombarded with their every single availability while they live permanently across the country. 
In addition, if users add a location to one of their Google Calendar events, this app would be able to give them suggestions for friends in that area in advance (rather than the day they get there).
4. **Time Zones:**
In order to accommodate people who have friends on the app in a different time zone, we would need to take into consideration time zones to give accurate suggestions.
5. **Filtering options:**
This feature would allow users to filter by friends and/or a range of days/times in which they would like to view suggestions.
6. **Accessibility features:**
Due to the short deadline of this project, we were not able to take into consideration accessibility features. We did not have time to research fonts, colors/contrasts, voice options and other accessibility features.
7. **Online friends:**
This feature would allow people who are still potentially in different locations to schedule time to meet virtually if they mark each other as 'online friends'.
