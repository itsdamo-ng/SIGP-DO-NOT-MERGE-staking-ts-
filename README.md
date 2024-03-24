# Piertwo Staking API SDK
A JS development kit with supported TypeScript typings.

## Installation
`yarn add @pier_two/staking-ts`

## Documentation
`yarn` or `npm run install`
`yarn build:docs` or `npm run build:docs`
`npx serve ./docs`

### PierTwoStakingApi
The main class for interacting with the PierTwo staking platform. 
All endpoints in the [PierTwo Staking Api](https://gw-1.api.piertwo.io/docs) are implemented.
Read [full documentation here](https://sdk.piertwo.com/).

```javascript

import { URL, PierTwoStakingApi } from '@pier_two/staking-ts'

const piertwo = new PierTwoStakingApi({
  baseUrl: URL.MAINNET,
  apiKey: 'yourApiKey'
});

async function main() {
  const accountDetails = await piertwo.account.getAccount();

  console.log(accountDetails.data)
}

main()

```
