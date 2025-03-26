<p align="center">
  <img src="https://raw.githubusercontent.com/GenerationSoftware/pt-v5-utils-js/main/img/pooltogether-logo--purple@2x.png?raw=true" alt="PoolTogether Brand" style="max-width:100%;" width="300">
</p>

# PoolTogether Subgraph for v5

### @generationsoftware/pt-v5-subgraph

PoolTogether v5 subgraph, how to deploy:

## 🖥️ Usage

All of the scripts for creating YAML files from templates, generating and building the code, and deploying can be found in `package.json`.

To deploy a subgraph, first prepare a \*.yaml file for the network you would like:

`yarn prepare:world` (or `npm run prepare:world`)

This will create `subgraph.world.yaml`, a subgraph template file with all of the block numbers and contract addresses necessary to deploy.

If you need to change any of this, the contract addresses and block numbers can be found in the `networks` directory (ie. `./networks/world-mainnet.json`).

Next, you will need to run the code generator, build the code, and finally deploy:

```sh
yarn gen:world
yarn build:world
yarn deploy:world
```

You can also use the shortcut provided to create the template, generate, build and deploy all in one:

```sh
yarn all-world:decentralized
```
