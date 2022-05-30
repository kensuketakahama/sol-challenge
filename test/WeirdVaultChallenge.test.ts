import { ethers } from 'hardhat'
import { Contract } from 'ethers'
import { expect } from 'chai'
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers'
import { messagePrefix } from '@ethersproject/hash'
// Replace CHALLENGE_CONTRACT with a contract name you want to deploy
// import { CHALLENGE_CONTRACT } from '../typechain-types'

const toWei = ethers.utils.parseEther

/// Template
describe('Challenge Name', async function () {
  let player: SignerWithAddress
  let challenge: Contract
  let token: Contract

  before(async function () {
    ;[player] = await ethers.getSigners()

    const Challenge = await ethers.getContractFactory('WeirdVaultChallenge')
    challenge = await Challenge.deploy()
    /*
    const ERC20Mock = await ethers.getContractFactory('ERC20Mock');
    token = await ERC20Mock.deploy("token", "MTK");
    await token.connect(player).mint(player.address, 1);
    */
  })

  it('Attack', async function () {
    // describe how to exploit the challenge
    await challenge.transfer(player.address, 1)
    expect(await challenge.isSolved()).to.be.true

  })
})
