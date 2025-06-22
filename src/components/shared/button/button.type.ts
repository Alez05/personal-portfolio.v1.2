export type ButtonType = {
  href?: string
  variant?: 'solid' | 'outline'
  target?: '_blank' | '_self' | '_parent' | '_top'
  rel?: string
  className?: string
  children?: React.ReactNode
}
