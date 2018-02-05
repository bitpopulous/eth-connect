/* eslint-disable */

export default {
  "contractName": "CurrencyToken",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "amount",
          "type": "uint256"
        },
        {
          "name": "from",
          "type": "address"
        }
      ],
      "name": "destroyTokensFrom",
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
      "constant": false,
      "inputs": [
        {
          "name": "_accessManager",
          "type": "address"
        }
      ],
      "name": "updateAccessManager",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
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
      "constant": false,
      "inputs": [
        {
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "destroyTokens",
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
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mintTokens",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
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
      "constant": true,
      "inputs": [],
      "name": "AM",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_accessManager",
          "type": "address"
        },
        {
          "name": "_tokenName",
          "type": "bytes32"
        },
        {
          "name": "_decimalUnits",
          "type": "uint8"
        },
        {
          "name": "_tokenSymbol",
          "type": "bytes32"
        }
      ],
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
  "bytecode": "0x606060405260008055341561001357600080fd5b604051608080610c1d8339810160405280805191906020018051919060200180519190602001805160068054600160a060020a031916600160a060020a03979097169690961790955550506001919091556002805460ff191660ff909216919091179055600355610b94806100896000396000f300606060405236156100ca5763ffffffff60e060020a6000350416630156b32381146100cf57806302ab72c41461010557806306fdde0314610126578063095ea7b31461014b57806318160ddd1461016d57806323b872dd1461018057806327e235e3146101a8578063313ce567146101c75780635c658165146101f057806367fbd2891461021557806370a082311461022b57806395d89b411461024a57806397304ced1461025d578063a9059cbb14610273578063dd62ed3e14610295578063f7f01b4b146102ba575b600080fd5b34156100da57600080fd5b6100f1600435600160a060020a03602435166102e9565b604051901515815260200160405180910390f35b341561011057600080fd5b610124600160a060020a03600435166103ed565b005b341561013157600080fd5b61013961049e565b60405190815260200160405180910390f35b341561015657600080fd5b6100f1600160a060020a03600435166024356104a4565b341561017857600080fd5b610139610510565b341561018b57600080fd5b6100f1600160a060020a0360043581169060243516604435610516565b34156101b357600080fd5b610139600160a060020a036004351661061c565b34156101d257600080fd5b6101da61062e565b60405160ff909116815260200160405180910390f35b34156101fb57600080fd5b610139600160a060020a0360043581169060243516610637565b341561022057600080fd5b6100f1600435610654565b341561023657600080fd5b610139600160a060020a0360043516610898565b341561025557600080fd5b6101396108b3565b341561026857600080fd5b6101246004356108b9565b341561027e57600080fd5b6100f1600160a060020a0360043516602435610a64565b34156102a057600080fd5b610139600160a060020a0360043581169060243516610af8565b34156102c557600080fd5b6102cd610b23565b604051600160a060020a03909116815260200160405180910390f35b600654600090600160a060020a03166305fd22d033836040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561034457600080fd5b6102c65a03f1151561035557600080fd5b50505060405180511515600114905061036d57600080fd5b600160a060020a03821660009081526004602052604090205483901015610396575060006103e7565b600160a060020a0382166000908152600460205260409020546103b99084610b32565b600160a060020a038316600090815260046020526040812091909155546103e09084610b32565b6000555060015b92915050565b600654600160a060020a031663fda089583360006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561044657600080fd5b6102c65a03f1151561045757600080fd5b50505060405180511515600114905061046f57600080fd5b6006805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60015481565b600160a060020a03338116600081815260056020908152604080832094871680845294909152808220859055909291907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a350600192915050565b60005481565b600160a060020a03808416600081815260056020908152604080832033909516835293815283822054928252600490529182205483901080159061055a5750828110155b151561056557600080fd5b600160a060020a03808516600090815260046020526040808220805487019055918716815220805484900390556000198110156105ca57600160a060020a03808616600090815260056020908152604080832033909416835292905220805484900390555b83600160a060020a031685600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8560405190815260200160405180910390a3506001949350505050565b60046020526000908152604090205481565b60025460ff1681565b600560209081526000928352604080842090915290825290205481565b600654600090600160a060020a03166305fd22d033836040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b15156106af57600080fd5b6102c65a03f115156106c057600080fd5b5050506040518051151560011490506106d857600080fd5b6006548290600490600090600160a060020a03166394a3760f82604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b151561072757600080fd5b6102c65a03f1151561073857600080fd5b5050506040518051600160a060020a0316825250602081019190915260400160002054101561076957506000610893565b6006546107f490600490600090600160a060020a03166394a3760f82604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b15156107ba57600080fd5b6102c65a03f115156107cb57600080fd5b5050506040518051600160a060020a031682525060208101919091526040016000205483610b32565b600654600490600090600160a060020a03166394a3760f82604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b151561084157600080fd5b6102c65a03f1151561085257600080fd5b50505060405180519050600160a060020a0316600160a060020a031681526020019081526020016000208190555061088c60005483610b32565b6000555060015b919050565b600160a060020a031660009081526004602052604090205490565b60035481565b600654600160a060020a03166305fd22d03360006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561091257600080fd5b6102c65a03f1151561092357600080fd5b50505060405180511515600114905061093b57600080fd5b6006546109c690600490600090600160a060020a03166394a3760f82604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b151561098c57600080fd5b6102c65a03f1151561099d57600080fd5b5050506040518051600160a060020a031682525060208101919091526040016000205482610b44565b600654600490600090600160a060020a03166394a3760f82604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b1515610a1357600080fd5b6102c65a03f11515610a2457600080fd5b50505060405180519050600160a060020a0316600160a060020a0316815260200190815260200160002081905550610a5e60005482610b44565b60005550565b600160a060020a03331660009081526004602052604081205482901015610a8a57600080fd5b600160a060020a033381166000818152600460205260408082208054879003905592861680825290839020805486019055917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a350600192915050565b600160a060020a03918216600090815260056020908152604080832093909416825291909152205490565b600654600160a060020a031681565b600082821115610b3e57fe5b50900390565b6000828201838110801590610b595750828110155b1515610b6157fe5b93925050505600a165627a7a723058207d62418dbbabb809494601bd5b2e644e5a27d5a01d59dad46bcb6a34a6eb38ff0029",
  "deployedBytecode": "0x606060405236156100ca5763ffffffff60e060020a6000350416630156b32381146100cf57806302ab72c41461010557806306fdde0314610126578063095ea7b31461014b57806318160ddd1461016d57806323b872dd1461018057806327e235e3146101a8578063313ce567146101c75780635c658165146101f057806367fbd2891461021557806370a082311461022b57806395d89b411461024a57806397304ced1461025d578063a9059cbb14610273578063dd62ed3e14610295578063f7f01b4b146102ba575b600080fd5b34156100da57600080fd5b6100f1600435600160a060020a03602435166102e9565b604051901515815260200160405180910390f35b341561011057600080fd5b610124600160a060020a03600435166103ed565b005b341561013157600080fd5b61013961049e565b60405190815260200160405180910390f35b341561015657600080fd5b6100f1600160a060020a03600435166024356104a4565b341561017857600080fd5b610139610510565b341561018b57600080fd5b6100f1600160a060020a0360043581169060243516604435610516565b34156101b357600080fd5b610139600160a060020a036004351661061c565b34156101d257600080fd5b6101da61062e565b60405160ff909116815260200160405180910390f35b34156101fb57600080fd5b610139600160a060020a0360043581169060243516610637565b341561022057600080fd5b6100f1600435610654565b341561023657600080fd5b610139600160a060020a0360043516610898565b341561025557600080fd5b6101396108b3565b341561026857600080fd5b6101246004356108b9565b341561027e57600080fd5b6100f1600160a060020a0360043516602435610a64565b34156102a057600080fd5b610139600160a060020a0360043581169060243516610af8565b34156102c557600080fd5b6102cd610b23565b604051600160a060020a03909116815260200160405180910390f35b600654600090600160a060020a03166305fd22d033836040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561034457600080fd5b6102c65a03f1151561035557600080fd5b50505060405180511515600114905061036d57600080fd5b600160a060020a03821660009081526004602052604090205483901015610396575060006103e7565b600160a060020a0382166000908152600460205260409020546103b99084610b32565b600160a060020a038316600090815260046020526040812091909155546103e09084610b32565b6000555060015b92915050565b600654600160a060020a031663fda089583360006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561044657600080fd5b6102c65a03f1151561045757600080fd5b50505060405180511515600114905061046f57600080fd5b6006805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b60015481565b600160a060020a03338116600081815260056020908152604080832094871680845294909152808220859055909291907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a350600192915050565b60005481565b600160a060020a03808416600081815260056020908152604080832033909516835293815283822054928252600490529182205483901080159061055a5750828110155b151561056557600080fd5b600160a060020a03808516600090815260046020526040808220805487019055918716815220805484900390556000198110156105ca57600160a060020a03808616600090815260056020908152604080832033909416835292905220805484900390555b83600160a060020a031685600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8560405190815260200160405180910390a3506001949350505050565b60046020526000908152604090205481565b60025460ff1681565b600560209081526000928352604080842090915290825290205481565b600654600090600160a060020a03166305fd22d033836040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b15156106af57600080fd5b6102c65a03f115156106c057600080fd5b5050506040518051151560011490506106d857600080fd5b6006548290600490600090600160a060020a03166394a3760f82604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b151561072757600080fd5b6102c65a03f1151561073857600080fd5b5050506040518051600160a060020a0316825250602081019190915260400160002054101561076957506000610893565b6006546107f490600490600090600160a060020a03166394a3760f82604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b15156107ba57600080fd5b6102c65a03f115156107cb57600080fd5b5050506040518051600160a060020a031682525060208101919091526040016000205483610b32565b600654600490600090600160a060020a03166394a3760f82604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b151561084157600080fd5b6102c65a03f1151561085257600080fd5b50505060405180519050600160a060020a0316600160a060020a031681526020019081526020016000208190555061088c60005483610b32565b6000555060015b919050565b600160a060020a031660009081526004602052604090205490565b60035481565b600654600160a060020a03166305fd22d03360006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561091257600080fd5b6102c65a03f1151561092357600080fd5b50505060405180511515600114905061093b57600080fd5b6006546109c690600490600090600160a060020a03166394a3760f82604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b151561098c57600080fd5b6102c65a03f1151561099d57600080fd5b5050506040518051600160a060020a031682525060208101919091526040016000205482610b44565b600654600490600090600160a060020a03166394a3760f82604051602001526040518163ffffffff1660e060020a028152600401602060405180830381600087803b1515610a1357600080fd5b6102c65a03f11515610a2457600080fd5b50505060405180519050600160a060020a0316600160a060020a0316815260200190815260200160002081905550610a5e60005482610b44565b60005550565b600160a060020a03331660009081526004602052604081205482901015610a8a57600080fd5b600160a060020a033381166000818152600460205260408082208054879003905592861680825290839020805486019055917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a350600192915050565b600160a060020a03918216600090815260056020908152604080832093909416825291909152205490565b600654600160a060020a031681565b600082821115610b3e57fe5b50900390565b6000828201838110801590610b595750828110155b1515610b6157fe5b93925050505600a165627a7a723058207d62418dbbabb809494601bd5b2e644e5a27d5a01d59dad46bcb6a34a6eb38ff0029",
  "sourceMap": "148:2760:3:-;;;277:1:16;248:30;;538:423:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1304:2:17;:34;;-1:-1:-1;;;;;;1304:34:17;-1:-1:-1;;;;;1304:34:17;;;;;;;;;;;-1:-1:-1;;;753:17:3;;;;817:8;:24;;-1:-1:-1;;817:24:3;;;;;;;;;;;894:6;:21;148:2760;;;-1:-1:-1;148:2760:3;;",
  "deployedSourceMap": "148:2760:3:-;;;;;;;-1:-1:-1;;;148:2760:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2549:357;;;;;;;;;;;;;;-1:-1:-1;;;;;2549:357:3;;;;;;;;;;;;;;;;;;;;1497:122:17;;;;;;;;;;;;-1:-1:-1;;;;;1497:122:17;;;;;284:19:16;;;;;;;;;;;;;;;;;;;;;;;;;;;1212:205:6;;;;;;;;;;;;-1:-1:-1;;;;;1212:205:6;;;;;248:30:16;;;;;;;;;;;;635:452:6;;;;;;;;;;-1:-1:-1;;;;;635:452:6;;;;;;;;;;;;238:44;;;;;;;;;;;;-1:-1:-1;;;;;238:44:6;;;355:21:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;288:64:6;;;;;;;;;;-1:-1:-1;;;;;288:64:6;;;;;;;;;;1848:366:3;;;;;;;;;;;;;;1093:113:6;;;;;;;;;;;;-1:-1:-1;;;;;1093:113:6;;;534:21:16;;;;;;;;;;;;1263:206:3;;;;;;;;;;;;;;359:270:6;;;;;;;;;;;;-1:-1:-1;;;;;359:270:6;;;;;1423:142;;;;;;;;;;-1:-1:-1;;;;;1423:142:6;;;;;;;;;;149:23:17;;;;;;;;;;;;;;;-1:-1:-1;;;;;149:23:17;;;;;;;;;;;;;;;2549:357:3;1001:2:17;;2632:12:3;;-1:-1:-1;;;;;1001:2:17;:13;1015:10;2632:12:3;1001:25:17;;;;;;;;;;-1:-1:-1;;;1001:25:17;;;-1:-1:-1;;;;;1001:25:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:33;;1030:4;1001:33;;-1:-1:-1;993:42:17;;;;;;-1:-1:-1;;;;;2660:14:3;;;;;;:8;:14;;;;;;:23;;;2656:244;;;-1:-1:-1;2706:5:3;2699:12;;2656:244;-1:-1:-1;;;;;2776:14:3;;;;;;:8;:14;;;;;;2759:40;;2792:6;2759:16;:40::i;:::-;-1:-1:-1;;;;;2742:14:3;;;;;;:8;:14;;;;;:57;;;;2844:11;2827:37;;2857:6;2827:16;:37::i;:::-;2813:11;:51;-1:-1:-1;2885:4:3;2656:244;2549:357;;;;:::o;1497:122:17:-;376:2;;-1:-1:-1;;;;;376:2:17;:11;388:10;376:2;:23;;;;;;;;;;-1:-1:-1;;;376:23:17;;;-1:-1:-1;;;;;376:23:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:31;;403:4;376:31;;-1:-1:-1;368:40:17;;;;;;1578:2;:34;;-1:-1:-1;;1578:34:17;-1:-1:-1;;;;;1578:34:17;;;;;;;;;;1497:122::o;284:19:16:-;;;;:::o;1212:205:6:-;-1:-1:-1;;;;;1311:10:6;1303:19;;1279:12;1303:19;;;:7;:19;;;;;;;;:29;;;;;;;;;;;;;:38;;;1279:12;;1303:29;:19;1351:38;;1303;;1351;;;;;;;;;;;;;-1:-1:-1;1406:4:6;1212:205;;;;:::o;248:30:16:-;;;;:::o;635:452:6:-;-1:-1:-1;;;;;761:14:6;;;717:12;761:14;;;:7;:14;;;;;;;;776:10;761:26;;;;;;;;;;;;805:15;;;:8;:15;;;;;;:25;;;;;;:48;;;847:6;834:9;:19;;805:48;797:57;;;;;;;;-1:-1:-1;;;;;864:13:6;;;;;;;:8;:13;;;;;;:23;;;;;;897:15;;;;;;:25;;;;;;;-1:-1:-1;;936:23:6;;932:90;;;-1:-1:-1;;;;;975:14:6;;;;;;;:7;:14;;;;;;;;990:10;975:26;;;;;;;;;:36;;;;;;;932:90;-1:-1:-1;;;;;1031:28:6;;;;;;;1052:6;1031:28;;;;;;;;;;;;;;-1:-1:-1;1076:4:6;;635:452;-1:-1:-1;;;;635:452:6:o;238:44::-;;;;;;;;;;;;;:::o;355:21:16:-;;;;;;:::o;288:64:6:-;;;;;;;;;;;;;;;;;;;;;;;;:::o;1848:366:3:-;1001:2:17;;1913:12:3;;-1:-1:-1;;;;;1001:2:17;:13;1015:10;1913:12:3;1001:25:17;;;;;;;;;;-1:-1:-1;;;1001:25:17;;;-1:-1:-1;;;;;1001:25:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:33;;1030:4;1001:33;;-1:-1:-1;993:42:17;;;;;;1950:2:3;;1967:6;;1941:8;;:23;;-1:-1:-1;;;;;1950:2:3;:11;1941:23;1950:13;;;;;;;-1:-1:-1;;;1950:13:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1941:23:3;;;-1:-1:-1;1941:23:3;;;;;;;;;-1:-1:-1;1941:23:3;;:32;1937:271;;;-1:-1:-1;1996:5:3;1989:12;;1937:271;2084:2;;2058:49;;2075:8;;:23;;-1:-1:-1;;;;;2084:2:3;:11;2075:23;2084:13;;;;;;;-1:-1:-1;;;2084:13:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2075:23:3;;;-1:-1:-1;2075:23:3;;;;;;;;;-1:-1:-1;2075:23:3;;2100:6;2058:16;:49::i;:::-;2041:2;;2032:8;;:23;;-1:-1:-1;;;;;2041:2:3;:11;2032:23;2041:13;;;;;;;-1:-1:-1;;;2041:13:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2032:23:3;;;-1:-1:-1;2032:23:3;;;;;;;;;-1:-1:-1;2032:23:3;;;:75;;;;2152:11;2135:37;;2165:6;2135:16;:37::i;:::-;2121:11;:51;-1:-1:-1;2193:4:3;1937:271;1848:366;;;:::o;1093:113:6:-;-1:-1:-1;;;;;1183:16:6;1149:15;1183:16;;;:8;:16;;;;;;;1093:113::o;534:21:16:-;;;;:::o;1263:206:3:-;1001:2:17;;-1:-1:-1;;;;;1001:2:17;:13;1015:10;1001:2;:25;;;;;;;;;;-1:-1:-1;;;1001:25:17;;;-1:-1:-1;;;;;1001:25:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:33;;1030:4;1001:33;;-1:-1:-1;993:42:17;;;;;;1378:2:3;;1352:49;;1369:8;;:23;;-1:-1:-1;;;;;1378:2:3;:11;1369:23;1378:13;;;;;;;-1:-1:-1;;;1378:13:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1369:23:3;;;-1:-1:-1;1369:23:3;;;;;;;;;-1:-1:-1;1369:23:3;;1394:6;1352:16;:49::i;:::-;1335:2;;1326:8;;:23;;-1:-1:-1;;;;;1335:2:3;:11;1326:23;1335:13;;;;;;;-1:-1:-1;;;1335:13:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1326:23:3;;;-1:-1:-1;1326:23:3;;;;;;;;;-1:-1:-1;1326:23:3;;;:75;;;;1442:11;1425:37;;1455:6;1425:16;:37::i;:::-;1411:11;:51;-1:-1:-1;1263:206:3:o;359:270:6:-;463:10;-1:-1:-1;;;;;454:20:6;422:12;454:20;;;:8;:20;;;;;;:30;;;;446:39;;;;;;-1:-1:-1;;;;;504:10:6;495:20;;;;;;:8;:20;;;;;;:30;;;;;;;535:13;;;;;;;;;;:23;;;;;;:13;568:33;;495:30;;568:33;;;;;;;;;;;;;-1:-1:-1;618:4:6;359:270;;;;:::o;1423:142::-;-1:-1:-1;;;;;1533:15:6;;;1497:17;1533:15;;;:7;:15;;;;;;;;:25;;;;;;;;;;;;;1423:142::o;149:23:17:-;;;-1:-1:-1;;;;;149:23:17;;:::o;849:111:10:-;905:4;926:6;;;;919:14;;;;-1:-1:-1;948:5:10;;;849:111::o;1223:135::-;1279:4;1302:5;;;1322:4;;;;;;:12;;;1333:1;1330;:4;;1322:12;1315:20;;;;;;1350:1;1223:135;-1:-1:-1;;;1223:135:10:o",
  "source": "pragma solidity ^0.4.17;\n\nimport \"./ERC20Token.sol\";\nimport \"./SafeMath.sol\";\nimport \"./withAccessManager.sol\";\n\n\n/// @title CurrencyToken contract\ncontract CurrencyToken is ERC20Token, withAccessManager {\n\n    // NON-CONSTANT METHODS\n    \n    /** @dev Creates a new currency/token.\n      * @param _accessManager The accessManage contract address.\n      * @param _decimalUnits The decimal units/places the token can have.\n      * @param _tokenSymbol The token's symbol, e.g., GBP.\n      * @return p The calculated perimeter.\n      */\n    function CurrencyToken (\n        address _accessManager,\n        bytes32 _tokenName,\n        uint8 _decimalUnits,\n        bytes32 _tokenSymbol)\n        public\n        withAccessManager(_accessManager)\n    {\n        name = _tokenName; // Set the name for display purposes\n        decimals = _decimalUnits; // Amount of decimals for display purposes\n        symbol = _tokenSymbol; // Set the symbol for display purposes\n    }\n\n    /** @dev Mints/Generates a specified amount of tokens \n      * @dev The method uses a modifier from withAccessManager contract to only permit populous to use it.\n      * @dev The method uses SafeMath to carry out safe additions.\n      * @param amount The amount of tokens to create.\n      */\n    function mintTokens(uint amount) public onlyPopulous {\n        balances[AM.populous()] = SafeMath.safeAdd(balances[AM.populous()], amount);\n        totalSupply = SafeMath.safeAdd(totalSupply, amount);\n    }\n\n    //Note.. Need to emit event, Pokens destroyed... from system\n    /** @dev Destroys a specified amount of tokens \n      * @dev The method uses a modifier from withAccessManager contract to only permit populous to use it.\n      * @dev The method uses SafeMath to carry out safe token deductions/subtraction.\n      * @param amount The amount of tokens to create.\n      */\n    function destroyTokens(uint amount) public onlyPopulous returns (bool success) {\n        if (balances[AM.populous()] < amount) {\n            return false;\n        } else {\n            balances[AM.populous()] = SafeMath.safeSub(balances[AM.populous()], amount);\n            totalSupply = SafeMath.safeSub(totalSupply, amount);\n            return true;\n        }\n    }\n\n     \n      /** @dev Destroys a specified amount of tokens, from a user.\n      * @dev The method uses a modifier from withAccessManager contract to only permit populous to use it.\n      * @dev The method uses SafeMath to carry out safe token deductions/subtraction.\n      * @param amount The amount of tokens to create.\n      */\n    function destroyTokensFrom(uint amount, address from) public onlyPopulous returns (bool success) {\n        if (balances[from] < amount) {\n            return false;\n        } else {\n            balances[from] = SafeMath.safeSub(balances[from], amount);\n            totalSupply = SafeMath.safeSub(totalSupply, amount);\n            return true;\n        }\n    }\n}",
  "sourcePath": "/Users/najienka/Desktop/populous-smartcontracts/contracts/CurrencyToken.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/najienka/Desktop/populous-smartcontracts/contracts/CurrencyToken.sol",
      "exportedSymbols": {
        "CurrencyToken": [
          1766
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
        "id": 1607,
        "name": "PragmaDirective",
        "src": "0:24:3"
      },
      {
        "attributes": {
          "SourceUnit": 2626,
          "absolutePath": "/Users/najienka/Desktop/populous-smartcontracts/contracts/ERC20Token.sol",
          "file": "./ERC20Token.sol",
          "scope": 1767,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1608,
        "name": "ImportDirective",
        "src": "26:26:3"
      },
      {
        "attributes": {
          "SourceUnit": 4262,
          "absolutePath": "/Users/najienka/Desktop/populous-smartcontracts/contracts/SafeMath.sol",
          "file": "./SafeMath.sol",
          "scope": 1767,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1609,
        "name": "ImportDirective",
        "src": "53:24:3"
      },
      {
        "attributes": {
          "SourceUnit": 5078,
          "absolutePath": "/Users/najienka/Desktop/populous-smartcontracts/contracts/withAccessManager.sol",
          "file": "./withAccessManager.sol",
          "scope": 1767,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1610,
        "name": "ImportDirective",
        "src": "78:33:3"
      },
      {
        "attributes": {
          "contractDependencies": [
            2625,
            4995,
            5077
          ],
          "contractKind": "contract",
          "documentation": "@title CurrencyToken contract",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            1766,
            5077,
            2625,
            4995
          ],
          "name": "CurrencyToken",
          "scope": 1767
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
                "id": 1611,
                "name": "UserDefinedTypeName",
                "src": "174:10:3"
              }
            ],
            "id": 1612,
            "name": "InheritanceSpecifier",
            "src": "174:10:3"
          },
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
                  "name": "withAccessManager",
                  "referencedDeclaration": 5077,
                  "type": "contract withAccessManager"
                },
                "id": 1613,
                "name": "UserDefinedTypeName",
                "src": "186:17:3"
              }
            ],
            "id": 1614,
            "name": "InheritanceSpecifier",
            "src": "186:17:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "name": "CurrencyToken",
              "payable": false,
              "scope": 1766,
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
                      "name": "_accessManager",
                      "scope": 1641,
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
                        "id": 1615,
                        "name": "ElementaryTypeName",
                        "src": "571:7:3"
                      }
                    ],
                    "id": 1616,
                    "name": "VariableDeclaration",
                    "src": "571:22:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenName",
                      "scope": 1641,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 1617,
                        "name": "ElementaryTypeName",
                        "src": "603:7:3"
                      }
                    ],
                    "id": 1618,
                    "name": "VariableDeclaration",
                    "src": "603:18:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_decimalUnits",
                      "scope": 1641,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint8",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint8",
                          "type": "uint8"
                        },
                        "id": 1619,
                        "name": "ElementaryTypeName",
                        "src": "631:5:3"
                      }
                    ],
                    "id": 1620,
                    "name": "VariableDeclaration",
                    "src": "631:19:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenSymbol",
                      "scope": 1641,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 1621,
                        "name": "ElementaryTypeName",
                        "src": "660:7:3"
                      }
                    ],
                    "id": 1622,
                    "name": "VariableDeclaration",
                    "src": "660:20:3"
                  }
                ],
                "id": 1623,
                "name": "ParameterList",
                "src": "561:120:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1627,
                "name": "ParameterList",
                "src": "743:0:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 5077,
                      "type": "type(contract withAccessManager)",
                      "value": "withAccessManager"
                    },
                    "id": 1624,
                    "name": "Identifier",
                    "src": "705:17:3"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1616,
                      "type": "address",
                      "value": "_accessManager"
                    },
                    "id": 1625,
                    "name": "Identifier",
                    "src": "723:14:3"
                  }
                ],
                "id": 1626,
                "name": "ModifierInvocation",
                "src": "705:33:3"
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
                              "referencedDeclaration": 4929,
                              "type": "bytes32",
                              "value": "name"
                            },
                            "id": 1628,
                            "name": "Identifier",
                            "src": "753:4:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1618,
                              "type": "bytes32",
                              "value": "_tokenName"
                            },
                            "id": 1629,
                            "name": "Identifier",
                            "src": "760:10:3"
                          }
                        ],
                        "id": 1630,
                        "name": "Assignment",
                        "src": "753:17:3"
                      }
                    ],
                    "id": 1631,
                    "name": "ExpressionStatement",
                    "src": "753:17:3"
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
                              "referencedDeclaration": 4931,
                              "type": "uint8",
                              "value": "decimals"
                            },
                            "id": 1632,
                            "name": "Identifier",
                            "src": "817:8:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1620,
                              "type": "uint8",
                              "value": "_decimalUnits"
                            },
                            "id": 1633,
                            "name": "Identifier",
                            "src": "828:13:3"
                          }
                        ],
                        "id": 1634,
                        "name": "Assignment",
                        "src": "817:24:3"
                      }
                    ],
                    "id": 1635,
                    "name": "ExpressionStatement",
                    "src": "817:24:3"
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
                              "referencedDeclaration": 4933,
                              "type": "bytes32",
                              "value": "symbol"
                            },
                            "id": 1636,
                            "name": "Identifier",
                            "src": "894:6:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1622,
                              "type": "bytes32",
                              "value": "_tokenSymbol"
                            },
                            "id": 1637,
                            "name": "Identifier",
                            "src": "903:12:3"
                          }
                        ],
                        "id": 1638,
                        "name": "Assignment",
                        "src": "894:21:3"
                      }
                    ],
                    "id": 1639,
                    "name": "ExpressionStatement",
                    "src": "894:21:3"
                  }
                ],
                "id": 1640,
                "name": "Block",
                "src": "743:218:3"
              }
            ],
            "id": 1641,
            "name": "FunctionDefinition",
            "src": "538:423:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "mintTokens",
              "payable": false,
              "scope": 1766,
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
                      "scope": 1673,
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
                        "id": 1642,
                        "name": "ElementaryTypeName",
                        "src": "1283:4:3"
                      }
                    ],
                    "id": 1643,
                    "name": "VariableDeclaration",
                    "src": "1283:11:3"
                  }
                ],
                "id": 1644,
                "name": "ParameterList",
                "src": "1282:13:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1647,
                "name": "ParameterList",
                "src": "1316:0:3"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 5050,
                      "type": "modifier ()",
                      "value": "onlyPopulous"
                    },
                    "id": 1645,
                    "name": "Identifier",
                    "src": "1303:12:3"
                  }
                ],
                "id": 1646,
                "name": "ModifierInvocation",
                "src": "1303:12:3"
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
                                "id": 1648,
                                "name": "Identifier",
                                "src": "1326:8:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    null
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        null
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "populous",
                                      "referencedDeclaration": 5,
                                      "type": "function () view external returns (address)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 5000,
                                          "type": "contract AccessManager",
                                          "value": "AM"
                                        },
                                        "id": 1649,
                                        "name": "Identifier",
                                        "src": "1335:2:3"
                                      }
                                    ],
                                    "id": 1650,
                                    "name": "MemberAccess",
                                    "src": "1335:11:3"
                                  }
                                ],
                                "id": 1651,
                                "name": "FunctionCall",
                                "src": "1335:13:3"
                              }
                            ],
                            "id": 1652,
                            "name": "IndexAccess",
                            "src": "1326:23:3"
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
                                    "id": 1653,
                                    "name": "Identifier",
                                    "src": "1352:8:3"
                                  }
                                ],
                                "id": 1654,
                                "name": "MemberAccess",
                                "src": "1352:16:3"
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
                                    "id": 1655,
                                    "name": "Identifier",
                                    "src": "1369:8:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "arguments": [
                                        null
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "address",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            null
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "populous",
                                          "referencedDeclaration": 5,
                                          "type": "function () view external returns (address)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 5000,
                                              "type": "contract AccessManager",
                                              "value": "AM"
                                            },
                                            "id": 1656,
                                            "name": "Identifier",
                                            "src": "1378:2:3"
                                          }
                                        ],
                                        "id": 1657,
                                        "name": "MemberAccess",
                                        "src": "1378:11:3"
                                      }
                                    ],
                                    "id": 1658,
                                    "name": "FunctionCall",
                                    "src": "1378:13:3"
                                  }
                                ],
                                "id": 1659,
                                "name": "IndexAccess",
                                "src": "1369:23:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1643,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 1660,
                                "name": "Identifier",
                                "src": "1394:6:3"
                              }
                            ],
                            "id": 1661,
                            "name": "FunctionCall",
                            "src": "1352:49:3"
                          }
                        ],
                        "id": 1662,
                        "name": "Assignment",
                        "src": "1326:75:3"
                      }
                    ],
                    "id": 1663,
                    "name": "ExpressionStatement",
                    "src": "1326:75:3"
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
                            "id": 1664,
                            "name": "Identifier",
                            "src": "1411:11:3"
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
                                    "id": 1665,
                                    "name": "Identifier",
                                    "src": "1425:8:3"
                                  }
                                ],
                                "id": 1666,
                                "name": "MemberAccess",
                                "src": "1425:16:3"
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
                                "id": 1667,
                                "name": "Identifier",
                                "src": "1442:11:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1643,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 1668,
                                "name": "Identifier",
                                "src": "1455:6:3"
                              }
                            ],
                            "id": 1669,
                            "name": "FunctionCall",
                            "src": "1425:37:3"
                          }
                        ],
                        "id": 1670,
                        "name": "Assignment",
                        "src": "1411:51:3"
                      }
                    ],
                    "id": 1671,
                    "name": "ExpressionStatement",
                    "src": "1411:51:3"
                  }
                ],
                "id": 1672,
                "name": "Block",
                "src": "1316:153:3"
              }
            ],
            "id": 1673,
            "name": "FunctionDefinition",
            "src": "1263:206:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "destroyTokens",
              "payable": false,
              "scope": 1766,
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
                      "scope": 1721,
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
                        "id": 1674,
                        "name": "ElementaryTypeName",
                        "src": "1871:4:3"
                      }
                    ],
                    "id": 1675,
                    "name": "VariableDeclaration",
                    "src": "1871:11:3"
                  }
                ],
                "id": 1676,
                "name": "ParameterList",
                "src": "1870:13:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "success",
                      "scope": 1721,
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
                        "id": 1679,
                        "name": "ElementaryTypeName",
                        "src": "1913:4:3"
                      }
                    ],
                    "id": 1680,
                    "name": "VariableDeclaration",
                    "src": "1913:12:3"
                  }
                ],
                "id": 1681,
                "name": "ParameterList",
                "src": "1912:14:3"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 5050,
                      "type": "modifier ()",
                      "value": "onlyPopulous"
                    },
                    "id": 1677,
                    "name": "Identifier",
                    "src": "1891:12:3"
                  }
                ],
                "id": 1678,
                "name": "ModifierInvocation",
                "src": "1891:12:3"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "<",
                          "type": "bool"
                        },
                        "children": [
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
                                "id": 1682,
                                "name": "Identifier",
                                "src": "1941:8:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    null
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        null
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "populous",
                                      "referencedDeclaration": 5,
                                      "type": "function () view external returns (address)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 5000,
                                          "type": "contract AccessManager",
                                          "value": "AM"
                                        },
                                        "id": 1683,
                                        "name": "Identifier",
                                        "src": "1950:2:3"
                                      }
                                    ],
                                    "id": 1684,
                                    "name": "MemberAccess",
                                    "src": "1950:11:3"
                                  }
                                ],
                                "id": 1685,
                                "name": "FunctionCall",
                                "src": "1950:13:3"
                              }
                            ],
                            "id": 1686,
                            "name": "IndexAccess",
                            "src": "1941:23:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1675,
                              "type": "uint256",
                              "value": "amount"
                            },
                            "id": 1687,
                            "name": "Identifier",
                            "src": "1967:6:3"
                          }
                        ],
                        "id": 1688,
                        "name": "BinaryOperation",
                        "src": "1941:32:3"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 1681
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "66616c7365",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "bool",
                                  "type": "bool",
                                  "value": "false"
                                },
                                "id": 1689,
                                "name": "Literal",
                                "src": "1996:5:3"
                              }
                            ],
                            "id": 1690,
                            "name": "Return",
                            "src": "1989:12:3"
                          }
                        ],
                        "id": 1691,
                        "name": "Block",
                        "src": "1975:37:3"
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
                                        "id": 1692,
                                        "name": "Identifier",
                                        "src": "2032:8:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "arguments": [
                                            null
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "isStructConstructorCall": false,
                                          "lValueRequested": false,
                                          "names": [
                                            null
                                          ],
                                          "type": "address",
                                          "type_conversion": false
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": [
                                                null
                                              ],
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "member_name": "populous",
                                              "referencedDeclaration": 5,
                                              "type": "function () view external returns (address)"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 5000,
                                                  "type": "contract AccessManager",
                                                  "value": "AM"
                                                },
                                                "id": 1693,
                                                "name": "Identifier",
                                                "src": "2041:2:3"
                                              }
                                            ],
                                            "id": 1694,
                                            "name": "MemberAccess",
                                            "src": "2041:11:3"
                                          }
                                        ],
                                        "id": 1695,
                                        "name": "FunctionCall",
                                        "src": "2041:13:3"
                                      }
                                    ],
                                    "id": 1696,
                                    "name": "IndexAccess",
                                    "src": "2032:23:3"
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
                                          "member_name": "safeSub",
                                          "referencedDeclaration": 4196,
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
                                            "id": 1697,
                                            "name": "Identifier",
                                            "src": "2058:8:3"
                                          }
                                        ],
                                        "id": 1698,
                                        "name": "MemberAccess",
                                        "src": "2058:16:3"
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
                                            "id": 1699,
                                            "name": "Identifier",
                                            "src": "2075:8:3"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "arguments": [
                                                null
                                              ],
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "isStructConstructorCall": false,
                                              "lValueRequested": false,
                                              "names": [
                                                null
                                              ],
                                              "type": "address",
                                              "type_conversion": false
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": [
                                                    null
                                                  ],
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "member_name": "populous",
                                                  "referencedDeclaration": 5,
                                                  "type": "function () view external returns (address)"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 5000,
                                                      "type": "contract AccessManager",
                                                      "value": "AM"
                                                    },
                                                    "id": 1700,
                                                    "name": "Identifier",
                                                    "src": "2084:2:3"
                                                  }
                                                ],
                                                "id": 1701,
                                                "name": "MemberAccess",
                                                "src": "2084:11:3"
                                              }
                                            ],
                                            "id": 1702,
                                            "name": "FunctionCall",
                                            "src": "2084:13:3"
                                          }
                                        ],
                                        "id": 1703,
                                        "name": "IndexAccess",
                                        "src": "2075:23:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1675,
                                          "type": "uint256",
                                          "value": "amount"
                                        },
                                        "id": 1704,
                                        "name": "Identifier",
                                        "src": "2100:6:3"
                                      }
                                    ],
                                    "id": 1705,
                                    "name": "FunctionCall",
                                    "src": "2058:49:3"
                                  }
                                ],
                                "id": 1706,
                                "name": "Assignment",
                                "src": "2032:75:3"
                              }
                            ],
                            "id": 1707,
                            "name": "ExpressionStatement",
                            "src": "2032:75:3"
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
                                    "id": 1708,
                                    "name": "Identifier",
                                    "src": "2121:11:3"
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
                                          "member_name": "safeSub",
                                          "referencedDeclaration": 4196,
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
                                            "id": 1709,
                                            "name": "Identifier",
                                            "src": "2135:8:3"
                                          }
                                        ],
                                        "id": 1710,
                                        "name": "MemberAccess",
                                        "src": "2135:16:3"
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
                                        "id": 1711,
                                        "name": "Identifier",
                                        "src": "2152:11:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1675,
                                          "type": "uint256",
                                          "value": "amount"
                                        },
                                        "id": 1712,
                                        "name": "Identifier",
                                        "src": "2165:6:3"
                                      }
                                    ],
                                    "id": 1713,
                                    "name": "FunctionCall",
                                    "src": "2135:37:3"
                                  }
                                ],
                                "id": 1714,
                                "name": "Assignment",
                                "src": "2121:51:3"
                              }
                            ],
                            "id": 1715,
                            "name": "ExpressionStatement",
                            "src": "2121:51:3"
                          },
                          {
                            "attributes": {
                              "functionReturnParameters": 1681
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "74727565",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "bool",
                                  "type": "bool",
                                  "value": "true"
                                },
                                "id": 1716,
                                "name": "Literal",
                                "src": "2193:4:3"
                              }
                            ],
                            "id": 1717,
                            "name": "Return",
                            "src": "2186:11:3"
                          }
                        ],
                        "id": 1718,
                        "name": "Block",
                        "src": "2018:190:3"
                      }
                    ],
                    "id": 1719,
                    "name": "IfStatement",
                    "src": "1937:271:3"
                  }
                ],
                "id": 1720,
                "name": "Block",
                "src": "1927:287:3"
              }
            ],
            "id": 1721,
            "name": "FunctionDefinition",
            "src": "1848:366:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "destroyTokensFrom",
              "payable": false,
              "scope": 1766,
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
                      "scope": 1765,
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
                        "id": 1722,
                        "name": "ElementaryTypeName",
                        "src": "2576:4:3"
                      }
                    ],
                    "id": 1723,
                    "name": "VariableDeclaration",
                    "src": "2576:11:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "from",
                      "scope": 1765,
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
                        "id": 1724,
                        "name": "ElementaryTypeName",
                        "src": "2589:7:3"
                      }
                    ],
                    "id": 1725,
                    "name": "VariableDeclaration",
                    "src": "2589:12:3"
                  }
                ],
                "id": 1726,
                "name": "ParameterList",
                "src": "2575:27:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "success",
                      "scope": 1765,
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
                        "id": 1729,
                        "name": "ElementaryTypeName",
                        "src": "2632:4:3"
                      }
                    ],
                    "id": 1730,
                    "name": "VariableDeclaration",
                    "src": "2632:12:3"
                  }
                ],
                "id": 1731,
                "name": "ParameterList",
                "src": "2631:14:3"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 5050,
                      "type": "modifier ()",
                      "value": "onlyPopulous"
                    },
                    "id": 1727,
                    "name": "Identifier",
                    "src": "2610:12:3"
                  }
                ],
                "id": 1728,
                "name": "ModifierInvocation",
                "src": "2610:12:3"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "<",
                          "type": "bool"
                        },
                        "children": [
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
                                "id": 1732,
                                "name": "Identifier",
                                "src": "2660:8:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1725,
                                  "type": "address",
                                  "value": "from"
                                },
                                "id": 1733,
                                "name": "Identifier",
                                "src": "2669:4:3"
                              }
                            ],
                            "id": 1734,
                            "name": "IndexAccess",
                            "src": "2660:14:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1723,
                              "type": "uint256",
                              "value": "amount"
                            },
                            "id": 1735,
                            "name": "Identifier",
                            "src": "2677:6:3"
                          }
                        ],
                        "id": 1736,
                        "name": "BinaryOperation",
                        "src": "2660:23:3"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 1731
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "66616c7365",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "bool",
                                  "type": "bool",
                                  "value": "false"
                                },
                                "id": 1737,
                                "name": "Literal",
                                "src": "2706:5:3"
                              }
                            ],
                            "id": 1738,
                            "name": "Return",
                            "src": "2699:12:3"
                          }
                        ],
                        "id": 1739,
                        "name": "Block",
                        "src": "2685:37:3"
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
                                        "id": 1740,
                                        "name": "Identifier",
                                        "src": "2742:8:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1725,
                                          "type": "address",
                                          "value": "from"
                                        },
                                        "id": 1741,
                                        "name": "Identifier",
                                        "src": "2751:4:3"
                                      }
                                    ],
                                    "id": 1742,
                                    "name": "IndexAccess",
                                    "src": "2742:14:3"
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
                                          "member_name": "safeSub",
                                          "referencedDeclaration": 4196,
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
                                            "id": 1743,
                                            "name": "Identifier",
                                            "src": "2759:8:3"
                                          }
                                        ],
                                        "id": 1744,
                                        "name": "MemberAccess",
                                        "src": "2759:16:3"
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
                                            "id": 1745,
                                            "name": "Identifier",
                                            "src": "2776:8:3"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1725,
                                              "type": "address",
                                              "value": "from"
                                            },
                                            "id": 1746,
                                            "name": "Identifier",
                                            "src": "2785:4:3"
                                          }
                                        ],
                                        "id": 1747,
                                        "name": "IndexAccess",
                                        "src": "2776:14:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1723,
                                          "type": "uint256",
                                          "value": "amount"
                                        },
                                        "id": 1748,
                                        "name": "Identifier",
                                        "src": "2792:6:3"
                                      }
                                    ],
                                    "id": 1749,
                                    "name": "FunctionCall",
                                    "src": "2759:40:3"
                                  }
                                ],
                                "id": 1750,
                                "name": "Assignment",
                                "src": "2742:57:3"
                              }
                            ],
                            "id": 1751,
                            "name": "ExpressionStatement",
                            "src": "2742:57:3"
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
                                    "id": 1752,
                                    "name": "Identifier",
                                    "src": "2813:11:3"
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
                                          "member_name": "safeSub",
                                          "referencedDeclaration": 4196,
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
                                            "id": 1753,
                                            "name": "Identifier",
                                            "src": "2827:8:3"
                                          }
                                        ],
                                        "id": 1754,
                                        "name": "MemberAccess",
                                        "src": "2827:16:3"
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
                                        "id": 1755,
                                        "name": "Identifier",
                                        "src": "2844:11:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1723,
                                          "type": "uint256",
                                          "value": "amount"
                                        },
                                        "id": 1756,
                                        "name": "Identifier",
                                        "src": "2857:6:3"
                                      }
                                    ],
                                    "id": 1757,
                                    "name": "FunctionCall",
                                    "src": "2827:37:3"
                                  }
                                ],
                                "id": 1758,
                                "name": "Assignment",
                                "src": "2813:51:3"
                              }
                            ],
                            "id": 1759,
                            "name": "ExpressionStatement",
                            "src": "2813:51:3"
                          },
                          {
                            "attributes": {
                              "functionReturnParameters": 1731
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "74727565",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "bool",
                                  "type": "bool",
                                  "value": "true"
                                },
                                "id": 1760,
                                "name": "Literal",
                                "src": "2885:4:3"
                              }
                            ],
                            "id": 1761,
                            "name": "Return",
                            "src": "2878:11:3"
                          }
                        ],
                        "id": 1762,
                        "name": "Block",
                        "src": "2728:172:3"
                      }
                    ],
                    "id": 1763,
                    "name": "IfStatement",
                    "src": "2656:244:3"
                  }
                ],
                "id": 1764,
                "name": "Block",
                "src": "2646:260:3"
              }
            ],
            "id": 1765,
            "name": "FunctionDefinition",
            "src": "2549:357:3"
          }
        ],
        "id": 1766,
        "name": "ContractDefinition",
        "src": "148:2760:3"
      }
    ],
    "id": 1767,
    "name": "SourceUnit",
    "src": "0:2908:3"
  },
  "networks": {},
  "schemaVersion": "1.0.0",
  "updatedAt": "2018-01-31T14:00:14.077Z"
};
