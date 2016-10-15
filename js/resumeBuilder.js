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

var work = {
    "jobs":[
        {
            "employer": "University of South Carolina",
            "title": "research assistant",
            "dates": 2011,
            "description": "teaching courses, teaching labs"
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

// function
function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        // concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}
