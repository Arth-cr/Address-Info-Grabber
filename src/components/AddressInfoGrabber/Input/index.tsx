import { useState } from 'react'
import './styles.css'
import InputMask from 'react-input-mask'

interface InputProps {
  mask: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ onChange, mask, placeholder }: InputProps) => {
  const [value, setValue] = useState('')

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
    onChange(e)
  }

  return (
    <InputMask
      className='InputComponent'
      type='text'
      placeholder={placeholder}
      value={value}
      mask={mask}
      onChange={handleInputChange}
    />
  )
}
