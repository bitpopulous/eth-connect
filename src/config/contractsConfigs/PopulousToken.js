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
      "inputs": [
        {
          "name": "_addr",
          "type": "address"
        }
      ],
      "name": "isContract",
      "outputs": [
        {
          "name": "is_contract",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
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
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "transferToContract",
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
      "name": "transferToAddress",
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
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
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
          "indexed": false,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_value",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "ContractTransfer",
      "type": "event"
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
  "bytecode": "0x606060405260008055341561001357600080fd5b7f506f70756c6f757320506c6174666f726d0000000000000000000000000000006003556004805460ff191660081790557f505054000000000000000000000000000000000000000000000000000000000060055561099c806100776000396000f300606060405236156100cd5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde0381146100d2578063095ea7b3146100f7578063162790551461012d57806318160ddd1461014c57806323b872dd1461015f578063313ce567146101875780633f35d033146101b0578063579158971461021557806370a082311461022d57806395d89b411461024c578063a9059cbb1461025f578063acef603714610281578063be45fd62146102a3578063dd62ed3e14610308575b600080fd5b34156100dd57600080fd5b6100e561032d565b60405190815260200160405180910390f35b341561010257600080fd5b610119600160a060020a0360043516602435610333565b604051901515815260200160405180910390f35b341561013857600080fd5b610119600160a060020a03600435166103a0565b341561015757600080fd5b6100e56103c0565b341561016a57600080fd5b610119600160a060020a03600435811690602435166044356103c6565b341561019257600080fd5b61019a6104e3565b60405160ff909116815260200160405180910390f35b34156101bb57600080fd5b61011960048035600160a060020a03169060248035919060649060443590810190830135806020601f820181900481020160405190810160405281815292919060208401838380828437509496506104ec95505050505050565b341561022057600080fd5b61022b600435610776565b005b341561023857600080fd5b6100e5600160a060020a03600435166107c6565b341561025757600080fd5b6100e56107e1565b341561026a57600080fd5b610119600160a060020a03600435166024356107e7565b341561028c57600080fd5b610119600160a060020a0360043516602435610822565b34156102ae57600080fd5b61011960048035600160a060020a03169060248035919060649060443590810190830135806020601f820181900481020160405190810160405281815292919060208401838380828437509496506108ea95505050505050565b341561031357600080fd5b6100e5600160a060020a0360043581169060243516610916565b60035481565b600160a060020a03338116600081815260026020908152604080832094871680845294909152808220859055909291907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a35060015b92915050565b6000813b818111156103b557600191506103ba565b600091505b50919050565b60005481565b600160a060020a0383166000908152600160205260408120548290108015906104165750600160a060020a0380851660009081526002602090815260408083203390941683529290522054829010155b80156104225750600082115b80156104475750600160a060020a038316600090815260016020526040902054828101115b156104d857600160a060020a03808416600081815260016020908152604080832080548801905588851680845281842080548990039055600283528184203390961684529490915290819020805486900390559091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a35060016104dc565b5060005b9392505050565b60045460ff1681565b600160a060020a03331660009081526001602052604081205481908490108015906105175750600084115b801561053c5750600160a060020a038516600090815260016020526040902054848101115b156107695750600160a060020a033381811660009081526001602052604080822080548890039055928716808252908390208054870190558692909163c0ee0b8a9187908790518463ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018084600160a060020a0316600160a060020a0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156106065780820151838201526020016105ee565b50505050905090810190601f1680156106335780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b151561065357600080fd5b6102c65a03f1151561066457600080fd5b50505084600160a060020a031633600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8660405190815260200160405180910390a37fb35b712dc2c80945537903ca9aa7ed83607d14fc206a7e7ef41d5cf8946a3772858585604051600160a060020a03841681526020810183905260606040820181815290820183818151815260200191508051906020019080838360005b8381101561072457808201518382015260200161070c565b50505050905090810190601f1680156107515780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a16001915061076e565b600091505b509392505050565b600160a060020a0333166000908152600160205260409020546107999082610941565b600160a060020a033316600090815260016020526040812091909155546107c09082610941565b60005550565b600160a060020a031660009081526001602052604090205490565b60055481565b60006107f161095e565b6107fa846103a0565b156108115761080a8484836104ec565b915061081b565b61080a8484610822565b5092915050565b600160a060020a03331660009081526001602052604081205482901080159061084b5750600082115b80156108705750600160a060020a038316600090815260016020526040902054828101115b156108e257600160a060020a033381166000818152600160205260408082208054879003905592861680825290839020805486019055917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a350600161039a565b50600061039a565b60006108f5846103a0565b1561090c576109058484846104ec565b90506104dc565b6109058484610822565b600160a060020a03918216600090815260026020908152604080832093909416825291909152205490565b60008282018381108015906109565750828110155b15156104dc57fe5b602060405190810160405260008152905600a165627a7a723058206a957eee28b860790b49c3f7afc0fd6a231dfc0ed629859058d73f581d040f750029",
  "deployedBytecode": "0x606060405236156100cd5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde0381146100d2578063095ea7b3146100f7578063162790551461012d57806318160ddd1461014c57806323b872dd1461015f578063313ce567146101875780633f35d033146101b0578063579158971461021557806370a082311461022d57806395d89b411461024c578063a9059cbb1461025f578063acef603714610281578063be45fd62146102a3578063dd62ed3e14610308575b600080fd5b34156100dd57600080fd5b6100e561032d565b60405190815260200160405180910390f35b341561010257600080fd5b610119600160a060020a0360043516602435610333565b604051901515815260200160405180910390f35b341561013857600080fd5b610119600160a060020a03600435166103a0565b341561015757600080fd5b6100e56103c0565b341561016a57600080fd5b610119600160a060020a03600435811690602435166044356103c6565b341561019257600080fd5b61019a6104e3565b60405160ff909116815260200160405180910390f35b34156101bb57600080fd5b61011960048035600160a060020a03169060248035919060649060443590810190830135806020601f820181900481020160405190810160405281815292919060208401838380828437509496506104ec95505050505050565b341561022057600080fd5b61022b600435610776565b005b341561023857600080fd5b6100e5600160a060020a03600435166107c6565b341561025757600080fd5b6100e56107e1565b341561026a57600080fd5b610119600160a060020a03600435166024356107e7565b341561028c57600080fd5b610119600160a060020a0360043516602435610822565b34156102ae57600080fd5b61011960048035600160a060020a03169060248035919060649060443590810190830135806020601f820181900481020160405190810160405281815292919060208401838380828437509496506108ea95505050505050565b341561031357600080fd5b6100e5600160a060020a0360043581169060243516610916565b60035481565b600160a060020a03338116600081815260026020908152604080832094871680845294909152808220859055909291907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a35060015b92915050565b6000813b818111156103b557600191506103ba565b600091505b50919050565b60005481565b600160a060020a0383166000908152600160205260408120548290108015906104165750600160a060020a0380851660009081526002602090815260408083203390941683529290522054829010155b80156104225750600082115b80156104475750600160a060020a038316600090815260016020526040902054828101115b156104d857600160a060020a03808416600081815260016020908152604080832080548801905588851680845281842080548990039055600283528184203390961684529490915290819020805486900390559091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a35060016104dc565b5060005b9392505050565b60045460ff1681565b600160a060020a03331660009081526001602052604081205481908490108015906105175750600084115b801561053c5750600160a060020a038516600090815260016020526040902054848101115b156107695750600160a060020a033381811660009081526001602052604080822080548890039055928716808252908390208054870190558692909163c0ee0b8a9187908790518463ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018084600160a060020a0316600160a060020a0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156106065780820151838201526020016105ee565b50505050905090810190601f1680156106335780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b151561065357600080fd5b6102c65a03f1151561066457600080fd5b50505084600160a060020a031633600160a060020a03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8660405190815260200160405180910390a37fb35b712dc2c80945537903ca9aa7ed83607d14fc206a7e7ef41d5cf8946a3772858585604051600160a060020a03841681526020810183905260606040820181815290820183818151815260200191508051906020019080838360005b8381101561072457808201518382015260200161070c565b50505050905090810190601f1680156107515780820380516001836020036101000a031916815260200191505b5094505050505060405180910390a16001915061076e565b600091505b509392505050565b600160a060020a0333166000908152600160205260409020546107999082610941565b600160a060020a033316600090815260016020526040812091909155546107c09082610941565b60005550565b600160a060020a031660009081526001602052604090205490565b60055481565b60006107f161095e565b6107fa846103a0565b156108115761080a8484836104ec565b915061081b565b61080a8484610822565b5092915050565b600160a060020a03331660009081526001602052604081205482901080159061084b5750600082115b80156108705750600160a060020a038316600090815260016020526040902054828101115b156108e257600160a060020a033381166000818152600160205260408082208054879003905592861680825290839020805486019055917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a350600161039a565b50600061039a565b60006108f5846103a0565b1561090c576109058484846104ec565b90506104dc565b6109058484610822565b600160a060020a03918216600090815260026020908152604080832093909416825291909152205490565b60008282018381108015906109565750828110155b15156104dc57fe5b602060405190810160405260008152905600a165627a7a723058206a957eee28b860790b49c3f7afc0fd6a231dfc0ed629859058d73f581d040f750029",
  "sourceMap": "114:527:9:-;;;277:1:15;248:30;;328:122:9;;;;;;;;371:26;:4;:26;407:8;:12;;-1:-1:-1;;407:12:9;418:1;407:12;;;429:14;:6;:14;114:527;;;;;;",
  "deployedSourceMap": "114:527:9:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;215:19;;;;;;;;;;;;;;;;;;;;;;;;;;;6465:205:6;;;;;;;;;;-1:-1:-1;;;;;6465:205:6;;;;;;;;;;;;;;;;;;;;;;;;4994:357;;;;;;;;;;-1:-1:-1;;;;;4994:357:6;;;;;248:30:15;;;;;;;;;;;;5685:464:6;;;;;;;;;;-1:-1:-1;;;;;5685:464:6;;;;;;;;;;;;240:21:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4135:589:6;;;;;;;;;;;;;-1:-1:-1;;;;;4135:589:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;4135:589:6;;-1:-1:-1;4135:589:6;;-1:-1:-1;;;;;;4135:589:6;456:183:9;;;;;;;;;;;;;;;;6937:113:6;;;;;;;;;;-1:-1:-1;;;;;6937:113:6;;;;;267:21:9;;;;;;;;;;;;2690:367:6;;;;;;;;;;-1:-1:-1;;;;;2690:367:6;;;;;;;3360:399;;;;;;;;;;-1:-1:-1;;;;;3360:399:6;;;;;;;1746:333;;;;;;;;;;;;;-1:-1:-1;;;;;1746:333:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;1746:333:6;;-1:-1:-1;1746:333:6;;-1:-1:-1;;;;;;1746:333:6;7388:140;;;;;;;;;;-1:-1:-1;;;;;7388:140:6;;;;;;;;;;215:19:9;;;;:::o;6465:205:6:-;-1:-1:-1;;;;;6564:10:6;6556:19;;6532:12;6556:19;;;:7;:19;;;;;;;;:29;;;;;;;;;;;;;:38;;;6532:12;;6556:29;:19;6604:38;;6588:6;;6604:38;;;;;;;;;;;;;-1:-1:-1;6659:4:6;6465:205;;;;;:::o;4994:357::-;5050:16;5216:11;;5257:8;;;5253:92;;;5288:4;5281:11;;;;5253:92;5329:5;5322:12;;5253:92;4994:357;;;;:::o;248:30:15:-;;;;:::o;5685:464:6:-;-1:-1:-1;;;;;5795:15:6;;5767:12;5795:15;;;:8;:15;;;;;;:25;;;;;;:65;;-1:-1:-1;;;;;;5824:14:6;;;;;;;:7;:14;;;;;;;;5839:10;5824:26;;;;;;;;;;:36;;;;5795:65;:79;;;;;5873:1;5864:6;:10;5795:79;:121;;;;-1:-1:-1;;;;;;5903:13:6;;;;;;:8;:13;;;;;;5878:22;;;:38;5795:121;5791:352;;;-1:-1:-1;;;;;5932:13:6;;;;;;;:8;:13;;;;;;;;:23;;;;;;5969:15;;;;;;;;;:25;;;;;;;6008:7;:14;;;;;6023:10;6008:26;;;;;;;;;;;;;:36;;;;;;;5932:13;;5969:15;6058:28;;5949:6;;6058:28;;;;;;;;;;;;;-1:-1:-1;6107:4:6;6100:11;;5791:352;-1:-1:-1;6136:5:6;5791:352;5685:464;;;;;:::o;240:21:9:-;;;;;;:::o;4135:589:6:-;-1:-1:-1;;;;;4255:10:6;4246:20;4218:12;4246:20;;;:8;:20;;;;;;4218:12;;4246:30;;;;;;:44;;;4289:1;4280:6;:10;4246:44;:86;;;;-1:-1:-1;;;;;;4319:13:6;;;;;;:8;:13;;;;;;4294:22;;;:38;4246:86;4242:476;;;-1:-1:-1;;;;;;4357:10:6;4348:20;;;;;;;:8;:20;;;;;;:30;;;;;;;4392:13;;;;;;;;;;:23;;;;;;4401:3;;4392:13;;4492:22;;4372:6;;4535:5;;4492:49;;;;;;;;;;;;-1:-1:-1;;;;;4492:49:6;-1:-1:-1;;;;;4492:49:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;71:3;;;64:6;52:2;45:3;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4576:3:6;-1:-1:-1;;;;;4555:33:6;4564:10;-1:-1:-1;;;;;4555:33:6;;4581:6;4555:33;;;;;;;;;;;;;;4602:36;4619:3;4624:6;4632:5;4602:36;;-1:-1:-1;;;;;4602:36:6;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;71:3;;;64:6;52:2;45:3;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4660:4:6;4653:11;;;;4242:476;4702:5;4695:12;;4242:476;4135:589;;;;;;:::o;456:183:9:-;-1:-1:-1;;;;;551:10:9;542:20;;;;;:8;:20;;;;;;525:46;;564:6;525:16;:46::i;:::-;-1:-1:-1;;;;;511:10:9;502:20;;;;;:8;:20;;;;;:69;;;;612:11;595:37;;625:6;595:16;:37::i;:::-;581:11;:51;-1:-1:-1;456:183:9:o;6937:113:6:-;-1:-1:-1;;;;;7027:16:6;6993:15;7027:16;;;:8;:16;;;;;;;6937:113::o;267:21:9:-;;;;:::o;2690:367:6:-;2750:12;2887:22;;:::i;:::-;2856:15;2867:3;2856:10;:15::i;:::-;2853:198;;;2930:42;2949:3;2954:6;2962:9;2930:18;:42::i;:::-;2923:49;;;;2853:198;3010:30;3028:3;3033:6;3010:17;:30::i;2853:198::-;2690:367;;;;;:::o;3360:399::-;-1:-1:-1;;;;;3466:10:6;3457:20;3429:12;3457:20;;;:8;:20;;;;;;:30;;;;;;:44;;;3500:1;3491:6;:10;3457:44;:86;;;;-1:-1:-1;;;;;;3530:13:6;;;;;;:8;:13;;;;;;3505:22;;;:38;3457:86;3453:300;;;-1:-1:-1;;;;;3568:10:6;3559:20;;;;;;:8;:20;;;;;;:30;;;;;;;3603:13;;;;;;;;;;:23;;;;;;:13;3640:33;;3583:6;;3640:33;;;;;;;;;;;;;-1:-1:-1;3695:4:6;3688:11;;3453:300;-1:-1:-1;3737:5:6;3730:12;;1746:333;1819:12;1918:15;1929:3;1918:10;:15::i;:::-;1915:158;;;1956:38;1975:3;1980:6;1988:5;1956:18;:38::i;:::-;1949:45;;;;1915:158;2032:30;2050:3;2055:6;2032:17;:30::i;7388:140::-;-1:-1:-1;;;;;7496:15:6;;;7462:17;7496:15;;;:7;:15;;;;;;;;:25;;;;;;;;;;;;;7388:140::o;1223:135:10:-;1279:4;1302:5;;;1322:4;;;;;;:12;;;1333:1;1330;:4;;1322:12;1315:20;;;;;114:527:9;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.17;\n\nimport \"./ERC23Token.sol\";\nimport \"./SafeMath.sol\";\n\n\n/// @title PopulousToken contract\ncontract PopulousToken is ERC23Token {\n\n    // FIELDS\n\n    // Non-constant token specific fields\n    bytes32 public name;\n    uint8 public decimals;\n    bytes32 public symbol;\n\n    // NON-CONSTANT METHODS\n    \n    function PopulousToken () public {\n        name = \"Populous Platform\";\n        decimals = 8;\n        symbol = \"PPT\";\n    }\n\n    function faucet(uint amount) public {\n        balances[msg.sender] = SafeMath.safeAdd(balances[msg.sender], amount);\n        totalSupply = SafeMath.safeAdd(totalSupply, amount);\n    }\n}",
  "sourcePath": "/Users/najienka/Desktop/populous-smartcontracts/contracts/PopulousToken.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/najienka/Desktop/populous-smartcontracts/contracts/PopulousToken.sol",
      "exportedSymbols": {
        "PopulousToken": [
          4424
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
        "id": 4369,
        "name": "PragmaDirective",
        "src": "0:24:9"
      },
      {
        "attributes": {
          "SourceUnit": 2658,
          "absolutePath": "/Users/najienka/Desktop/populous-smartcontracts/contracts/ERC23Token.sol",
          "file": "./ERC23Token.sol",
          "scope": 4425,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 4370,
        "name": "ImportDirective",
        "src": "26:26:9"
      },
      {
        "attributes": {
          "SourceUnit": 4542,
          "absolutePath": "/Users/najienka/Desktop/populous-smartcontracts/contracts/SafeMath.sol",
          "file": "./SafeMath.sol",
          "scope": 4425,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 4371,
        "name": "ImportDirective",
        "src": "53:24:9"
      },
      {
        "attributes": {
          "contractDependencies": [
            2657,
            4887
          ],
          "contractKind": "contract",
          "documentation": "@title PopulousToken contract",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            4424,
            2657,
            4887
          ],
          "name": "PopulousToken",
          "scope": 4425
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
                  "name": "ERC23Token",
                  "referencedDeclaration": 2657,
                  "type": "contract ERC23Token"
                },
                "id": 4372,
                "name": "UserDefinedTypeName",
                "src": "140:10:9"
              }
            ],
            "id": 4373,
            "name": "InheritanceSpecifier",
            "src": "140:10:9"
          },
          {
            "attributes": {
              "constant": false,
              "name": "name",
              "scope": 4424,
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
                "id": 4374,
                "name": "ElementaryTypeName",
                "src": "215:7:9"
              }
            ],
            "id": 4375,
            "name": "VariableDeclaration",
            "src": "215:19:9"
          },
          {
            "attributes": {
              "constant": false,
              "name": "decimals",
              "scope": 4424,
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
                "id": 4376,
                "name": "ElementaryTypeName",
                "src": "240:5:9"
              }
            ],
            "id": 4377,
            "name": "VariableDeclaration",
            "src": "240:21:9"
          },
          {
            "attributes": {
              "constant": false,
              "name": "symbol",
              "scope": 4424,
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
                "id": 4378,
                "name": "ElementaryTypeName",
                "src": "267:7:9"
              }
            ],
            "id": 4379,
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
              "scope": 4424,
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
                "id": 4380,
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
                "id": 4381,
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
                              "referencedDeclaration": 4375,
                              "type": "bytes32",
                              "value": "name"
                            },
                            "id": 4382,
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
                            "id": 4383,
                            "name": "Literal",
                            "src": "378:19:9"
                          }
                        ],
                        "id": 4384,
                        "name": "Assignment",
                        "src": "371:26:9"
                      }
                    ],
                    "id": 4385,
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
                              "referencedDeclaration": 4377,
                              "type": "uint8",
                              "value": "decimals"
                            },
                            "id": 4386,
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
                            "id": 4387,
                            "name": "Literal",
                            "src": "418:1:9"
                          }
                        ],
                        "id": 4388,
                        "name": "Assignment",
                        "src": "407:12:9"
                      }
                    ],
                    "id": 4389,
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
                              "referencedDeclaration": 4379,
                              "type": "bytes32",
                              "value": "symbol"
                            },
                            "id": 4390,
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
                            "id": 4391,
                            "name": "Literal",
                            "src": "438:5:9"
                          }
                        ],
                        "id": 4392,
                        "name": "Assignment",
                        "src": "429:14:9"
                      }
                    ],
                    "id": 4393,
                    "name": "ExpressionStatement",
                    "src": "429:14:9"
                  }
                ],
                "id": 4394,
                "name": "Block",
                "src": "361:89:9"
              }
            ],
            "id": 4395,
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
              "scope": 4424,
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
                      "scope": 4423,
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
                        "id": 4396,
                        "name": "ElementaryTypeName",
                        "src": "472:4:9"
                      }
                    ],
                    "id": 4397,
                    "name": "VariableDeclaration",
                    "src": "472:11:9"
                  }
                ],
                "id": 4398,
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
                "id": 4399,
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
                                  "referencedDeclaration": 2650,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 4400,
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
                                      "referencedDeclaration": 4964,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 4401,
                                    "name": "Identifier",
                                    "src": "511:3:9"
                                  }
                                ],
                                "id": 4402,
                                "name": "MemberAccess",
                                "src": "511:10:9"
                              }
                            ],
                            "id": 4403,
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
                                  "referencedDeclaration": 4504,
                                  "type": "function (uint256,uint256) pure returns (uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4541,
                                      "type": "type(library SafeMath)",
                                      "value": "SafeMath"
                                    },
                                    "id": 4404,
                                    "name": "Identifier",
                                    "src": "525:8:9"
                                  }
                                ],
                                "id": 4405,
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
                                      "referencedDeclaration": 2650,
                                      "type": "mapping(address => uint256)",
                                      "value": "balances"
                                    },
                                    "id": 4406,
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
                                          "referencedDeclaration": 4964,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 4407,
                                        "name": "Identifier",
                                        "src": "551:3:9"
                                      }
                                    ],
                                    "id": 4408,
                                    "name": "MemberAccess",
                                    "src": "551:10:9"
                                  }
                                ],
                                "id": 4409,
                                "name": "IndexAccess",
                                "src": "542:20:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4397,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 4410,
                                "name": "Identifier",
                                "src": "564:6:9"
                              }
                            ],
                            "id": 4411,
                            "name": "FunctionCall",
                            "src": "525:46:9"
                          }
                        ],
                        "id": 4412,
                        "name": "Assignment",
                        "src": "502:69:9"
                      }
                    ],
                    "id": 4413,
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
                              "referencedDeclaration": 4825,
                              "type": "uint256",
                              "value": "totalSupply"
                            },
                            "id": 4414,
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
                                  "referencedDeclaration": 4504,
                                  "type": "function (uint256,uint256) pure returns (uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4541,
                                      "type": "type(library SafeMath)",
                                      "value": "SafeMath"
                                    },
                                    "id": 4415,
                                    "name": "Identifier",
                                    "src": "595:8:9"
                                  }
                                ],
                                "id": 4416,
                                "name": "MemberAccess",
                                "src": "595:16:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4825,
                                  "type": "uint256",
                                  "value": "totalSupply"
                                },
                                "id": 4417,
                                "name": "Identifier",
                                "src": "612:11:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4397,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 4418,
                                "name": "Identifier",
                                "src": "625:6:9"
                              }
                            ],
                            "id": 4419,
                            "name": "FunctionCall",
                            "src": "595:37:9"
                          }
                        ],
                        "id": 4420,
                        "name": "Assignment",
                        "src": "581:51:9"
                      }
                    ],
                    "id": 4421,
                    "name": "ExpressionStatement",
                    "src": "581:51:9"
                  }
                ],
                "id": 4422,
                "name": "Block",
                "src": "492:147:9"
              }
            ],
            "id": 4423,
            "name": "FunctionDefinition",
            "src": "456:183:9"
          }
        ],
        "id": 4424,
        "name": "ContractDefinition",
        "src": "114:527:9"
      }
    ],
    "id": 4425,
    "name": "SourceUnit",
    "src": "0:641:9"
  },
  "networks": {
    "3": {
      "events": {},
      "links": {},
      "address": "0x4512299e0ff5e343d1a7f38b294997a2cc6e8e6b"
    }
  },
  "schemaVersion": "1.0.0",
  "updatedAt": "2018-01-22T11:32:08.051Z"
};
