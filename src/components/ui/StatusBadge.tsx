type StatusBadgeProps = {
  children: string
  size?: 'sm' | 'md'
}

export function StatusBadge({ children, size = 'md' }: StatusBadgeProps) {
  return <span className={`status-badge status-badge--${size}`}>{children}</span>
}
