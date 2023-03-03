import axios from 'axios'

export type Address = {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  erro?: boolean
}

export default class AddressInfoService {
  private url = {
    address: 'https://viacep.com.br/ws',
  }

  public async GetAddressInfo(cep: string): Promise<Address> {
    const response = await axios.get<Address>(
      `${this.url.address}/${cep}/json/`,
    )

    return response.data
  }
}
