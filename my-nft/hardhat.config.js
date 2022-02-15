/**
* @type import('hardhat/config').HardhatUserConfig
*/
require("@nomiclabs/hardhat-ethers");
//const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.7.3",
   defaultNetwork: "ropsten",
   networks: {
      hardhat: {},
      ropsten: {
         url: 'https://eth-ropsten.alchemyapi.io/v2/Y_h99ZSxPQAA2SSHxMaX-0xh6jQH7bnu',
         accounts: [`0x0c2734b134eb226d0a8074bfc16e9693c845b7f2cadca1a7ccdc248055de1468`]
      }
   }
}