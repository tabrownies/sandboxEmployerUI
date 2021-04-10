const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

function Applicant(name, school, major, gpa) {
    this.name = name;
    this.school = school;
    this.major = major;
    this.gpa = gpa;
};
let applicants = [];
applicants.push(
    new Applicant("Timothy Brown", "Brigham Young University", "Math", 3.56)
);
applicants.push(
    new Applicant("Carter Nelson", "University of Utah", "Finance", 3.94)
);
applicants.push(
    new Applicant("Joshua Brown", "Brigham Young University", "Math", 3.2)
);
applicants.push(
    new Applicant("John Carver", "Utah State University", "Finance", 3.74)
);
applicants.push(
    new Applicant(
        "Ryan Ham",
        "Brigham Young University",
        "Information Systems",
        3.66
    )
);
applicants.push(
    new Applicant(
        "Chris Crittenden",
        "Utah Valley University",
        "Middle-Eastern Studies",
        2.2
    )
);
applicants.push(
    new Applicant(
        "Preston Hunter",
        "Brigham Young University",
        "Computer Science",
        4.0
    )
);
applicants.push(
    new Applicant("Adam Sandler", "University of Utah", "Acting", 4.0)
);
applicants.push(
    new Applicant(
        "Ben Whatcott",
        "Brigham Young University",
        "Applied and Computational Mathematics",
        3.56
    )
);
applicants.push(
    new Applicant(
        "Thomas Andrews",
        "University of Utah",
        "Mechanical Engineering",
        3.94
    )
);
app.get('/api/', async (req, res) => {
    console.log("hi");
    res.send(applicants);
    
});
app.post('/api/', async (req, res) => {
    console.log("please work");
    try {
        let applicant = new Applicant(req.body.name, req.body.school, req.body.major, req.body.gpa);
        applicants.push(applicant);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }


});

app.listen(5000, () => console.log("Listening on port 5000!"));