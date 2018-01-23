/* eslint-disable */

export default {
    "contractName": "iERC20Token",
    "abi": [
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
    "source": "// Abstract contract for the full ERC 20 Token standard\n// https://github.com/ConsenSys/Tokens\n// https://github.com/ethereum/EIPs/issues/20\npragma solidity ^0.4.17;\n\n\n/// @title iERC20Token contract\ncontract iERC20Token {\n\n    // FIELDS\n\n    \n    uint256 public totalSupply = 0;\n\n    // NON-CONSTANT METHODS\n\n    /// @dev send `_value` tokens to `_to` address/wallet from `msg.sender`.\n    /// @param _to The address of the recipient.\n    /// @param _value The amount of token to be transferred.\n    /// @return Whether the transfer was successful or not.\n    function transfer(address _to, uint256 _value) public returns (bool success);\n\n    /// @dev send `_value` token to `_to` from `_from` on the condition it is approved by `_from`\n    /// @param _from The address of the sender\n    /// @param _to The address of the recipient\n    /// @param _value The amount of token to be transferred\n    /// @return Whether the transfer was successful or not\n    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success);\n\n    /// @dev `msg.sender` approves `_spender` to spend `_value` tokens.\n    /// @param _spender The address of the account able to transfer the tokens.\n    /// @param _value The amount of tokens to be approved for transfer.\n    /// @return Whether the approval was successful or not.\n    function approve(address _spender, uint256 _value) public returns (bool success);\n\n    // CONSTANT METHODS\n\n    /** @dev Checks the balance of an address without changing the state of the blockchain.\n      * @param _owner The address to check.\n      * @return balance An unsigned integer representing the token balance of the address.\n      */\n    function balanceOf(address _owner) public view returns (uint256 balance);\n\n    /** @dev Checks for the balance of the tokens of that which the owner had approved another address owner to spend.\n      * @param _owner The address of the token owner.\n      * @param _spender The address of the allowed spender.\n      * @return remaining An unsigned integer representing the remaining approved tokens.\n      */\n    function allowance(address _owner, address _spender) public view returns (uint256 remaining);\n\n\n    // EVENTS\n\n    // An event triggered when a transfer of tokens is made from a _from address to a _to address.\n    event Transfer(address indexed _from, address indexed _to, uint256 _value);\n    // An event triggered when an owner of tokens successfully approves another address to spend a specified amount of tokens.\n    event Approval(address indexed _owner, address indexed _spender, uint256 _value);\n}\n",
    "sourcePath": "/Users/najienka/Desktop/populous-smartcontracts/contracts/iERC20Token.sol",
    "ast": {
      "attributes": {
        "absolutePath": "/Users/najienka/Desktop/populous-smartcontracts/contracts/iERC20Token.sol",
        "exportedSymbols": {
          "iERC20Token": [
            4887
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
          "id": 4822,
          "name": "PragmaDirective",
          "src": "141:24:15"
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
              4887
            ],
            "name": "iERC20Token",
            "scope": 4888
          },
          "children": [
            {
              "attributes": {
                "constant": false,
                "name": "totalSupply",
                "scope": 4887,
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
                  "id": 4823,
                  "name": "ElementaryTypeName",
                  "src": "248:7:15"
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
                  "id": 4824,
                  "name": "Literal",
                  "src": "277:1:15"
                }
              ],
              "id": 4825,
              "name": "VariableDeclaration",
              "src": "248:30:15"
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
                "scope": 4887,
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
                        "scope": 4834,
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
                          "id": 4826,
                          "name": "ElementaryTypeName",
                          "src": "579:7:15"
                        }
                      ],
                      "id": 4827,
                      "name": "VariableDeclaration",
                      "src": "579:11:15"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "_value",
                        "scope": 4834,
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
                          "id": 4828,
                          "name": "ElementaryTypeName",
                          "src": "592:7:15"
                        }
                      ],
                      "id": 4829,
                      "name": "VariableDeclaration",
                      "src": "592:14:15"
                    }
                  ],
                  "id": 4830,
                  "name": "ParameterList",
                  "src": "578:29:15"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "success",
                        "scope": 4834,
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
                          "id": 4831,
                          "name": "ElementaryTypeName",
                          "src": "624:4:15"
                        }
                      ],
                      "id": 4832,
                      "name": "VariableDeclaration",
                      "src": "624:12:15"
                    }
                  ],
                  "id": 4833,
                  "name": "ParameterList",
                  "src": "623:14:15"
                }
              ],
              "id": 4834,
              "name": "FunctionDefinition",
              "src": "561:77:15"
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
                "scope": 4887,
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
                        "scope": 4845,
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
                          "id": 4835,
                          "name": "ElementaryTypeName",
                          "src": "978:7:15"
                        }
                      ],
                      "id": 4836,
                      "name": "VariableDeclaration",
                      "src": "978:13:15"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "_to",
                        "scope": 4845,
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
                          "id": 4837,
                          "name": "ElementaryTypeName",
                          "src": "993:7:15"
                        }
                      ],
                      "id": 4838,
                      "name": "VariableDeclaration",
                      "src": "993:11:15"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "_value",
                        "scope": 4845,
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
                          "id": 4839,
                          "name": "ElementaryTypeName",
                          "src": "1006:7:15"
                        }
                      ],
                      "id": 4840,
                      "name": "VariableDeclaration",
                      "src": "1006:14:15"
                    }
                  ],
                  "id": 4841,
                  "name": "ParameterList",
                  "src": "977:44:15"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "success",
                        "scope": 4845,
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
                          "id": 4842,
                          "name": "ElementaryTypeName",
                          "src": "1038:4:15"
                        }
                      ],
                      "id": 4843,
                      "name": "VariableDeclaration",
                      "src": "1038:12:15"
                    }
                  ],
                  "id": 4844,
                  "name": "ParameterList",
                  "src": "1037:14:15"
                }
              ],
              "id": 4845,
              "name": "FunctionDefinition",
              "src": "956:96:15"
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
                "scope": 4887,
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
                        "scope": 4854,
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
                          "id": 4846,
                          "name": "ElementaryTypeName",
                          "src": "1359:7:15"
                        }
                      ],
                      "id": 4847,
                      "name": "VariableDeclaration",
                      "src": "1359:16:15"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "_value",
                        "scope": 4854,
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
                          "id": 4848,
                          "name": "ElementaryTypeName",
                          "src": "1377:7:15"
                        }
                      ],
                      "id": 4849,
                      "name": "VariableDeclaration",
                      "src": "1377:14:15"
                    }
                  ],
                  "id": 4850,
                  "name": "ParameterList",
                  "src": "1358:34:15"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "success",
                        "scope": 4854,
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
                          "id": 4851,
                          "name": "ElementaryTypeName",
                          "src": "1409:4:15"
                        }
                      ],
                      "id": 4852,
                      "name": "VariableDeclaration",
                      "src": "1409:12:15"
                    }
                  ],
                  "id": 4853,
                  "name": "ParameterList",
                  "src": "1408:14:15"
                }
              ],
              "id": 4854,
              "name": "FunctionDefinition",
              "src": "1342:81:15"
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
                "scope": 4887,
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
                        "scope": 4861,
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
                          "id": 4855,
                          "name": "ElementaryTypeName",
                          "src": "1709:7:15"
                        }
                      ],
                      "id": 4856,
                      "name": "VariableDeclaration",
                      "src": "1709:14:15"
                    }
                  ],
                  "id": 4857,
                  "name": "ParameterList",
                  "src": "1708:16:15"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "balance",
                        "scope": 4861,
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
                          "id": 4858,
                          "name": "ElementaryTypeName",
                          "src": "1746:7:15"
                        }
                      ],
                      "id": 4859,
                      "name": "VariableDeclaration",
                      "src": "1746:15:15"
                    }
                  ],
                  "id": 4860,
                  "name": "ParameterList",
                  "src": "1745:17:15"
                }
              ],
              "id": 4861,
              "name": "FunctionDefinition",
              "src": "1690:73:15"
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
                "scope": 4887,
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
                        "scope": 4870,
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
                          "id": 4862,
                          "name": "ElementaryTypeName",
                          "src": "2120:7:15"
                        }
                      ],
                      "id": 4863,
                      "name": "VariableDeclaration",
                      "src": "2120:14:15"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "name": "_spender",
                        "scope": 4870,
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
                          "id": 4864,
                          "name": "ElementaryTypeName",
                          "src": "2136:7:15"
                        }
                      ],
                      "id": 4865,
                      "name": "VariableDeclaration",
                      "src": "2136:16:15"
                    }
                  ],
                  "id": 4866,
                  "name": "ParameterList",
                  "src": "2119:34:15"
                },
                {
                  "children": [
                    {
                      "attributes": {
                        "constant": false,
                        "name": "remaining",
                        "scope": 4870,
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
                          "id": 4867,
                          "name": "ElementaryTypeName",
                          "src": "2175:7:15"
                        }
                      ],
                      "id": 4868,
                      "name": "VariableDeclaration",
                      "src": "2175:17:15"
                    }
                  ],
                  "id": 4869,
                  "name": "ParameterList",
                  "src": "2174:19:15"
                }
              ],
              "id": 4870,
              "name": "FunctionDefinition",
              "src": "2101:93:15"
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
                        "scope": 4878,
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
                          "id": 4871,
                          "name": "ElementaryTypeName",
                          "src": "2330:7:15"
                        }
                      ],
                      "id": 4872,
                      "name": "VariableDeclaration",
                      "src": "2330:21:15"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": true,
                        "name": "_to",
                        "scope": 4878,
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
                          "id": 4873,
                          "name": "ElementaryTypeName",
                          "src": "2353:7:15"
                        }
                      ],
                      "id": 4874,
                      "name": "VariableDeclaration",
                      "src": "2353:19:15"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "name": "_value",
                        "scope": 4878,
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
                          "id": 4875,
                          "name": "ElementaryTypeName",
                          "src": "2374:7:15"
                        }
                      ],
                      "id": 4876,
                      "name": "VariableDeclaration",
                      "src": "2374:14:15"
                    }
                  ],
                  "id": 4877,
                  "name": "ParameterList",
                  "src": "2329:60:15"
                }
              ],
              "id": 4878,
              "name": "EventDefinition",
              "src": "2315:75:15"
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
                        "scope": 4886,
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
                          "id": 4879,
                          "name": "ElementaryTypeName",
                          "src": "2537:7:15"
                        }
                      ],
                      "id": 4880,
                      "name": "VariableDeclaration",
                      "src": "2537:22:15"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": true,
                        "name": "_spender",
                        "scope": 4886,
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
                          "id": 4881,
                          "name": "ElementaryTypeName",
                          "src": "2561:7:15"
                        }
                      ],
                      "id": 4882,
                      "name": "VariableDeclaration",
                      "src": "2561:24:15"
                    },
                    {
                      "attributes": {
                        "constant": false,
                        "indexed": false,
                        "name": "_value",
                        "scope": 4886,
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
                          "id": 4883,
                          "name": "ElementaryTypeName",
                          "src": "2587:7:15"
                        }
                      ],
                      "id": 4884,
                      "name": "VariableDeclaration",
                      "src": "2587:14:15"
                    }
                  ],
                  "id": 4885,
                  "name": "ParameterList",
                  "src": "2536:66:15"
                }
              ],
              "id": 4886,
              "name": "EventDefinition",
              "src": "2522:81:15"
            }
          ],
          "id": 4887,
          "name": "ContractDefinition",
          "src": "200:2405:15"
        }
      ],
      "id": 4888,
      "name": "SourceUnit",
      "src": "141:2465:15"
    },
    "networks": {},
    "schemaVersion": "1.0.0",
    "updatedAt": "2018-01-22T11:24:39.056Z"
  }