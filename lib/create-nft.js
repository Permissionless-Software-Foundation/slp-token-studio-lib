/*
  This library contains subfunctions for creating a NFT. The main function,
  createNft(), composes them into a high-level function that creates a new
  NFT.
*/

class CreateNft {
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
  }
}

export default CreateNft
