import { useState } from 'react'
import { Input } from './Input'
import { Button } from './Button'

import AddressInfoService, { Address } from './service/getAddressInfos'

import './styles.css'

export const AddressInfoGrabber = () => {
  const [cep, setCep] = useState('')
  const [address, setAddress] = useState<Address | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const service = new AddressInfoService()

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCep(event.target.value)
  }

  const handleButtonClick = async () => {
    setIsLoading(true)
    try {
      const responseAddress = await service.GetAddressInfo(cep)
      setAddress(responseAddress)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setAddress(null)
      alert(
        'Ocorreu um erro interno. Por favor, verifique se o CEP está correto e tente novamente.',
      )
    }
  }

  return (
    <section className='AddressInfoGrabber'>
      <div className='AddressInfoGrabber_formContainer'>
        <Input
          placeholder='Digite seu CEP'
          mask='99999-999'
          onChange={handleInputChange}
        />
        <Button
          disabled={cep === '' ? true : false}
          title={isLoading ? 'Consultando...' : 'Consultar CEP'}
          onClick={handleButtonClick}
        />
      </div>
      {address && !address.erro && (
        <div className='AddressInfoGrabber_response'>
          <p>
            <b>Bairro:</b> {address.bairro}
          </p>
          <p>
            <b>CEP:</b> {address.cep}
          </p>
          <p>
            <b>Complemento:</b> {address.complemento}
          </p>
          <p>
            <b>Localidade:</b> {address.localidade}
          </p>
          <p>
            <b>Logradouro:</b> {address.logradouro}
          </p>
          <p>
            <b>UF:</b> {address.uf}
          </p>
        </div>
      )}

      {address?.erro && (
        <div className='AddressInfoGrabber_error'>
          <strong>Cep inválido, ou inexistente.</strong>
        </div>
      )}
    </section>
  )
}
