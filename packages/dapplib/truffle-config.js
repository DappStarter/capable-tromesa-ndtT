require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note spike evil hope clog success gentle'; 
let testAccounts = [
"0xc8bcea596c5bbd5bc81cd9c611ce8190a0c075393d06443af39b75c1a543d5a9",
"0xde5479dbda68245153a7cec8b10809ae5146186ae7c20fb8a4d667850780815b",
"0x875dd4f12d2bb2b120acfcc34f82b12837582689f2b0a6a940d3662657c9ac48",
"0xaa6ab151751998a1a04ed66c61a93c7ba2441e22cc5f5e08547b16d16ba41b7c",
"0x824a47c2be61b9c428f570c49f9abb64d93a103af67c9d4844bd0bdcb4821d3a",
"0x76288dc44d2f8394c3fdd37427f67274f9e10bf56d355bb8d60917a54b52e83c",
"0xd45af883b9bcb97faf2e9ea2a37b96640ef052559bd33bdf9813f6fa54cf093c",
"0x9a90b70e1db3e4aa788e9d08978c269332d79ae9d5ec0dfb6810025dac9d2de2",
"0x7e9189d3eaab85706184454ed0ffcbb0527f4d11cd24759cce8f9b7d9e7df26a",
"0x626cb4350bfb123d409f1f13b0c89eaf79ab9772aea5467606bdb649f6283558"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


