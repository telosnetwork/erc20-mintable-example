require('dotenv').config();

module.exports = async ({getNamedAccounts, deployments}) => {
  const {deploy} = deployments;
  const {deployer} = await getNamedAccounts();

  console.log("Deploying", process.env.TOKEN_NAME, "(" + process.env.TOKEN_SYMBOL  + ") ...");

  const token = await deploy('Token', {
    from: deployer,
    args: [process.env.TOKEN_NAME, process.env.TOKEN_SYMBOL, process.env.ACCOUNT],
  });

  console.log("Your token:", process.env.TOKEN_NAME, "(" + process.env.TOKEN_SYMBOL + ") was deployed to:", token.address);

};
module.exports.tags = ['Token'];
