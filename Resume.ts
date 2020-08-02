interface experience {
    company: string;
    job: string;
    jobDesc: string;
}

interface skills {
    skill: string;
    cool: boolean;
}

interface resumeDescriptions {
    name: string;
    career: string;
    desc: string;
    interests: Array <string>;
    previousExperience: Array <experience>;
    mySkills: Array <skills>;
}

//All resume info here
let resumeDetails: resumeDescriptions = {
    name: "ibrahim zbib",
    career: "Aspiring Full Stack Engineer",
    desc: "I love soccer!",
    interests: [
        "Watching Soccer",
        "Stranger Things (TV Show)",
        "Family Time",
        "Traveling",
    ],
    previousExperience: [
        {
            company: "Macy's",
            job: "Software Engineer Intern",
            jobDesc:
                "converted greenscreen machines into restful webservices using Java Springboot Framework.",
        },
        {
            company: "CVS",
            job: "Cashier",
            jobDesc: "helped around the store.",
        },
        {
            company: "Georgia Soccer Program",
            job: "Referee",
            jobDesc: "refereed soccer games.",
        },
    ],
    mySkills: [
        {
            skill: "Euphonium",
            cool: false,
        },
        {
            skill: "Arabic",
            cool: true,
        },
        {
            skill: "Java",
            cool: true,
        },
        {
            skill: "C/C++",
            cool: false,
        },
        {
            skill: "JavaScript",
            cool: true,
        },
        {
            skill: "TypeScript",
            cool: true,
        },
    ],
};


//Name, Career, Description here
console.log(`Name: ${resumeDetails.name.toUpperCase()}`);
console.log(`Career: ${resumeDetails.career}`);
console.log(`Description: ${resumeDetails.desc}`);

//Interest here
console.log(`My Interests:`);
resumeDetails.interests.forEach((interest) => console.log(`* ${interest}`));

//Work History here
console.log(`My Previous Experience:`);
resumeDetails.previousExperience.forEach((experience) =>
    displayPosition(experience.company, experience.job, experience.jobDesc)
);

//Skills here
console.log(`My Skills:`);
resumeDetails.mySkills.forEach((mySkill) =>
    displaySkills(mySkill.skill, mySkill.cool)
);




function displayPosition(company: string, job: string, jobDesc: string): void {
    console.log(`* ${job} at ${company} and I ${jobDesc}`);
}

function displaySkills(skill: string, cool: boolean): void {
    console.log(`* ${cool ? "BAM: " + skill : skill}`);
}
