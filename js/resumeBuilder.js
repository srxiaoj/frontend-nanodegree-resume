/*
 This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Haorui Wu",
    "role": "Software Engineer",
    "contacts": {
        "mobile": "(803)318-4628",
        "email": "haoruiw@andrew.cmu.edu",
        "github": "srxiaoj",
        "twitter": "@hw",
        "location": "Pittsburgh, PA"
    },
    "welcomeMessage": "My heart is in the work ---- Andrew Carnegie",
    "skills": [
        "awesomeness", "web service", "cloud computing", "database"
    ],
    "bioPic": "images/fry.jpg"
}
var headerName = HTMLheaderName.replace("%data%", bio.name);
var headRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(headRole);
$("#header").prepend(headerName);

var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var email = HTMLemail.replace("%data%", bio.contacts.email);
var github = HTMLgithub.replace("%data%", bio.contacts.github);
var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var locat = HTMLlocation.replace("%data%", bio.contacts.location);
var welcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var bioPic = HTMLbioPic.replace("%data%", bio.bioPic);

$("#topContacts").append(mobile);
$("#topContacts").append(email);
$("#topContacts").append(github);
$("#topContacts").append(twitter);
$("#topContacts").append(locat);
$("#header").append(welcome);
$("#header").append(bioPic);


if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkills);
    }
}

var education = {
    "schools": [
        {
            "name": "Carnegie Mellon University",
            "city": "Pittsburgh, PA",
            "degree": "Masters",
            "majors:": ["Computer Science"],
            "dates": 2015,
            "url": "http:example.com"
        },
        {
            "name": "University of South Carolina",
            "city": "Columbia, SC",
            "degree": "PhD",
            "majors:": ["Physical Chemistry", "Computer Science"],
            "dates": 2010,
            "url": "http:example.com"
        }
    ],
    "onlineCourses": [
        {
            "title": "Javascript Basics",
            "schools": "Udacity",
            "dates": 2016,
            "url": "http:example.com"
        }
    ]
}

var work = {
    "jobs": [
        {
            "employer": "University of South Carolina",
            "title": "research assistant",
            "dates": "2011 - 2015",
            "description": "teaching courses, teaching labs",
            "location": "Columbia"
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "Tiversa - Mining the dark web",
            "dates": "Aug. 2016",
            "description": "Worked on a data set of 150GB meta data containing malware information such as IP, infection type, created date, file name,port number. Analyzed geographic and temporal malware statistics such as top infection types, top file count IP and etc."
        },
        {
            "title": "Twitter Analytics Web Service",
            "dates": "Apr. 2016",
            "description": "Deployed a web service for analyzing 1TB raw Twitter data. Web service includes a front end to serve web requests and a backend data storage system to serve different queries against the data."
        }
    ]
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

displayWork();

$("#main").append(internationalizeButton);
function inName(name_obj) {
    var newName = name_obj.trim().split(" ");
    var firstName = newName[0][0].toUpperCase() + newName[0].slice(1);
    var lastName = newName[1].toUpperCase();
    return firstName + " " + lastName;
}

projects.display = function () {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

$("#mapDiv").append(googleMap);