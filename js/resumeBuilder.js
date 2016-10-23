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
            "location": "Columbia, SC"
        },
        {
            "employer": "Tiversa",
            "title": "Software Engineer",
            "dates": "2016",
            "description": "engineer",
            "location": "Pittsburgh, PA"
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "Mutual Fund Web Application and Web Service",
            "dates": "May. 2016",
            "description": "Built a mutual fund management system for mutual fund transactions."
        },
        {
            "title": "Twitter Analytics Web Service",
            "dates": "Apr. 2016",
            "description": "Deployed a web service for analyzing 1TB raw Twitter data."
        },
        {
            "title": "Cloud Storage",
            "dates": "Feb. 2016",
            "description": "Deployed multiple coordinators to handle data read/write and replication/sharding on distributed key-value stores."
        }
    ]
}

bio.display = function () {
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
}

bio.display();

function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        // concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

displayWork();

/*$("#main").append(internationalizeButton);
 function inName(name_obj) {
 var newName = name_obj.trim().split(" ");
 var firstName = newName[0][0].toUpperCase() + newName[0].slice(1);
 var lastName = newName[1].toUpperCase();
 return firstName + " " + lastName;
 }*/

projects.display = function () {
    for (i in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry:last").append(formattedDescription);

        /*if (projects.projects[i].images.length > 0) {
            for (image in projects.projects[i].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }*/
    }
}
projects.display();


education.display = function () {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedCity = HTMLschoolLocation.replace("%data%", education.schools[school].city);
        $(".education-entry:last").append(formattedCity);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedName);

        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedDegree);

        // var major = HTMLschoolDegree.replace("%data%",education.schools[school].majors);

        var formattedDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDate);
    }
}
education.display();

$("#mapDiv").append(googleMap);