const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Odisee University College',
                degree: 'Bachelor of Engineering, Computer Science',
                detail: "Bachelor's Degree in Computer Science from Odisee University College.",
                year: '04/2013-12/2015'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Symphony Solutions',
                role: 'Senior Software Engineer',
                url: 'no website',
                desc: 'Offered experience with Java, JavaScript, TypeScript, Angular, Docker and GCP.',
                year: '11/2022 - Present',
                location: 'Brussels, Belgium'
            },
            {
                id: 2,
                title: 'IT Test',
                role: 'Software Engineer',
                url: 'no website',
                desc: 'Launched internal order management system utilizing React.js and Node.js.',
                year: '03/2019 - 10/2022',
                location: 'Gent, Belgium'
            },
            {
                id: 3,
                title: 'PYCO',
                role: 'Junior Software Engineer',
                url: 'no website',
                desc: "Efficiently deployed and integrated software engineered by team and updated integration/deployment scripts to improve continuous integration practices.",
                year: '08/2016 - 02/2021',
                location: 'Brussels, Belgium'
            },
            {
                id: 4,
                title: 'Amazon',
                role: 'Software Engineer Intern',
                url: 'no website',
                desc: "Documented and tested new web applications in JavaScript.",
                year: '12/2015 - 07/2016',
                location: 'NY, New York'
            },


        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
