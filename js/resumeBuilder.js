/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name" : "Haorui Wu",
    "role" : "Software Engineer",
    "contacts" : {
        "mobile": "(803)318-4628",
        "email": "haoruiw@andrew.cmu.edu",
        "github": "srxiaoj",
    },
    "welcomeMessage": "my heart is in the work",
    "skills": [
        "awesomeness", "web service", "cloud computing"
    ]
}

var education = {
    "schools":[
        {
            "name": "Carnegie Mellon University",
            "city": "Pittsburgh, PA",
            "degree": "Masters",
            "majors:": ["Computer Science"],
            "dates": 2015
        },
        {
            "name": "University of South Carolina",
            "city": "Columbia, SC",
            "degree": "PhD",
            "majors:": ["Physical Chemistry", "Computer Science"],
            "dates": 2010
        }
    ]
}

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkills);
    formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkills);
}
