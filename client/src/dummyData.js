const bandland = {
  name: "Bandland",
  jobTitle: "software engineer",
  techs: [
    "PostgreSQL",
    "Node",
    "AWS"
  ],
  description: "Legacy back-end codebase of app used for streaming albums, along with displaying album art, artist info, comments, and recommendations",
  bullets: [
    "Scaled a legacy database and Express API to handle web scale traffic (~10M database entries; 100 RPS)",
    "Improved request latency by 100% by load balancing with nginx",
    "Optimized static asset compression and delivery, taking Google PageSpeed score from 6 to 100",
    "Utilized agile workflow to complete individual and team deliverables, meeting or exceeding deadlines and quality standards"
  ]
}

const cinetix = {
  name: "Cinetix",
  jobTitle: "software engineer",
  techs: [
    "React",
    "Node",
    "MongoDB"
  ],
  description: "Single-page app to display local showtimes, rating and synopsis info, associated videos, and cast/crew for a given movie",
  bullets: [
    "Designed and executed a React JS architecture with modularity & reusability as top priorities",
    "Built proxy server in Node JS to facilitate a service-oriented architecture; structured an API and service and deployed it to Amazon EBS",
    "Coordinated with a team of fellow engineers to ensure smooth service integration and met deadlines using agile workflow & frequent github PRs"
  ]
}

const jerry = {
  name: "Jerry the Giraffe",
  jobTitle: "software engineer",
  techs: [
    "React",
    "Node",
    "AWS"
  ],
  description: "Children’s book adapted to a ‘choose your own adventure’ app, featuring branching stories, multiple endings, and an inventory system",
  bullets: [
    "Implemented React Hooks for all state management",
    "Conceived and executed a modular ‘scene’ building system to facilitate cleanly organized decision trees",
    "Deployed via Express server on Amazon EC2 instance"
  ]
}

console.log(JSON.stringify([bandland, cinetix, jerry]));
module.exports = JSON.stringify([bandland, cinetix, jerry]);