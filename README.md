Umbrucore Node
============

A Umbru full node for building applications and services with Node.js. A node is extensible and can be configured to run additional services. At the minimum a node has an interface to [Umbru Core (umbrud) v0.13.0](https://github.com/umbrupay/umbru/tree/v0.13.0.x) for more advanced address queries. Additional services can be enabled to make a node more useful such as exposing new APIs, running a block explorer and wallet service.

## Usages

### As a standalone server

```bash
git clone https://github.com/umbru/umbrucore-node
cd umbrucore-node
npm install
./bin/umbrucore-node start
```

When running the start command, it will seek for a .umbrucore folder with a umbrucore-node.json conf file.
If it doesn't exist, it will create it, with basic task to connect to umbrud.

Some plugins are available :

- Insight-API : `./bin/umbrucore-node addservice insight-api`
- Insight-UI : `./bin/umbrucore-node addservice insight-ui`

You also might want to add these index to your umbru.conf file :
```
-addressindex
-timestampindex
-spentindex
```

### As a library

```bash
npm install umbrucore-node
```

```javascript
const umbrucore = require('umbrucore-node');
const config = require('./umbrucore-node.json');

let node = umbrucore.scaffold.start({ path: "", config: config });
node.on('ready', function() {
    //Umbru core started
    umbrud.on('tx', function(txData) {
        let tx = new umbrucore.lib.Transaction(txData);
    });
});
```

## Prerequisites

- Umbru Core (umbrud) (v0.13.0) with support for additional indexing *(see above)*
- Node.js v8+
- ZeroMQ *(libzmq3-dev for Ubuntu/Debian or zeromq on OSX)*
- ~20GB of disk storage
- ~1GB of RAM

## Configuration

Umbrucore includes a Command Line Interface (CLI) for managing, configuring and interfacing with your Umbrucore Node.

```bash
umbrucore-node create -d <umbru-data-dir> mynode
cd mynode
umbrucore-node install <service>
umbrucore-node install https://github.com/yourname/helloworld
umbrucore-node start
```

This will create a directory with configuration files for your node and install the necessary dependencies.

Please note that [Umbru Core](https://github.com/umbrupay/umbru/tree/master) needs to be installed first.

For more information about (and developing) services, please see the [Service Documentation](docs/services.md).

## Add-on Services

There are several add-on services available to extend the functionality of Bitcore:

- [Insight API](https://github.com/umbru/insight-api/tree/master)
- [Insight UI](https://github.com/umbru/insight-ui/tree/master)
- [Bitcore Wallet Service](https://github.com/umbru/umbrucore-wallet-service/tree/master)

## Documentation

- [Upgrade Notes](docs/upgrade.md)
- [Services](docs/services.md)
  - [Umbrud](docs/services/umbrud.md) - Interface to Umbru Core
  - [Web](docs/services/web.md) - Creates an express application over which services can expose their web/API content
- [Development Environment](docs/development.md) - Guide for setting up a development environment
- [Node](docs/node.md) - Details on the node constructor
- [Bus](docs/bus.md) - Overview of the event bus constructor
- [Release Process](docs/release.md) - Information about verifying a release and the release process.


## Setting up dev environment (with Insight)

Prerequisite : Having a umbrud node already runing `umbrud --daemon`.

Umbrucore-node : `git clone https://github.com/umbru/umbrucore-node -b develop`
Insight-api (optional) : `git clone https://github.com/umbru/insight-api -b develop`
Insight-UI (optional) : `git clone https://github.com/umbru/insight-ui -b develop`

Install them :
```
cd umbrucore-node && npm install \
 && cd ../insight-ui && npm install \
 && cd ../insight-api && npm install && cd ..
```

Symbolic linking in parent folder :
```
npm link ../insight-api
npm link ../insight-ui
```

Start with `./bin/umbrucore-node start` to first generate a ~/.umbrucore/umbrucore-node.json file.
Append this file with `"insight-ui"` and `"insight-api"` in the services array.

## Contributing

Please send pull requests for bug fixes, code optimization, and ideas for improvement. For more information on how to contribute, please refer to our [CONTRIBUTING](https://github.com/umbru/umbrucore/blob/master/CONTRIBUTING.md) file.

## License

Code released under [the MIT license](https://github.com/umbru/umbrucore-node/blob/master/LICENSE).

Copyright 2016-2018 Umbru Core Group, Inc.

- bitcoin: Copyright (c) 2009-2015 Bitcoin Core Developers (MIT License)
