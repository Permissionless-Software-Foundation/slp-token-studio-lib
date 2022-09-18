/*
  An npm JavaScript library for front end web apps. Implements a minimal
  Bitcoin Cash wallet.
*/

/* eslint-disable no-async-promise-executor */

import CreateNft from './lib/create-nft.js'

class TokenStudioLib {
  constructor (localConfig = {}) {
    // Dependency Injection
    this.bchWallet = localConfig.bchWallet
    if (!this.bchWallet) {
      throw new Error('Instance of minimal-slp-wallet must be passed as bchWallet')
    }
    this.write = localConfig.write
    if (!this.write) {
      throw new Error('Instance of p2wdb Write library must be passed as write')
    }
    this.pin = localConfig.pin
    if (!this.pin) {
      throw new Error('Instance of p2wdb Pin library must be passed as write')
    }

    // Encapsulate dependencies
    this.createNft = new CreateNft(localConfig)
  }
}

export default TokenStudioLib