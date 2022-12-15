# Crowdfunding | DAPP

Decentralized crowdfunding application based on Ethereum Blockchain

## UI Demo

### Homepage

![_home](/client/public/assets/home.png)

### Fundraiser details

![_details](/client/public/assets/details.png)

### New fundraiser

![_new](/client/public/assets/new.png)

## Setting up the contracts

Compile contracts

```console
truffle compile
```

Migrate compiled contracts

```console
truffle migrate --reset
```

> You can now read the contract's ABI from JSON file under the client/src/contracts directory.

## Setting up the client

To configure the client run the following command from the root directory

```console
cd client && npm install
```

Once all the dependencies were installed start the client

```console
npm run start
```
