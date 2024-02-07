# pt-v5-subgraph

### PoolTogether Hyperstructure Subgraph

PrizePool, TwabController, RngRelayAuction, LiquidationPairFactory, LiquidationRouter, PrizeVaultFactory and VaultBoostFactory data typically lives on the L2 (Optimism, Arbitrum, Op Sepolia), and a subgraph using this code is deployed for each chain.

RngAuction, RngAuctionRelayerRemoteOwnerArbitrum, and RngAuctionRelayerRemoteOwnerOptimism lives on L1s (Ethereum Mainnet, Sepolia, etc.), and this same subgraph code is deployed for each L1 chain as well.

#### TODO:

1. Figure out how to split up rngAuctionRelayerRemoteOwner into the 2 new contracts for each following network:

   "rngAuctionRelayerRemoteOwnerArbitrum": {
   "address": "0x149e3b3bd69f1cfc1b42b6a6a152a42e38ceebf1",
   "startBlock": "4647000"
   }
   "rngAuctionRelayerRemoteOwnerOptimism": {
   "address": "0x48cdb9fe4f71d9b6f17d8e4d72e4036931601bde",
   "startBlock": "4647000"
   }

2. Add VaultBoostFactory for Optimism Sepolia once it's deployed

   "vaultBoostFactory": {
   "address": "",
   "startBlock": "3783000"
   }
