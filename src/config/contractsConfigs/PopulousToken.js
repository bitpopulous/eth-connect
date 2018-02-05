/* eslint-disable */

export default {
  "contractName": "PopulousToken",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "balances",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "faucet",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "allowed",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "remaining",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    }
  ],
  "bytecode": "0x606060405260008055341561001357600080fd5b7f506f70756c6f757320506c6174666f726d0000000000000000000000000000006006556007805460ff191660089081179091557f50505400000000000000000000000000000000000000000000000000000000009055610586806100796000396000f300606060405236156100b75763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde0381146100bc578063095ea7b3146100e157806318160ddd1461011757806323b872dd1461012a57806327e235e314610152578063313ce56714610171578063579158971461019a5780635c658165146101b257806370a08231146101d757806395d89b41146101f6578063a9059cbb14610209578063dd62ed3e1461022b575b600080fd5b34156100c757600080fd5b6100cf610250565b60405190815260200160405180910390f35b34156100ec57600080fd5b610103600160a060020a0360043516602435610256565b604051901515815260200160405180910390f35b341561012257600080fd5b6100cf6102c2565b341561013557600080fd5b610103600160a060020a03600435811690602435166044356102c8565b341561015d57600080fd5b6100cf600160a060020a03600435166103ce565b341561017c57600080fd5b6101846103e0565b60405160ff909116815260200160405180910390f35b34156101a557600080fd5b6101b06004356103e9565b005b34156101bd57600080fd5b6100cf600160a060020a0360043581169060243516610439565b34156101e257600080fd5b6100cf600160a060020a0360043516610456565b341561020157600080fd5b6100cf610471565b341561021457600080fd5b610103600160a060020a0360043516602435610477565b341561023657600080fd5b6100cf600160a060020a036004358116906024351661050b565b60065481565b600160a060020a03338116600081815260056020908152604080832094871680845294909152808220859055909291907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a350600192915050565b60005481565b600160a060020a03808416600081815260056020908152604080832033909516835293815283822054928252600490529182205483901080159061030c5750828110155b151561031757600080fd5b600160a060020a038085166000908152600460205260408082208054870190559187168152208054849003905560001981101561037c57600160a060020a03808616600090815260056020908152604080832033909416835292905220805484900390555b83600160a060020a031685600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8560405190815260200160405180910390a3506001949350505050565b60046020526000908152604090205481565b60075460ff1681565b600160a060020a03331660009081526004602052604090205461040c9082610536565b600160a060020a033316600090815260046020526040812091909155546104339082610536565b60005550565b600560209081526000928352604080842090915290825290205481565b600160a060020a031660009081526004602052604090205490565b60085481565b600160a060020a0333166000908152600460205260408120548290101561049d57600080fd5b600160a060020a033381166000818152600460205260408082208054879003905592861680825290839020805486019055917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a350600192915050565b600160a060020a03918216600090815260056020908152604080832093909416825291909152205490565b600082820183811080159061054b5750828110155b151561055357fe5b93925050505600a165627a7a72305820ccfd31422495921b4a5b63ee57c12d3b6684034b522af3dce7302dd2bb6b28150029",
  "deployedBytecode": "0x606060405236156100b75763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde0381146100bc578063095ea7b3146100e157806318160ddd1461011757806323b872dd1461012a57806327e235e314610152578063313ce56714610171578063579158971461019a5780635c658165146101b257806370a08231146101d757806395d89b41146101f6578063a9059cbb14610209578063dd62ed3e1461022b575b600080fd5b34156100c757600080fd5b6100cf610250565b60405190815260200160405180910390f35b34156100ec57600080fd5b610103600160a060020a0360043516602435610256565b604051901515815260200160405180910390f35b341561012257600080fd5b6100cf6102c2565b341561013557600080fd5b610103600160a060020a03600435811690602435166044356102c8565b341561015d57600080fd5b6100cf600160a060020a03600435166103ce565b341561017c57600080fd5b6101846103e0565b60405160ff909116815260200160405180910390f35b34156101a557600080fd5b6101b06004356103e9565b005b34156101bd57600080fd5b6100cf600160a060020a0360043581169060243516610439565b34156101e257600080fd5b6100cf600160a060020a0360043516610456565b341561020157600080fd5b6100cf610471565b341561021457600080fd5b610103600160a060020a0360043516602435610477565b341561023657600080fd5b6100cf600160a060020a036004358116906024351661050b565b60065481565b600160a060020a03338116600081815260056020908152604080832094871680845294909152808220859055909291907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a350600192915050565b60005481565b600160a060020a03808416600081815260056020908152604080832033909516835293815283822054928252600490529182205483901080159061030c5750828110155b151561031757600080fd5b600160a060020a038085166000908152600460205260408082208054870190559187168152208054849003905560001981101561037c57600160a060020a03808616600090815260056020908152604080832033909416835292905220805484900390555b83600160a060020a031685600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8560405190815260200160405180910390a3506001949350505050565b60046020526000908152604090205481565b60075460ff1681565b600160a060020a03331660009081526004602052604090205461040c9082610536565b600160a060020a033316600090815260046020526040812091909155546104339082610536565b60005550565b600560209081526000928352604080842090915290825290205481565b600160a060020a031660009081526004602052604090205490565b60085481565b600160a060020a0333166000908152600460205260408120548290101561049d57600080fd5b600160a060020a033381166000818152600460205260408082208054879003905592861680825290839020805486019055917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a350600192915050565b600160a060020a03918216600090815260056020908152604080832093909416825291909152205490565b600082820183811080159061054b5750828110155b151561055357fe5b93925050505600a165627a7a72305820ccfd31422495921b4a5b63ee57c12d3b6684034b522af3dce7302dd2bb6b28150029",
  "sourceMap": "114:527:9:-;;;277:1:16;248:30;;328:122:9;;;;;;;;371:26;:4;:26;407:8;:12;;-1:-1:-1;;407:12:9;418:1;407:12;;;;;;429:14;;;114:527;;;;;;",
  "deployedSourceMap": "114:527:9:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;215:19;;;;;;;;;;;;;;;;;;;;;;;;;;;1212:205:6;;;;;;;;;;-1:-1:-1;;;;;1212:205:6;;;;;;;;;;;;;;;;;;;;;;;;248:30:16;;;;;;;;;;;;635:452:6;;;;;;;;;;-1:-1:-1;;;;;635:452:6;;;;;;;;;;;;238:44;;;;;;;;;;-1:-1:-1;;;;;238:44:6;;;;;240:21:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;456:183;;;;;;;;;;;;;;;;288:64:6;;;;;;;;;;-1:-1:-1;;;;;288:64:6;;;;;;;;;;1093:113;;;;;;;;;;-1:-1:-1;;;;;1093:113:6;;;;;267:21:9;;;;;;;;;;;;359:270:6;;;;;;;;;;-1:-1:-1;;;;;359:270:6;;;;;;;1423:142;;;;;;;;;;-1:-1:-1;;;;;1423:142:6;;;;;;;;;;215:19:9;;;;:::o;1212:205:6:-;-1:-1:-1;;;;;1311:10:6;1303:19;;1279:12;1303:19;;;:7;:19;;;;;;;;:29;;;;;;;;;;;;;:38;;;1279:12;;1303:29;:19;1351:38;;1335:6;;1351:38;;;;;;;;;;;;;-1:-1:-1;1406:4:6;1212:205;;;;:::o;248:30:16:-;;;;:::o;635:452:6:-;-1:-1:-1;;;;;761:14:6;;;717:12;761:14;;;:7;:14;;;;;;;;776:10;761:26;;;;;;;;;;;;805:15;;;:8;:15;;;;;;:25;;;;;;:48;;;847:6;834:9;:19;;805:48;797:57;;;;;;;;-1:-1:-1;;;;;864:13:6;;;;;;;:8;:13;;;;;;:23;;;;;;897:15;;;;;;:25;;;;;;;-1:-1:-1;;936:23:6;;932:90;;;-1:-1:-1;;;;;975:14:6;;;;;;;:7;:14;;;;;;;;990:10;975:26;;;;;;;;;:36;;;;;;;932:90;1047:3;-1:-1:-1;;;;;1031:28:6;1040:5;-1:-1:-1;;;;;1031:28:6;;1052:6;1031:28;;;;;;;;;;;;;;-1:-1:-1;1076:4:6;;635:452;-1:-1:-1;;;;635:452:6:o;238:44::-;;;;;;;;;;;;;:::o;240:21:9:-;;;;;;:::o;456:183::-;-1:-1:-1;;;;;551:10:9;542:20;;;;;:8;:20;;;;;;525:46;;564:6;525:16;:46::i;:::-;-1:-1:-1;;;;;511:10:9;502:20;;;;;:8;:20;;;;;:69;;;;612:11;595:37;;625:6;595:16;:37::i;:::-;581:11;:51;-1:-1:-1;456:183:9:o;288:64:6:-;;;;;;;;;;;;;;;;;;;;;;;;:::o;1093:113::-;-1:-1:-1;;;;;1183:16:6;1149:15;1183:16;;;:8;:16;;;;;;;1093:113::o;267:21:9:-;;;;:::o;359:270:6:-;-1:-1:-1;;;;;463:10:6;454:20;422:12;454:20;;;:8;:20;;;;;;:30;;;;446:39;;;;;;-1:-1:-1;;;;;504:10:6;495:20;;;;;;:8;:20;;;;;;:30;;;;;;;535:13;;;;;;;;;;:23;;;;;;:13;568:33;;519:6;;568:33;;;;;;;;;;;;;-1:-1:-1;618:4:6;359:270;;;;:::o;1423:142::-;-1:-1:-1;;;;;1533:15:6;;;1497:17;1533:15;;;:7;:15;;;;;;;;:25;;;;;;;;;;;;;1423:142::o;1223:135:10:-;1279:4;1302:5;;;1322:4;;;;;;:12;;;1333:1;1330;:4;;1322:12;1315:20;;;;;;1350:1;1223:135;-1:-1:-1;;;1223:135:10:o",
  "source": "pragma solidity ^0.4.17;\n\nimport \"./ERC20Token.sol\";\nimport \"./SafeMath.sol\";\n\n\n/// @title PopulousToken contract\ncontract PopulousToken is ERC20Token {\n\n    // FIELDS\n\n    // Non-constant token specific fields\n    bytes32 public name;\n    uint8 public decimals;\n    bytes32 public symbol;\n\n    // NON-CONSTANT METHODS\n    \n    function PopulousToken () public {\n        name = \"Populous Platform\";\n        decimals = 8;\n        symbol = \"PPT\";\n    }\n\n    function faucet(uint amount) public {\n        balances[msg.sender] = SafeMath.safeAdd(balances[msg.sender], amount);\n        totalSupply = SafeMath.safeAdd(totalSupply, amount);\n    }\n}",
  "sourcePath": "/Users/najienka/Desktop/populous-smartcontracts/contracts/PopulousToken.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/najienka/Desktop/populous-smartcontracts/contracts/PopulousToken.sol",
      "exportedSymbols": {
        "PopulousToken": [
          4144
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".17"
          ]
        },
        "id": 4089,
        "name": "PragmaDirective",
        "src": "0:24:9"
      },
      {
        "attributes": {
          "SourceUnit": 2626,
          "absolutePath": "/Users/najienka/Desktop/populous-smartcontracts/contracts/ERC20Token.sol",
          "file": "./ERC20Token.sol",
          "scope": 4145,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 4090,
        "name": "ImportDirective",
        "src": "26:26:9"
      },
      {
        "attributes": {
          "SourceUnit": 4262,
          "absolutePath": "/Users/najienka/Desktop/populous-smartcontracts/contracts/SafeMath.sol",
          "file": "./SafeMath.sol",
          "scope": 4145,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 4091,
        "name": "ImportDirective",
        "src": "53:24:9"
      },
      {
        "attributes": {
          "contractDependencies": [
            2625,
            4995
          ],
          "contractKind": "contract",
          "documentation": "@title PopulousToken contract",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            4144,
            2625,
            4995
          ],
          "name": "PopulousToken",
          "scope": 4145
        },
        "children": [
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "ERC20Token",
                  "referencedDeclaration": 2625,
                  "type": "contract ERC20Token"
                },
                "id": 4092,
                "name": "UserDefinedTypeName",
                "src": "140:10:9"
              }
            ],
            "id": 4093,
            "name": "InheritanceSpecifier",
            "src": "140:10:9"
          },
          {
            "attributes": {
              "constant": false,
              "name": "name",
              "scope": 4144,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "bytes32",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "bytes32",
                  "type": "bytes32"
                },
                "id": 4094,
                "name": "ElementaryTypeName",
                "src": "215:7:9"
              }
            ],
            "id": 4095,
            "name": "VariableDeclaration",
            "src": "215:19:9"
          },
          {
            "attributes": {
              "constant": false,
              "name": "decimals",
              "scope": 4144,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint8",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint8",
                  "type": "uint8"
                },
                "id": 4096,
                "name": "ElementaryTypeName",
                "src": "240:5:9"
              }
            ],
            "id": 4097,
            "name": "VariableDeclaration",
            "src": "240:21:9"
          },
          {
            "attributes": {
              "constant": false,
              "name": "symbol",
              "scope": 4144,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "bytes32",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "bytes32",
                  "type": "bytes32"
                },
                "id": 4098,
                "name": "ElementaryTypeName",
                "src": "267:7:9"
              }
            ],
            "id": 4099,
            "name": "VariableDeclaration",
            "src": "267:21:9"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "PopulousToken",
              "payable": false,
              "scope": 4144,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4100,
                "name": "ParameterList",
                "src": "351:2:9"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4101,
                "name": "ParameterList",
                "src": "361:0:9"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4095,
                              "type": "bytes32",
                              "value": "name"
                            },
                            "id": 4102,
                            "name": "Identifier",
                            "src": "371:4:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "506f70756c6f757320506c6174666f726d",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"Populous Platform\"",
                              "value": "Populous Platform"
                            },
                            "id": 4103,
                            "name": "Literal",
                            "src": "378:19:9"
                          }
                        ],
                        "id": 4104,
                        "name": "Assignment",
                        "src": "371:26:9"
                      }
                    ],
                    "id": 4105,
                    "name": "ExpressionStatement",
                    "src": "371:26:9"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint8"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4097,
                              "type": "uint8",
                              "value": "decimals"
                            },
                            "id": 4106,
                            "name": "Identifier",
                            "src": "407:8:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "38",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 8",
                              "value": "8"
                            },
                            "id": 4107,
                            "name": "Literal",
                            "src": "418:1:9"
                          }
                        ],
                        "id": 4108,
                        "name": "Assignment",
                        "src": "407:12:9"
                      }
                    ],
                    "id": 4109,
                    "name": "ExpressionStatement",
                    "src": "407:12:9"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4099,
                              "type": "bytes32",
                              "value": "symbol"
                            },
                            "id": 4110,
                            "name": "Identifier",
                            "src": "429:6:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "505054",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"PPT\"",
                              "value": "PPT"
                            },
                            "id": 4111,
                            "name": "Literal",
                            "src": "438:5:9"
                          }
                        ],
                        "id": 4112,
                        "name": "Assignment",
                        "src": "429:14:9"
                      }
                    ],
                    "id": 4113,
                    "name": "ExpressionStatement",
                    "src": "429:14:9"
                  }
                ],
                "id": 4114,
                "name": "Block",
                "src": "361:89:9"
              }
            ],
            "id": 4115,
            "name": "FunctionDefinition",
            "src": "328:122:9"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "faucet",
              "payable": false,
              "scope": 4144,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "amount",
                      "scope": 4143,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 4116,
                        "name": "ElementaryTypeName",
                        "src": "472:4:9"
                      }
                    ],
                    "id": 4117,
                    "name": "VariableDeclaration",
                    "src": "472:11:9"
                  }
                ],
                "id": 4118,
                "name": "ParameterList",
                "src": "471:13:9"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 4119,
                "name": "ParameterList",
                "src": "492:0:9"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2454,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 4120,
                                "name": "Identifier",
                                "src": "502:8:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5080,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 4121,
                                    "name": "Identifier",
                                    "src": "511:3:9"
                                  }
                                ],
                                "id": 4122,
                                "name": "MemberAccess",
                                "src": "511:10:9"
                              }
                            ],
                            "id": 4123,
                            "name": "IndexAccess",
                            "src": "502:20:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "safeAdd",
                                  "referencedDeclaration": 4224,
                                  "type": "function (uint256,uint256) pure returns (uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4261,
                                      "type": "type(library SafeMath)",
                                      "value": "SafeMath"
                                    },
                                    "id": 4124,
                                    "name": "Identifier",
                                    "src": "525:8:9"
                                  }
                                ],
                                "id": 4125,
                                "name": "MemberAccess",
                                "src": "525:16:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2454,
                                      "type": "mapping(address => uint256)",
                                      "value": "balances"
                                    },
                                    "id": 4126,
                                    "name": "Identifier",
                                    "src": "542:8:9"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "sender",
                                      "referencedDeclaration": null,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 5080,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 4127,
                                        "name": "Identifier",
                                        "src": "551:3:9"
                                      }
                                    ],
                                    "id": 4128,
                                    "name": "MemberAccess",
                                    "src": "551:10:9"
                                  }
                                ],
                                "id": 4129,
                                "name": "IndexAccess",
                                "src": "542:20:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4117,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 4130,
                                "name": "Identifier",
                                "src": "564:6:9"
                              }
                            ],
                            "id": 4131,
                            "name": "FunctionCall",
                            "src": "525:46:9"
                          }
                        ],
                        "id": 4132,
                        "name": "Assignment",
                        "src": "502:69:9"
                      }
                    ],
                    "id": 4133,
                    "name": "ExpressionStatement",
                    "src": "502:69:9"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4927,
                              "type": "uint256",
                              "value": "totalSupply"
                            },
                            "id": 4134,
                            "name": "Identifier",
                            "src": "581:11:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "safeAdd",
                                  "referencedDeclaration": 4224,
                                  "type": "function (uint256,uint256) pure returns (uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4261,
                                      "type": "type(library SafeMath)",
                                      "value": "SafeMath"
                                    },
                                    "id": 4135,
                                    "name": "Identifier",
                                    "src": "595:8:9"
                                  }
                                ],
                                "id": 4136,
                                "name": "MemberAccess",
                                "src": "595:16:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4927,
                                  "type": "uint256",
                                  "value": "totalSupply"
                                },
                                "id": 4137,
                                "name": "Identifier",
                                "src": "612:11:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4117,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 4138,
                                "name": "Identifier",
                                "src": "625:6:9"
                              }
                            ],
                            "id": 4139,
                            "name": "FunctionCall",
                            "src": "595:37:9"
                          }
                        ],
                        "id": 4140,
                        "name": "Assignment",
                        "src": "581:51:9"
                      }
                    ],
                    "id": 4141,
                    "name": "ExpressionStatement",
                    "src": "581:51:9"
                  }
                ],
                "id": 4142,
                "name": "Block",
                "src": "492:147:9"
              }
            ],
            "id": 4143,
            "name": "FunctionDefinition",
            "src": "456:183:9"
          }
        ],
        "id": 4144,
        "name": "ContractDefinition",
        "src": "114:527:9"
      }
    ],
    "id": 4145,
    "name": "SourceUnit",
    "src": "0:641:9"
  },
  "networks": {
    "3": {
      "events": {},
      "links": {},
      "address": "0xa41cb127aff0b67ef19fa5da55ced7a0be8982e3"
    }
  },
  "schemaVersion": "1.0.0",
  "updatedAt": "2018-01-31T14:06:15.595Z"
};
