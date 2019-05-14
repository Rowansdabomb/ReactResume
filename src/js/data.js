import { images } from "../images/image-data"

const sections = {
  PERSONAL_PROJECTS: "personal projects",
  EXPERIENCE: "experience",
  UBC_PROJECTS: "ubc projects",
  GUITARS: "guitars",
  EDUCATION: "education",
  PROFICIENCIES: "proficiencies"
}

const subSections = {
  DRAW_PROJECTOR: "draw projector",
  GRAVITY: "gravity",
  SMART_LINK: "SmartLink",
  OCTO_COMPARE: "octocompare",
  GRADEABLE: "gradeable",
  UBYSSEY: "The Ubyssey",
  TRIUMF: "triumf",
  BAKER_FRENCH_PROPS: "baker french props",
  HAPTIC_FEEDBACK: "Haptic Feedback System",
  MAGENTIC_TETHER_CAR: "Magnetic Tether Car",
  VEX_ROBOT: "Vex Robot",
  ACOUSTIC: "acoustic",
  ELECTRIC: "electric",
  CPLUSPLUS: "C/C++",
  PYHTON: "Python",
  HTML: "HTML + CSS",
  JAVASCRIPT: "Javascript",
  SOLIDWORKS: "SolidWorks",
  ADOBE_SUITE: "Adobe Suite",
  UBC: "University of British Columbia",
  UVIC: "University of Victoria"
}


