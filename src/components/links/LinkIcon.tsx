import type { LinkIconName } from '../../links/types'

type LinkIconProps = {
  name: LinkIconName
}

export function LinkIcon({ name }: LinkIconProps) {
  return (
    <svg className="aureo-link__icon" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      {iconPath(name)}
    </svg>
  )
}

function iconPath(name: LinkIconName) {
  switch (name) {
    case 'guide':
      return (
        <path
          d="M7 4.5h8.2A2.8 2.8 0 0 1 18 7.3v12.2L12 16.7l-6 2.8V7.3A2.8 2.8 0 0 1 8.8 4.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      )
    case 'method':
      return (
        <path
          d="M5 17.5 12 4.5l7 13M8.2 12.2h7.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )
    case 'library':
      return (
        <path
          d="M5 5.5v13M9.5 5.5v13M14.2 5.5 19 18.5M5 18.5h14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      )
    case 'series':
      return (
        <path
          d="M6 7.5h12v10.5H6zM9 7.5V6.2A1.7 1.7 0 0 1 10.7 4.5h2.6A1.7 1.7 0 0 1 15 6.2V7.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      )
    case 'home':
      return (
        <path
          d="M4.5 11.2 12 4.8l7.5 6.4V19a1 1 0 0 1-1 1h-4.2v-5.2H9.7V20H5.5a1 1 0 0 1-1-1z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      )
    case 'journeys':
      return (
        <path
          d="M5 18.5c2.4-1.2 4.2-3.8 7-3.8s4.6 2.6 7 3.8M12 14.7V5.2m0 0 3.2 2.4M12 5.2 8.8 7.6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )
    case 'youtube':
      return (
        <path
          d="M5.8 7.2h12.4A2.2 2.2 0 0 1 20.4 9.4v5.2a2.2 2.2 0 0 1-2.2 2.2H5.8A2.2 2.2 0 0 1 3.6 14.6V9.4A2.2 2.2 0 0 1 5.8 7.2Zm5 2.4 5 2.6-5 2.6z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      )
    case 'contact':
      return (
        <path
          d="M5 7.2h14v10.1H5zM5 7.2l7 5.4 7-5.4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      )
  }
}
