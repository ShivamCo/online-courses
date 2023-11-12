import { courseModel } from "../model/courseModel.js"

import express from "express"

const router = express.Router()

const course = [
    {
      "courseName": "Mystery Unveiled",
      "instructor": "Dr. John Smith",
      "description": "An introduction to the world of mystery",
      "enrollmentStatus": "Open",
      "thumbnail": "https://example.com/course1_thumbnail.jpg",
      "duration": "8 weeks",
      "schedule": "Tuesdays and Thursdays, 5:00 PM - 7:00 PM",
      "location": "Mystery Hall, Room 101",
      "prerequisites": ["Curiosity"],
      "syllabus": [
        {
          "week": 1,
          "topic": "Unlocking the Secrets",
          "content": "Introduction to the course and the mysterious world."
        },
        {
          "week": 2,
          "topic": "Cryptic Codes",
          "content": "Deciphering cryptic codes and messages."
        },
        {
          "week": 3,
          "topic": "Conspiracy Theories",
          "content": "Exploring famous conspiracy theories and their mysteries."
        },
        {
          "week": 4,
          "topic": "Haunted Histories",
          "content": "Investigating haunted histories and paranormal phenomena."
        },
        {
          "week": 5,
          "topic": "Case Studies in Enigma",
          "content": "Analyzing real-life enigmatic cases and puzzles."
        },
        {
          "week": 6,
          "topic": "Unveiling the Unknown",
          "content": "Strategies for unveiling the unknown and solving mysteries."
        },
        {
          "week": 7,
          "topic": "Supernatural Phenomena",
          "content": "Exploring supernatural phenomena and their cultural impact."
        },
        {
          "week": 8,
          "topic": "Final Mystery Project",
          "content": "Working on a final mystery project and presentation."
        }
      ],
      "students": []
    },
    {
      "courseName": "The Art of Imagination",
      "instructor": "Prof. Emily Johnson",
      "description": "A journey into the art of imagination",
      "enrollmentStatus": "Open",
      "thumbnail": "https://example.com/course2_thumbnail.jpg",
      "duration": "10 weeks",
      "schedule": "Mondays and Wednesdays, 6:30 PM - 8:30 PM",
      "location": "Imagination Studio, Room 202",
      "prerequisites": ["Creativity"],
      "syllabus": [
        {
          "week": 1,
          "topic": "The Power of Imagination",
          "content": "Exploring the significance of imagination in various aspects of life."
        },
        {
          "week": 2,
          "topic": "Creative Thinking Techniques",
          "content": "Developing and applying creative thinking techniques."
        },
        {
          "week": 3,
          "topic": "Imagination in Art and Literature",
          "content": "Analyzing the role of imagination in art and literature."
        },
        {
          "week": 4,
          "topic": "Imagining the Future",
          "content": "Exploring futuristic visions and speculative imagination."
        },
        {
          "week": 5,
          "topic": "Imagination and Innovation",
          "content": "Understanding how imagination drives innovation and progress."
        },
        {
          "week": 6,
          "topic": "Cultivating Personal Imagination",
          "content": "Practical exercises for cultivating and expanding personal imagination."
        },
        {
          "week": 7,
          "topic": "Imagination Across Cultures",
          "content": "Examining cultural variations in the perception and use of imagination."
        },
        {
          "week": 8,
          "topic": "Final Creative Project",
          "content": "Creating and presenting a final imaginative project."
        },
        {
          "week": 9,
          "topic": "Imagination in Technology",
          "content": "Exploring the role of imagination in technological advancements."
        },
        {
          "week": 10,
          "topic": "Reflection and Discussion",
          "content": "Reflecting on the journey and discussing the impact of imagination on personal and societal levels."
        }
      ],
      "students": []
    },
    {
      "courseName": "Exploring the Cosmos",
      "instructor": "Dr. Olivia Turner",
      "description": "Embark on a journey through the cosmos and unravel the mysteries of the universe",
      "enrollmentStatus": "Open",
      "thumbnail": "https://example.com/course3_thumbnail.jpg",
      "duration": "12 weeks",
      "schedule": "Wednesdays, 7:00 PM - 9:00 PM",
      "location": "Astronomy Hall, Room 301",
      "prerequisites": ["Basic Physics", "Curiosity"],
      "syllabus": [
        {
          "week": 1,
          "topic": "Introduction to the Cosmos",
          "content": "Overview of the universe, galaxies, and cosmic structures."
        },
        {
          "week": 2,
          "topic": "Stellar Evolution",
          "content": "Understanding the life cycle of stars and their impact on the cosmos."
        },
        {
          "week": 3,
          "topic": "Exoplanets and Alien Worlds",
          "content": "Exploring the discovery of exoplanets and the possibility of alien life."
        },
        {
          "week": 4,
          "topic": "Black Holes and Wormholes",
          "content": "Diving into the mysterious realms of black holes and theoretical wormholes."
        },
        {
          "week": 5,
          "topic": "Cosmic Mysteries",
          "content": "Investigating unresolved cosmic mysteries and unsolved questions in astrophysics."
        },
        {
          "week": 6,
          "topic": "Cosmic Collisions",
          "content": "Exploring the impact of cosmic collisions on the evolution of the universe."
        },
        {
          "week": 7,
          "topic": "Dark Matter and Dark Energy",
          "content": "Understanding the enigmatic dark matter and dark energy in the cosmos."
        },
        {
          "week": 8,
          "topic": "Astrobiology",
          "content": "Examining the possibilities of life beyond Earth and the search for extraterrestrial intelligence."
        },
        {
          "week": 9,
          "topic": "The Future of Space Exploration",
          "content": "Discussing upcoming space missions and the future of human exploration in space."
        },
        {
          "week": 10,
          "topic": "Cosmic Phenomena in Popular Culture",
          "content": "Analyzing the representation of cosmic phenomena in movies, literature, and art."
        },
        {
          "week": 11,
          "topic": "Interactive Observatory Session",
          "content": "Visiting an observatory for an interactive session on observing celestial objects."
        },
        {
          "week": 12,
          "topic": "Final Cosmic Project",
          "content": "Working on a final cosmic project and presenting findings to the class."
        }
      ],
      "students": []
    },
    {
      "courseName": "Digital Marketing Strategies",
      "instructor": "Prof. Sarah Davis",
      "description": "Master the art and science of digital marketing strategies",
      "enrollmentStatus": "Open",
      "thumbnail": "https://example.com/course4_thumbnail.jpg",
      "duration": "6 weeks",
      "schedule": "Fridays, 3:00 PM - 5:00 PM",
      "location": "Marketing Hub, Room 201",
      "prerequisites": ["Basic Marketing Knowledge"],
      "syllabus": [
        {
          "week": 1,
          "topic": "Introduction to Digital Marketing",
          "content": "Overview of digital marketing channels, platforms, and strategies."
        },
        {
          "week": 2,
          "topic": "Content Marketing",
          "content": "Crafting and implementing effective content marketing strategies."
        },
        {
          "week": 3,
          "topic": "Social Media Marketing",
          "content": "Utilizing social media platforms for brand promotion and audience engagement."
        },
        {
          "week": 4,
          "topic": "Search Engine Optimization (SEO)",
          "content": "Optimizing websites for search engines to improve online visibility."
        },
        {
          "week": 5,
          "topic": "Paid Advertising",
          "content": "Creating and managing successful paid advertising campaigns on digital platforms."
        },
        {
          "week": 6,
          "topic": "Analytics and Performance Measurement",
          "content": "Analyzing and interpreting digital marketing data for continuous improvement."
        }
      ],
      "students": []
    },
    {
      "courseName": "Mobile App Development Workshop",
      "instructor": "Dr. Christopher Miller",
      "description": "Hands-on experience in building mobile applications for iOS and Android",
      "enrollmentStatus": "Open",
      "thumbnail": "https://example.com/course5_thumbnail.jpg",
      "duration": "8 weeks",
      "schedule": "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
      "location": "App Development Lab, Room 301",
      "prerequisites": ["Programming Fundamentals", "Basic Understanding of Mobile Devices"],
      "syllabus": [
        {
          "week": 1,
          "topic": "Introduction to Mobile App Development",
          "content": "Overview of mobile app development platforms, tools, and technologies."
        },
        {
          "week": 2,
          "topic": "Android Development with Kotlin",
          "content": "Building Android applications using the Kotlin programming language."
        },
        {
          "week": 3,
          "topic": "iOS Development with Swift",
          "content": "Creating iOS applications using the Swift programming language."
        },
        {
          "week": 4,
          "topic": "Cross-Platform Development with React Native",
          "content": "Developing cross-platform mobile apps using React Native framework."
        },
        {
          "week": 5,
          "topic": "Mobile App Design Principles",
          "content": "Exploring user interface and experience design for mobile applications."
        },
        {
          "week": 6,
          "topic": "Testing and Debugging",
          "content": "Implementing testing and debugging strategies for mobile app development."
        },
        {
          "week": 7,
          "topic": "Deploying and Publishing",
          "content": "Deploying and publishing mobile apps to app stores and platforms."
        },
        {
          "week": 8,
          "topic": "Final App Development Project",
          "content": "Working on a final mobile app development project and presentation."
        }
      ],
      "students": []
    },
    {
      "courseName": "Artificial Intelligence Ethics",
      "instructor": "Prof. Rachel Carter",
      "description": "Exploring the ethical implications of artificial intelligence and machine learning",
      "enrollmentStatus": "Open",
      "thumbnail": "https://example.com/course6_thumbnail.jpg",
      "duration": "8 weeks",
      "schedule": "Wednesdays, 6:30 PM - 8:30 PM",
      "location": "Ethics and Technology Center, Room 102",
      "prerequisites": ["Ethics in Technology", "Basic Knowledge of AI"],
      "syllabus": [
        {
          "week": 1,
          "topic": "Introduction to AI Ethics",
          "content": "Understanding the ethical considerations in artificial intelligence and machine learning."
        },
        {
          "week": 2,
          "topic": "Fairness and Bias in AI",
          "content": "Exploring issues of fairness, bias, and discrimination in AI algorithms."
        },
        {
          "week": 3,
          "topic": "Transparency and Accountability",
          "content": "Examining the importance of transparency and accountability in AI systems."
        },
        {
          "week": 4,
          "topic": "Privacy and Security Concerns",
          "content": "Addressing privacy and security challenges associated with AI technologies."
        },
        {
          "week": 5,
          "topic": "Autonomous Systems and Decision-Making",
          "content": "Ethical considerations in the development and deployment of autonomous systems."
        },
        {
          "week": 6,
          "topic": "Social Impacts of AI",
          "content": "Analyzing the social impacts and implications of widespread AI adoption."
        },
        {
          "week": 7,
          "topic": "Legal and Regulatory Frameworks",
          "content": "Understanding legal and regulatory frameworks for AI ethics."
        },
        {
          "week": 8,
          "topic": "Final Ethical AI Project",
          "content": "Working on a final project addressing ethical challenges in AI development and deployment."
        }
      ],
      "students": []
    }]




router.get("/data", async (req, res) => {

    try {
        // await courseModel.deleteMany()
        // await courseModel.insertMany(course) 
    res.json(await courseModel.find())
    console.log("done")
    } catch (e) {
    console.log(e.message)
    }




})

export {router as allCourseData}
