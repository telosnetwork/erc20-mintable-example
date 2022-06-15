# ERC20 EVM Template: Mint example implementation

This repository implements the [ERC20 Template for Telos EVM Testnet Network](https://github.com/telosnetwork/erc20-template)

It was made for the [Native to EVM transaction How-To](https://github.com/telosnetwork/native-to-evm-transaction), it is ownable, adds a mint functionality and removes the initial supply sent on deployment. 

It does not aim to be production ready.

## REQUIREMENTS

This repository requires [NodeJS & NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) installed on your machine and a [wallet address on the Telos EVM Testnet Network](https://www.telos.net/developers/getting-started-on-testnet).

Commands used below work on recent Linux or Windows versions but have not been verified for Mac

## INSTALL
- Clone this repository
- Change the following configuration values in the `.env` file of your newly created repository:
    - `ACCOUNT: MY_TESTNET_EVM_ADDRESS`  
    - `TOKEN_NAME: My Token`
    - `TOKEN_SYMBOL: MYTOK`
    - `TOKEN_INITIAL_SUPPLY: 10000`
- Install the repository on your machine with `git clone [PREVIOUSLY COPIED URL]` (GIT required) or download the code and install it manually
- Enter the directory of the project on your machine and install its dependencies by running `npm install`

## TEST (OPTIONAL)
- Use `npx hardhat test` to build and launch the tests

## DEPLOY
- Build & deploy using `npx hardhat --network testnet deploy`
- Save the contract address returned in the console, ie: `0xe7209d65c5BB05Ddf799b20fF0EC09E691FC3f11`, **you will need it for the next steps !**
- Interact with your contract using  the hardhat console, our [block explorer](https://testnet.teloscan.io), wallets like metamask or by deploying our [example wallet repo](https://github.com/telosnetwork/evm-ui-template-examples)

## VERIFY (OPTIONAL)
- Verify your new token contract with `npx hardhat --network testnet sourcify`
- You may run into a "gateway timeout" error message, do not worry, the contract will still be verified
- Make sure your contract is verified by running the command again, you should get this message back:

`already verified: MyContract (0x2A3b40A59109a84ab82a0Ff1A3910bb595082e09), skipping.`

## TROUBLESHOOT

### Verify: 504 Gateway Timeout

`"<html>\r\n<head><title>504 Gateway Time-out</title></head>\r\n<body bgcolor=\"white\">\r\n<center><h1>504 Gateway Time-out</h1></center>\r\n<hr><center>nginx/1.14.2</center>\r\n</body>\r\n</html>\r\n"`

The sourcify server connection timed out but your contract is still getting verified, run the `npx hardhat --network testnet sourcify` command again to make sure, it should tell you it is already verified !

**Brand new to development ? Need more help setting things up ? Got a cool idea you need help with ? [Visit our developer channel on Telegram](https://t.me/TelosEVMDevs) !**

