## Chamando o block no StoreFront

No StoreFront da sua loja, você irá chamar o nome do seu App Custom dentro do manifest.json.

O nome do app será o vendor + nome + versão descritos dentro do manifest.json do próprio app, e ficará dessa forma `"vendordoapp.meu-app-custom": "0.x"`.

Após isso é só declara-lo com o mesmo nome que colocamos no `interfaces.json`, no caso `"nome-do-componente"`

Como por exemplo:

`  "store.custom#custom": {
    "blocks": ["flex-layout.row#bloco-custom"]
  },
  "flex-layout.row#bloco-custom": {
    "children": ["nome-do-componente"]
  },`

**Muito importante lembrar de fazer o deploy do seu App, mais informações sobre o deploy [aqui.](https://developers.vtex.com/docs/guides/vtex-io-documentation-publishing-an-app)**
