require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt lonely bottom suspect bitter birth sister proof grace option blue tower'; 
let testAccounts = [
"0x925decb0142403fbd30b8063f5f409720822fbba02c14e92ca43d102f39deb48",
"0xdec1f09d61786506bffd0a29f30ff8c880a786885d9cf58492aa7288a7477374",
"0xcb959c243d8e9b7af6eaaa2738cad07846946c2ea3bb0b5e66a89be5508a0e88",
"0xd639680707469600250bd72ce53992f19565a8e8ee1ef2d764ef7ba0739a90fb",
"0x7f573e7d6fb157c43c93c5680b0f477c4b1025b69a859619f6e4c940e7b96b7c",
"0x2612f7ac03e575a5452186b6d36c7e1917925c9c14669dce5b6f9793c238f4a3",
"0x54b76d7d24c0dea85da8947d1f726d92fbcdff4a08e41c3a3919fbe3c30959c7",
"0x782da82a506913ec4e202c51e2b4866d0c475920e239c07438b321bcb8f8a735",
"0x8217b47f9740bdfa09910e78f7ab3735820b9ddc4e4573c2d4470c105a3655cd",
"0x9350c16ca7d9e47e8ac6e0da52ad35423a103e6f0fa7445a9ef752be60e8e2e3"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

