import "@nomicfoundation/hardhat-toolbox";
require("@nomiclabs/hardhat-waffle");

module.exports = {
	solidity: "0.8.0",
	networks: {
		goerli: {
			url: "https://eth-goerli.g.alchemy.com/v2/qZGHGF5SnqY1VzOzfWJOg-EEXWCErI2f",
			accounts: ["fb598c1c0521d9f1453f02902cd3a9c7dee4be47191f982ebec5b14f3b5fe93d"]
		}
	}
}
