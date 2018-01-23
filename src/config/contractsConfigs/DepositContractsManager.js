/* eslint-disable */

export default {
  "contractName": "DepositContractsManager",
  "abi": [
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
      "inputs": [
        {
          "name": "clientId",
          "type": "bytes32"
        },
        {
          "name": "tokenContract",
          "type": "address"
        },
        {
          "name": "receiveCurrency",
          "type": "bytes32"
        },
        {
          "name": "depositIndex",
          "type": "uint256"
        }
      ],
      "name": "getActiveDeposit",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "bool"
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
          "name": "clientId",
          "type": "bytes32"
        }
      ],
      "name": "getDepositAddress",
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
      "constant": false,
      "inputs": [
        {
          "name": "clientId",
          "type": "bytes32"
        }
      ],
      "name": "create",
      "outputs": [
        {
          "name": "",
          "type": "address"
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
          "name": "clientId",
          "type": "bytes32"
        },
        {
          "name": "tokenContract",
          "type": "address"
        },
        {
          "name": "receiveCurrency",
          "type": "bytes32"
        },
        {
          "name": "depositAmount",
          "type": "uint256"
        },
        {
          "name": "receiveAmount",
          "type": "uint256"
        }
      ],
      "name": "deposit",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        },
        {
          "name": "",
          "type": "uint256"
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
          "name": "clientId",
          "type": "bytes32"
        },
        {
          "name": "tokenContract",
          "type": "address"
        },
        {
          "name": "receiveCurrency",
          "type": "bytes32"
        },
        {
          "name": "receiver",
          "type": "address"
        },
        {
          "name": "depositIndex",
          "type": "uint256"
        }
      ],
      "name": "releaseDeposit",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
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
          "name": "clientId",
          "type": "bytes32"
        },
        {
          "name": "tokenContract",
          "type": "address"
        },
        {
          "name": "receiveCurrency",
          "type": "bytes32"
        }
      ],
      "name": "getActiveDepositList",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        },
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
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b604051602080610f848339810160405280805160008054600160a060020a03909216600160a060020a03199092169190911790555050610f30806100546000396000f300606060405236156100725763ffffffff60e060020a60003504166302ab72c481146100775780631abc3632146100985780632a01a451146100e65780637368a8ce1461011857806390d64f3a1461012e578063ccce317f14610173578063d68388d6146101c8578063f7f01b4b14610211575b600080fd5b341561008257600080fd5b610096600160a060020a0360043516610224565b005b34156100a357600080fd5b6100c0600435600160a060020a03602435166044356064356102d7565b604051928352602083019190915215156040808301919091526060909101905180910390f35b34156100f157600080fd5b6100fc6004356103c5565b604051600160a060020a03909116815260200160405180910390f35b341561012357600080fd5b6100fc6004356103e0565b341561013957600080fd5b610159600435600160a060020a03602435166044356064356084356104e3565b604051911515825260208201526040908101905180910390f35b341561017e57600080fd5b6101a2600435600160a060020a0360243581169060443590606435166084356107a1565b604051921515835260208301919091526040808301919091526060909101905180910390f35b34156101d357600080fd5b6101ed600435600160a060020a0360243516604435610bd3565b60405180848152602001838152602001828152602001935050505060405180910390f35b341561021c57600080fd5b6100fc610c14565b60008054600160a060020a031690630c68ba219033906040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561027f57600080fd5b6102c65a03f1151561029057600080fd5b5050506040518051151560011490506102a857600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b6000848152600260209081526040808320600160a060020a0387168452825280832085845290915281208054829182918590811061031157fe5b60009182526020808320600490920290910154898352600282526040808420600160a060020a038b1685528352808420898552909252912080548690811061035557fe5b60009182526020808320600160049093020191909101548a8352600282526040808420600160a060020a038c16855283528084208a8552909252912080548790811061039d57fe5b6000918252602090912060036004909202010154919450925060ff1690509450945094915050565b600090815260016020526040902054600160a060020a031690565b60008054600160a060020a03166305fd22d033836040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561043957600080fd5b6102c65a03f1151561044a57600080fd5b50505060405180511515600114905061046257600080fd5b8161046b610c59565b908152602001604051809103906000f080151561048757600080fd5b6000838152600160205260409020805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392831617908190551615156104c757fe5b50600090815260016020526040902054600160a060020a031690565b6000805481908190600160a060020a03166305fd22d033836040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561054057600080fd5b6102c65a03f1151561055157600080fd5b50505060405180511515600114905061056957600080fd5b5060008781526001602052604080822054600160a060020a03169186916106269184916370a08231918c91516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b15156105d757600080fd5b6102c65a03f115156105e857600080fd5b505050604051805160008c8152600260209081526040808320600160a060020a038f16845282528083208d8452909152902060010154909150610c23565b141561078e576000888152600260209081526040808320600160a060020a038b168452825280832089845290915290208054600181016106668382610c69565b91600052602060002090600402016000608060405190810160409081528982526020820189905262278d00420190820152600060608201529190508151815560208201518160010155604082015181600201556060820151600391909101805460ff191691151591909117905550506000888152600260209081526040808320600160a060020a038b168452825280832089845290915290206001015461070d9086610c35565b6000898152600260208181526040808420600160a060020a038d16855282528084208b85529091529091206001810192909255015461074c9085610c35565b6000898152600260208181526040808420600160a060020a038d16855282528084208b8552909152909120908101919091555460019350600019019150610796565b600092508291505b509550959350505050565b60008054819081908190600160a060020a03166305fd22d033836040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561080057600080fd5b6102c65a03f1151561081157600080fd5b50505060405180511515600114905061082957600080fd5b5060008881526001602090815260408083205460028352818420600160a060020a038c811686529084528285208b8652909352922080549190921691908690811061087057fe5b9060005260206000209060040201600001546000141580156108dc57506000898152600260209081526040808320600160a060020a038c16845282528083208a845290915290208054869081106108c357fe5b600091825260209091206003600490920201015460ff16155b80156109b157506000898152600260209081526040808320600160a060020a038c811685529083528184208b855290925290912080549183169163beabacc8918b918a91908a90811061092b57fe5b90600052602060002090600402016000015460006040516020015260405160e060020a63ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401602060405180830381600087803b151561099557600080fd5b6102c65a03f115156109a657600080fd5b505050604051805190505b8015610a0557506000898152600260209081526040808320600160a060020a038c16845282528083208a845290915290208054429190879081106109f157fe5b906000526020600020906004020160020154115b15610bbc576000898152600260209081526040808320600160a060020a038c16845282528083208a8452909152902080546001919087908110610a4457fe5b60009182526020808320600492909202909101600301805460ff1916931515939093179092558a8152600282526040808220600160a060020a038c16835283528082208a83529092522060018101548154610abb929088908110610aa457fe5b906000526020600020906004020160000154610c23565b60008a8152600260208181526040808420600160a060020a038e16855282528084208c855290915290912060018101929092558101548154610b19929088908110610b0257fe5b906000526020600020906004020160010154610c23565b60008a8152600260208181526040808420600160a060020a038e16855282528084208c85529091529091209081019190915580546001919087908110610b5b57fe5b600091825260208083206004909202909101548c8352600282526040808420600160a060020a038e16855283528084208c85529092529120805488908110610b9f57fe5b906000526020600020906004020160010154935093509350610bc7565b600093508392508291505b50955095509592505050565b6000928352600260208181526040808620600160a060020a039590951686529381528385209285529190915291208054600182015491909201549192909190565b600054600160a060020a031681565b600082821115610c2f57fe5b50900390565b6000828201838110801590610c4a5750828110155b1515610c5257fe5b9392505050565b60405161023080610cd583390190565b815481835581811511610c9557600402816004028360005260206000209182019101610c959190610c9a565b505050565b610cd191905b80821115610ccd57600080825560018201819055600282015560038101805460ff19169055600401610ca0565b5090565b9056006060604052341561000f57600080fd5b60405160208061023083398101604052808051600055505060018054600160a060020a033316600160a060020a03199091161790556101dd806100536000396000f300606060405263ffffffff60e060020a60003504166370a08231811461002e578063beabacc81461005f57600080fd5b341561003957600080fd5b61004d600160a060020a036004351661009b565b60405190815260200160405180910390f35b341561006a57600080fd5b610087600160a060020a0360043581169060243516604435610114565b604051901515815260200160405180910390f35b600081600160a060020a03166370a082313060006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b15156100f457600080fd5b6102c65a03f1151561010557600080fd5b50505060405180519392505050565b60015460009033600160a060020a0390811691161461013257600080fd5b83600160a060020a031663a9059cbb848460006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561018f57600080fd5b6102c65a03f115156101a057600080fd5b5050506040518051959450505050505600a165627a7a723058202a1ddbb12fcbcff9fa86450b0370f2534a8683d0c4455adf1bab5f44327f2d730029a165627a7a723058207304cece38214ded51f39e71df9d58403f187379ecdfb2d664c0b791210baecc0029",
  "deployedBytecode": "0x606060405236156100725763ffffffff60e060020a60003504166302ab72c481146100775780631abc3632146100985780632a01a451146100e65780637368a8ce1461011857806390d64f3a1461012e578063ccce317f14610173578063d68388d6146101c8578063f7f01b4b14610211575b600080fd5b341561008257600080fd5b610096600160a060020a0360043516610224565b005b34156100a357600080fd5b6100c0600435600160a060020a03602435166044356064356102d7565b604051928352602083019190915215156040808301919091526060909101905180910390f35b34156100f157600080fd5b6100fc6004356103c5565b604051600160a060020a03909116815260200160405180910390f35b341561012357600080fd5b6100fc6004356103e0565b341561013957600080fd5b610159600435600160a060020a03602435166044356064356084356104e3565b604051911515825260208201526040908101905180910390f35b341561017e57600080fd5b6101a2600435600160a060020a0360243581169060443590606435166084356107a1565b604051921515835260208301919091526040808301919091526060909101905180910390f35b34156101d357600080fd5b6101ed600435600160a060020a0360243516604435610bd3565b60405180848152602001838152602001828152602001935050505060405180910390f35b341561021c57600080fd5b6100fc610c14565b60008054600160a060020a031690630c68ba219033906040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561027f57600080fd5b6102c65a03f1151561029057600080fd5b5050506040518051151560011490506102a857600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b6000848152600260209081526040808320600160a060020a0387168452825280832085845290915281208054829182918590811061031157fe5b60009182526020808320600490920290910154898352600282526040808420600160a060020a038b1685528352808420898552909252912080548690811061035557fe5b60009182526020808320600160049093020191909101548a8352600282526040808420600160a060020a038c16855283528084208a8552909252912080548790811061039d57fe5b6000918252602090912060036004909202010154919450925060ff1690509450945094915050565b600090815260016020526040902054600160a060020a031690565b60008054600160a060020a03166305fd22d033836040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561043957600080fd5b6102c65a03f1151561044a57600080fd5b50505060405180511515600114905061046257600080fd5b8161046b610c59565b908152602001604051809103906000f080151561048757600080fd5b6000838152600160205260409020805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392831617908190551615156104c757fe5b50600090815260016020526040902054600160a060020a031690565b6000805481908190600160a060020a03166305fd22d033836040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561054057600080fd5b6102c65a03f1151561055157600080fd5b50505060405180511515600114905061056957600080fd5b5060008781526001602052604080822054600160a060020a03169186916106269184916370a08231918c91516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b15156105d757600080fd5b6102c65a03f115156105e857600080fd5b505050604051805160008c8152600260209081526040808320600160a060020a038f16845282528083208d8452909152902060010154909150610c23565b141561078e576000888152600260209081526040808320600160a060020a038b168452825280832089845290915290208054600181016106668382610c69565b91600052602060002090600402016000608060405190810160409081528982526020820189905262278d00420190820152600060608201529190508151815560208201518160010155604082015181600201556060820151600391909101805460ff191691151591909117905550506000888152600260209081526040808320600160a060020a038b168452825280832089845290915290206001015461070d9086610c35565b6000898152600260208181526040808420600160a060020a038d16855282528084208b85529091529091206001810192909255015461074c9085610c35565b6000898152600260208181526040808420600160a060020a038d16855282528084208b8552909152909120908101919091555460019350600019019150610796565b600092508291505b509550959350505050565b60008054819081908190600160a060020a03166305fd22d033836040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561080057600080fd5b6102c65a03f1151561081157600080fd5b50505060405180511515600114905061082957600080fd5b5060008881526001602090815260408083205460028352818420600160a060020a038c811686529084528285208b8652909352922080549190921691908690811061087057fe5b9060005260206000209060040201600001546000141580156108dc57506000898152600260209081526040808320600160a060020a038c16845282528083208a845290915290208054869081106108c357fe5b600091825260209091206003600490920201015460ff16155b80156109b157506000898152600260209081526040808320600160a060020a038c811685529083528184208b855290925290912080549183169163beabacc8918b918a91908a90811061092b57fe5b90600052602060002090600402016000015460006040516020015260405160e060020a63ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401602060405180830381600087803b151561099557600080fd5b6102c65a03f115156109a657600080fd5b505050604051805190505b8015610a0557506000898152600260209081526040808320600160a060020a038c16845282528083208a845290915290208054429190879081106109f157fe5b906000526020600020906004020160020154115b15610bbc576000898152600260209081526040808320600160a060020a038c16845282528083208a8452909152902080546001919087908110610a4457fe5b60009182526020808320600492909202909101600301805460ff1916931515939093179092558a8152600282526040808220600160a060020a038c16835283528082208a83529092522060018101548154610abb929088908110610aa457fe5b906000526020600020906004020160000154610c23565b60008a8152600260208181526040808420600160a060020a038e16855282528084208c855290915290912060018101929092558101548154610b19929088908110610b0257fe5b906000526020600020906004020160010154610c23565b60008a8152600260208181526040808420600160a060020a038e16855282528084208c85529091529091209081019190915580546001919087908110610b5b57fe5b600091825260208083206004909202909101548c8352600282526040808420600160a060020a038e16855283528084208c85529092529120805488908110610b9f57fe5b906000526020600020906004020160010154935093509350610bc7565b600093508392508291505b50955095509592505050565b6000928352600260208181526040808620600160a060020a039590951686529381528385209285529190915291208054600182015491909201549192909190565b600054600160a060020a031681565b600082821115610c2f57fe5b50900390565b6000828201838110801590610c4a5750828110155b1515610c5257fe5b9392505050565b60405161023080610cd583390190565b815481835581811511610c9557600402816004028360005260206000209182019101610c959190610c9a565b505050565b610cd191905b80821115610ccd57600080825560018201819055600282015560038101805460ff19169055600401610ca0565b5090565b9056006060604052341561000f57600080fd5b60405160208061023083398101604052808051600055505060018054600160a060020a033316600160a060020a03199091161790556101dd806100536000396000f300606060405263ffffffff60e060020a60003504166370a08231811461002e578063beabacc81461005f57600080fd5b341561003957600080fd5b61004d600160a060020a036004351661009b565b60405190815260200160405180910390f35b341561006a57600080fd5b610087600160a060020a0360043581169060243516604435610114565b604051901515815260200160405180910390f35b600081600160a060020a03166370a082313060006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b15156100f457600080fd5b6102c65a03f1151561010557600080fd5b50505060405180519392505050565b60015460009033600160a060020a0390811691161461013257600080fd5b83600160a060020a031663a9059cbb848460006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561018f57600080fd5b6102c65a03f115156101a057600080fd5b5050506040518051959450505050505600a165627a7a723058202a1ddbb12fcbcff9fa86450b0370f2534a8683d0c4455adf1bab5f44327f2d730029a165627a7a723058207304cece38214ded51f39e71df9d58403f187379ecdfb2d664c0b791210baecc0029",
  "sourceMap": "164:7959:5:-;;;1486:109;;;;;;;;;;;;;;;;;;;;;;1163:2:16;:34;;-1:-1:-1;;;;;1163:34:16;;;-1:-1:-1;;;;;;1163:34:16;;;;;;;;;-1:-1:-1;;164:7959:5;;;;;;",
  "deployedSourceMap": "164:7959:5:-;;;;;;;;-1:-1:-1;;;164:7959:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1356:124:16;;;;;;;;;;-1:-1:-1;;;;;1356:124:16;;;;;;;7638:481:5;;;;;;;;;;;;-1:-1:-1;;;;;7638:481:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6252:123;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;6252:123:5;;;;;;;;;;;;;;1842:256;;;;;;;;;;;;;;2580:1186;;;;;;;;;;;;-1:-1:-1;;;;;2580:1186:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4339:1720;;;;;;;;;;;;-1:-1:-1;;;;;4339:1720:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6796:410;;;;;;;;;;;;-1:-1:-1;;;;;6796:410:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;149:23:16;;;;;;;;;;;;1356:124;617:2;;;-1:-1:-1;;;;;617:2:16;;:13;;631:10;;617:25;;;;;;;-1:-1:-1;;;617:25:16;;;;;;-1:-1:-1;;;;;617:25:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:33;;646:4;617:33;;-1:-1:-1;609:42:16;;;;;;1439:2;:34;;-1:-1:-1;;1439:34:16;-1:-1:-1;;;;;1439:34:16;;;;;;;;;;1356:124::o;7638:481:5:-;7788:4;7837:18;;;:8;:18;;;;;;;;-1:-1:-1;;;;;7837:33:5;;;;;;;;;:50;;;;;;;;:69;;7788:4;;;;7893:12;;7837:69;;;;;;;;;;;;;;;;;;;;;:79;7930:18;;;:8;:18;;;;;;-1:-1:-1;;;;;7930:33:5;;;;;;;;;:50;;;;;;;;:69;;7986:12;;7930:69;;;;;;;;;;;;;;:78;:69;;;;;:78;;;;;8022:18;;;:8;:18;;;;;;-1:-1:-1;;;;;8022:33:5;;;;;;;;;:50;;;;;;;;:69;;8078:12;;8022:69;;;;;;;;;;;;;;:80;:69;;;;;:80;;7816:296;;-1:-1:-1;7816:296:5;-1:-1:-1;8022:80:5;;;-1:-1:-1;7638:481:5;;;;;;;;:::o;6252:123::-;6318:7;6344:24;;;:14;:24;;;;;;-1:-1:-1;;;;;6344:24:5;;6252:123::o;1842:256::-;1921:7;860:2:16;;-1:-1:-1;;;;;860:2:16;:13;874:10;1921:7:5;860:25:16;;;;;;;-1:-1:-1;;;860:25:16;;;;;;-1:-1:-1;;;;;860:25:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:33;;889:4;860:33;;-1:-1:-1;852:42:16;;;;;;1991:8:5;1971:29;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1944:24;;;;:14;:24;;;;;:56;;-1:-1:-1;;1944:56:5;-1:-1:-1;;;;;1944:56:5;;;;;;;;2017:24;:31;;2010:39;;;;-1:-1:-1;2067:24:5;;;;:14;:24;;;;;;-1:-1:-1;;;;;2067:24:5;;1842:256::o;2580:1186::-;2756:4;860:2:16;;2756:4:5;;;;-1:-1:-1;;;;;860:2:16;:13;874:10;2756:4:5;860:25:16;;;;;;;-1:-1:-1;;;860:25:16;;;;;;-1:-1:-1;;;;;860:25:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:33;;889:4;860:33;;-1:-1:-1;852:42:16;;;;;;-1:-1:-1;2818:24:5;;;;:14;:24;;;;;;;-1:-1:-1;;;;;2818:24:5;;2968:13;;2858:106;;2818:24;;2875:11;;2887:13;;2875:26;;;;;;-1:-1:-1;;;2875:26:5;;;;;;-1:-1:-1;;;;;2875:26:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2903:18;;;;:8;:18;;;;;;;;-1:-1:-1;;;;;2903:33:5;;;;;;;;;:50;;;;;;;;:60;;;2875:26;;-1:-1:-1;2858:16:5;:106::i;:::-;:123;2854:879;;;3034:18;;;;:8;:18;;;;;;;;-1:-1:-1;;;;;3034:33:5;;;;;;;;;:50;;;;;;;;:121;;;;;;:50;:121;;:::i;:::-;;;;;;;;;;;;3095:59;;;;;;;;;;;;;;;;;;;3139:7;3133:3;:13;3095:59;;;;-1:-1:-1;3095:59:5;;;;;3034:121;-1:-1:-1;3095:59:5;3034:121;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3034:121:5;;;;;;;;;;-1:-1:-1;;;3308:18:5;;;:8;:18;;;;;;;;-1:-1:-1;;;;;3308:33:5;;;;;;;;;:50;;;;;;;;-1:-1:-1;3308:60:5;;3274:139;;3386:13;3274:16;:139::i;:::-;3211:18;;;;:8;:18;;;;;;;;-1:-1:-1;;;;;3211:33:5;;;;;;;;;:50;;;;;;;;;:60;;;:202;;;;3523:59;;3489:138;;3600:13;3489:16;:138::i;:::-;3427:18;;;;:8;:18;;;;;;;;-1:-1:-1;;;;;3427:33:5;;;;;;;;;:50;;;;;;;;;:59;;;:200;;;;3655:62;3649:4;;-1:-1:-1;;;3655:66:5;;-1:-1:-1;3641:81:5;;2854:879;3750:5;;-1:-1:-1;3750:5:5;;-1:-1:-1;904:1:16;2580:1186:5;;;;;;;;;:::o;4339:1720::-;4519:4;860:2:16;;4519:4:5;;;;;;-1:-1:-1;;;;;860:2:16;:13;874:10;4519:4:5;860:25:16;;;;;;;-1:-1:-1;;;860:25:16;;;;;;-1:-1:-1;;;;;860:25:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:33;;889:4;860:33;;-1:-1:-1;852:42:16;;;;;;-1:-1:-1;4587:24:5;;;;:14;:24;;;;;;;;;4635:8;:18;;;;;-1:-1:-1;;;;;4635:33:5;;;;;;;;;;;:50;;;;;;;;:69;;4587:24;;;;;4635:50;4691:12;;4635:69;;;;;;;;;;;;;;;;:79;;;4718:1;4635:84;;:189;;;;-1:-1:-1;4735:18:5;;;;:8;:18;;;;;;;;-1:-1:-1;;;;;4735:33:5;;;;;;;;;:50;;;;;;;;:69;;4791:12;;4735:69;;;;;;;;;;;;;;:80;:69;;;;;:80;;;;:89;4635:189;:321;;;;-1:-1:-1;4876:18:5;;;;:8;:18;;;;;;;;-1:-1:-1;;;;;4876:33:5;;;;;;;;;;;:50;;;;;;;;;:69;;4840:10;;;;;;4851:13;;4866:8;;4876:50;4932:12;;4876:69;;;;;;;;;;;;;;;;:79;;;4840:116;;;;;;;;-1:-1:-1;;;4840:116:5;;;;;;-1:-1:-1;;;;;4840:116:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4635:321;:424;;;;-1:-1:-1;4972:18:5;;;;:8;:18;;;;;;;;-1:-1:-1;;;;;4972:33:5;;;;;;;;;:50;;;;;;;;:69;;5056:3;;4972:50;5028:12;;4972:69;;;;;;;;;;;;;;;;:81;;;:87;4635:424;4631:1392;;;5084:18;;;;:8;:18;;;;;;;;-1:-1:-1;;;;;5084:33:5;;;;;;;;;:50;;;;;;;;:69;;5167:4;;5084:50;5140:12;;5084:69;;;;;;;;;;;;;;;;;;;;;;:80;;:87;;-1:-1:-1;;5084:87:5;;;;;;;;;;;5312:18;;;:8;:18;;;;;;-1:-1:-1;;;;;5312:33:5;;;;;;;;;:50;;;;;;;-1:-1:-1;5312:60:5;;;5390:69;;5278:205;;5312:50;5446:12;;5390:69;;;;;;;;;;;;;;;;:79;;;5278:16;:205::i;:::-;5215:18;;;;:8;:18;;;;;;;;-1:-1:-1;;;;;5215:33:5;;;;;;;;;:50;;;;;;;;;:60;;;:268;;;;5593:59;;;5670:69;;5559:203;;5215:50;5726:12;;5670:69;;;;;;;;;;;;;;;;:78;;;5559:16;:203::i;:::-;5497:18;;;;:8;:18;;;;;;;;-1:-1:-1;;;;;5497:33:5;;;;;;;;;:50;;;;;;;;;:59;;;:265;;;;5823:69;;5801:4;;5497:50;5879:12;;5823:69;;;;;;;;;;;;;;;;;;;;;:79;5920:18;;;:8;:18;;;;;;-1:-1:-1;;;;;5920:33:5;;;;;;;;;:50;;;;;;;;:69;;5976:12;;5920:69;;;;;;;;;;;;;;;;:78;;;5776:236;;;;;;;;4631:1392;6040:5;;-1:-1:-1;6040:5:5;;-1:-1:-1;6040:5:5;;-1:-1:-1;904:1:16;4339:1720:5;;;;;;;;;;:::o;6796:410::-;6931:4;6980:18;;;:8;:18;;;;;;;;-1:-1:-1;;;;;6980:33:5;;;;;;;;;;;;:50;;;;;;;;;:62;;7056:60;;;;7130:59;;;;;6980:62;;7056:60;;7130:59;6796:410::o;149:23:16:-;;;-1:-1:-1;;;;;149:23:16;;:::o;849:111:10:-;905:4;926:6;;;;919:14;;;;-1:-1:-1;948:5:10;;;849:111::o;1223:135::-;1279:4;1302:5;;;1322:4;;;;;;:12;;;1333:1;1330;:4;;1322:12;1315:20;;;;;;1350:1;1223:135;-1:-1:-1;;;1223:135:10:o;164:7959:5:-;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;164:7959:5;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.17;\n\nimport \"./SafeMath.sol\";\nimport \"./withAccessManager.sol\";\nimport \"./DepositContract.sol\";\n\n\n/// @title DepositCountractsManager contract\ncontract DepositContractsManager is withAccessManager {\n    // FIELDS\n\n    // This variable represents deposits \n    // and their related information i.e., amount deposited and received\n    // and a boolean isReleased indicating whether the deposit has been released.\n    struct Deposit {\n        uint deposited;\n        uint received;\n        uint releaseTime;\n        bool isReleased;\n    }\n\n    // This variable will be used to store a list of deposits\n    // together with the total amount deposited and received for a deposit contract.\n    struct DepositList {\n        Deposit[] list;\n        uint deposited;\n        uint received;\n    }\n\n    // This variable will be used to keep track of client IDs and\n    // their deposit addresses\n    // clientId => depositAddress\n    mapping (bytes32 => address) depositAddress;\n\n    // The variable 'deposits'\n    // links a bytes32 client ID to a token contract address linked to a currency symbol \n    // linked to a DepositList object type declared above.\n    // clientId => tokenContract => currencySymbol => DepositList\n    mapping (bytes32 => mapping(address => mapping(bytes32 => DepositList))) deposits;\n\n\n    // NON-CONSTANT METHODS\n\n    // The constructor method called when this contract instance is deployed \n    // using a modifier the _accessManager address\n    function DepositContractsManager(address _accessManager) public\n        withAccessManager(_accessManager) { }\n\n    /** @dev Creates a new 'depositAddress' gotten from deploying a deposit contract linked to a client ID\n      * @param clientId The bytes32 client ID\n      * @return address The address of the deployed deposit contract instance.\n      */\n    function create(bytes32 clientId) public\n        onlyPopulous\n        returns (address)\n    {\n        depositAddress[clientId] = new DepositContract(clientId);\n        assert(depositAddress[clientId] != 0x0);\n\n        return depositAddress[clientId];\n    }\n\n    /** @dev Deposits an amount of tokens linked to a client ID.\n      * @param clientId The client ID.\n      * @param tokenContract The token contract.\n      * @param receiveCurrency The currency symbol.\n      * @param depositAmount The deposit amount.\n      * @param receiveAmount The receive amount.\n      * @return bool boolean value indicating whether or not a deposit transaction has been made with success.\n      * @return uint The updated number of deposits.\n      */\n    function deposit(bytes32 clientId, address tokenContract, bytes32 receiveCurrency, uint depositAmount, uint receiveAmount)\n        public\n        onlyPopulous\n        returns (bool, uint)\n    {\n        DepositContract o = DepositContract(depositAddress[clientId]);\n\n        if (SafeMath.safeSub(o.balanceOf(tokenContract), deposits[clientId][tokenContract][receiveCurrency].deposited) == depositAmount) {\n            // save new deposit info\n            deposits[clientId][tokenContract][receiveCurrency].list.push(Deposit(depositAmount, receiveAmount, now + 30 days, false));\n            \n            // update totals\n            deposits[clientId][tokenContract][receiveCurrency].deposited = SafeMath.safeAdd(\n                deposits[clientId][tokenContract][receiveCurrency].deposited,\n                depositAmount\n            );\n            deposits[clientId][tokenContract][receiveCurrency].received = SafeMath.safeAdd(\n                deposits[clientId][tokenContract][receiveCurrency].received,\n                receiveAmount\n            );\n            return (true, deposits[clientId][tokenContract][receiveCurrency].list.length - 1);\n        }\n        return (false, 0);\n    }\n\n    /** @dev Releases a deposit to an address/wallet.\n      * @param clientId The client ID.\n      * @param tokenContract The token contract.\n      * @param receiveCurrency The currency symbol.\n      * @param receiver The address/wallet of the receiver.\n      * @param depositIndex The index/location of a specific deposit in the declared deposit list above.\n      * @return bool boolean value indicating whether or not a deposit has been updated with success.\n      * @return uint The token amount deposited.\n      * @return uint The token amount received.\n      */\n    function releaseDeposit(bytes32 clientId, address tokenContract, bytes32 receiveCurrency, address receiver, uint depositIndex)\n        public\n        onlyPopulous\n        returns (bool, uint, uint)\n    {\n        DepositContract o = DepositContract(depositAddress[clientId]);\n        \n        if (deposits[clientId][tokenContract][receiveCurrency].list[depositIndex].deposited != 0 &&\n            deposits[clientId][tokenContract][receiveCurrency].list[depositIndex].isReleased == false &&\n            o.transfer(tokenContract, receiver, deposits[clientId][tokenContract][receiveCurrency].list[depositIndex].deposited) &&\n            deposits[clientId][tokenContract][receiveCurrency].list[depositIndex].releaseTime > now\n        ) {\n            deposits[clientId][tokenContract][receiveCurrency].list[depositIndex].isReleased = true;\n\n            // update totals\n            deposits[clientId][tokenContract][receiveCurrency].deposited = SafeMath.safeSub(\n                deposits[clientId][tokenContract][receiveCurrency].deposited,\n                deposits[clientId][tokenContract][receiveCurrency].list[depositIndex].deposited\n            );\n            deposits[clientId][tokenContract][receiveCurrency].received = SafeMath.safeSub(\n                deposits[clientId][tokenContract][receiveCurrency].received,\n                deposits[clientId][tokenContract][receiveCurrency].list[depositIndex].received\n            );\n            return (\n                true,\n                deposits[clientId][tokenContract][receiveCurrency].list[depositIndex].deposited,\n                deposits[clientId][tokenContract][receiveCurrency].list[depositIndex].received\n            );\n        }\n        return (false, 0, 0);\n    }\n\n\n    // CONSTANT METHODS\n\n\n    /** @dev Gets the deposit address linked to a given client ID.\n      * @param clientId The client ID.\n      * @return address The deposit address.\n      */\n    function getDepositAddress(bytes32 clientId) public view returns (address) {\n        return depositAddress[clientId];\n    }\n\n    /** @dev Gets the deposit address linked to a given client ID.\n      * @param clientId The client ID.\n      * @param tokenContract The token contract\n      * @param receiveCurrency The currency symbol\n      * @return uint The length of a deposit list linked to the client ID, token contract and currency.\n      * @return uint The token amount deposited.\n      * @return uint The token amount received.\n      */\n    function getActiveDepositList(bytes32 clientId, address tokenContract, bytes32 receiveCurrency) \n        public \n        view returns (uint, uint, uint) {\n        return (\n            deposits[clientId][tokenContract][receiveCurrency].list.length,\n            deposits[clientId][tokenContract][receiveCurrency].deposited,\n            deposits[clientId][tokenContract][receiveCurrency].received\n        );\n    }\n\n    /** @dev Gets the details of a deposit.\n      * @param clientId The client ID.\n      * @param tokenContract The token contract.\n      * @param receiveCurrency The currency symbol.\n      * @param depositIndex The ID of a particular deposit in a deposit list.\n      * @return uint Deposited amount.\n      * @return uint Received amount.\n      * @return bool Boolean value to indicate if deposit is released or not.\n      */\n    function getActiveDeposit(bytes32 clientId, address tokenContract, bytes32 receiveCurrency, uint depositIndex) \n        public \n        view returns (uint, uint, bool) {\n        return (\n            deposits[clientId][tokenContract][receiveCurrency].list[depositIndex].deposited,\n            deposits[clientId][tokenContract][receiveCurrency].list[depositIndex].received,\n            deposits[clientId][tokenContract][receiveCurrency].list[depositIndex].isReleased\n        );\n    }\n\n\n}",
  "sourcePath": "/Users/najienka/Desktop/populous-smartcontracts/contracts/DepositContractsManager.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/najienka/Desktop/populous-smartcontracts/contracts/DepositContractsManager.sol",
      "exportedSymbols": {
        "DepositContractsManager": [
          2275
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
        "id": 1766,
        "name": "PragmaDirective",
        "src": "0:24:5"
      },
      {
        "attributes": {
          "SourceUnit": 4542,
          "absolutePath": "/Users/najienka/Desktop/populous-smartcontracts/contracts/SafeMath.sol",
          "file": "./SafeMath.sol",
          "scope": 2276,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1767,
        "name": "ImportDirective",
        "src": "26:24:5"
      },
      {
        "attributes": {
          "SourceUnit": 4962,
          "absolutePath": "/Users/najienka/Desktop/populous-smartcontracts/contracts/withAccessManager.sol",
          "file": "./withAccessManager.sol",
          "scope": 2276,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1768,
        "name": "ImportDirective",
        "src": "51:33:5"
      },
      {
        "attributes": {
          "SourceUnit": 1765,
          "absolutePath": "/Users/najienka/Desktop/populous-smartcontracts/contracts/DepositContract.sol",
          "file": "./DepositContract.sol",
          "scope": 2276,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1769,
        "name": "ImportDirective",
        "src": "85:31:5"
      },
      {
        "attributes": {
          "contractDependencies": [
            1764,
            4961
          ],
          "contractKind": "contract",
          "documentation": "@title DepositCountractsManager contract",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            2275,
            4961
          ],
          "name": "DepositContractsManager",
          "scope": 2276
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
                  "name": "withAccessManager",
                  "referencedDeclaration": 4961,
                  "type": "contract withAccessManager"
                },
                "id": 1770,
                "name": "UserDefinedTypeName",
                "src": "200:17:5"
              }
            ],
            "id": 1771,
            "name": "InheritanceSpecifier",
            "src": "200:17:5"
          },
          {
            "attributes": {
              "canonicalName": "DepositContractsManager.Deposit",
              "name": "Deposit",
              "scope": 2275,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "deposited",
                  "scope": 1780,
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
                    "id": 1772,
                    "name": "ElementaryTypeName",
                    "src": "461:4:5"
                  }
                ],
                "id": 1773,
                "name": "VariableDeclaration",
                "src": "461:14:5"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "received",
                  "scope": 1780,
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
                    "id": 1774,
                    "name": "ElementaryTypeName",
                    "src": "485:4:5"
                  }
                ],
                "id": 1775,
                "name": "VariableDeclaration",
                "src": "485:13:5"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "releaseTime",
                  "scope": 1780,
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
                    "id": 1776,
                    "name": "ElementaryTypeName",
                    "src": "508:4:5"
                  }
                ],
                "id": 1777,
                "name": "VariableDeclaration",
                "src": "508:16:5"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "isReleased",
                  "scope": 1780,
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
                    "id": 1778,
                    "name": "ElementaryTypeName",
                    "src": "534:4:5"
                  }
                ],
                "id": 1779,
                "name": "VariableDeclaration",
                "src": "534:15:5"
              }
            ],
            "id": 1780,
            "name": "StructDefinition",
            "src": "436:120:5"
          },
          {
            "attributes": {
              "canonicalName": "DepositContractsManager.DepositList",
              "name": "DepositList",
              "scope": 2275,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "list",
                  "scope": 1788,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "struct DepositContractsManager.Deposit storage ref[] storage pointer",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "length": null,
                      "type": "struct DepositContractsManager.Deposit storage ref[] storage pointer"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Deposit",
                          "referencedDeclaration": 1780,
                          "type": "struct DepositContractsManager.Deposit storage pointer"
                        },
                        "id": 1781,
                        "name": "UserDefinedTypeName",
                        "src": "738:7:5"
                      }
                    ],
                    "id": 1782,
                    "name": "ArrayTypeName",
                    "src": "738:9:5"
                  }
                ],
                "id": 1783,
                "name": "VariableDeclaration",
                "src": "738:14:5"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "deposited",
                  "scope": 1788,
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
                    "id": 1784,
                    "name": "ElementaryTypeName",
                    "src": "762:4:5"
                  }
                ],
                "id": 1785,
                "name": "VariableDeclaration",
                "src": "762:14:5"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "received",
                  "scope": 1788,
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
                    "id": 1786,
                    "name": "ElementaryTypeName",
                    "src": "786:4:5"
                  }
                ],
                "id": 1787,
                "name": "VariableDeclaration",
                "src": "786:13:5"
              }
            ],
            "id": 1788,
            "name": "StructDefinition",
            "src": "709:97:5"
          },
          {
            "attributes": {
              "constant": false,
              "name": "depositAddress",
              "scope": 2275,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => address)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => address)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 1789,
                    "name": "ElementaryTypeName",
                    "src": "952:7:5"
                  },
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 1790,
                    "name": "ElementaryTypeName",
                    "src": "963:7:5"
                  }
                ],
                "id": 1791,
                "name": "Mapping",
                "src": "943:28:5"
              }
            ],
            "id": 1792,
            "name": "VariableDeclaration",
            "src": "943:43:5"
          },
          {
            "attributes": {
              "constant": false,
              "name": "deposits",
              "scope": 2275,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 1793,
                    "name": "ElementaryTypeName",
                    "src": "1248:7:5"
                  },
                  {
                    "attributes": {
                      "type": "mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref))"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 1794,
                        "name": "ElementaryTypeName",
                        "src": "1267:7:5"
                      },
                      {
                        "attributes": {
                          "type": "mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 1795,
                            "name": "ElementaryTypeName",
                            "src": "1286:7:5"
                          },
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "DepositList",
                              "referencedDeclaration": 1788,
                              "type": "struct DepositContractsManager.DepositList storage pointer"
                            },
                            "id": 1796,
                            "name": "UserDefinedTypeName",
                            "src": "1297:11:5"
                          }
                        ],
                        "id": 1797,
                        "name": "Mapping",
                        "src": "1278:31:5"
                      }
                    ],
                    "id": 1798,
                    "name": "Mapping",
                    "src": "1259:51:5"
                  }
                ],
                "id": 1799,
                "name": "Mapping",
                "src": "1239:72:5"
              }
            ],
            "id": 1800,
            "name": "VariableDeclaration",
            "src": "1239:81:5"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "name": "DepositContractsManager",
              "payable": false,
              "scope": 2275,
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
                      "scope": 1809,
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
                        "id": 1801,
                        "name": "ElementaryTypeName",
                        "src": "1519:7:5"
                      }
                    ],
                    "id": 1802,
                    "name": "VariableDeclaration",
                    "src": "1519:22:5"
                  }
                ],
                "id": 1803,
                "name": "ParameterList",
                "src": "1518:24:5"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1807,
                "name": "ParameterList",
                "src": "1592:0:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 4961,
                      "type": "type(contract withAccessManager)",
                      "value": "withAccessManager"
                    },
                    "id": 1804,
                    "name": "Identifier",
                    "src": "1558:17:5"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1802,
                      "type": "address",
                      "value": "_accessManager"
                    },
                    "id": 1805,
                    "name": "Identifier",
                    "src": "1576:14:5"
                  }
                ],
                "id": 1806,
                "name": "ModifierInvocation",
                "src": "1558:33:5"
              },
              {
                "attributes": {
                  "statements": [
                    null
                  ]
                },
                "children": [],
                "id": 1808,
                "name": "Block",
                "src": "1592:3:5"
              }
            ],
            "id": 1809,
            "name": "FunctionDefinition",
            "src": "1486:109:5"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "create",
              "payable": false,
              "scope": 2275,
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
                      "name": "clientId",
                      "scope": 1840,
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
                        "id": 1810,
                        "name": "ElementaryTypeName",
                        "src": "1858:7:5"
                      }
                    ],
                    "id": 1811,
                    "name": "VariableDeclaration",
                    "src": "1858:16:5"
                  }
                ],
                "id": 1812,
                "name": "ParameterList",
                "src": "1857:18:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1840,
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
                        "id": 1815,
                        "name": "ElementaryTypeName",
                        "src": "1921:7:5"
                      }
                    ],
                    "id": 1816,
                    "name": "VariableDeclaration",
                    "src": "1921:7:5"
                  }
                ],
                "id": 1817,
                "name": "ParameterList",
                "src": "1920:9:5"
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
                      "referencedDeclaration": 4934,
                      "type": "modifier ()",
                      "value": "onlyPopulous"
                    },
                    "id": 1813,
                    "name": "Identifier",
                    "src": "1891:12:5"
                  }
                ],
                "id": 1814,
                "name": "ModifierInvocation",
                "src": "1891:12:5"
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
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1792,
                                  "type": "mapping(bytes32 => address)",
                                  "value": "depositAddress"
                                },
                                "id": 1818,
                                "name": "Identifier",
                                "src": "1944:14:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1811,
                                  "type": "bytes32",
                                  "value": "clientId"
                                },
                                "id": 1819,
                                "name": "Identifier",
                                "src": "1959:8:5"
                              }
                            ],
                            "id": 1820,
                            "name": "IndexAccess",
                            "src": "1944:24:5"
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
                              "type": "contract DepositContract",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "function (bytes32) returns (contract DepositContract)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "contractScope": null,
                                      "name": "DepositContract",
                                      "referencedDeclaration": 1764,
                                      "type": "contract DepositContract"
                                    },
                                    "id": 1821,
                                    "name": "UserDefinedTypeName",
                                    "src": "1975:15:5"
                                  }
                                ],
                                "id": 1822,
                                "name": "NewExpression",
                                "src": "1971:19:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1811,
                                  "type": "bytes32",
                                  "value": "clientId"
                                },
                                "id": 1823,
                                "name": "Identifier",
                                "src": "1991:8:5"
                              }
                            ],
                            "id": 1824,
                            "name": "FunctionCall",
                            "src": "1971:29:5"
                          }
                        ],
                        "id": 1825,
                        "name": "Assignment",
                        "src": "1944:56:5"
                      }
                    ],
                    "id": 1826,
                    "name": "ExpressionStatement",
                    "src": "1944:56:5"
                  },
                  {
                    "children": [
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
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 4981,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 1827,
                            "name": "Identifier",
                            "src": "2010:6:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
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
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1792,
                                      "type": "mapping(bytes32 => address)",
                                      "value": "depositAddress"
                                    },
                                    "id": 1828,
                                    "name": "Identifier",
                                    "src": "2017:14:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1811,
                                      "type": "bytes32",
                                      "value": "clientId"
                                    },
                                    "id": 1829,
                                    "name": "Identifier",
                                    "src": "2032:8:5"
                                  }
                                ],
                                "id": 1830,
                                "name": "IndexAccess",
                                "src": "2017:24:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "307830",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0x0"
                                },
                                "id": 1831,
                                "name": "Literal",
                                "src": "2045:3:5"
                              }
                            ],
                            "id": 1832,
                            "name": "BinaryOperation",
                            "src": "2017:31:5"
                          }
                        ],
                        "id": 1833,
                        "name": "FunctionCall",
                        "src": "2010:39:5"
                      }
                    ],
                    "id": 1834,
                    "name": "ExpressionStatement",
                    "src": "2010:39:5"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1817
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1792,
                              "type": "mapping(bytes32 => address)",
                              "value": "depositAddress"
                            },
                            "id": 1835,
                            "name": "Identifier",
                            "src": "2067:14:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1811,
                              "type": "bytes32",
                              "value": "clientId"
                            },
                            "id": 1836,
                            "name": "Identifier",
                            "src": "2082:8:5"
                          }
                        ],
                        "id": 1837,
                        "name": "IndexAccess",
                        "src": "2067:24:5"
                      }
                    ],
                    "id": 1838,
                    "name": "Return",
                    "src": "2060:31:5"
                  }
                ],
                "id": 1839,
                "name": "Block",
                "src": "1934:164:5"
              }
            ],
            "id": 1840,
            "name": "FunctionDefinition",
            "src": "1842:256:5"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "deposit",
              "payable": false,
              "scope": 2275,
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
                      "name": "clientId",
                      "scope": 1968,
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
                        "id": 1841,
                        "name": "ElementaryTypeName",
                        "src": "2597:7:5"
                      }
                    ],
                    "id": 1842,
                    "name": "VariableDeclaration",
                    "src": "2597:16:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenContract",
                      "scope": 1968,
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
                        "id": 1843,
                        "name": "ElementaryTypeName",
                        "src": "2615:7:5"
                      }
                    ],
                    "id": 1844,
                    "name": "VariableDeclaration",
                    "src": "2615:21:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "receiveCurrency",
                      "scope": 1968,
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
                        "id": 1845,
                        "name": "ElementaryTypeName",
                        "src": "2638:7:5"
                      }
                    ],
                    "id": 1846,
                    "name": "VariableDeclaration",
                    "src": "2638:23:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "depositAmount",
                      "scope": 1968,
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
                        "id": 1847,
                        "name": "ElementaryTypeName",
                        "src": "2663:4:5"
                      }
                    ],
                    "id": 1848,
                    "name": "VariableDeclaration",
                    "src": "2663:18:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "receiveAmount",
                      "scope": 1968,
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
                        "id": 1849,
                        "name": "ElementaryTypeName",
                        "src": "2683:4:5"
                      }
                    ],
                    "id": 1850,
                    "name": "VariableDeclaration",
                    "src": "2683:18:5"
                  }
                ],
                "id": 1851,
                "name": "ParameterList",
                "src": "2596:106:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1968,
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
                        "id": 1854,
                        "name": "ElementaryTypeName",
                        "src": "2756:4:5"
                      }
                    ],
                    "id": 1855,
                    "name": "VariableDeclaration",
                    "src": "2756:4:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1968,
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
                        "id": 1856,
                        "name": "ElementaryTypeName",
                        "src": "2762:4:5"
                      }
                    ],
                    "id": 1857,
                    "name": "VariableDeclaration",
                    "src": "2762:4:5"
                  }
                ],
                "id": 1858,
                "name": "ParameterList",
                "src": "2755:12:5"
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
                      "referencedDeclaration": 4934,
                      "type": "modifier ()",
                      "value": "onlyPopulous"
                    },
                    "id": 1852,
                    "name": "Identifier",
                    "src": "2726:12:5"
                  }
                ],
                "id": 1853,
                "name": "ModifierInvocation",
                "src": "2726:12:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1860
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "o",
                          "scope": 1968,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "contract DepositContract",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "DepositContract",
                              "referencedDeclaration": 1764,
                              "type": "contract DepositContract"
                            },
                            "id": 1859,
                            "name": "UserDefinedTypeName",
                            "src": "2782:15:5"
                          }
                        ],
                        "id": 1860,
                        "name": "VariableDeclaration",
                        "src": "2782:17:5"
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
                          "type": "contract DepositContract",
                          "type_conversion": true
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1764,
                              "type": "type(contract DepositContract)",
                              "value": "DepositContract"
                            },
                            "id": 1861,
                            "name": "Identifier",
                            "src": "2802:15:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1792,
                                  "type": "mapping(bytes32 => address)",
                                  "value": "depositAddress"
                                },
                                "id": 1862,
                                "name": "Identifier",
                                "src": "2818:14:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1842,
                                  "type": "bytes32",
                                  "value": "clientId"
                                },
                                "id": 1863,
                                "name": "Identifier",
                                "src": "2833:8:5"
                              }
                            ],
                            "id": 1864,
                            "name": "IndexAccess",
                            "src": "2818:24:5"
                          }
                        ],
                        "id": 1865,
                        "name": "FunctionCall",
                        "src": "2802:41:5"
                      }
                    ],
                    "id": 1866,
                    "name": "VariableDeclarationStatement",
                    "src": "2782:61:5"
                  },
                  {
                    "attributes": {
                      "falseBody": null
                    },
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
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
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
                                  "referencedDeclaration": 4476,
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
                                    "id": 1867,
                                    "name": "Identifier",
                                    "src": "2858:8:5"
                                  }
                                ],
                                "id": 1868,
                                "name": "MemberAccess",
                                "src": "2858:16:5"
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
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "balanceOf",
                                      "referencedDeclaration": 1763,
                                      "type": "function (address) view external returns (uint256)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1860,
                                          "type": "contract DepositContract",
                                          "value": "o"
                                        },
                                        "id": 1869,
                                        "name": "Identifier",
                                        "src": "2875:1:5"
                                      }
                                    ],
                                    "id": 1870,
                                    "name": "MemberAccess",
                                    "src": "2875:11:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1844,
                                      "type": "address",
                                      "value": "tokenContract"
                                    },
                                    "id": 1871,
                                    "name": "Identifier",
                                    "src": "2887:13:5"
                                  }
                                ],
                                "id": 1872,
                                "name": "FunctionCall",
                                "src": "2875:26:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "deposited",
                                  "referencedDeclaration": 1785,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "struct DepositContractsManager.DepositList storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref))"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1800,
                                                  "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                  "value": "deposits"
                                                },
                                                "id": 1873,
                                                "name": "Identifier",
                                                "src": "2903:8:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1842,
                                                  "type": "bytes32",
                                                  "value": "clientId"
                                                },
                                                "id": 1874,
                                                "name": "Identifier",
                                                "src": "2912:8:5"
                                              }
                                            ],
                                            "id": 1875,
                                            "name": "IndexAccess",
                                            "src": "2903:18:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1844,
                                              "type": "address",
                                              "value": "tokenContract"
                                            },
                                            "id": 1876,
                                            "name": "Identifier",
                                            "src": "2922:13:5"
                                          }
                                        ],
                                        "id": 1877,
                                        "name": "IndexAccess",
                                        "src": "2903:33:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1846,
                                          "type": "bytes32",
                                          "value": "receiveCurrency"
                                        },
                                        "id": 1878,
                                        "name": "Identifier",
                                        "src": "2937:15:5"
                                      }
                                    ],
                                    "id": 1879,
                                    "name": "IndexAccess",
                                    "src": "2903:50:5"
                                  }
                                ],
                                "id": 1880,
                                "name": "MemberAccess",
                                "src": "2903:60:5"
                              }
                            ],
                            "id": 1881,
                            "name": "FunctionCall",
                            "src": "2858:106:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1848,
                              "type": "uint256",
                              "value": "depositAmount"
                            },
                            "id": 1882,
                            "name": "Identifier",
                            "src": "2968:13:5"
                          }
                        ],
                        "id": 1883,
                        "name": "BinaryOperation",
                        "src": "2858:123:5"
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
                                          "typeIdentifier": "t_struct$_Deposit_$1780_memory",
                                          "typeString": "struct DepositContractsManager.Deposit memory"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "push",
                                      "referencedDeclaration": null,
                                      "type": "function (struct DepositContractsManager.Deposit storage ref) returns (uint256)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "list",
                                          "referencedDeclaration": 1783,
                                          "type": "struct DepositContractsManager.Deposit storage ref[] storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "struct DepositContractsManager.DepositList storage ref"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "type": "mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref))"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1800,
                                                          "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                          "value": "deposits"
                                                        },
                                                        "id": 1884,
                                                        "name": "Identifier",
                                                        "src": "3034:8:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1842,
                                                          "type": "bytes32",
                                                          "value": "clientId"
                                                        },
                                                        "id": 1885,
                                                        "name": "Identifier",
                                                        "src": "3043:8:5"
                                                      }
                                                    ],
                                                    "id": 1888,
                                                    "name": "IndexAccess",
                                                    "src": "3034:18:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1844,
                                                      "type": "address",
                                                      "value": "tokenContract"
                                                    },
                                                    "id": 1886,
                                                    "name": "Identifier",
                                                    "src": "3053:13:5"
                                                  }
                                                ],
                                                "id": 1889,
                                                "name": "IndexAccess",
                                                "src": "3034:33:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1846,
                                                  "type": "bytes32",
                                                  "value": "receiveCurrency"
                                                },
                                                "id": 1887,
                                                "name": "Identifier",
                                                "src": "3068:15:5"
                                              }
                                            ],
                                            "id": 1890,
                                            "name": "IndexAccess",
                                            "src": "3034:50:5"
                                          }
                                        ],
                                        "id": 1891,
                                        "name": "MemberAccess",
                                        "src": "3034:55:5"
                                      }
                                    ],
                                    "id": 1892,
                                    "name": "MemberAccess",
                                    "src": "3034:60:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": true,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "struct DepositContractsManager.Deposit memory",
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
                                            },
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            },
                                            {
                                              "typeIdentifier": "t_bool",
                                              "typeString": "bool"
                                            }
                                          ],
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1780,
                                          "type": "type(struct DepositContractsManager.Deposit storage pointer)",
                                          "value": "Deposit"
                                        },
                                        "id": 1893,
                                        "name": "Identifier",
                                        "src": "3095:7:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1848,
                                          "type": "uint256",
                                          "value": "depositAmount"
                                        },
                                        "id": 1894,
                                        "name": "Identifier",
                                        "src": "3103:13:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1850,
                                          "type": "uint256",
                                          "value": "receiveAmount"
                                        },
                                        "id": 1895,
                                        "name": "Identifier",
                                        "src": "3118:13:5"
                                      },
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
                                          "operator": "+",
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 4966,
                                              "type": "uint256",
                                              "value": "now"
                                            },
                                            "id": 1896,
                                            "name": "Identifier",
                                            "src": "3133:3:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "hexvalue": "3330",
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "subdenomination": "days",
                                              "token": "number",
                                              "type": "int_const 2592000",
                                              "value": "30"
                                            },
                                            "id": 1897,
                                            "name": "Literal",
                                            "src": "3139:7:5"
                                          }
                                        ],
                                        "id": 1898,
                                        "name": "BinaryOperation",
                                        "src": "3133:13:5"
                                      },
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
                                        "id": 1899,
                                        "name": "Literal",
                                        "src": "3148:5:5"
                                      }
                                    ],
                                    "id": 1900,
                                    "name": "FunctionCall",
                                    "src": "3095:59:5"
                                  }
                                ],
                                "id": 1901,
                                "name": "FunctionCall",
                                "src": "3034:121:5"
                              }
                            ],
                            "id": 1902,
                            "name": "ExpressionStatement",
                            "src": "3034:121:5"
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
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "member_name": "deposited",
                                      "referencedDeclaration": 1785,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct DepositContractsManager.DepositList storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref))"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1800,
                                                      "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                      "value": "deposits"
                                                    },
                                                    "id": 1903,
                                                    "name": "Identifier",
                                                    "src": "3211:8:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1842,
                                                      "type": "bytes32",
                                                      "value": "clientId"
                                                    },
                                                    "id": 1904,
                                                    "name": "Identifier",
                                                    "src": "3220:8:5"
                                                  }
                                                ],
                                                "id": 1907,
                                                "name": "IndexAccess",
                                                "src": "3211:18:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1844,
                                                  "type": "address",
                                                  "value": "tokenContract"
                                                },
                                                "id": 1905,
                                                "name": "Identifier",
                                                "src": "3230:13:5"
                                              }
                                            ],
                                            "id": 1908,
                                            "name": "IndexAccess",
                                            "src": "3211:33:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1846,
                                              "type": "bytes32",
                                              "value": "receiveCurrency"
                                            },
                                            "id": 1906,
                                            "name": "Identifier",
                                            "src": "3245:15:5"
                                          }
                                        ],
                                        "id": 1909,
                                        "name": "IndexAccess",
                                        "src": "3211:50:5"
                                      }
                                    ],
                                    "id": 1910,
                                    "name": "MemberAccess",
                                    "src": "3211:60:5"
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
                                            "id": 1911,
                                            "name": "Identifier",
                                            "src": "3274:8:5"
                                          }
                                        ],
                                        "id": 1912,
                                        "name": "MemberAccess",
                                        "src": "3274:16:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "deposited",
                                          "referencedDeclaration": 1785,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "struct DepositContractsManager.DepositList storage ref"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "type": "mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref))"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1800,
                                                          "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                          "value": "deposits"
                                                        },
                                                        "id": 1913,
                                                        "name": "Identifier",
                                                        "src": "3308:8:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1842,
                                                          "type": "bytes32",
                                                          "value": "clientId"
                                                        },
                                                        "id": 1914,
                                                        "name": "Identifier",
                                                        "src": "3317:8:5"
                                                      }
                                                    ],
                                                    "id": 1915,
                                                    "name": "IndexAccess",
                                                    "src": "3308:18:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1844,
                                                      "type": "address",
                                                      "value": "tokenContract"
                                                    },
                                                    "id": 1916,
                                                    "name": "Identifier",
                                                    "src": "3327:13:5"
                                                  }
                                                ],
                                                "id": 1917,
                                                "name": "IndexAccess",
                                                "src": "3308:33:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1846,
                                                  "type": "bytes32",
                                                  "value": "receiveCurrency"
                                                },
                                                "id": 1918,
                                                "name": "Identifier",
                                                "src": "3342:15:5"
                                              }
                                            ],
                                            "id": 1919,
                                            "name": "IndexAccess",
                                            "src": "3308:50:5"
                                          }
                                        ],
                                        "id": 1920,
                                        "name": "MemberAccess",
                                        "src": "3308:60:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1848,
                                          "type": "uint256",
                                          "value": "depositAmount"
                                        },
                                        "id": 1921,
                                        "name": "Identifier",
                                        "src": "3386:13:5"
                                      }
                                    ],
                                    "id": 1922,
                                    "name": "FunctionCall",
                                    "src": "3274:139:5"
                                  }
                                ],
                                "id": 1923,
                                "name": "Assignment",
                                "src": "3211:202:5"
                              }
                            ],
                            "id": 1924,
                            "name": "ExpressionStatement",
                            "src": "3211:202:5"
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
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "member_name": "received",
                                      "referencedDeclaration": 1787,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct DepositContractsManager.DepositList storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref))"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1800,
                                                      "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                      "value": "deposits"
                                                    },
                                                    "id": 1925,
                                                    "name": "Identifier",
                                                    "src": "3427:8:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1842,
                                                      "type": "bytes32",
                                                      "value": "clientId"
                                                    },
                                                    "id": 1926,
                                                    "name": "Identifier",
                                                    "src": "3436:8:5"
                                                  }
                                                ],
                                                "id": 1929,
                                                "name": "IndexAccess",
                                                "src": "3427:18:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1844,
                                                  "type": "address",
                                                  "value": "tokenContract"
                                                },
                                                "id": 1927,
                                                "name": "Identifier",
                                                "src": "3446:13:5"
                                              }
                                            ],
                                            "id": 1930,
                                            "name": "IndexAccess",
                                            "src": "3427:33:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1846,
                                              "type": "bytes32",
                                              "value": "receiveCurrency"
                                            },
                                            "id": 1928,
                                            "name": "Identifier",
                                            "src": "3461:15:5"
                                          }
                                        ],
                                        "id": 1931,
                                        "name": "IndexAccess",
                                        "src": "3427:50:5"
                                      }
                                    ],
                                    "id": 1932,
                                    "name": "MemberAccess",
                                    "src": "3427:59:5"
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
                                            "id": 1933,
                                            "name": "Identifier",
                                            "src": "3489:8:5"
                                          }
                                        ],
                                        "id": 1934,
                                        "name": "MemberAccess",
                                        "src": "3489:16:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "received",
                                          "referencedDeclaration": 1787,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "struct DepositContractsManager.DepositList storage ref"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "type": "mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref))"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1800,
                                                          "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                          "value": "deposits"
                                                        },
                                                        "id": 1935,
                                                        "name": "Identifier",
                                                        "src": "3523:8:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1842,
                                                          "type": "bytes32",
                                                          "value": "clientId"
                                                        },
                                                        "id": 1936,
                                                        "name": "Identifier",
                                                        "src": "3532:8:5"
                                                      }
                                                    ],
                                                    "id": 1937,
                                                    "name": "IndexAccess",
                                                    "src": "3523:18:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1844,
                                                      "type": "address",
                                                      "value": "tokenContract"
                                                    },
                                                    "id": 1938,
                                                    "name": "Identifier",
                                                    "src": "3542:13:5"
                                                  }
                                                ],
                                                "id": 1939,
                                                "name": "IndexAccess",
                                                "src": "3523:33:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1846,
                                                  "type": "bytes32",
                                                  "value": "receiveCurrency"
                                                },
                                                "id": 1940,
                                                "name": "Identifier",
                                                "src": "3557:15:5"
                                              }
                                            ],
                                            "id": 1941,
                                            "name": "IndexAccess",
                                            "src": "3523:50:5"
                                          }
                                        ],
                                        "id": 1942,
                                        "name": "MemberAccess",
                                        "src": "3523:59:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1850,
                                          "type": "uint256",
                                          "value": "receiveAmount"
                                        },
                                        "id": 1943,
                                        "name": "Identifier",
                                        "src": "3600:13:5"
                                      }
                                    ],
                                    "id": 1944,
                                    "name": "FunctionCall",
                                    "src": "3489:138:5"
                                  }
                                ],
                                "id": 1945,
                                "name": "Assignment",
                                "src": "3427:200:5"
                              }
                            ],
                            "id": 1946,
                            "name": "ExpressionStatement",
                            "src": "3427:200:5"
                          },
                          {
                            "attributes": {
                              "functionReturnParameters": 1858
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "tuple(bool,uint256)"
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
                                    "id": 1947,
                                    "name": "Literal",
                                    "src": "3649:4:5"
                                  },
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
                                      "operator": "-",
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "length",
                                          "referencedDeclaration": null,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "member_name": "list",
                                              "referencedDeclaration": 1783,
                                              "type": "struct DepositContractsManager.Deposit storage ref[] storage ref"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "struct DepositContractsManager.DepositList storage ref"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "type": "mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "isConstant": false,
                                                          "isLValue": true,
                                                          "isPure": false,
                                                          "lValueRequested": false,
                                                          "type": "mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref))"
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 1800,
                                                              "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                              "value": "deposits"
                                                            },
                                                            "id": 1948,
                                                            "name": "Identifier",
                                                            "src": "3655:8:5"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 1842,
                                                              "type": "bytes32",
                                                              "value": "clientId"
                                                            },
                                                            "id": 1949,
                                                            "name": "Identifier",
                                                            "src": "3664:8:5"
                                                          }
                                                        ],
                                                        "id": 1950,
                                                        "name": "IndexAccess",
                                                        "src": "3655:18:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1844,
                                                          "type": "address",
                                                          "value": "tokenContract"
                                                        },
                                                        "id": 1951,
                                                        "name": "Identifier",
                                                        "src": "3674:13:5"
                                                      }
                                                    ],
                                                    "id": 1952,
                                                    "name": "IndexAccess",
                                                    "src": "3655:33:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1846,
                                                      "type": "bytes32",
                                                      "value": "receiveCurrency"
                                                    },
                                                    "id": 1953,
                                                    "name": "Identifier",
                                                    "src": "3689:15:5"
                                                  }
                                                ],
                                                "id": 1954,
                                                "name": "IndexAccess",
                                                "src": "3655:50:5"
                                              }
                                            ],
                                            "id": 1955,
                                            "name": "MemberAccess",
                                            "src": "3655:55:5"
                                          }
                                        ],
                                        "id": 1956,
                                        "name": "MemberAccess",
                                        "src": "3655:62:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "hexvalue": "31",
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "subdenomination": null,
                                          "token": "number",
                                          "type": "int_const 1",
                                          "value": "1"
                                        },
                                        "id": 1957,
                                        "name": "Literal",
                                        "src": "3720:1:5"
                                      }
                                    ],
                                    "id": 1958,
                                    "name": "BinaryOperation",
                                    "src": "3655:66:5"
                                  }
                                ],
                                "id": 1959,
                                "name": "TupleExpression",
                                "src": "3648:74:5"
                              }
                            ],
                            "id": 1960,
                            "name": "Return",
                            "src": "3641:81:5"
                          }
                        ],
                        "id": 1961,
                        "name": "Block",
                        "src": "2983:750:5"
                      }
                    ],
                    "id": 1962,
                    "name": "IfStatement",
                    "src": "2854:879:5"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1858
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "type": "tuple(bool,int_const 0)"
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
                            "id": 1963,
                            "name": "Literal",
                            "src": "3750:5:5"
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
                            "id": 1964,
                            "name": "Literal",
                            "src": "3757:1:5"
                          }
                        ],
                        "id": 1965,
                        "name": "TupleExpression",
                        "src": "3749:10:5"
                      }
                    ],
                    "id": 1966,
                    "name": "Return",
                    "src": "3742:17:5"
                  }
                ],
                "id": 1967,
                "name": "Block",
                "src": "2772:994:5"
              }
            ],
            "id": 1968,
            "name": "FunctionDefinition",
            "src": "2580:1186:5"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "releaseDeposit",
              "payable": false,
              "scope": 2275,
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
                      "name": "clientId",
                      "scope": 2166,
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
                        "id": 1969,
                        "name": "ElementaryTypeName",
                        "src": "4363:7:5"
                      }
                    ],
                    "id": 1970,
                    "name": "VariableDeclaration",
                    "src": "4363:16:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenContract",
                      "scope": 2166,
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
                        "id": 1971,
                        "name": "ElementaryTypeName",
                        "src": "4381:7:5"
                      }
                    ],
                    "id": 1972,
                    "name": "VariableDeclaration",
                    "src": "4381:21:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "receiveCurrency",
                      "scope": 2166,
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
                        "id": 1973,
                        "name": "ElementaryTypeName",
                        "src": "4404:7:5"
                      }
                    ],
                    "id": 1974,
                    "name": "VariableDeclaration",
                    "src": "4404:23:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "receiver",
                      "scope": 2166,
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
                        "id": 1975,
                        "name": "ElementaryTypeName",
                        "src": "4429:7:5"
                      }
                    ],
                    "id": 1976,
                    "name": "VariableDeclaration",
                    "src": "4429:16:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "depositIndex",
                      "scope": 2166,
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
                        "id": 1977,
                        "name": "ElementaryTypeName",
                        "src": "4447:4:5"
                      }
                    ],
                    "id": 1978,
                    "name": "VariableDeclaration",
                    "src": "4447:17:5"
                  }
                ],
                "id": 1979,
                "name": "ParameterList",
                "src": "4362:103:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2166,
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
                        "id": 1982,
                        "name": "ElementaryTypeName",
                        "src": "4519:4:5"
                      }
                    ],
                    "id": 1983,
                    "name": "VariableDeclaration",
                    "src": "4519:4:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2166,
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
                        "id": 1984,
                        "name": "ElementaryTypeName",
                        "src": "4525:4:5"
                      }
                    ],
                    "id": 1985,
                    "name": "VariableDeclaration",
                    "src": "4525:4:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2166,
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
                        "id": 1986,
                        "name": "ElementaryTypeName",
                        "src": "4531:4:5"
                      }
                    ],
                    "id": 1987,
                    "name": "VariableDeclaration",
                    "src": "4531:4:5"
                  }
                ],
                "id": 1988,
                "name": "ParameterList",
                "src": "4518:18:5"
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
                      "referencedDeclaration": 4934,
                      "type": "modifier ()",
                      "value": "onlyPopulous"
                    },
                    "id": 1980,
                    "name": "Identifier",
                    "src": "4489:12:5"
                  }
                ],
                "id": 1981,
                "name": "ModifierInvocation",
                "src": "4489:12:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1990
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "o",
                          "scope": 2166,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "contract DepositContract",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "DepositContract",
                              "referencedDeclaration": 1764,
                              "type": "contract DepositContract"
                            },
                            "id": 1989,
                            "name": "UserDefinedTypeName",
                            "src": "4551:15:5"
                          }
                        ],
                        "id": 1990,
                        "name": "VariableDeclaration",
                        "src": "4551:17:5"
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
                          "type": "contract DepositContract",
                          "type_conversion": true
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1764,
                              "type": "type(contract DepositContract)",
                              "value": "DepositContract"
                            },
                            "id": 1991,
                            "name": "Identifier",
                            "src": "4571:15:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1792,
                                  "type": "mapping(bytes32 => address)",
                                  "value": "depositAddress"
                                },
                                "id": 1992,
                                "name": "Identifier",
                                "src": "4587:14:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1970,
                                  "type": "bytes32",
                                  "value": "clientId"
                                },
                                "id": 1993,
                                "name": "Identifier",
                                "src": "4602:8:5"
                              }
                            ],
                            "id": 1994,
                            "name": "IndexAccess",
                            "src": "4587:24:5"
                          }
                        ],
                        "id": 1995,
                        "name": "FunctionCall",
                        "src": "4571:41:5"
                      }
                    ],
                    "id": 1996,
                    "name": "VariableDeclarationStatement",
                    "src": "4551:61:5"
                  },
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "&&",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "&&",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "&&",
                                  "type": "bool"
                                },
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
                                      "operator": "!=",
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
                                          "member_name": "deposited",
                                          "referencedDeclaration": 1773,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "struct DepositContractsManager.Deposit storage ref"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "member_name": "list",
                                                  "referencedDeclaration": 1783,
                                                  "type": "struct DepositContractsManager.Deposit storage ref[] storage ref"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "type": "struct DepositContractsManager.DepositList storage ref"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "isConstant": false,
                                                          "isLValue": true,
                                                          "isPure": false,
                                                          "lValueRequested": false,
                                                          "type": "mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)"
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "isConstant": false,
                                                              "isLValue": true,
                                                              "isPure": false,
                                                              "lValueRequested": false,
                                                              "type": "mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref))"
                                                            },
                                                            "children": [
                                                              {
                                                                "attributes": {
                                                                  "argumentTypes": null,
                                                                  "overloadedDeclarations": [
                                                                    null
                                                                  ],
                                                                  "referencedDeclaration": 1800,
                                                                  "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                                  "value": "deposits"
                                                                },
                                                                "id": 1997,
                                                                "name": "Identifier",
                                                                "src": "4635:8:5"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "argumentTypes": null,
                                                                  "overloadedDeclarations": [
                                                                    null
                                                                  ],
                                                                  "referencedDeclaration": 1970,
                                                                  "type": "bytes32",
                                                                  "value": "clientId"
                                                                },
                                                                "id": 1998,
                                                                "name": "Identifier",
                                                                "src": "4644:8:5"
                                                              }
                                                            ],
                                                            "id": 1999,
                                                            "name": "IndexAccess",
                                                            "src": "4635:18:5"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 1972,
                                                              "type": "address",
                                                              "value": "tokenContract"
                                                            },
                                                            "id": 2000,
                                                            "name": "Identifier",
                                                            "src": "4654:13:5"
                                                          }
                                                        ],
                                                        "id": 2001,
                                                        "name": "IndexAccess",
                                                        "src": "4635:33:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1974,
                                                          "type": "bytes32",
                                                          "value": "receiveCurrency"
                                                        },
                                                        "id": 2002,
                                                        "name": "Identifier",
                                                        "src": "4669:15:5"
                                                      }
                                                    ],
                                                    "id": 2003,
                                                    "name": "IndexAccess",
                                                    "src": "4635:50:5"
                                                  }
                                                ],
                                                "id": 2004,
                                                "name": "MemberAccess",
                                                "src": "4635:55:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1978,
                                                  "type": "uint256",
                                                  "value": "depositIndex"
                                                },
                                                "id": 2005,
                                                "name": "Identifier",
                                                "src": "4691:12:5"
                                              }
                                            ],
                                            "id": 2006,
                                            "name": "IndexAccess",
                                            "src": "4635:69:5"
                                          }
                                        ],
                                        "id": 2007,
                                        "name": "MemberAccess",
                                        "src": "4635:79:5"
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
                                        "id": 2008,
                                        "name": "Literal",
                                        "src": "4718:1:5"
                                      }
                                    ],
                                    "id": 2009,
                                    "name": "BinaryOperation",
                                    "src": "4635:84:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_bool",
                                        "typeString": "bool"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "==",
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
                                          "member_name": "isReleased",
                                          "referencedDeclaration": 1779,
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
                                              "type": "struct DepositContractsManager.Deposit storage ref"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "member_name": "list",
                                                  "referencedDeclaration": 1783,
                                                  "type": "struct DepositContractsManager.Deposit storage ref[] storage ref"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "type": "struct DepositContractsManager.DepositList storage ref"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "isConstant": false,
                                                          "isLValue": true,
                                                          "isPure": false,
                                                          "lValueRequested": false,
                                                          "type": "mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)"
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "isConstant": false,
                                                              "isLValue": true,
                                                              "isPure": false,
                                                              "lValueRequested": false,
                                                              "type": "mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref))"
                                                            },
                                                            "children": [
                                                              {
                                                                "attributes": {
                                                                  "argumentTypes": null,
                                                                  "overloadedDeclarations": [
                                                                    null
                                                                  ],
                                                                  "referencedDeclaration": 1800,
                                                                  "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                                  "value": "deposits"
                                                                },
                                                                "id": 2010,
                                                                "name": "Identifier",
                                                                "src": "4735:8:5"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "argumentTypes": null,
                                                                  "overloadedDeclarations": [
                                                                    null
                                                                  ],
                                                                  "referencedDeclaration": 1970,
                                                                  "type": "bytes32",
                                                                  "value": "clientId"
                                                                },
                                                                "id": 2011,
                                                                "name": "Identifier",
                                                                "src": "4744:8:5"
                                                              }
                                                            ],
                                                            "id": 2012,
                                                            "name": "IndexAccess",
                                                            "src": "4735:18:5"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 1972,
                                                              "type": "address",
                                                              "value": "tokenContract"
                                                            },
                                                            "id": 2013,
                                                            "name": "Identifier",
                                                            "src": "4754:13:5"
                                                          }
                                                        ],
                                                        "id": 2014,
                                                        "name": "IndexAccess",
                                                        "src": "4735:33:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1974,
                                                          "type": "bytes32",
                                                          "value": "receiveCurrency"
                                                        },
                                                        "id": 2015,
                                                        "name": "Identifier",
                                                        "src": "4769:15:5"
                                                      }
                                                    ],
                                                    "id": 2016,
                                                    "name": "IndexAccess",
                                                    "src": "4735:50:5"
                                                  }
                                                ],
                                                "id": 2017,
                                                "name": "MemberAccess",
                                                "src": "4735:55:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1978,
                                                  "type": "uint256",
                                                  "value": "depositIndex"
                                                },
                                                "id": 2018,
                                                "name": "Identifier",
                                                "src": "4791:12:5"
                                              }
                                            ],
                                            "id": 2019,
                                            "name": "IndexAccess",
                                            "src": "4735:69:5"
                                          }
                                        ],
                                        "id": 2020,
                                        "name": "MemberAccess",
                                        "src": "4735:80:5"
                                      },
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
                                        "id": 2021,
                                        "name": "Literal",
                                        "src": "4819:5:5"
                                      }
                                    ],
                                    "id": 2022,
                                    "name": "BinaryOperation",
                                    "src": "4735:89:5"
                                  }
                                ],
                                "id": 2023,
                                "name": "BinaryOperation",
                                "src": "4635:189:5"
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
                                  "type": "bool",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        },
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
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
                                      "member_name": "transfer",
                                      "referencedDeclaration": 1748,
                                      "type": "function (address,address,uint256) external returns (bool)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1990,
                                          "type": "contract DepositContract",
                                          "value": "o"
                                        },
                                        "id": 2024,
                                        "name": "Identifier",
                                        "src": "4840:1:5"
                                      }
                                    ],
                                    "id": 2025,
                                    "name": "MemberAccess",
                                    "src": "4840:10:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1972,
                                      "type": "address",
                                      "value": "tokenContract"
                                    },
                                    "id": 2026,
                                    "name": "Identifier",
                                    "src": "4851:13:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1976,
                                      "type": "address",
                                      "value": "receiver"
                                    },
                                    "id": 2027,
                                    "name": "Identifier",
                                    "src": "4866:8:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "deposited",
                                      "referencedDeclaration": 1773,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct DepositContractsManager.Deposit storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "member_name": "list",
                                              "referencedDeclaration": 1783,
                                              "type": "struct DepositContractsManager.Deposit storage ref[] storage ref"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "struct DepositContractsManager.DepositList storage ref"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "type": "mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "isConstant": false,
                                                          "isLValue": true,
                                                          "isPure": false,
                                                          "lValueRequested": false,
                                                          "type": "mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref))"
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 1800,
                                                              "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                              "value": "deposits"
                                                            },
                                                            "id": 2028,
                                                            "name": "Identifier",
                                                            "src": "4876:8:5"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 1970,
                                                              "type": "bytes32",
                                                              "value": "clientId"
                                                            },
                                                            "id": 2029,
                                                            "name": "Identifier",
                                                            "src": "4885:8:5"
                                                          }
                                                        ],
                                                        "id": 2030,
                                                        "name": "IndexAccess",
                                                        "src": "4876:18:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1972,
                                                          "type": "address",
                                                          "value": "tokenContract"
                                                        },
                                                        "id": 2031,
                                                        "name": "Identifier",
                                                        "src": "4895:13:5"
                                                      }
                                                    ],
                                                    "id": 2032,
                                                    "name": "IndexAccess",
                                                    "src": "4876:33:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1974,
                                                      "type": "bytes32",
                                                      "value": "receiveCurrency"
                                                    },
                                                    "id": 2033,
                                                    "name": "Identifier",
                                                    "src": "4910:15:5"
                                                  }
                                                ],
                                                "id": 2034,
                                                "name": "IndexAccess",
                                                "src": "4876:50:5"
                                              }
                                            ],
                                            "id": 2035,
                                            "name": "MemberAccess",
                                            "src": "4876:55:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1978,
                                              "type": "uint256",
                                              "value": "depositIndex"
                                            },
                                            "id": 2036,
                                            "name": "Identifier",
                                            "src": "4932:12:5"
                                          }
                                        ],
                                        "id": 2037,
                                        "name": "IndexAccess",
                                        "src": "4876:69:5"
                                      }
                                    ],
                                    "id": 2038,
                                    "name": "MemberAccess",
                                    "src": "4876:79:5"
                                  }
                                ],
                                "id": 2039,
                                "name": "FunctionCall",
                                "src": "4840:116:5"
                              }
                            ],
                            "id": 2040,
                            "name": "BinaryOperation",
                            "src": "4635:321:5"
                          },
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
                              "operator": ">",
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
                                  "member_name": "releaseTime",
                                  "referencedDeclaration": 1777,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "struct DepositContractsManager.Deposit storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "list",
                                          "referencedDeclaration": 1783,
                                          "type": "struct DepositContractsManager.Deposit storage ref[] storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "struct DepositContractsManager.DepositList storage ref"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "type": "mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref))"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1800,
                                                          "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                          "value": "deposits"
                                                        },
                                                        "id": 2041,
                                                        "name": "Identifier",
                                                        "src": "4972:8:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1970,
                                                          "type": "bytes32",
                                                          "value": "clientId"
                                                        },
                                                        "id": 2042,
                                                        "name": "Identifier",
                                                        "src": "4981:8:5"
                                                      }
                                                    ],
                                                    "id": 2043,
                                                    "name": "IndexAccess",
                                                    "src": "4972:18:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1972,
                                                      "type": "address",
                                                      "value": "tokenContract"
                                                    },
                                                    "id": 2044,
                                                    "name": "Identifier",
                                                    "src": "4991:13:5"
                                                  }
                                                ],
                                                "id": 2045,
                                                "name": "IndexAccess",
                                                "src": "4972:33:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1974,
                                                  "type": "bytes32",
                                                  "value": "receiveCurrency"
                                                },
                                                "id": 2046,
                                                "name": "Identifier",
                                                "src": "5006:15:5"
                                              }
                                            ],
                                            "id": 2047,
                                            "name": "IndexAccess",
                                            "src": "4972:50:5"
                                          }
                                        ],
                                        "id": 2048,
                                        "name": "MemberAccess",
                                        "src": "4972:55:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1978,
                                          "type": "uint256",
                                          "value": "depositIndex"
                                        },
                                        "id": 2049,
                                        "name": "Identifier",
                                        "src": "5028:12:5"
                                      }
                                    ],
                                    "id": 2050,
                                    "name": "IndexAccess",
                                    "src": "4972:69:5"
                                  }
                                ],
                                "id": 2051,
                                "name": "MemberAccess",
                                "src": "4972:81:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4966,
                                  "type": "uint256",
                                  "value": "now"
                                },
                                "id": 2052,
                                "name": "Identifier",
                                "src": "5056:3:5"
                              }
                            ],
                            "id": 2053,
                            "name": "BinaryOperation",
                            "src": "4972:87:5"
                          }
                        ],
                        "id": 2054,
                        "name": "BinaryOperation",
                        "src": "4635:424:5"
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
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "member_name": "isReleased",
                                      "referencedDeclaration": 1779,
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
                                          "type": "struct DepositContractsManager.Deposit storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "member_name": "list",
                                              "referencedDeclaration": 1783,
                                              "type": "struct DepositContractsManager.Deposit storage ref[] storage ref"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "struct DepositContractsManager.DepositList storage ref"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "type": "mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "isConstant": false,
                                                          "isLValue": true,
                                                          "isPure": false,
                                                          "lValueRequested": false,
                                                          "type": "mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref))"
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 1800,
                                                              "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                              "value": "deposits"
                                                            },
                                                            "id": 2055,
                                                            "name": "Identifier",
                                                            "src": "5084:8:5"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 1970,
                                                              "type": "bytes32",
                                                              "value": "clientId"
                                                            },
                                                            "id": 2056,
                                                            "name": "Identifier",
                                                            "src": "5093:8:5"
                                                          }
                                                        ],
                                                        "id": 2059,
                                                        "name": "IndexAccess",
                                                        "src": "5084:18:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1972,
                                                          "type": "address",
                                                          "value": "tokenContract"
                                                        },
                                                        "id": 2057,
                                                        "name": "Identifier",
                                                        "src": "5103:13:5"
                                                      }
                                                    ],
                                                    "id": 2060,
                                                    "name": "IndexAccess",
                                                    "src": "5084:33:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1974,
                                                      "type": "bytes32",
                                                      "value": "receiveCurrency"
                                                    },
                                                    "id": 2058,
                                                    "name": "Identifier",
                                                    "src": "5118:15:5"
                                                  }
                                                ],
                                                "id": 2061,
                                                "name": "IndexAccess",
                                                "src": "5084:50:5"
                                              }
                                            ],
                                            "id": 2062,
                                            "name": "MemberAccess",
                                            "src": "5084:55:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1978,
                                              "type": "uint256",
                                              "value": "depositIndex"
                                            },
                                            "id": 2063,
                                            "name": "Identifier",
                                            "src": "5140:12:5"
                                          }
                                        ],
                                        "id": 2064,
                                        "name": "IndexAccess",
                                        "src": "5084:69:5"
                                      }
                                    ],
                                    "id": 2065,
                                    "name": "MemberAccess",
                                    "src": "5084:80:5"
                                  },
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
                                    "id": 2066,
                                    "name": "Literal",
                                    "src": "5167:4:5"
                                  }
                                ],
                                "id": 2067,
                                "name": "Assignment",
                                "src": "5084:87:5"
                              }
                            ],
                            "id": 2068,
                            "name": "ExpressionStatement",
                            "src": "5084:87:5"
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
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "member_name": "deposited",
                                      "referencedDeclaration": 1785,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct DepositContractsManager.DepositList storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref))"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1800,
                                                      "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                      "value": "deposits"
                                                    },
                                                    "id": 2069,
                                                    "name": "Identifier",
                                                    "src": "5215:8:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1970,
                                                      "type": "bytes32",
                                                      "value": "clientId"
                                                    },
                                                    "id": 2070,
                                                    "name": "Identifier",
                                                    "src": "5224:8:5"
                                                  }
                                                ],
                                                "id": 2073,
                                                "name": "IndexAccess",
                                                "src": "5215:18:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1972,
                                                  "type": "address",
                                                  "value": "tokenContract"
                                                },
                                                "id": 2071,
                                                "name": "Identifier",
                                                "src": "5234:13:5"
                                              }
                                            ],
                                            "id": 2074,
                                            "name": "IndexAccess",
                                            "src": "5215:33:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1974,
                                              "type": "bytes32",
                                              "value": "receiveCurrency"
                                            },
                                            "id": 2072,
                                            "name": "Identifier",
                                            "src": "5249:15:5"
                                          }
                                        ],
                                        "id": 2075,
                                        "name": "IndexAccess",
                                        "src": "5215:50:5"
                                      }
                                    ],
                                    "id": 2076,
                                    "name": "MemberAccess",
                                    "src": "5215:60:5"
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
                                          "referencedDeclaration": 4476,
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
                                            "id": 2077,
                                            "name": "Identifier",
                                            "src": "5278:8:5"
                                          }
                                        ],
                                        "id": 2078,
                                        "name": "MemberAccess",
                                        "src": "5278:16:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "deposited",
                                          "referencedDeclaration": 1785,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "struct DepositContractsManager.DepositList storage ref"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "type": "mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref))"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1800,
                                                          "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                          "value": "deposits"
                                                        },
                                                        "id": 2079,
                                                        "name": "Identifier",
                                                        "src": "5312:8:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1970,
                                                          "type": "bytes32",
                                                          "value": "clientId"
                                                        },
                                                        "id": 2080,
                                                        "name": "Identifier",
                                                        "src": "5321:8:5"
                                                      }
                                                    ],
                                                    "id": 2081,
                                                    "name": "IndexAccess",
                                                    "src": "5312:18:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1972,
                                                      "type": "address",
                                                      "value": "tokenContract"
                                                    },
                                                    "id": 2082,
                                                    "name": "Identifier",
                                                    "src": "5331:13:5"
                                                  }
                                                ],
                                                "id": 2083,
                                                "name": "IndexAccess",
                                                "src": "5312:33:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1974,
                                                  "type": "bytes32",
                                                  "value": "receiveCurrency"
                                                },
                                                "id": 2084,
                                                "name": "Identifier",
                                                "src": "5346:15:5"
                                              }
                                            ],
                                            "id": 2085,
                                            "name": "IndexAccess",
                                            "src": "5312:50:5"
                                          }
                                        ],
                                        "id": 2086,
                                        "name": "MemberAccess",
                                        "src": "5312:60:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "deposited",
                                          "referencedDeclaration": 1773,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "struct DepositContractsManager.Deposit storage ref"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "member_name": "list",
                                                  "referencedDeclaration": 1783,
                                                  "type": "struct DepositContractsManager.Deposit storage ref[] storage ref"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "type": "struct DepositContractsManager.DepositList storage ref"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "isConstant": false,
                                                          "isLValue": true,
                                                          "isPure": false,
                                                          "lValueRequested": false,
                                                          "type": "mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)"
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "isConstant": false,
                                                              "isLValue": true,
                                                              "isPure": false,
                                                              "lValueRequested": false,
                                                              "type": "mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref))"
                                                            },
                                                            "children": [
                                                              {
                                                                "attributes": {
                                                                  "argumentTypes": null,
                                                                  "overloadedDeclarations": [
                                                                    null
                                                                  ],
                                                                  "referencedDeclaration": 1800,
                                                                  "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                                  "value": "deposits"
                                                                },
                                                                "id": 2087,
                                                                "name": "Identifier",
                                                                "src": "5390:8:5"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "argumentTypes": null,
                                                                  "overloadedDeclarations": [
                                                                    null
                                                                  ],
                                                                  "referencedDeclaration": 1970,
                                                                  "type": "bytes32",
                                                                  "value": "clientId"
                                                                },
                                                                "id": 2088,
                                                                "name": "Identifier",
                                                                "src": "5399:8:5"
                                                              }
                                                            ],
                                                            "id": 2089,
                                                            "name": "IndexAccess",
                                                            "src": "5390:18:5"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 1972,
                                                              "type": "address",
                                                              "value": "tokenContract"
                                                            },
                                                            "id": 2090,
                                                            "name": "Identifier",
                                                            "src": "5409:13:5"
                                                          }
                                                        ],
                                                        "id": 2091,
                                                        "name": "IndexAccess",
                                                        "src": "5390:33:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1974,
                                                          "type": "bytes32",
                                                          "value": "receiveCurrency"
                                                        },
                                                        "id": 2092,
                                                        "name": "Identifier",
                                                        "src": "5424:15:5"
                                                      }
                                                    ],
                                                    "id": 2093,
                                                    "name": "IndexAccess",
                                                    "src": "5390:50:5"
                                                  }
                                                ],
                                                "id": 2094,
                                                "name": "MemberAccess",
                                                "src": "5390:55:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1978,
                                                  "type": "uint256",
                                                  "value": "depositIndex"
                                                },
                                                "id": 2095,
                                                "name": "Identifier",
                                                "src": "5446:12:5"
                                              }
                                            ],
                                            "id": 2096,
                                            "name": "IndexAccess",
                                            "src": "5390:69:5"
                                          }
                                        ],
                                        "id": 2097,
                                        "name": "MemberAccess",
                                        "src": "5390:79:5"
                                      }
                                    ],
                                    "id": 2098,
                                    "name": "FunctionCall",
                                    "src": "5278:205:5"
                                  }
                                ],
                                "id": 2099,
                                "name": "Assignment",
                                "src": "5215:268:5"
                              }
                            ],
                            "id": 2100,
                            "name": "ExpressionStatement",
                            "src": "5215:268:5"
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
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "member_name": "received",
                                      "referencedDeclaration": 1787,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct DepositContractsManager.DepositList storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref))"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1800,
                                                      "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                      "value": "deposits"
                                                    },
                                                    "id": 2101,
                                                    "name": "Identifier",
                                                    "src": "5497:8:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1970,
                                                      "type": "bytes32",
                                                      "value": "clientId"
                                                    },
                                                    "id": 2102,
                                                    "name": "Identifier",
                                                    "src": "5506:8:5"
                                                  }
                                                ],
                                                "id": 2105,
                                                "name": "IndexAccess",
                                                "src": "5497:18:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1972,
                                                  "type": "address",
                                                  "value": "tokenContract"
                                                },
                                                "id": 2103,
                                                "name": "Identifier",
                                                "src": "5516:13:5"
                                              }
                                            ],
                                            "id": 2106,
                                            "name": "IndexAccess",
                                            "src": "5497:33:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1974,
                                              "type": "bytes32",
                                              "value": "receiveCurrency"
                                            },
                                            "id": 2104,
                                            "name": "Identifier",
                                            "src": "5531:15:5"
                                          }
                                        ],
                                        "id": 2107,
                                        "name": "IndexAccess",
                                        "src": "5497:50:5"
                                      }
                                    ],
                                    "id": 2108,
                                    "name": "MemberAccess",
                                    "src": "5497:59:5"
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
                                          "referencedDeclaration": 4476,
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
                                            "id": 2109,
                                            "name": "Identifier",
                                            "src": "5559:8:5"
                                          }
                                        ],
                                        "id": 2110,
                                        "name": "MemberAccess",
                                        "src": "5559:16:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "received",
                                          "referencedDeclaration": 1787,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "struct DepositContractsManager.DepositList storage ref"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "type": "mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref))"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1800,
                                                          "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                          "value": "deposits"
                                                        },
                                                        "id": 2111,
                                                        "name": "Identifier",
                                                        "src": "5593:8:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1970,
                                                          "type": "bytes32",
                                                          "value": "clientId"
                                                        },
                                                        "id": 2112,
                                                        "name": "Identifier",
                                                        "src": "5602:8:5"
                                                      }
                                                    ],
                                                    "id": 2113,
                                                    "name": "IndexAccess",
                                                    "src": "5593:18:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1972,
                                                      "type": "address",
                                                      "value": "tokenContract"
                                                    },
                                                    "id": 2114,
                                                    "name": "Identifier",
                                                    "src": "5612:13:5"
                                                  }
                                                ],
                                                "id": 2115,
                                                "name": "IndexAccess",
                                                "src": "5593:33:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1974,
                                                  "type": "bytes32",
                                                  "value": "receiveCurrency"
                                                },
                                                "id": 2116,
                                                "name": "Identifier",
                                                "src": "5627:15:5"
                                              }
                                            ],
                                            "id": 2117,
                                            "name": "IndexAccess",
                                            "src": "5593:50:5"
                                          }
                                        ],
                                        "id": 2118,
                                        "name": "MemberAccess",
                                        "src": "5593:59:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "received",
                                          "referencedDeclaration": 1775,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "struct DepositContractsManager.Deposit storage ref"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "member_name": "list",
                                                  "referencedDeclaration": 1783,
                                                  "type": "struct DepositContractsManager.Deposit storage ref[] storage ref"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "type": "struct DepositContractsManager.DepositList storage ref"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "isConstant": false,
                                                          "isLValue": true,
                                                          "isPure": false,
                                                          "lValueRequested": false,
                                                          "type": "mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)"
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "isConstant": false,
                                                              "isLValue": true,
                                                              "isPure": false,
                                                              "lValueRequested": false,
                                                              "type": "mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref))"
                                                            },
                                                            "children": [
                                                              {
                                                                "attributes": {
                                                                  "argumentTypes": null,
                                                                  "overloadedDeclarations": [
                                                                    null
                                                                  ],
                                                                  "referencedDeclaration": 1800,
                                                                  "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                                  "value": "deposits"
                                                                },
                                                                "id": 2119,
                                                                "name": "Identifier",
                                                                "src": "5670:8:5"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "argumentTypes": null,
                                                                  "overloadedDeclarations": [
                                                                    null
                                                                  ],
                                                                  "referencedDeclaration": 1970,
                                                                  "type": "bytes32",
                                                                  "value": "clientId"
                                                                },
                                                                "id": 2120,
                                                                "name": "Identifier",
                                                                "src": "5679:8:5"
                                                              }
                                                            ],
                                                            "id": 2121,
                                                            "name": "IndexAccess",
                                                            "src": "5670:18:5"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 1972,
                                                              "type": "address",
                                                              "value": "tokenContract"
                                                            },
                                                            "id": 2122,
                                                            "name": "Identifier",
                                                            "src": "5689:13:5"
                                                          }
                                                        ],
                                                        "id": 2123,
                                                        "name": "IndexAccess",
                                                        "src": "5670:33:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1974,
                                                          "type": "bytes32",
                                                          "value": "receiveCurrency"
                                                        },
                                                        "id": 2124,
                                                        "name": "Identifier",
                                                        "src": "5704:15:5"
                                                      }
                                                    ],
                                                    "id": 2125,
                                                    "name": "IndexAccess",
                                                    "src": "5670:50:5"
                                                  }
                                                ],
                                                "id": 2126,
                                                "name": "MemberAccess",
                                                "src": "5670:55:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1978,
                                                  "type": "uint256",
                                                  "value": "depositIndex"
                                                },
                                                "id": 2127,
                                                "name": "Identifier",
                                                "src": "5726:12:5"
                                              }
                                            ],
                                            "id": 2128,
                                            "name": "IndexAccess",
                                            "src": "5670:69:5"
                                          }
                                        ],
                                        "id": 2129,
                                        "name": "MemberAccess",
                                        "src": "5670:78:5"
                                      }
                                    ],
                                    "id": 2130,
                                    "name": "FunctionCall",
                                    "src": "5559:203:5"
                                  }
                                ],
                                "id": 2131,
                                "name": "Assignment",
                                "src": "5497:265:5"
                              }
                            ],
                            "id": 2132,
                            "name": "ExpressionStatement",
                            "src": "5497:265:5"
                          },
                          {
                            "attributes": {
                              "functionReturnParameters": 1988
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "tuple(bool,uint256,uint256)"
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
                                    "id": 2133,
                                    "name": "Literal",
                                    "src": "5801:4:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "deposited",
                                      "referencedDeclaration": 1773,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct DepositContractsManager.Deposit storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "member_name": "list",
                                              "referencedDeclaration": 1783,
                                              "type": "struct DepositContractsManager.Deposit storage ref[] storage ref"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "struct DepositContractsManager.DepositList storage ref"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "type": "mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "isConstant": false,
                                                          "isLValue": true,
                                                          "isPure": false,
                                                          "lValueRequested": false,
                                                          "type": "mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref))"
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 1800,
                                                              "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                              "value": "deposits"
                                                            },
                                                            "id": 2134,
                                                            "name": "Identifier",
                                                            "src": "5823:8:5"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 1970,
                                                              "type": "bytes32",
                                                              "value": "clientId"
                                                            },
                                                            "id": 2135,
                                                            "name": "Identifier",
                                                            "src": "5832:8:5"
                                                          }
                                                        ],
                                                        "id": 2136,
                                                        "name": "IndexAccess",
                                                        "src": "5823:18:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1972,
                                                          "type": "address",
                                                          "value": "tokenContract"
                                                        },
                                                        "id": 2137,
                                                        "name": "Identifier",
                                                        "src": "5842:13:5"
                                                      }
                                                    ],
                                                    "id": 2138,
                                                    "name": "IndexAccess",
                                                    "src": "5823:33:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1974,
                                                      "type": "bytes32",
                                                      "value": "receiveCurrency"
                                                    },
                                                    "id": 2139,
                                                    "name": "Identifier",
                                                    "src": "5857:15:5"
                                                  }
                                                ],
                                                "id": 2140,
                                                "name": "IndexAccess",
                                                "src": "5823:50:5"
                                              }
                                            ],
                                            "id": 2141,
                                            "name": "MemberAccess",
                                            "src": "5823:55:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1978,
                                              "type": "uint256",
                                              "value": "depositIndex"
                                            },
                                            "id": 2142,
                                            "name": "Identifier",
                                            "src": "5879:12:5"
                                          }
                                        ],
                                        "id": 2143,
                                        "name": "IndexAccess",
                                        "src": "5823:69:5"
                                      }
                                    ],
                                    "id": 2144,
                                    "name": "MemberAccess",
                                    "src": "5823:79:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "received",
                                      "referencedDeclaration": 1775,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct DepositContractsManager.Deposit storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "member_name": "list",
                                              "referencedDeclaration": 1783,
                                              "type": "struct DepositContractsManager.Deposit storage ref[] storage ref"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "struct DepositContractsManager.DepositList storage ref"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "type": "mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "isConstant": false,
                                                          "isLValue": true,
                                                          "isPure": false,
                                                          "lValueRequested": false,
                                                          "type": "mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref))"
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 1800,
                                                              "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                              "value": "deposits"
                                                            },
                                                            "id": 2145,
                                                            "name": "Identifier",
                                                            "src": "5920:8:5"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 1970,
                                                              "type": "bytes32",
                                                              "value": "clientId"
                                                            },
                                                            "id": 2146,
                                                            "name": "Identifier",
                                                            "src": "5929:8:5"
                                                          }
                                                        ],
                                                        "id": 2147,
                                                        "name": "IndexAccess",
                                                        "src": "5920:18:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1972,
                                                          "type": "address",
                                                          "value": "tokenContract"
                                                        },
                                                        "id": 2148,
                                                        "name": "Identifier",
                                                        "src": "5939:13:5"
                                                      }
                                                    ],
                                                    "id": 2149,
                                                    "name": "IndexAccess",
                                                    "src": "5920:33:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1974,
                                                      "type": "bytes32",
                                                      "value": "receiveCurrency"
                                                    },
                                                    "id": 2150,
                                                    "name": "Identifier",
                                                    "src": "5954:15:5"
                                                  }
                                                ],
                                                "id": 2151,
                                                "name": "IndexAccess",
                                                "src": "5920:50:5"
                                              }
                                            ],
                                            "id": 2152,
                                            "name": "MemberAccess",
                                            "src": "5920:55:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1978,
                                              "type": "uint256",
                                              "value": "depositIndex"
                                            },
                                            "id": 2153,
                                            "name": "Identifier",
                                            "src": "5976:12:5"
                                          }
                                        ],
                                        "id": 2154,
                                        "name": "IndexAccess",
                                        "src": "5920:69:5"
                                      }
                                    ],
                                    "id": 2155,
                                    "name": "MemberAccess",
                                    "src": "5920:78:5"
                                  }
                                ],
                                "id": 2156,
                                "name": "TupleExpression",
                                "src": "5783:229:5"
                              }
                            ],
                            "id": 2157,
                            "name": "Return",
                            "src": "5776:236:5"
                          }
                        ],
                        "id": 2158,
                        "name": "Block",
                        "src": "5070:953:5"
                      }
                    ],
                    "id": 2159,
                    "name": "IfStatement",
                    "src": "4631:1392:5"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1988
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "type": "tuple(bool,int_const 0,int_const 0)"
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
                            "id": 2160,
                            "name": "Literal",
                            "src": "6040:5:5"
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
                            "id": 2161,
                            "name": "Literal",
                            "src": "6047:1:5"
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
                            "id": 2162,
                            "name": "Literal",
                            "src": "6050:1:5"
                          }
                        ],
                        "id": 2163,
                        "name": "TupleExpression",
                        "src": "6039:13:5"
                      }
                    ],
                    "id": 2164,
                    "name": "Return",
                    "src": "6032:20:5"
                  }
                ],
                "id": 2165,
                "name": "Block",
                "src": "4541:1518:5"
              }
            ],
            "id": 2166,
            "name": "FunctionDefinition",
            "src": "4339:1720:5"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getDepositAddress",
              "payable": false,
              "scope": 2275,
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
                      "name": "clientId",
                      "scope": 2178,
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
                        "id": 2167,
                        "name": "ElementaryTypeName",
                        "src": "6279:7:5"
                      }
                    ],
                    "id": 2168,
                    "name": "VariableDeclaration",
                    "src": "6279:16:5"
                  }
                ],
                "id": 2169,
                "name": "ParameterList",
                "src": "6278:18:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2178,
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
                        "id": 2170,
                        "name": "ElementaryTypeName",
                        "src": "6318:7:5"
                      }
                    ],
                    "id": 2171,
                    "name": "VariableDeclaration",
                    "src": "6318:7:5"
                  }
                ],
                "id": 2172,
                "name": "ParameterList",
                "src": "6317:9:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2172
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1792,
                              "type": "mapping(bytes32 => address)",
                              "value": "depositAddress"
                            },
                            "id": 2173,
                            "name": "Identifier",
                            "src": "6344:14:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2168,
                              "type": "bytes32",
                              "value": "clientId"
                            },
                            "id": 2174,
                            "name": "Identifier",
                            "src": "6359:8:5"
                          }
                        ],
                        "id": 2175,
                        "name": "IndexAccess",
                        "src": "6344:24:5"
                      }
                    ],
                    "id": 2176,
                    "name": "Return",
                    "src": "6337:31:5"
                  }
                ],
                "id": 2177,
                "name": "Block",
                "src": "6327:48:5"
              }
            ],
            "id": 2178,
            "name": "FunctionDefinition",
            "src": "6252:123:5"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getActiveDepositList",
              "payable": false,
              "scope": 2275,
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
                      "name": "clientId",
                      "scope": 2221,
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
                        "id": 2179,
                        "name": "ElementaryTypeName",
                        "src": "6826:7:5"
                      }
                    ],
                    "id": 2180,
                    "name": "VariableDeclaration",
                    "src": "6826:16:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenContract",
                      "scope": 2221,
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
                        "id": 2181,
                        "name": "ElementaryTypeName",
                        "src": "6844:7:5"
                      }
                    ],
                    "id": 2182,
                    "name": "VariableDeclaration",
                    "src": "6844:21:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "receiveCurrency",
                      "scope": 2221,
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
                        "id": 2183,
                        "name": "ElementaryTypeName",
                        "src": "6867:7:5"
                      }
                    ],
                    "id": 2184,
                    "name": "VariableDeclaration",
                    "src": "6867:23:5"
                  }
                ],
                "id": 2185,
                "name": "ParameterList",
                "src": "6825:66:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2221,
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
                        "id": 2186,
                        "name": "ElementaryTypeName",
                        "src": "6931:4:5"
                      }
                    ],
                    "id": 2187,
                    "name": "VariableDeclaration",
                    "src": "6931:4:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2221,
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
                        "id": 2188,
                        "name": "ElementaryTypeName",
                        "src": "6937:4:5"
                      }
                    ],
                    "id": 2189,
                    "name": "VariableDeclaration",
                    "src": "6937:4:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2221,
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
                        "id": 2190,
                        "name": "ElementaryTypeName",
                        "src": "6943:4:5"
                      }
                    ],
                    "id": 2191,
                    "name": "VariableDeclaration",
                    "src": "6943:4:5"
                  }
                ],
                "id": 2192,
                "name": "ParameterList",
                "src": "6930:18:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2192
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "tuple(uint256,uint256,uint256)"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "length",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "list",
                                  "referencedDeclaration": 1783,
                                  "type": "struct DepositContractsManager.Deposit storage ref[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "struct DepositContractsManager.DepositList storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref))"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1800,
                                                  "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                  "value": "deposits"
                                                },
                                                "id": 2193,
                                                "name": "Identifier",
                                                "src": "6980:8:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 2180,
                                                  "type": "bytes32",
                                                  "value": "clientId"
                                                },
                                                "id": 2194,
                                                "name": "Identifier",
                                                "src": "6989:8:5"
                                              }
                                            ],
                                            "id": 2195,
                                            "name": "IndexAccess",
                                            "src": "6980:18:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2182,
                                              "type": "address",
                                              "value": "tokenContract"
                                            },
                                            "id": 2196,
                                            "name": "Identifier",
                                            "src": "6999:13:5"
                                          }
                                        ],
                                        "id": 2197,
                                        "name": "IndexAccess",
                                        "src": "6980:33:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2184,
                                          "type": "bytes32",
                                          "value": "receiveCurrency"
                                        },
                                        "id": 2198,
                                        "name": "Identifier",
                                        "src": "7014:15:5"
                                      }
                                    ],
                                    "id": 2199,
                                    "name": "IndexAccess",
                                    "src": "6980:50:5"
                                  }
                                ],
                                "id": 2200,
                                "name": "MemberAccess",
                                "src": "6980:55:5"
                              }
                            ],
                            "id": 2201,
                            "name": "MemberAccess",
                            "src": "6980:62:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "deposited",
                              "referencedDeclaration": 1785,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct DepositContractsManager.DepositList storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref))"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1800,
                                              "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                              "value": "deposits"
                                            },
                                            "id": 2202,
                                            "name": "Identifier",
                                            "src": "7056:8:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2180,
                                              "type": "bytes32",
                                              "value": "clientId"
                                            },
                                            "id": 2203,
                                            "name": "Identifier",
                                            "src": "7065:8:5"
                                          }
                                        ],
                                        "id": 2204,
                                        "name": "IndexAccess",
                                        "src": "7056:18:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2182,
                                          "type": "address",
                                          "value": "tokenContract"
                                        },
                                        "id": 2205,
                                        "name": "Identifier",
                                        "src": "7075:13:5"
                                      }
                                    ],
                                    "id": 2206,
                                    "name": "IndexAccess",
                                    "src": "7056:33:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2184,
                                      "type": "bytes32",
                                      "value": "receiveCurrency"
                                    },
                                    "id": 2207,
                                    "name": "Identifier",
                                    "src": "7090:15:5"
                                  }
                                ],
                                "id": 2208,
                                "name": "IndexAccess",
                                "src": "7056:50:5"
                              }
                            ],
                            "id": 2209,
                            "name": "MemberAccess",
                            "src": "7056:60:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "received",
                              "referencedDeclaration": 1787,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct DepositContractsManager.DepositList storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref))"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1800,
                                              "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                              "value": "deposits"
                                            },
                                            "id": 2210,
                                            "name": "Identifier",
                                            "src": "7130:8:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2180,
                                              "type": "bytes32",
                                              "value": "clientId"
                                            },
                                            "id": 2211,
                                            "name": "Identifier",
                                            "src": "7139:8:5"
                                          }
                                        ],
                                        "id": 2212,
                                        "name": "IndexAccess",
                                        "src": "7130:18:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2182,
                                          "type": "address",
                                          "value": "tokenContract"
                                        },
                                        "id": 2213,
                                        "name": "Identifier",
                                        "src": "7149:13:5"
                                      }
                                    ],
                                    "id": 2214,
                                    "name": "IndexAccess",
                                    "src": "7130:33:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2184,
                                      "type": "bytes32",
                                      "value": "receiveCurrency"
                                    },
                                    "id": 2215,
                                    "name": "Identifier",
                                    "src": "7164:15:5"
                                  }
                                ],
                                "id": 2216,
                                "name": "IndexAccess",
                                "src": "7130:50:5"
                              }
                            ],
                            "id": 2217,
                            "name": "MemberAccess",
                            "src": "7130:59:5"
                          }
                        ],
                        "id": 2218,
                        "name": "TupleExpression",
                        "src": "6966:233:5"
                      }
                    ],
                    "id": 2219,
                    "name": "Return",
                    "src": "6959:240:5"
                  }
                ],
                "id": 2220,
                "name": "Block",
                "src": "6949:257:5"
              }
            ],
            "id": 2221,
            "name": "FunctionDefinition",
            "src": "6796:410:5"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getActiveDeposit",
              "payable": false,
              "scope": 2275,
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
                      "name": "clientId",
                      "scope": 2274,
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
                        "id": 2222,
                        "name": "ElementaryTypeName",
                        "src": "7664:7:5"
                      }
                    ],
                    "id": 2223,
                    "name": "VariableDeclaration",
                    "src": "7664:16:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenContract",
                      "scope": 2274,
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
                        "id": 2224,
                        "name": "ElementaryTypeName",
                        "src": "7682:7:5"
                      }
                    ],
                    "id": 2225,
                    "name": "VariableDeclaration",
                    "src": "7682:21:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "receiveCurrency",
                      "scope": 2274,
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
                        "id": 2226,
                        "name": "ElementaryTypeName",
                        "src": "7705:7:5"
                      }
                    ],
                    "id": 2227,
                    "name": "VariableDeclaration",
                    "src": "7705:23:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "depositIndex",
                      "scope": 2274,
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
                        "id": 2228,
                        "name": "ElementaryTypeName",
                        "src": "7730:4:5"
                      }
                    ],
                    "id": 2229,
                    "name": "VariableDeclaration",
                    "src": "7730:17:5"
                  }
                ],
                "id": 2230,
                "name": "ParameterList",
                "src": "7663:85:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2274,
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
                        "id": 2231,
                        "name": "ElementaryTypeName",
                        "src": "7788:4:5"
                      }
                    ],
                    "id": 2232,
                    "name": "VariableDeclaration",
                    "src": "7788:4:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2274,
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
                        "id": 2233,
                        "name": "ElementaryTypeName",
                        "src": "7794:4:5"
                      }
                    ],
                    "id": 2234,
                    "name": "VariableDeclaration",
                    "src": "7794:4:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2274,
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
                        "id": 2235,
                        "name": "ElementaryTypeName",
                        "src": "7800:4:5"
                      }
                    ],
                    "id": 2236,
                    "name": "VariableDeclaration",
                    "src": "7800:4:5"
                  }
                ],
                "id": 2237,
                "name": "ParameterList",
                "src": "7787:18:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2237
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "tuple(uint256,uint256,bool)"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "deposited",
                              "referencedDeclaration": 1773,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct DepositContractsManager.Deposit storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "list",
                                      "referencedDeclaration": 1783,
                                      "type": "struct DepositContractsManager.Deposit storage ref[] storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct DepositContractsManager.DepositList storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref))"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1800,
                                                      "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                      "value": "deposits"
                                                    },
                                                    "id": 2238,
                                                    "name": "Identifier",
                                                    "src": "7837:8:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 2223,
                                                      "type": "bytes32",
                                                      "value": "clientId"
                                                    },
                                                    "id": 2239,
                                                    "name": "Identifier",
                                                    "src": "7846:8:5"
                                                  }
                                                ],
                                                "id": 2240,
                                                "name": "IndexAccess",
                                                "src": "7837:18:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 2225,
                                                  "type": "address",
                                                  "value": "tokenContract"
                                                },
                                                "id": 2241,
                                                "name": "Identifier",
                                                "src": "7856:13:5"
                                              }
                                            ],
                                            "id": 2242,
                                            "name": "IndexAccess",
                                            "src": "7837:33:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2227,
                                              "type": "bytes32",
                                              "value": "receiveCurrency"
                                            },
                                            "id": 2243,
                                            "name": "Identifier",
                                            "src": "7871:15:5"
                                          }
                                        ],
                                        "id": 2244,
                                        "name": "IndexAccess",
                                        "src": "7837:50:5"
                                      }
                                    ],
                                    "id": 2245,
                                    "name": "MemberAccess",
                                    "src": "7837:55:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2229,
                                      "type": "uint256",
                                      "value": "depositIndex"
                                    },
                                    "id": 2246,
                                    "name": "Identifier",
                                    "src": "7893:12:5"
                                  }
                                ],
                                "id": 2247,
                                "name": "IndexAccess",
                                "src": "7837:69:5"
                              }
                            ],
                            "id": 2248,
                            "name": "MemberAccess",
                            "src": "7837:79:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "received",
                              "referencedDeclaration": 1775,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct DepositContractsManager.Deposit storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "list",
                                      "referencedDeclaration": 1783,
                                      "type": "struct DepositContractsManager.Deposit storage ref[] storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct DepositContractsManager.DepositList storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref))"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1800,
                                                      "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                      "value": "deposits"
                                                    },
                                                    "id": 2249,
                                                    "name": "Identifier",
                                                    "src": "7930:8:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 2223,
                                                      "type": "bytes32",
                                                      "value": "clientId"
                                                    },
                                                    "id": 2250,
                                                    "name": "Identifier",
                                                    "src": "7939:8:5"
                                                  }
                                                ],
                                                "id": 2251,
                                                "name": "IndexAccess",
                                                "src": "7930:18:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 2225,
                                                  "type": "address",
                                                  "value": "tokenContract"
                                                },
                                                "id": 2252,
                                                "name": "Identifier",
                                                "src": "7949:13:5"
                                              }
                                            ],
                                            "id": 2253,
                                            "name": "IndexAccess",
                                            "src": "7930:33:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2227,
                                              "type": "bytes32",
                                              "value": "receiveCurrency"
                                            },
                                            "id": 2254,
                                            "name": "Identifier",
                                            "src": "7964:15:5"
                                          }
                                        ],
                                        "id": 2255,
                                        "name": "IndexAccess",
                                        "src": "7930:50:5"
                                      }
                                    ],
                                    "id": 2256,
                                    "name": "MemberAccess",
                                    "src": "7930:55:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2229,
                                      "type": "uint256",
                                      "value": "depositIndex"
                                    },
                                    "id": 2257,
                                    "name": "Identifier",
                                    "src": "7986:12:5"
                                  }
                                ],
                                "id": 2258,
                                "name": "IndexAccess",
                                "src": "7930:69:5"
                              }
                            ],
                            "id": 2259,
                            "name": "MemberAccess",
                            "src": "7930:78:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "isReleased",
                              "referencedDeclaration": 1779,
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
                                  "type": "struct DepositContractsManager.Deposit storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "list",
                                      "referencedDeclaration": 1783,
                                      "type": "struct DepositContractsManager.Deposit storage ref[] storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "struct DepositContractsManager.DepositList storage ref"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref))"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1800,
                                                      "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                      "value": "deposits"
                                                    },
                                                    "id": 2260,
                                                    "name": "Identifier",
                                                    "src": "8022:8:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 2223,
                                                      "type": "bytes32",
                                                      "value": "clientId"
                                                    },
                                                    "id": 2261,
                                                    "name": "Identifier",
                                                    "src": "8031:8:5"
                                                  }
                                                ],
                                                "id": 2262,
                                                "name": "IndexAccess",
                                                "src": "8022:18:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 2225,
                                                  "type": "address",
                                                  "value": "tokenContract"
                                                },
                                                "id": 2263,
                                                "name": "Identifier",
                                                "src": "8041:13:5"
                                              }
                                            ],
                                            "id": 2264,
                                            "name": "IndexAccess",
                                            "src": "8022:33:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2227,
                                              "type": "bytes32",
                                              "value": "receiveCurrency"
                                            },
                                            "id": 2265,
                                            "name": "Identifier",
                                            "src": "8056:15:5"
                                          }
                                        ],
                                        "id": 2266,
                                        "name": "IndexAccess",
                                        "src": "8022:50:5"
                                      }
                                    ],
                                    "id": 2267,
                                    "name": "MemberAccess",
                                    "src": "8022:55:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2229,
                                      "type": "uint256",
                                      "value": "depositIndex"
                                    },
                                    "id": 2268,
                                    "name": "Identifier",
                                    "src": "8078:12:5"
                                  }
                                ],
                                "id": 2269,
                                "name": "IndexAccess",
                                "src": "8022:69:5"
                              }
                            ],
                            "id": 2270,
                            "name": "MemberAccess",
                            "src": "8022:80:5"
                          }
                        ],
                        "id": 2271,
                        "name": "TupleExpression",
                        "src": "7823:289:5"
                      }
                    ],
                    "id": 2272,
                    "name": "Return",
                    "src": "7816:296:5"
                  }
                ],
                "id": 2273,
                "name": "Block",
                "src": "7806:313:5"
              }
            ],
            "id": 2274,
            "name": "FunctionDefinition",
            "src": "7638:481:5"
          }
        ],
        "id": 2275,
        "name": "ContractDefinition",
        "src": "164:7959:5"
      }
    ],
    "id": 2276,
    "name": "SourceUnit",
    "src": "0:8123:5"
  },
  "networks": {
    "3": {
      "events": {},
      "links": {},
      "address": "0xa0ae44c1adb7e09844d481a1d11f1b73e70b7817"
    }
  },
  "schemaVersion": "1.0.0",
  "updatedAt": "2018-01-22T11:31:43.555Z"
};
