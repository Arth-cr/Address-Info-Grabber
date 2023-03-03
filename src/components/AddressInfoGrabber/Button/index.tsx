import './styles.css'

interface ButtonProps {
  title: string
  disabled: boolean
  onClick: () => void
}

export const Button = ({ onClick, title, disabled }: ButtonProps) => {
  return (
    <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      className={`${
        disabled ? 'ButtonComponentDisabled' : 'ButtonComponentAbled'
      } ButtonComponent`}
    >
      {title}
    </button>
  )
}