const sectionData = {
  sections: [
    {
      title: sections.PERSONAL_PROJECTS,
      subSections: [
        {
          title: subSections.DRAW_PROJECTOR,
          url: "https://github.com/Rowansdabomb/ProjectorProject",
          startDate: "Fri May 3 2019",
          endDate: null,
          role: "Software",
          content: [
            "TODO",    
          ]
        },
        {
          title: subSections.GRAVITY,
          url: 'https://gravity-game-production.herokuapp.com/',
          startDate: "Tue Feb 12 2019",
          endDate: null,
          role: "Software",
          content: [
            "TODO, may take a while to load",    
          ]
        },
        {
          title: subSections.SMART_LINK,
          url: 'https://github.com/Rowansdabomb/smartLink',
          startDate: "Jul 13 2018",
          endDate: null,
          role: "Software",
          content: [
            "I worked with a team to build a car controlled wirelessly by a magnetic field. We created a transmitter and receiver using inductors, and transmitted data via magnetic pulses controlled by a microcontroller bit banger.",    
          ]
        },
        {
          title: subSections.OCTO_COMPARE,
          url: 'https://chrome.google.com/webstore/detail/github-toggle-pr-changes/pmejgackibjplnamahijhlbbjbjmhpph',
          startDate: "Oct 22 2018",
          endDate: null,
          role: "Software",
          content: [
            "A chrome extension that adds a button to toggle visibility of github pull requests changes. Quickly see how the changes will look after the PR is accepted. It also adds a small menu to select file extensions to collapse or show."    
          ]
        },
        {
          title: subSections.GRADEABLE,
          url: 'https://github.com/Rowansdabomb/gradeable',
          startDate: "Jan 15 2018",
          endDate: null,
          role: "Software",
          content: [
            "A free for use alternative to scantron. Use the online test builder to make multiple choice exams. Snap a picture or scan the filled out exams and upload them to the gradeable site to have the exam graded. Currently not available, but checkout out the source code on github by clicking the title!"    
          ]
        },
      ]
    },
    {
      title: sections.EXPERIENCE,
      subSections: [
        {
          title: subSections.UBYSSEY,
          url: "https://www.ubyssey.ca/",
          startDate: "Mon May 7 2018",
          endDate: "Tue Apr 30 2019",
          role: "Full Stack Engineer",
          content: [
            "TODO",    
          ]
        },
        {
          title: subSections.TRIUMF,
          url: "https://www.triumf.ca/",
          startDate: "Mon Jan 5 2015",
          endDate: "Fri May 1 2015",
          role: "Research Assistant",
          content: [
            "TRIUMF is Canada's national laboratory for particle and nuclear physics and accelerator-based science. I worked with a team of engineers and physicsts to build EMMA (Electromagnetic Mass Analyzer), a recoil mass spectrometer in the ISAC II facility.",
            "I was primarilly in charge of refining the polishing methods for hundreds of internal electrostic components, which signifcantly increased project efficiency and cost savings. Further tasks included investigating faulty equipment, installing heavy fragile components, component stress testing, and scientific research.",    
          ]
        },
        {
          title: subSections.BAKER_FRENCH_PROPS,
          url: null,
          startDate: "Jan 1 2015",
          endDate: "Apr 30 2015",
          role: "Construction and Design",
          content: [
            "Co-architected an aesthtic entryway to my family home. The entrance is a 200 square foot semi-circular room with a partially conical roof. I implemented the design with CAD software and generated e-drawings to fabricate the more intricate parts. This included an exposed central steel hub from which the radial rafters hang from.",
            "I also created a to scale model of the house to draw blueprints from for future remodel projects."    
          ]
        },
      ]
    },
    {
      title: sections.UBC_PROJECTS,
      subSections: [
        {
          title: subSections.HAPTIC_FEEDBACK,
          url: null,
          startDate: "Mon Sep 5 2016",
          endDate: "Fri Apr 28 2017",
          role: "Team lead",
          content: [
            "I lead a team of fourth year engineers to develop a haptic feedback system codenamed &quot;Descartes&quot;. I designed and built two linear motors from scratch and optimized them for maximum force output and response time. I designed and implemented a 2D user input grid with a joystick that is controlled by two linear motors. I designed and 3D printed two precision optical encoders. I co-developed arduino based software to control the haptic mechanism. I also developed a python based gui to control the haptic system and show the realtime positon of the joystick graphically. Checkout my github for the complete code and part files needed to rebuild the very same machine yourself!",    
          ]
        },
        {
          title: subSections.MAGENTIC_TETHER_CAR,
          url: null,
          startDate: "Mon Sep 7 2015",
          endDate: "Fri Apr 29 2016",
          role: "Lead Programmer",
          content: [
            "I worked with a team to build a car controlled wirelessly by a magnetic field. We created a transmitter and receiver using inductors, and transmitted data via magnetic pulses controlled by a microcontroller bit banger.",    
          ]
        },
        {
          title: subSections.VEX_ROBOT,
          url: null,
          startDate: "Mon Sep 9 2013",
          endDate: "Fri Apr 25 2014",
          role: "Software and Mechanical Designer",
          content: [
            "I was the lead programmer and mechanical designer of a VEX robot capable of <q>neutralizing</q> a source of infrared radiation. I constructed the infrared sensors and programmed the robot to track the source. I also designed and built the robotic arm used to grab the source for removal.",    
          ]
        },
      ]
    },
    {
      title: sections.GUITARS,
      subSections: [
        {
          title: subSections.ACOUSTIC,
          url: 'http://dragonflyguitars.com/wp/',
          startDate: "Mon Sep 1 2010",
          endDate: "Fri Mar 30 2012",
          role: "Designer and Woodworker",
          content: [
            "I built my first acoustic guitar in 2010 by my own design under the supervision of the masterful Dan Richter at Dragonfly Guitars.",    
          ]
        },
        {
          title: subSections.ELECTRIC,
          url: 'http://essweb.sd46.bc.ca/',
          startDate: "Mon Sep 7 2015",
          endDate: "Fri Apr 29 2016",
          role: "Designer and Woodworker",
          content: [
            "I am currently building an electric guitar that is heavily influenced by the Telecaster design. I developed my custom neck and body shape using solidworks and produced it with a CNC machine. This project was inpart to help develop a template for highschool students to make their own guitars at the Elphinstone Secondary School woodshop.",    
          ]
        }
      ]
    },
    {
      title: sections.EDUCATION,
      subSections: [
        {
          title: subSections.UBC,
          url: "https://www.ubc.ca/",
          startDate: "Mon Sept 7 2015",
          endDate: "Fri Apr 26 2019",
          role: "Electrical Engineering",
          content: [
            "Special interest in embedded programming, quantum computing, computer architecture, and software."
          ]
        }, 
        {
          title: subSections.UVIC,
          url: "https://www.uvic.ca/",
          startDate: "Mon Sept 7 2013",
          endDate: "Fri Aug 30 2015",
          role: "Engineering",
          content: [
            "Two years preliminary study in both electrical and mechanical engineering before transferring to UBC."
          ]
        }, 
      ]
    },
    {
      title: sections.PROFICIENCIES,
      subSections: [
        {
          title: subSections.CPLUSPLUS,
          width: 50
        },
        {
          title: subSections.PYHTON,
          width: 60
        },
        {
          title: subSections.HTML,
          width: 80
        },
        {
          title: subSections.JAVASCRIPT,
          width: 70
        },
        {
          title: subSections.SOLIDWORKS,
          width: 80
        },
        {
          title: subSections.ADOBE_SUITE,
          width: 60
        }
      ]
    }
  ]
}

export { 
  sections,
  subSections,
  images,
  sectionData as webSiteData
}