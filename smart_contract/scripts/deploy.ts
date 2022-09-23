import { ethers } from 'hardhat';

async function main() {

	const Transactions = await ethers.getContractFactory("Transactions");
	const transactions = await Transactions.deploy();

	await transactions.deployed();

	console.log("Transactions deployed to: ", transactions.address);
}

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});