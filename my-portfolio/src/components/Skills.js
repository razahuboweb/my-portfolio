import { useEffect } from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import AOS from 'aos'
import 'aos/dist/aos.css'

const core = [
  {
    name: 'JavaScript',
    value: 90,
    icon: CheckCircleIcon,
  },
]
const frameWorks = [
  {
    name: 'HTML',
    value: 95,
    icon: CheckCircleIcon,
  },
  {
    name: 'CSS',
    value: 95,
    icon: CheckCircleIcon,
  },
  {
    name: 'React.js',
    value: 80,
    icon: CheckCircleIcon,
  },
  {
    name: 'Vue.js',
    value: 75,
    icon: CheckCircleIcon,
  },
  {
    name: 'Angualar.js',
    value: 70,
    icon: CheckCircleIcon,
  },
  {
    name: 'Next.js',
    value: 80,
    icon: CheckCircleIcon,
  },
  {
    name: 'Tailwind CSS',
    value: 80,
    icon: CheckCircleIcon,
  },
  {
    name: 'Bootstrap 5',
    value: 60,
    icon: CheckCircleIcon,
  },
  {
    name: 'Material UI',
    value: 60,
    icon: CheckCircleIcon,
  },
  {
    name: 'SASS',
    value: 60,
    icon: CheckCircleIcon,
  },
  {
    name: 'Styled Components',
    value: 60,
    icon: CheckCircleIcon,
  },
  {
    name: 'Chakra UI',
    value: 60,
    icon: CheckCircleIcon,
  },
]

const operatingSystem = [
  {
    name: 'Windows',
    value: 60,
    icon: CheckCircleIcon,
  },
  {
    name: 'Linux Ubuntu',
    value: 90,
    icon: CheckCircleIcon,
  },
]

const otherTechnologies = [
  {
    name: 'GIT',
    value: 50,
    icon: CheckCircleIcon,
  },
  {
    name: 'MongoDB',
    value: 60,
    icon: CheckCircleIcon,
  },
  {
    name: 'Node.js',
    value: 50,
    icon: CheckCircleIcon,
  },
  {
    name: 'Express.js',
    value: 40,
    icon: CheckCircleIcon,
  },
  {
    name: 'SQL',
    value: 40,
    icon: CheckCircleIcon,
  },
  {
    name: 'Firebase',
    value: 40,
    icon: CheckCircleIcon,
  },
]

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  return (
    <div className="lg:py-24 " id="skills">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl leading-7">Explore my</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
            Skills
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-y-10">
          <div
            className="mt-10 max-w-2xl sm:mt-10 lg:mt-10 lg:max-w-4xl bg-base-200 ring-2 ring-base-300 rounded-2xl p-5 shadow-xl "
            data-aos="zoom-in"
          >
            <p className="text-2xl text-center font-bold mb-6">
              Core Programming Languages
            </p>
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-6 lg:max-w-none lg:grid-cols-2 lg:gap-y-6">
              {core.map((core) => (
                <div key={core.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                      <core.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    {core.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7">
                    <progress
                      className="progress w-3/4"
                      value={core.value}
                      max="100"
                    ></progress>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div
            className="mt-10 max-w-2xl sm:mt-10 lg:mt-10 lg:max-w-4xl bg-base-200 ring-2 ring-base-300 rounded-2xl p-5 shadow-xl lg:h-[250px] lg:overflow-x-hidden lg:overflow-y-scroll"
            data-aos="zoom-in"
          >
            <p className="text-2xl text-center font-bold mb-6">
              Front-end Development{' '}
            </p>
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-6 lg:max-w-none lg:grid-cols-2 lg:gap-y-6">
              {frameWorks.map((frameWorks) => (
                <div key={frameWorks.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                      <frameWorks.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    {frameWorks.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7">
                    <progress
                      className="progress w-3/4"
                      value={frameWorks.value}
                      max="100"
                    ></progress>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div
            className="mt-10 max-w-2xl sm:mt-10 lg:mt-10 lg:max-w-4xl bg-base-200 ring-2 ring-base-300 rounded-2xl p-5 shadow-xl
            lg:h-[250px] lg:overflow-x-hidden lg:overflow-y-scroll
            "
            data-aos="zoom-in"
          >
            <p className="text-2xl text-center font-bold mb-6">
              Other Technologies
            </p>
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-6 lg:max-w-none lg:grid-cols-2 lg:gap-y-6">
              {otherTechnologies.map((os) => (
                <div key={os.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                      <os.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    {os.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7">
                    <progress
                      className="progress w-3/4"
                      value={os.value}
                      max="100"
                    ></progress>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div
            className="mt-10 max-w-2xl sm:mt-10 lg:mt-10 lg:max-w-4xl bg-base-200 ring-2 ring-base-300 rounded-2xl p-5 shadow-xl "
            data-aos="zoom-in"
          >
            <p className="text-2xl text-center font-bold mb-6">
              Operating Systems O/S
            </p>
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-6 lg:max-w-none lg:grid-cols-2 lg:gap-y-6">
              {operatingSystem.map((os) => (
                <div key={os.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg">
                      <os.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    {os.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7">
                    <progress
                      className="progress w-3/4"
                      value={os.value}
                      max="100"
                    ></progress>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
