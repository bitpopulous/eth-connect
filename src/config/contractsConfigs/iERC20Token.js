/* eslint-disable */

export default {
  "contractName": "iERC20Token",
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
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "// Abstract contract for the full ERC 20 Token standard\n// https://github.com/ConsenSys/Tokens\n// https://github.com/ethereum/EIPs/issues/20\npragma solidity ^0.4.17;\n\n\n/// @title iERC20Token contract\ncontract iERC20Token {\n\n    // FIELDS\n\n    \n    uint256 public totalSupply = 0;\n    bytes32 public name;// token name, e.g, pounds for fiat UK pounds.\n    uint8 public decimals;// How many decimals to show. ie. There could 1000 base units with 3 decimals. Meaning 0.980 SBX = 980 base units. It's like comparing 1 wei to 1 ether.\n    bytes32 public symbol;// An identifier: eg SBX.\n\n\n    // NON-CONSTANT METHODS\n\n    /// @dev send `_value` tokens to `_to` address/wallet from `msg.sender`.\n    /// @param _to The address of the recipient.\n    /// @param _value The amount of token to be transferred.\n    /// @return Whether the transfer was successful or not.\n    function transfer(address _to, uint256 _value) public returns (bool success);\n\n    /// @dev send `_value` token to `_to` from `_from` on the condition it is approved by `_from`\n    /// @param _from The address of the sender\n    /// @param _to The address of the recipient\n    /// @param _value The amount of token to be transferred\n    /// @return Whether the transfer was successful or not\n    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success);\n\n    /// @dev `msg.sender` approves `_spender` to spend `_value` tokens.\n    /// @param _spender The address of the account able to transfer the tokens.\n    /// @param _value The amount of tokens to be approved for transfer.\n    /// @return Whether the approval was successful or not.\n    function approve(address _spender, uint256 _value) public returns (bool success);\n\n    // CONSTANT METHODS\n\n    /** @dev Checks the balance of an address without changing the state of the blockchain.\n      * @param _owner The address to check.\n      * @return balance An unsigned integer representing the token balance of the address.\n      */\n    function balanceOf(address _owner) public view returns (uint256 balance);\n\n    /** @dev Checks for the balance of the tokens of that which the owner had approved another address owner to spend.\n      * @param _owner The address of the token owner.\n      * @param _spender The address of the allowed spender.\n      * @return remaining An unsigned integer representing the remaining approved tokens.\n      */\n    function allowance(address _owner, address _spender) public view returns (uint256 remaining);\n\n\n    // EVENTS\n\n    // An event triggered when a transfer of tokens is made from a _from address to a _to address.\n    event Transfer(address indexed _from, address indexed _to, uint256 _value);\n    // An event triggered when an owner of tokens successfully approves another address to spend a specified amount of tokens.\n    event Approval(address indexed _owner, address indexed _spender, uint256 _value);\n}\n",
  "sourcePath": "/Users/najienka/Desktop/populous-smartcontracts/contracts/iERC20Token.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/najienka/Desktop/populous-smartcontracts/contracts/iERC20Token.sol",
      "exportedSymbols": {
        "iERC20Token": [
          4995
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
        "id": 4924,
        "name": "PragmaDirective",
        "src": "141:24:16"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": "@title iERC20Token contract",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            4995
          ],
          "name": "iERC20Token",
          "scope": 4996
        },
        "children": [
          {
            "attributes": {
              "constant": false,
              "name": "totalSupply",
              "scope": 4995,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint256",
                  "type": "uint256"
                },
                "id": 4925,
                "name": "ElementaryTypeName",
                "src": "248:7:16"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "30",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "number",
                  "type": "int_const 0",
                  "value": "0"
                },
                "id": 4926,
                "name": "Literal",
                "src": "277:1:16"
              }
            ],
            "id": 4927,
            "name": "VariableDeclaration",
            "src": "248:30:16"
          },
          {
            "attributes": {
              "constant": false,
              "name": "name",
              "scope": 4995,
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
                "id": 4928,
                "name": "ElementaryTypeName",
                "src": "284:7:16"
              }
            ],
            "id": 4929,
            "name": "VariableDeclaration",
            "src": "284:19:16"
          },
          {
            "attributes": {
              "constant": false,
              "name": "decimals",
              "scope": 4995,
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
                "id": 4930,
                "name": "ElementaryTypeName",
                "src": "355:5:16"
              }
            ],
            "id": 4931,
            "name": "VariableDeclaration",
            "src": "355:21:16"
          },
          {
            "attributes": {
              "constant": false,
              "name": "symbol",
              "scope": 4995,
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
                "id": 4932,
                "name": "ElementaryTypeName",
                "src": "534:7:16"
              }
            ],
            "id": 4933,
            "name": "VariableDeclaration",
            "src": "534:21:16"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "transfer",
              "payable": false,
              "scope": 4995,
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
                      "name": "_to",
                      "scope": 4942,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4934,
                        "name": "ElementaryTypeName",
                        "src": "882:7:16"
                      }
                    ],
                    "id": 4935,
                    "name": "VariableDeclaration",
                    "src": "882:11:16"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_value",
                      "scope": 4942,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 4936,
                        "name": "ElementaryTypeName",
                        "src": "895:7:16"
                      }
                    ],
                    "id": 4937,
                    "name": "VariableDeclaration",
                    "src": "895:14:16"
                  }
                ],
                "id": 4938,
                "name": "ParameterList",
                "src": "881:29:16"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "success",
                      "scope": 4942,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 4939,
                        "name": "ElementaryTypeName",
                        "src": "927:4:16"
                      }
                    ],
                    "id": 4940,
                    "name": "VariableDeclaration",
                    "src": "927:12:16"
                  }
                ],
                "id": 4941,
                "name": "ParameterList",
                "src": "926:14:16"
              }
            ],
            "id": 4942,
            "name": "FunctionDefinition",
            "src": "864:77:16"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "transferFrom",
              "payable": false,
              "scope": 4995,
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
                      "name": "_from",
                      "scope": 4953,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4943,
                        "name": "ElementaryTypeName",
                        "src": "1281:7:16"
                      }
                    ],
                    "id": 4944,
                    "name": "VariableDeclaration",
                    "src": "1281:13:16"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 4953,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4945,
                        "name": "ElementaryTypeName",
                        "src": "1296:7:16"
                      }
                    ],
                    "id": 4946,
                    "name": "VariableDeclaration",
                    "src": "1296:11:16"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_value",
                      "scope": 4953,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 4947,
                        "name": "ElementaryTypeName",
                        "src": "1309:7:16"
                      }
                    ],
                    "id": 4948,
                    "name": "VariableDeclaration",
                    "src": "1309:14:16"
                  }
                ],
                "id": 4949,
                "name": "ParameterList",
                "src": "1280:44:16"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "success",
                      "scope": 4953,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 4950,
                        "name": "ElementaryTypeName",
                        "src": "1341:4:16"
                      }
                    ],
                    "id": 4951,
                    "name": "VariableDeclaration",
                    "src": "1341:12:16"
                  }
                ],
                "id": 4952,
                "name": "ParameterList",
                "src": "1340:14:16"
              }
            ],
            "id": 4953,
            "name": "FunctionDefinition",
            "src": "1259:96:16"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "approve",
              "payable": false,
              "scope": 4995,
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
                      "name": "_spender",
                      "scope": 4962,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4954,
                        "name": "ElementaryTypeName",
                        "src": "1662:7:16"
                      }
                    ],
                    "id": 4955,
                    "name": "VariableDeclaration",
                    "src": "1662:16:16"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_value",
                      "scope": 4962,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 4956,
                        "name": "ElementaryTypeName",
                        "src": "1680:7:16"
                      }
                    ],
                    "id": 4957,
                    "name": "VariableDeclaration",
                    "src": "1680:14:16"
                  }
                ],
                "id": 4958,
                "name": "ParameterList",
                "src": "1661:34:16"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "success",
                      "scope": 4962,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 4959,
                        "name": "ElementaryTypeName",
                        "src": "1712:4:16"
                      }
                    ],
                    "id": 4960,
                    "name": "VariableDeclaration",
                    "src": "1712:12:16"
                  }
                ],
                "id": 4961,
                "name": "ParameterList",
                "src": "1711:14:16"
              }
            ],
            "id": 4962,
            "name": "FunctionDefinition",
            "src": "1645:81:16"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "balanceOf",
              "payable": false,
              "scope": 4995,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 4969,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4963,
                        "name": "ElementaryTypeName",
                        "src": "2012:7:16"
                      }
                    ],
                    "id": 4964,
                    "name": "VariableDeclaration",
                    "src": "2012:14:16"
                  }
                ],
                "id": 4965,
                "name": "ParameterList",
                "src": "2011:16:16"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "balance",
                      "scope": 4969,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 4966,
                        "name": "ElementaryTypeName",
                        "src": "2049:7:16"
                      }
                    ],
                    "id": 4967,
                    "name": "VariableDeclaration",
                    "src": "2049:15:16"
                  }
                ],
                "id": 4968,
                "name": "ParameterList",
                "src": "2048:17:16"
              }
            ],
            "id": 4969,
            "name": "FunctionDefinition",
            "src": "1993:73:16"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "allowance",
              "payable": false,
              "scope": 4995,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 4978,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4970,
                        "name": "ElementaryTypeName",
                        "src": "2423:7:16"
                      }
                    ],
                    "id": 4971,
                    "name": "VariableDeclaration",
                    "src": "2423:14:16"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_spender",
                      "scope": 4978,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4972,
                        "name": "ElementaryTypeName",
                        "src": "2439:7:16"
                      }
                    ],
                    "id": 4973,
                    "name": "VariableDeclaration",
                    "src": "2439:16:16"
                  }
                ],
                "id": 4974,
                "name": "ParameterList",
                "src": "2422:34:16"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "remaining",
                      "scope": 4978,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 4975,
                        "name": "ElementaryTypeName",
                        "src": "2478:7:16"
                      }
                    ],
                    "id": 4976,
                    "name": "VariableDeclaration",
                    "src": "2478:17:16"
                  }
                ],
                "id": 4977,
                "name": "ParameterList",
                "src": "2477:19:16"
              }
            ],
            "id": 4978,
            "name": "FunctionDefinition",
            "src": "2404:93:16"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Transfer"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_from",
                      "scope": 4986,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4979,
                        "name": "ElementaryTypeName",
                        "src": "2633:7:16"
                      }
                    ],
                    "id": 4980,
                    "name": "VariableDeclaration",
                    "src": "2633:21:16"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_to",
                      "scope": 4986,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4981,
                        "name": "ElementaryTypeName",
                        "src": "2656:7:16"
                      }
                    ],
                    "id": 4982,
                    "name": "VariableDeclaration",
                    "src": "2656:19:16"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_value",
                      "scope": 4986,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 4983,
                        "name": "ElementaryTypeName",
                        "src": "2677:7:16"
                      }
                    ],
                    "id": 4984,
                    "name": "VariableDeclaration",
                    "src": "2677:14:16"
                  }
                ],
                "id": 4985,
                "name": "ParameterList",
                "src": "2632:60:16"
              }
            ],
            "id": 4986,
            "name": "EventDefinition",
            "src": "2618:75:16"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Approval"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_owner",
                      "scope": 4994,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4987,
                        "name": "ElementaryTypeName",
                        "src": "2840:7:16"
                      }
                    ],
                    "id": 4988,
                    "name": "VariableDeclaration",
                    "src": "2840:22:16"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_spender",
                      "scope": 4994,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 4989,
                        "name": "ElementaryTypeName",
                        "src": "2864:7:16"
                      }
                    ],
                    "id": 4990,
                    "name": "VariableDeclaration",
                    "src": "2864:24:16"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_value",
                      "scope": 4994,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 4991,
                        "name": "ElementaryTypeName",
                        "src": "2890:7:16"
                      }
                    ],
                    "id": 4992,
                    "name": "VariableDeclaration",
                    "src": "2890:14:16"
                  }
                ],
                "id": 4993,
                "name": "ParameterList",
                "src": "2839:66:16"
              }
            ],
            "id": 4994,
            "name": "EventDefinition",
            "src": "2825:81:16"
          }
        ],
        "id": 4995,
        "name": "ContractDefinition",
        "src": "200:2708:16"
      }
    ],
    "id": 4996,
    "name": "SourceUnit",
    "src": "141:2768:16"
  },
  "networks": {},
  "schemaVersion": "1.0.0",
  "updatedAt": "2018-01-31T14:00:14.091Z"
};