import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import huboWeb from './../huboweb.png'
import xsport from './../xsport.png'
import askaii from './../askaii.png'
import dashboard from './../dashboard_askaii.png'

const projects = [
  {
    id: 1,
    name: 'HuboWeb',
    imageSrc: huboWeb,
    href: 'https://huboweb.com/',
    used: 'ReactJS, Bootstrap',
    description: 'A portfolio for the company.',
    flip: 'flip-left',
  },
  {
    id: 2,
    name: 'Xsport',
    imageSrc: xsport,
    href: 'https://xsports.huboweb.com/',
    used: 'ReactJS, TailwindCSS',
    description: 'An online shopping website.',
    flip: 'flip-right',
  },
  {
    id: 3,
    name: 'Askaii Car Parking',
    imageSrc: askaii,
    href: 'https://askaii.co.uk/',
    used: 'ReactJS, Bootstrap',
    description: 'A Car Parking website.',
    flip: 'flip-left',
  },
  {
    id: 4,
    name: 'Dashboard for Askaii',
    href: 'https://dashboard.askaii.co.uk/',
    imageSrc: dashboard,
    used: 'ReactJS, Bootstrap',
    description: 'Dashboard for the Car Parking website',
    flip: 'flip-right',
  },
]

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <div id="projects">
      <div className="mx-auto max-w-2xl px-6 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg leading-7">Browse my recent</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
          Projects
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative ring-2 ring-base-300 bg-base-200 rounded-2xl shadow-xl"
              data-aos={
                project.flip === 'flip-left' ? 'flip-left' : 'flip-right'
              }
            >
              <div className="relative h-64 overflow-y-scroll scrollbar-hide rounded-md rounded-t-2xl">
                <img
                  src={project.imageSrc}
                  alt={project.name}
                  className="w-full object-contain"
                />

                <button className="fixed top-[45%] left-[45%] border-2 font-bold text-2xl text-black animate-bounce  border-black rounded-full w-10 h-10">
                  ↓
                </button>
              </div>

              <div className="mt-4 flex justify-between p-4">
                <div className="p-4">
                  <h3 className="text-lg font-bold">
                    <a href={project.href}>
                      <span aria-hidden="true" className="absolute" />
                      {project.name}
                    </a>
                  </h3>
                  <p className="mt-1 mb-5 text-sm">{project.description}</p>
                  <p className="text-sm font-medium">{project.used}</p>
                </div>
              </div>
              <a
                href={project.href}
                target="_blank"
                className="text-sm font-medium absolute right-2 bottom-2 animate-pulse"
                rel="noreferrer"
              >
                Visit Here!
              </a>
            </div>
          ))}
        </div>
        {/* <div className="mt-16 flex justify-center">
          <button className="btn btn-outline">View More</button>
        </div> */}
      </div>
    </div>
  )
}
