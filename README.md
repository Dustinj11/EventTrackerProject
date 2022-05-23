# EventTrackerProject

# Description
This event tracker project was the beginning of a 3 weekend project. The first weekend was setting up CRUD operations using REST API. My goal is to track locations I have visited around the world and include a picture or two from every locations. My wife and I love to travel so I think this will be a fun project to keep up with even once this course is complete. The current project only uses name in the SQL table but will evolve into Country, State, & City.  

# Lessons Learned
I have gained a better understanding of RESTful services after this project. I fell behind during the lesson because I became sick but after this weekend project I feel like I am caught up.

# Technologies Used
Java, REST, JPA, and Postman

# What was fun?
This weekend was mothers day weekend so it was a quick and painless project that only took a few hours to complete. I was able to complete the project and have time to enjoy Mothers Day with my wife and kids. I am excited to expand on this project and idea over the next couple weekends.

# Postman Test
`List<Location> | GET api/index`
`Location by Id | GET api/index/{id}`
`Create Location | POST api/index`
`Update Location | PUT api/index/{id}`
`Delete Location | DELETE api/index/{id}`

#Updated with JS frontend
This update consisted of mostly JavaScript to build a front end to this program. JavaScript was difficult to wrap my head around at the start of the project. I was having difficulty understanding how everything was communicating with each other. Once I got to a the Update and Delete functions of this program I no longer had set in examples to use. I had to use my classmates and google in order to find answers. Julian broke down how the JavaScript was working line by line for me and it gave me a better understanding of how it was working. Once I understood what was happening it became a lot easier to configure my program.

One of the biggest issues I ran into was my List All Locations, and my update by Id. the List all locations was populating in the console but not in my HTML file. I could not figure it out until I walked myself through it all and noticed I have 2 locationDiv's that were contradicting themselves in my code. I deleted one of them and the program worked flawlessly. The update by Id was also giving me issues until I noticed a missing "/" at the end of my api. this was causing the id to be attached to the end of my index.

#Updated with Angular frontend
This update to the project was to build an Angular front end using methods we were taught earlier in the week. I was able to use the Todo, and the HandsOn projects to help get the basic layouts of all CRUD functions. On top of this project I had to also move out of my house and into a temporary residence with my family. This weekend was the last weekend we were able to have at the house so my priority was focused on getting my family situated in the new temporary residence. This caused me to only have time to get the MVP of the program and not have any time to work on an actual design.

I plan on continuing this project once we are done with our final project starting next week. I have a few things I would like to still add and I would also like to be able to add a picture into the database so it will display. Angular has been a fun experience and the more I use the more I enjoy it. I look forward to applying Angular in the final project with my group. 
