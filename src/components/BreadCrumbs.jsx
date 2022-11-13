import { HomeIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import clsx from 'clsx'

// const pages = [
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Project Nero', href: '#', current: true },
// ]

const useBreadcrumbs = () => {
  const router = useRouter()
  const { pathname } = router
  const paths = pathname.split('/').filter((path) => path !== '')
  const pages = paths.map((path, index) => {
    const href = `/${paths.slice(0, index + 1).join('/')}`
    const name = path.charAt(0).toUpperCase() + path.slice(1)
    const current = index === paths.length - 1
    return { name, href, current }
  })
  return pages
}

export default function BreadCrumbs() {
  const pages = useBreadcrumbs()

  let [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true })
    }
  }, [])

  return (
    <div
      className={clsx(
        'sticky top-[76px] z-10  px-4 py-2 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8',
        isScrolled
          ? 'dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75'
          : 'dark:bg-transparent',
        isScrolled
          ? 'backdrop-blur [@supports(backdrop-filter:blur(0))]:bg-slate-300/75'
          : 'bg-slate-200'
      )}
    >
      <div className="mx-auto flex max-w-8xl sm:px-2 lg:px-8 xl:px-12">
        <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            {pages.map((page) => (
              <li key={page.name}>
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-slate-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                  <a
                    href={page.href}
                    className="ml-4 text-sm font-medium text-gray-500 hover:text-sky-500"
                    aria-current={page.current ? 'page' : undefined}
                  >
                    {page.name}
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  )
}
