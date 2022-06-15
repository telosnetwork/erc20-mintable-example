require("dotenv").config();

const { expect } = require("chai");
const { ethers } = require("hardhat");
const ONE_TLOS = ethers.utils.parseEther("1.0");

describe("Token contract", function () {
    let Token, tokenInstance;
    beforeEach(async () => {
        const [owner] = await ethers.getSigners();
        Token = await ethers.getContractFactory("MintableToken");
        tokenInstance = await Token.deploy(process.env.TOKEN_NAME, process.env.TOKEN_SYMBOL, owner.address);
    })
    describe(":: Setup", function () {
        it("Name should be " + process.env.TOKEN_NAME, async function () {
            expect(await tokenInstance.name()).to.equal(process.env.TOKEN_NAME);
        });
        it("Symbol should be " + process.env.TOKEN_SYMBOL, async function () {
            expect(await tokenInstance.symbol()).to.equal(process.env.TOKEN_SYMBOL);
        });
    });
    describe(":: Core", function () {
        it("Should let users approve a contract as spender", async function () {
            const [owner, addr1, addr2] = await ethers.getSigners();
            const balance = await tokenInstance.approve(addr1.address, ONE_TLOS);
            expect(balance);
        });
        it("Should let owner mint " + process.env.TOKEN_SYMBOL + " tokens", async function () {
            const [owner, addr1, addr2] = await ethers.getSigners();
            await expect(tokenInstance.mint(addr1.address, ONE_TLOS)).to.not.be.reverted;
            expect(await tokenInstance.balanceOf(addr1.address)).to.equal(ONE_TLOS)
        });
        it("Should not let other addresses than owner mint " + process.env.TOKEN_SYMBOL + " tokens", async function () {
            const [owner, addr1, addr2] = await ethers.getSigners();
            await expect(tokenInstance.connect(addr2).mint(addr2.address, ONE_TLOS)).to.be.reverted;
        });
    });
});
