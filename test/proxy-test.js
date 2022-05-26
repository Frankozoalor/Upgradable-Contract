const { expect } = require("chai");
const { ethers } = require("hardhat");
const hre = require("hardhat");

describe("ERC721 Upgradeable", function() {
    it("Should deploy an upgradeable ERC721 Contract", async function() {
        const bDoodles = await ethers.getContractFactory("bDoodles");
        const bDoodles1 = await ethers.getContractFactory("bDoodles2");

        let proxyContract = await hre.upgrades.deployProxy(bDoodles, {
            kind: "uups"
        });
        const [owner] = await ethers.getSigners();
        const ownerOfToken1 = await proxyContract.ownerOf(1);

        expect(ownerOfToken1).to.equal(owner.address);

        proxyContract = await hre.upgrades.upgradeProxy(proxyContract, bDoodles1);
        expect(await proxyContract.test()).to.equal("Upgraded");


    })
})