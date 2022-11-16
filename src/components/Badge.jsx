import clsx from 'clsx'

const sizes = {
  sm: 'px-2.5 py-0.5 text-xs',
  lg: 'px-3 py-0.5 text-sm',
}

const colors = {
  gray: 'bg-gray-100 text-gray-800',
  red: 'bg-red-100 text-red-800',
  yellow: 'bg-yellow-100 text-yellow-800',
  green: 'bg-green-100 text-green-800',
  blue: 'bg-blue-100 text-blue-800',
  indego: 'bg-indigo-100 text-indigo-800',
  purple: 'bg-purple-100 text-purple-800',
  pink: 'bg-pink-100 text-pink-800',
}

const shapes = {
  circle: 'rounded-full',
  square: 'rounded',
}

export function Badge({
  children,
  color = 'gray',
  size = 'sm',
  shape = 'circle',
}) {
  return (
    <span
      className={clsx(
        'inline-flex items-center font-medium',
        sizes[size],
        colors[color],
        shapes[shape]
      )}
    >
      {children}
    </span>
  )
}
