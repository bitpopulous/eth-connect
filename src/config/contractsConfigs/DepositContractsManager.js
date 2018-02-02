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
          "name": "populousTokenContract",
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
          "name": "populousTokenContract",
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
          "name": "populousTokenContract",
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
          "name": "populousTokenContract",
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
  "bytecode": "0x6060604052341561000f57600080fd5b604051602080610f848339810160405280805160008054600160a060020a03909216600160a060020a03199092169190911790555050610f30806100546000396000f300606060405236156100725763ffffffff60e060020a60003504166302ab72c481146100775780631abc3632146100985780632a01a451146100e65780637368a8ce1461011857806390d64f3a1461012e578063ccce317f14610173578063d68388d6146101c8578063f7f01b4b14610211575b600080fd5b341561008257600080fd5b610096600160a060020a0360043516610224565b005b34156100a357600080fd5b6100c0600435600160a060020a03602435166044356064356102d7565b604051928352602083019190915215156040808301919091526060909101905180910390f35b34156100f157600080fd5b6100fc6004356103c5565b604051600160a060020a03909116815260200160405180910390f35b341561012357600080fd5b6100fc6004356103e0565b341561013957600080fd5b610159600435600160a060020a03602435166044356064356084356104e3565b604051911515825260208201526040908101905180910390f35b341561017e57600080fd5b6101a2600435600160a060020a0360243581169060443590606435166084356107a1565b604051921515835260208301919091526040808301919091526060909101905180910390f35b34156101d357600080fd5b6101ed600435600160a060020a0360243516604435610bd3565b60405180848152602001838152602001828152602001935050505060405180910390f35b341561021c57600080fd5b6100fc610c14565b60008054600160a060020a031690630c68ba219033906040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561027f57600080fd5b6102c65a03f1151561029057600080fd5b5050506040518051151560011490506102a857600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b6000848152600260209081526040808320600160a060020a0387168452825280832085845290915281208054829182918590811061031157fe5b60009182526020808320600490920290910154898352600282526040808420600160a060020a038b1685528352808420898552909252912080548690811061035557fe5b60009182526020808320600160049093020191909101548a8352600282526040808420600160a060020a038c16855283528084208a8552909252912080548790811061039d57fe5b6000918252602090912060036004909202010154919450925060ff1690509450945094915050565b600090815260016020526040902054600160a060020a031690565b60008054600160a060020a03166305fd22d033836040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561043957600080fd5b6102c65a03f1151561044a57600080fd5b50505060405180511515600114905061046257600080fd5b8161046b610c59565b908152602001604051809103906000f080151561048757600080fd5b6000838152600160205260409020805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392831617908190551615156104c757fe5b50600090815260016020526040902054600160a060020a031690565b6000805481908190600160a060020a03166305fd22d033836040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561054057600080fd5b6102c65a03f1151561055157600080fd5b50505060405180511515600114905061056957600080fd5b5060008781526001602052604080822054600160a060020a03169186916106269184916370a08231918c91516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b15156105d757600080fd5b6102c65a03f115156105e857600080fd5b505050604051805160008c8152600260209081526040808320600160a060020a038f16845282528083208d8452909152902060010154909150610c23565b141561078e576000888152600260209081526040808320600160a060020a038b168452825280832089845290915290208054600181016106668382610c69565b91600052602060002090600402016000608060405190810160409081528982526020820189905262278d00420190820152600060608201529190508151815560208201518160010155604082015181600201556060820151600391909101805460ff191691151591909117905550506000888152600260209081526040808320600160a060020a038b168452825280832089845290915290206001015461070d9086610c35565b6000898152600260208181526040808420600160a060020a038d16855282528084208b85529091529091206001810192909255015461074c9085610c35565b6000898152600260208181526040808420600160a060020a038d16855282528084208b8552909152909120908101919091555460019350600019019150610796565b600092508291505b509550959350505050565b60008054819081908190600160a060020a03166305fd22d033836040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561080057600080fd5b6102c65a03f1151561081157600080fd5b50505060405180511515600114905061082957600080fd5b5060008881526001602090815260408083205460028352818420600160a060020a038c811686529084528285208b8652909352922080549190921691908690811061087057fe5b9060005260206000209060040201600001546000141580156108dc57506000898152600260209081526040808320600160a060020a038c16845282528083208a845290915290208054869081106108c357fe5b600091825260209091206003600490920201015460ff16155b80156109b157506000898152600260209081526040808320600160a060020a038c811685529083528184208b855290925290912080549183169163beabacc8918b918a91908a90811061092b57fe5b90600052602060002090600402016000015460006040516020015260405160e060020a63ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401602060405180830381600087803b151561099557600080fd5b6102c65a03f115156109a657600080fd5b505050604051805190505b8015610a0557506000898152600260209081526040808320600160a060020a038c16845282528083208a845290915290208054429190879081106109f157fe5b906000526020600020906004020160020154115b15610bbc576000898152600260209081526040808320600160a060020a038c16845282528083208a8452909152902080546001919087908110610a4457fe5b60009182526020808320600492909202909101600301805460ff1916931515939093179092558a8152600282526040808220600160a060020a038c16835283528082208a83529092522060018101548154610abb929088908110610aa457fe5b906000526020600020906004020160000154610c23565b60008a8152600260208181526040808420600160a060020a038e16855282528084208c855290915290912060018101929092558101548154610b19929088908110610b0257fe5b906000526020600020906004020160010154610c23565b60008a8152600260208181526040808420600160a060020a038e16855282528084208c85529091529091209081019190915580546001919087908110610b5b57fe5b600091825260208083206004909202909101548c8352600282526040808420600160a060020a038e16855283528084208c85529092529120805488908110610b9f57fe5b906000526020600020906004020160010154935093509350610bc7565b600093508392508291505b50955095509592505050565b6000928352600260208181526040808620600160a060020a039590951686529381528385209285529190915291208054600182015491909201549192909190565b600054600160a060020a031681565b600082821115610c2f57fe5b50900390565b6000828201838110801590610c4a5750828110155b1515610c5257fe5b9392505050565b60405161023080610cd583390190565b815481835581811511610c9557600402816004028360005260206000209182019101610c959190610c9a565b505050565b610cd191905b80821115610ccd57600080825560018201819055600282015560038101805460ff19169055600401610ca0565b5090565b9056006060604052341561000f57600080fd5b60405160208061023083398101604052808051600055505060018054600160a060020a033316600160a060020a03199091161790556101dd806100536000396000f300606060405263ffffffff60e060020a60003504166370a08231811461002e578063beabacc81461005f57600080fd5b341561003957600080fd5b61004d600160a060020a036004351661009b565b60405190815260200160405180910390f35b341561006a57600080fd5b610087600160a060020a0360043581169060243516604435610114565b604051901515815260200160405180910390f35b600081600160a060020a03166370a082313060006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b15156100f457600080fd5b6102c65a03f1151561010557600080fd5b50505060405180519392505050565b60015460009033600160a060020a0390811691161461013257600080fd5b83600160a060020a031663a9059cbb848460006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561018f57600080fd5b6102c65a03f115156101a057600080fd5b5050506040518051959450505050505600a165627a7a72305820345e38fa584dd5faf915f3747f9950c55fe836c4260dcee858b59bc8571c51cd0029a165627a7a723058205f9d695e7bc5c9767a6a68262391ceffd26a980c28b7a00c9af2a1e84d64830e0029",
  "deployedBytecode": "0x606060405236156100725763ffffffff60e060020a60003504166302ab72c481146100775780631abc3632146100985780632a01a451146100e65780637368a8ce1461011857806390d64f3a1461012e578063ccce317f14610173578063d68388d6146101c8578063f7f01b4b14610211575b600080fd5b341561008257600080fd5b610096600160a060020a0360043516610224565b005b34156100a357600080fd5b6100c0600435600160a060020a03602435166044356064356102d7565b604051928352602083019190915215156040808301919091526060909101905180910390f35b34156100f157600080fd5b6100fc6004356103c5565b604051600160a060020a03909116815260200160405180910390f35b341561012357600080fd5b6100fc6004356103e0565b341561013957600080fd5b610159600435600160a060020a03602435166044356064356084356104e3565b604051911515825260208201526040908101905180910390f35b341561017e57600080fd5b6101a2600435600160a060020a0360243581169060443590606435166084356107a1565b604051921515835260208301919091526040808301919091526060909101905180910390f35b34156101d357600080fd5b6101ed600435600160a060020a0360243516604435610bd3565b60405180848152602001838152602001828152602001935050505060405180910390f35b341561021c57600080fd5b6100fc610c14565b60008054600160a060020a031690630c68ba219033906040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561027f57600080fd5b6102c65a03f1151561029057600080fd5b5050506040518051151560011490506102a857600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392909216919091179055565b6000848152600260209081526040808320600160a060020a0387168452825280832085845290915281208054829182918590811061031157fe5b60009182526020808320600490920290910154898352600282526040808420600160a060020a038b1685528352808420898552909252912080548690811061035557fe5b60009182526020808320600160049093020191909101548a8352600282526040808420600160a060020a038c16855283528084208a8552909252912080548790811061039d57fe5b6000918252602090912060036004909202010154919450925060ff1690509450945094915050565b600090815260016020526040902054600160a060020a031690565b60008054600160a060020a03166305fd22d033836040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561043957600080fd5b6102c65a03f1151561044a57600080fd5b50505060405180511515600114905061046257600080fd5b8161046b610c59565b908152602001604051809103906000f080151561048757600080fd5b6000838152600160205260409020805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0392831617908190551615156104c757fe5b50600090815260016020526040902054600160a060020a031690565b6000805481908190600160a060020a03166305fd22d033836040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561054057600080fd5b6102c65a03f1151561055157600080fd5b50505060405180511515600114905061056957600080fd5b5060008781526001602052604080822054600160a060020a03169186916106269184916370a08231918c91516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b15156105d757600080fd5b6102c65a03f115156105e857600080fd5b505050604051805160008c8152600260209081526040808320600160a060020a038f16845282528083208d8452909152902060010154909150610c23565b141561078e576000888152600260209081526040808320600160a060020a038b168452825280832089845290915290208054600181016106668382610c69565b91600052602060002090600402016000608060405190810160409081528982526020820189905262278d00420190820152600060608201529190508151815560208201518160010155604082015181600201556060820151600391909101805460ff191691151591909117905550506000888152600260209081526040808320600160a060020a038b168452825280832089845290915290206001015461070d9086610c35565b6000898152600260208181526040808420600160a060020a038d16855282528084208b85529091529091206001810192909255015461074c9085610c35565b6000898152600260208181526040808420600160a060020a038d16855282528084208b8552909152909120908101919091555460019350600019019150610796565b600092508291505b509550959350505050565b60008054819081908190600160a060020a03166305fd22d033836040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b151561080057600080fd5b6102c65a03f1151561081157600080fd5b50505060405180511515600114905061082957600080fd5b5060008881526001602090815260408083205460028352818420600160a060020a038c811686529084528285208b8652909352922080549190921691908690811061087057fe5b9060005260206000209060040201600001546000141580156108dc57506000898152600260209081526040808320600160a060020a038c16845282528083208a845290915290208054869081106108c357fe5b600091825260209091206003600490920201015460ff16155b80156109b157506000898152600260209081526040808320600160a060020a038c811685529083528184208b855290925290912080549183169163beabacc8918b918a91908a90811061092b57fe5b90600052602060002090600402016000015460006040516020015260405160e060020a63ffffffff8616028152600160a060020a0393841660048201529190921660248201526044810191909152606401602060405180830381600087803b151561099557600080fd5b6102c65a03f115156109a657600080fd5b505050604051805190505b8015610a0557506000898152600260209081526040808320600160a060020a038c16845282528083208a845290915290208054429190879081106109f157fe5b906000526020600020906004020160020154115b15610bbc576000898152600260209081526040808320600160a060020a038c16845282528083208a8452909152902080546001919087908110610a4457fe5b60009182526020808320600492909202909101600301805460ff1916931515939093179092558a8152600282526040808220600160a060020a038c16835283528082208a83529092522060018101548154610abb929088908110610aa457fe5b906000526020600020906004020160000154610c23565b60008a8152600260208181526040808420600160a060020a038e16855282528084208c855290915290912060018101929092558101548154610b19929088908110610b0257fe5b906000526020600020906004020160010154610c23565b60008a8152600260208181526040808420600160a060020a038e16855282528084208c85529091529091209081019190915580546001919087908110610b5b57fe5b600091825260208083206004909202909101548c8352600282526040808420600160a060020a038e16855283528084208c85529092529120805488908110610b9f57fe5b906000526020600020906004020160010154935093509350610bc7565b600093508392508291505b50955095509592505050565b6000928352600260208181526040808620600160a060020a039590951686529381528385209285529190915291208054600182015491909201549192909190565b600054600160a060020a031681565b600082821115610c2f57fe5b50900390565b6000828201838110801590610c4a5750828110155b1515610c5257fe5b9392505050565b60405161023080610cd583390190565b815481835581811511610c9557600402816004028360005260206000209182019101610c959190610c9a565b505050565b610cd191905b80821115610ccd57600080825560018201819055600282015560038101805460ff19169055600401610ca0565b5090565b9056006060604052341561000f57600080fd5b60405160208061023083398101604052808051600055505060018054600160a060020a033316600160a060020a03199091161790556101dd806100536000396000f300606060405263ffffffff60e060020a60003504166370a08231811461002e578063beabacc81461005f57600080fd5b341561003957600080fd5b61004d600160a060020a036004351661009b565b60405190815260200160405180910390f35b341561006a57600080fd5b610087600160a060020a0360043581169060243516604435610114565b604051901515815260200160405180910390f35b600081600160a060020a03166370a082313060006040516020015260405160e060020a63ffffffff8416028152600160a060020a039091166004820152602401602060405180830381600087803b15156100f457600080fd5b6102c65a03f1151561010557600080fd5b50505060405180519392505050565b60015460009033600160a060020a0390811691161461013257600080fd5b83600160a060020a031663a9059cbb848460006040516020015260405160e060020a63ffffffff8516028152600160a060020a0390921660048301526024820152604401602060405180830381600087803b151561018f57600080fd5b6102c65a03f115156101a057600080fd5b5050506040518051959450505050505600a165627a7a72305820345e38fa584dd5faf915f3747f9950c55fe836c4260dcee858b59bc8571c51cd0029a165627a7a723058205f9d695e7bc5c9767a6a68262391ceffd26a980c28b7a00c9af2a1e84d64830e0029",
  "sourceMap": "164:8255:5:-;;;1494:109;;;;;;;;;;;;;;;;;;;;;;1163:2:16;:34;;-1:-1:-1;;;;;1163:34:16;;;-1:-1:-1;;;;;;1163:34:16;;;;;;;;;-1:-1:-1;;164:8255:5;;;;;;",
  "deployedSourceMap": "164:8255:5:-;;;;;;;;-1:-1:-1;;;164:8255:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1356:124:16;;;;;;;;;;-1:-1:-1;;;;;1356:124:16;;;;;;;7902:513:5;;;;;;;;;;;;-1:-1:-1;;;;;7902:513:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6468:123;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;6468:123:5;;;;;;;;;;;;;;1850:256;;;;;;;;;;;;;;2596:1258;;;;;;;;;;;;-1:-1:-1;;;;;2596:1258:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4435:1840;;;;;;;;;;;;-1:-1:-1;;;;;4435:1840:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7020:442;;;;;;;;;;;;-1:-1:-1;;;;;7020:442:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;149:23:16;;;;;;;;;;;;1356:124;617:2;;;-1:-1:-1;;;;;617:2:16;;:13;;631:10;;617:25;;;;;;;-1:-1:-1;;;617:25:16;;;;;;-1:-1:-1;;;;;617:25:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:33;;646:4;617:33;;-1:-1:-1;609:42:16;;;;;;1439:2;:34;;-1:-1:-1;;1439:34:16;-1:-1:-1;;;;;1439:34:16;;;;;;;;;;1356:124::o;7902:513:5:-;8060:4;8109:18;;;:8;:18;;;;;;;;-1:-1:-1;;;;;8109:41:5;;;;;;;;;:58;;;;;;;;:77;;8060:4;;;;8173:12;;8109:77;;;;;;;;;;;;;;;;;;;;;:87;8210:18;;;:8;:18;;;;;;-1:-1:-1;;;;;8210:41:5;;;;;;;;;:58;;;;;;;;:77;;8274:12;;8210:77;;;;;;;;;;;;;;:86;:77;;;;;:86;;;;;8310:18;;;:8;:18;;;;;;-1:-1:-1;;;;;8310:41:5;;;;;;;;;:58;;;;;;;;:77;;8374:12;;8310:77;;;;;;;;;;;;;;:88;:77;;;;;:88;;8088:320;;-1:-1:-1;8088:320:5;-1:-1:-1;8310:88:5;;;-1:-1:-1;7902:513:5;;;;;;;;:::o;6468:123::-;6534:7;6560:24;;;:14;:24;;;;;;-1:-1:-1;;;;;6560:24:5;;6468:123::o;1850:256::-;1929:7;860:2:16;;-1:-1:-1;;;;;860:2:16;:13;874:10;1929:7:5;860:25:16;;;;;;;-1:-1:-1;;;860:25:16;;;;;;-1:-1:-1;;;;;860:25:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:33;;889:4;860:33;;-1:-1:-1;852:42:16;;;;;;1999:8:5;1979:29;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1952:24;;;;:14;:24;;;;;:56;;-1:-1:-1;;1952:56:5;-1:-1:-1;;;;;1952:56:5;;;;;;;;2025:24;:31;;2018:39;;;;-1:-1:-1;2075:24:5;;;;:14;:24;;;;;;-1:-1:-1;;;;;2075:24:5;;1850:256::o;2596:1258::-;2780:4;860:2:16;;2780:4:5;;;;-1:-1:-1;;;;;860:2:16;:13;874:10;2780:4:5;860:25:16;;;;;;;-1:-1:-1;;;860:25:16;;;;;;-1:-1:-1;;;;;860:25:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:33;;889:4;860:33;;-1:-1:-1;852:42:16;;;;;;-1:-1:-1;2842:24:5;;;;:14;:24;;;;;;;-1:-1:-1;;;;;2842:24:5;;3008:13;;2882:122;;2842:24;;2899:11;;2911:21;;2899:34;;;;;;-1:-1:-1;;;2899:34:5;;;;;;-1:-1:-1;;;;;2899:34:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2935:18;;;;:8;:18;;;;;;;;-1:-1:-1;;;;;2935:41:5;;;;;;;;;:58;;;;;;;;:68;;;2899:34;;-1:-1:-1;2882:16:5;:122::i;:::-;:139;2878:943;;;3074:18;;;;:8;:18;;;;;;;;-1:-1:-1;;;;;3074:41:5;;;;;;;;;:58;;;;;;;;:129;;;;;;:58;:129;;:::i;:::-;;;;;;;;;;;;3143:59;;;;;;;;;;;;;;;;;;;3187:7;3181:3;:13;3143:59;;;;-1:-1:-1;3143:59:5;;;;;3074:129;-1:-1:-1;3143:59:5;3074:129;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3074:129:5;;;;;;;;;;-1:-1:-1;;;3364:18:5;;;:8;:18;;;;;;;;-1:-1:-1;;;;;3364:41:5;;;;;;;;;:58;;;;;;;;-1:-1:-1;3364:68:5;;3330:147;;3450:13;3330:16;:147::i;:::-;3259:18;;;;:8;:18;;;;;;;;-1:-1:-1;;;;;3259:41:5;;;;;;;;;:58;;;;;;;;;:68;;;:218;;;;3595:67;;3561:146;;3680:13;3561:16;:146::i;:::-;3491:18;;;;:8;:18;;;;;;;;-1:-1:-1;;;;;3491:41:5;;;;;;;;;:58;;;;;;;;;:67;;;:216;;;;3735:70;3729:4;;-1:-1:-1;;;3735:74:5;;-1:-1:-1;3721:89:5;;2878:943;3838:5;;-1:-1:-1;3838:5:5;;-1:-1:-1;904:1:16;2596:1258:5;;;;;;;;;:::o;4435:1840::-;4623:4;860:2:16;;4623:4:5;;;;;;-1:-1:-1;;;;;860:2:16;:13;874:10;4623:4:5;860:25:16;;;;;;;-1:-1:-1;;;860:25:16;;;;;;-1:-1:-1;;;;;860:25:16;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:33;;889:4;860:33;;-1:-1:-1;852:42:16;;;;;;-1:-1:-1;4691:24:5;;;;:14;:24;;;;;;;;;4739:8;:18;;;;;-1:-1:-1;;;;;4739:41:5;;;;;;;;;;;:58;;;;;;;;:77;;4691:24;;;;;4739:58;4803:12;;4739:77;;;;;;;;;;;;;;;;:87;;;4830:1;4739:92;;:205;;;;-1:-1:-1;4847:18:5;;;;:8;:18;;;;;;;;-1:-1:-1;;;;;4847:41:5;;;;;;;;;:58;;;;;;;;:77;;4911:12;;4847:77;;;;;;;;;;;;;;:88;:77;;;;;:88;;;;:97;4739:205;:353;;;;-1:-1:-1;5004:18:5;;;;:8;:18;;;;;;;;-1:-1:-1;;;;;5004:41:5;;;;;;;;;;;:58;;;;;;;;;:77;;4960:10;;;;;;4971:21;;4994:8;;5004:58;5068:12;;5004:77;;;;;;;;;;;;;;;;:87;;;4960:132;;;;;;;;-1:-1:-1;;;4960:132:5;;;;;;-1:-1:-1;;;;;4960:132:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4739:353;:464;;;;-1:-1:-1;5108:18:5;;;;:8;:18;;;;;;;;-1:-1:-1;;;;;5108:41:5;;;;;;;;;:58;;;;;;;;:77;;5200:3;;5108:58;5172:12;;5108:77;;;;;;;;;;;;;;;;:89;;;:95;4739:464;4735:1504;;;5228:18;;;;:8;:18;;;;;;;;-1:-1:-1;;;;;5228:41:5;;;;;;;;;:58;;;;;;;;:77;;5319:4;;5228:58;5292:12;;5228:77;;;;;;;;;;;;;;;;;;;;;;:88;;:95;;-1:-1:-1;;5228:95:5;;;;;;;;;;;5472:18;;;:8;:18;;;;;;-1:-1:-1;;;;;5472:41:5;;;;;;;;;:58;;;;;;;-1:-1:-1;5472:68:5;;;5558:77;;5438:221;;5472:58;5622:12;;5558:77;;;;;;;;;;;;;;;;:87;;;5438:16;:221::i;:::-;5367:18;;;;:8;:18;;;;;;;;-1:-1:-1;;;;;5367:41:5;;;;;;;;;:58;;;;;;;;;:68;;;:292;;;;5777:67;;;5862:77;;5743:219;;5367:58;5926:12;;5862:77;;;;;;;;;;;;;;;;:86;;;5743:16;:219::i;:::-;5673:18;;;;:8;:18;;;;;;;;-1:-1:-1;;;;;5673:41:5;;;;;;;;;:58;;;;;;;;;:67;;;:289;;;;6023:77;;6001:4;;5673:58;6087:12;;6023:77;;;;;;;;;;;;;;;;;;;;;:87;6128:18;;;:8;:18;;;;;;-1:-1:-1;;;;;6128:41:5;;;;;;;;;:58;;;;;;;;:77;;6192:12;;6128:77;;;;;;;;;;;;;;;;:86;;;5976:252;;;;;;;;4735:1504;6256:5;;-1:-1:-1;6256:5:5;;-1:-1:-1;6256:5:5;;-1:-1:-1;904:1:16;4435:1840:5;;;;;;;;;;:::o;7020:442::-;7163:4;7212:18;;;:8;:18;;;;;;;;-1:-1:-1;;;;;7212:41:5;;;;;;;;;;;;:58;;;;;;;;;:70;;7296:68;;;;7378:67;;;;;7212:70;;7296:68;;7378:67;7020:442::o;149:23:16:-;;;-1:-1:-1;;;;;149:23:16;;:::o;849:111:10:-;905:4;926:6;;;;919:14;;;;-1:-1:-1;948:5:10;;;849:111::o;1223:135::-;1279:4;1302:5;;;1322:4;;;;;;:12;;;1333:1;1330;:4;;1322:12;1315:20;;;;;;1350:1;1223:135;-1:-1:-1;;;1223:135:10:o;164:8255:5:-;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;164:8255:5;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.17;\n\nimport \"./SafeMath.sol\";\nimport \"./withAccessManager.sol\";\nimport \"./DepositContract.sol\";\n\n\n/// @title DepositCountractsManager contract\ncontract DepositContractsManager is withAccessManager {\n    // FIELDS\n\n    // This variable represents deposits \n    // and their related information i.e., amount deposited and received\n    // and a boolean isReleased indicating whether the deposit has been released.\n    struct Deposit {\n        uint deposited;\n        uint received;\n        uint releaseTime;\n        bool isReleased;\n    }\n\n    // This variable will be used to store a list of deposits\n    // together with the total amount deposited and received for a deposit contract.\n    struct DepositList {\n        Deposit[] list;\n        uint deposited;\n        uint received;\n    }\n\n    // This variable will be used to keep track of client IDs and\n    // their deposit addresses\n    // clientId => depositAddress\n    mapping (bytes32 => address) depositAddress;\n\n    // The variable 'deposits'\n    // links a bytes32 client ID to a token contract address linked to a currency symbol \n    // linked to a DepositList object type declared above.\n    // clientId => populousTokenContract => currencySymbol => DepositList\n    mapping (bytes32 => mapping(address => mapping(bytes32 => DepositList))) deposits;\n\n\n    // NON-CONSTANT METHODS\n\n    // The constructor method called when this contract instance is deployed \n    // using a modifier the _accessManager address\n    function DepositContractsManager(address _accessManager) public\n        withAccessManager(_accessManager) { }\n\n    /** @dev Creates a new 'depositAddress' gotten from deploying a deposit contract linked to a client ID\n      * @param clientId The bytes32 client ID\n      * @return address The address of the deployed deposit contract instance.\n      */\n    function create(bytes32 clientId) public\n        onlyPopulous\n        returns (address)\n    {\n        depositAddress[clientId] = new DepositContract(clientId);\n        assert(depositAddress[clientId] != 0x0);\n\n        return depositAddress[clientId];\n    }\n\n    /** @dev Deposits an amount of tokens linked to a client ID.\n      * @param clientId The client ID.\n      * @param populousTokenContract The token contract.\n      * @param receiveCurrency The currency symbol.\n      * @param depositAmount The deposit amount.\n      * @param receiveAmount The receive amount.\n      * @return bool boolean value indicating whether or not a deposit transaction has been made with success.\n      * @return uint The updated number of deposits.\n      */\n    function deposit(bytes32 clientId, address populousTokenContract, bytes32 receiveCurrency, uint depositAmount, uint receiveAmount)\n        public\n        onlyPopulous\n        returns (bool, uint)\n    {\n        DepositContract o = DepositContract(depositAddress[clientId]);\n\n        if (SafeMath.safeSub(o.balanceOf(populousTokenContract), deposits[clientId][populousTokenContract][receiveCurrency].deposited) == depositAmount) {\n            // save new deposit info\n            deposits[clientId][populousTokenContract][receiveCurrency].list.push(Deposit(depositAmount, receiveAmount, now + 30 days, false));\n            \n            // update totals\n            deposits[clientId][populousTokenContract][receiveCurrency].deposited = SafeMath.safeAdd(\n                deposits[clientId][populousTokenContract][receiveCurrency].deposited,\n                depositAmount\n            );\n            deposits[clientId][populousTokenContract][receiveCurrency].received = SafeMath.safeAdd(\n                deposits[clientId][populousTokenContract][receiveCurrency].received,\n                receiveAmount\n            );\n            return (true, deposits[clientId][populousTokenContract][receiveCurrency].list.length - 1);\n        }\n        return (false, 0);\n    }\n\n    /** @dev Releases a deposit to an address/wallet.\n      * @param clientId The client ID.\n      * @param populousTokenContract The token contract.\n      * @param receiveCurrency The currency symbol.\n      * @param receiver The address/wallet of the receiver.\n      * @param depositIndex The index/location of a specific deposit in the declared deposit list above.\n      * @return bool boolean value indicating whether or not a deposit has been updated with success.\n      * @return uint The token amount deposited.\n      * @return uint The token amount received.\n      */\n    function releaseDeposit(bytes32 clientId, address populousTokenContract, bytes32 receiveCurrency, address receiver, uint depositIndex)\n        public\n        onlyPopulous\n        returns (bool, uint, uint)\n    {\n        DepositContract o = DepositContract(depositAddress[clientId]);\n        \n        if (deposits[clientId][populousTokenContract][receiveCurrency].list[depositIndex].deposited != 0 &&\n            deposits[clientId][populousTokenContract][receiveCurrency].list[depositIndex].isReleased == false &&\n            o.transfer(populousTokenContract, receiver, deposits[clientId][populousTokenContract][receiveCurrency].list[depositIndex].deposited) &&\n            deposits[clientId][populousTokenContract][receiveCurrency].list[depositIndex].releaseTime > now\n        ) {\n            deposits[clientId][populousTokenContract][receiveCurrency].list[depositIndex].isReleased = true;\n\n            // update totals\n            deposits[clientId][populousTokenContract][receiveCurrency].deposited = SafeMath.safeSub(\n                deposits[clientId][populousTokenContract][receiveCurrency].deposited,\n                deposits[clientId][populousTokenContract][receiveCurrency].list[depositIndex].deposited\n            );\n            deposits[clientId][populousTokenContract][receiveCurrency].received = SafeMath.safeSub(\n                deposits[clientId][populousTokenContract][receiveCurrency].received,\n                deposits[clientId][populousTokenContract][receiveCurrency].list[depositIndex].received\n            );\n            return (\n                true,\n                deposits[clientId][populousTokenContract][receiveCurrency].list[depositIndex].deposited,\n                deposits[clientId][populousTokenContract][receiveCurrency].list[depositIndex].received\n            );\n        }\n        return (false, 0, 0);\n    }\n\n\n    // CONSTANT METHODS\n\n\n    /** @dev Gets the deposit address linked to a given client ID.\n      * @param clientId The client ID.\n      * @return address The deposit address.\n      */\n    function getDepositAddress(bytes32 clientId) public view returns (address) {\n        return depositAddress[clientId];\n    }\n\n    /** @dev Gets the deposit address linked to a given client ID.\n      * @param clientId The client ID.\n      * @param populousTokenContract The token contract\n      * @param receiveCurrency The currency symbol\n      * @return uint The length of a deposit list linked to the client ID, token contract and currency.\n      * @return uint The token amount deposited.\n      * @return uint The token amount received.\n      */\n    function getActiveDepositList(bytes32 clientId, address populousTokenContract, bytes32 receiveCurrency) \n        public \n        view returns (uint, uint, uint) {\n        return (\n            deposits[clientId][populousTokenContract][receiveCurrency].list.length,\n            deposits[clientId][populousTokenContract][receiveCurrency].deposited,\n            deposits[clientId][populousTokenContract][receiveCurrency].received\n        );\n    }\n\n    /** @dev Gets the details of a deposit.\n      * @param clientId The client ID.\n      * @param populousTokenContract The token contract.\n      * @param receiveCurrency The currency symbol.\n      * @param depositIndex The ID of a particular deposit in a deposit list.\n      * @return uint Deposited amount.\n      * @return uint Received amount.\n      * @return bool Boolean value to indicate if deposit is released or not.\n      */\n    function getActiveDeposit(bytes32 clientId, address populousTokenContract, bytes32 receiveCurrency, uint depositIndex) \n        public \n        view returns (uint, uint, bool) {\n        return (\n            deposits[clientId][populousTokenContract][receiveCurrency].list[depositIndex].deposited,\n            deposits[clientId][populousTokenContract][receiveCurrency].list[depositIndex].received,\n            deposits[clientId][populousTokenContract][receiveCurrency].list[depositIndex].isReleased\n        );\n    }\n\n\n}",
  "sourcePath": "/Users/najienka/Desktop/populous-smartcontracts/contracts/DepositContractsManager.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/najienka/Desktop/populous-smartcontracts/contracts/DepositContractsManager.sol",
      "exportedSymbols": {
        "DepositContractsManager": [
          2265
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
        "id": 1756,
        "name": "PragmaDirective",
        "src": "0:24:5"
      },
      {
        "attributes": {
          "SourceUnit": 4532,
          "absolutePath": "/Users/najienka/Desktop/populous-smartcontracts/contracts/SafeMath.sol",
          "file": "./SafeMath.sol",
          "scope": 2266,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1757,
        "name": "ImportDirective",
        "src": "26:24:5"
      },
      {
        "attributes": {
          "SourceUnit": 4952,
          "absolutePath": "/Users/najienka/Desktop/populous-smartcontracts/contracts/withAccessManager.sol",
          "file": "./withAccessManager.sol",
          "scope": 2266,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1758,
        "name": "ImportDirective",
        "src": "51:33:5"
      },
      {
        "attributes": {
          "SourceUnit": 1755,
          "absolutePath": "/Users/najienka/Desktop/populous-smartcontracts/contracts/DepositContract.sol",
          "file": "./DepositContract.sol",
          "scope": 2266,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1759,
        "name": "ImportDirective",
        "src": "85:31:5"
      },
      {
        "attributes": {
          "contractDependencies": [
            1754,
            4951
          ],
          "contractKind": "contract",
          "documentation": "@title DepositCountractsManager contract",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            2265,
            4951
          ],
          "name": "DepositContractsManager",
          "scope": 2266
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
                  "referencedDeclaration": 4951,
                  "type": "contract withAccessManager"
                },
                "id": 1760,
                "name": "UserDefinedTypeName",
                "src": "200:17:5"
              }
            ],
            "id": 1761,
            "name": "InheritanceSpecifier",
            "src": "200:17:5"
          },
          {
            "attributes": {
              "canonicalName": "DepositContractsManager.Deposit",
              "name": "Deposit",
              "scope": 2265,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "deposited",
                  "scope": 1770,
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
                    "id": 1762,
                    "name": "ElementaryTypeName",
                    "src": "461:4:5"
                  }
                ],
                "id": 1763,
                "name": "VariableDeclaration",
                "src": "461:14:5"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "received",
                  "scope": 1770,
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
                    "id": 1764,
                    "name": "ElementaryTypeName",
                    "src": "485:4:5"
                  }
                ],
                "id": 1765,
                "name": "VariableDeclaration",
                "src": "485:13:5"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "releaseTime",
                  "scope": 1770,
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
                    "id": 1766,
                    "name": "ElementaryTypeName",
                    "src": "508:4:5"
                  }
                ],
                "id": 1767,
                "name": "VariableDeclaration",
                "src": "508:16:5"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "isReleased",
                  "scope": 1770,
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
                    "id": 1768,
                    "name": "ElementaryTypeName",
                    "src": "534:4:5"
                  }
                ],
                "id": 1769,
                "name": "VariableDeclaration",
                "src": "534:15:5"
              }
            ],
            "id": 1770,
            "name": "StructDefinition",
            "src": "436:120:5"
          },
          {
            "attributes": {
              "canonicalName": "DepositContractsManager.DepositList",
              "name": "DepositList",
              "scope": 2265,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "list",
                  "scope": 1778,
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
                          "referencedDeclaration": 1770,
                          "type": "struct DepositContractsManager.Deposit storage pointer"
                        },
                        "id": 1771,
                        "name": "UserDefinedTypeName",
                        "src": "738:7:5"
                      }
                    ],
                    "id": 1772,
                    "name": "ArrayTypeName",
                    "src": "738:9:5"
                  }
                ],
                "id": 1773,
                "name": "VariableDeclaration",
                "src": "738:14:5"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "deposited",
                  "scope": 1778,
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
                    "src": "762:4:5"
                  }
                ],
                "id": 1775,
                "name": "VariableDeclaration",
                "src": "762:14:5"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "received",
                  "scope": 1778,
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
                    "src": "786:4:5"
                  }
                ],
                "id": 1777,
                "name": "VariableDeclaration",
                "src": "786:13:5"
              }
            ],
            "id": 1778,
            "name": "StructDefinition",
            "src": "709:97:5"
          },
          {
            "attributes": {
              "constant": false,
              "name": "depositAddress",
              "scope": 2265,
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
                    "id": 1779,
                    "name": "ElementaryTypeName",
                    "src": "952:7:5"
                  },
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 1780,
                    "name": "ElementaryTypeName",
                    "src": "963:7:5"
                  }
                ],
                "id": 1781,
                "name": "Mapping",
                "src": "943:28:5"
              }
            ],
            "id": 1782,
            "name": "VariableDeclaration",
            "src": "943:43:5"
          },
          {
            "attributes": {
              "constant": false,
              "name": "deposits",
              "scope": 2265,
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
                    "id": 1783,
                    "name": "ElementaryTypeName",
                    "src": "1256:7:5"
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
                        "id": 1784,
                        "name": "ElementaryTypeName",
                        "src": "1275:7:5"
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
                            "id": 1785,
                            "name": "ElementaryTypeName",
                            "src": "1294:7:5"
                          },
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "DepositList",
                              "referencedDeclaration": 1778,
                              "type": "struct DepositContractsManager.DepositList storage pointer"
                            },
                            "id": 1786,
                            "name": "UserDefinedTypeName",
                            "src": "1305:11:5"
                          }
                        ],
                        "id": 1787,
                        "name": "Mapping",
                        "src": "1286:31:5"
                      }
                    ],
                    "id": 1788,
                    "name": "Mapping",
                    "src": "1267:51:5"
                  }
                ],
                "id": 1789,
                "name": "Mapping",
                "src": "1247:72:5"
              }
            ],
            "id": 1790,
            "name": "VariableDeclaration",
            "src": "1247:81:5"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "name": "DepositContractsManager",
              "payable": false,
              "scope": 2265,
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
                      "scope": 1799,
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
                        "id": 1791,
                        "name": "ElementaryTypeName",
                        "src": "1527:7:5"
                      }
                    ],
                    "id": 1792,
                    "name": "VariableDeclaration",
                    "src": "1527:22:5"
                  }
                ],
                "id": 1793,
                "name": "ParameterList",
                "src": "1526:24:5"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1797,
                "name": "ParameterList",
                "src": "1600:0:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 4951,
                      "type": "type(contract withAccessManager)",
                      "value": "withAccessManager"
                    },
                    "id": 1794,
                    "name": "Identifier",
                    "src": "1566:17:5"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1792,
                      "type": "address",
                      "value": "_accessManager"
                    },
                    "id": 1795,
                    "name": "Identifier",
                    "src": "1584:14:5"
                  }
                ],
                "id": 1796,
                "name": "ModifierInvocation",
                "src": "1566:33:5"
              },
              {
                "attributes": {
                  "statements": [
                    null
                  ]
                },
                "children": [],
                "id": 1798,
                "name": "Block",
                "src": "1600:3:5"
              }
            ],
            "id": 1799,
            "name": "FunctionDefinition",
            "src": "1494:109:5"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "create",
              "payable": false,
              "scope": 2265,
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
                      "scope": 1830,
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
                        "id": 1800,
                        "name": "ElementaryTypeName",
                        "src": "1866:7:5"
                      }
                    ],
                    "id": 1801,
                    "name": "VariableDeclaration",
                    "src": "1866:16:5"
                  }
                ],
                "id": 1802,
                "name": "ParameterList",
                "src": "1865:18:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1830,
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
                        "id": 1805,
                        "name": "ElementaryTypeName",
                        "src": "1929:7:5"
                      }
                    ],
                    "id": 1806,
                    "name": "VariableDeclaration",
                    "src": "1929:7:5"
                  }
                ],
                "id": 1807,
                "name": "ParameterList",
                "src": "1928:9:5"
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
                      "referencedDeclaration": 4924,
                      "type": "modifier ()",
                      "value": "onlyPopulous"
                    },
                    "id": 1803,
                    "name": "Identifier",
                    "src": "1899:12:5"
                  }
                ],
                "id": 1804,
                "name": "ModifierInvocation",
                "src": "1899:12:5"
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
                                  "referencedDeclaration": 1782,
                                  "type": "mapping(bytes32 => address)",
                                  "value": "depositAddress"
                                },
                                "id": 1808,
                                "name": "Identifier",
                                "src": "1952:14:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1801,
                                  "type": "bytes32",
                                  "value": "clientId"
                                },
                                "id": 1809,
                                "name": "Identifier",
                                "src": "1967:8:5"
                              }
                            ],
                            "id": 1810,
                            "name": "IndexAccess",
                            "src": "1952:24:5"
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
                                      "referencedDeclaration": 1754,
                                      "type": "contract DepositContract"
                                    },
                                    "id": 1811,
                                    "name": "UserDefinedTypeName",
                                    "src": "1983:15:5"
                                  }
                                ],
                                "id": 1812,
                                "name": "NewExpression",
                                "src": "1979:19:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1801,
                                  "type": "bytes32",
                                  "value": "clientId"
                                },
                                "id": 1813,
                                "name": "Identifier",
                                "src": "1999:8:5"
                              }
                            ],
                            "id": 1814,
                            "name": "FunctionCall",
                            "src": "1979:29:5"
                          }
                        ],
                        "id": 1815,
                        "name": "Assignment",
                        "src": "1952:56:5"
                      }
                    ],
                    "id": 1816,
                    "name": "ExpressionStatement",
                    "src": "1952:56:5"
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
                              "referencedDeclaration": 4971,
                              "type": "function (bool) pure",
                              "value": "assert"
                            },
                            "id": 1817,
                            "name": "Identifier",
                            "src": "2018:6:5"
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
                                      "referencedDeclaration": 1782,
                                      "type": "mapping(bytes32 => address)",
                                      "value": "depositAddress"
                                    },
                                    "id": 1818,
                                    "name": "Identifier",
                                    "src": "2025:14:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1801,
                                      "type": "bytes32",
                                      "value": "clientId"
                                    },
                                    "id": 1819,
                                    "name": "Identifier",
                                    "src": "2040:8:5"
                                  }
                                ],
                                "id": 1820,
                                "name": "IndexAccess",
                                "src": "2025:24:5"
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
                                "id": 1821,
                                "name": "Literal",
                                "src": "2053:3:5"
                              }
                            ],
                            "id": 1822,
                            "name": "BinaryOperation",
                            "src": "2025:31:5"
                          }
                        ],
                        "id": 1823,
                        "name": "FunctionCall",
                        "src": "2018:39:5"
                      }
                    ],
                    "id": 1824,
                    "name": "ExpressionStatement",
                    "src": "2018:39:5"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1807
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
                              "referencedDeclaration": 1782,
                              "type": "mapping(bytes32 => address)",
                              "value": "depositAddress"
                            },
                            "id": 1825,
                            "name": "Identifier",
                            "src": "2075:14:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1801,
                              "type": "bytes32",
                              "value": "clientId"
                            },
                            "id": 1826,
                            "name": "Identifier",
                            "src": "2090:8:5"
                          }
                        ],
                        "id": 1827,
                        "name": "IndexAccess",
                        "src": "2075:24:5"
                      }
                    ],
                    "id": 1828,
                    "name": "Return",
                    "src": "2068:31:5"
                  }
                ],
                "id": 1829,
                "name": "Block",
                "src": "1942:164:5"
              }
            ],
            "id": 1830,
            "name": "FunctionDefinition",
            "src": "1850:256:5"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "deposit",
              "payable": false,
              "scope": 2265,
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
                      "scope": 1958,
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
                        "id": 1831,
                        "name": "ElementaryTypeName",
                        "src": "2613:7:5"
                      }
                    ],
                    "id": 1832,
                    "name": "VariableDeclaration",
                    "src": "2613:16:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "populousTokenContract",
                      "scope": 1958,
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
                        "id": 1833,
                        "name": "ElementaryTypeName",
                        "src": "2631:7:5"
                      }
                    ],
                    "id": 1834,
                    "name": "VariableDeclaration",
                    "src": "2631:29:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "receiveCurrency",
                      "scope": 1958,
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
                        "id": 1835,
                        "name": "ElementaryTypeName",
                        "src": "2662:7:5"
                      }
                    ],
                    "id": 1836,
                    "name": "VariableDeclaration",
                    "src": "2662:23:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "depositAmount",
                      "scope": 1958,
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
                        "id": 1837,
                        "name": "ElementaryTypeName",
                        "src": "2687:4:5"
                      }
                    ],
                    "id": 1838,
                    "name": "VariableDeclaration",
                    "src": "2687:18:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "receiveAmount",
                      "scope": 1958,
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
                        "id": 1839,
                        "name": "ElementaryTypeName",
                        "src": "2707:4:5"
                      }
                    ],
                    "id": 1840,
                    "name": "VariableDeclaration",
                    "src": "2707:18:5"
                  }
                ],
                "id": 1841,
                "name": "ParameterList",
                "src": "2612:114:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1958,
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
                        "id": 1844,
                        "name": "ElementaryTypeName",
                        "src": "2780:4:5"
                      }
                    ],
                    "id": 1845,
                    "name": "VariableDeclaration",
                    "src": "2780:4:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1958,
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
                        "id": 1846,
                        "name": "ElementaryTypeName",
                        "src": "2786:4:5"
                      }
                    ],
                    "id": 1847,
                    "name": "VariableDeclaration",
                    "src": "2786:4:5"
                  }
                ],
                "id": 1848,
                "name": "ParameterList",
                "src": "2779:12:5"
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
                      "referencedDeclaration": 4924,
                      "type": "modifier ()",
                      "value": "onlyPopulous"
                    },
                    "id": 1842,
                    "name": "Identifier",
                    "src": "2750:12:5"
                  }
                ],
                "id": 1843,
                "name": "ModifierInvocation",
                "src": "2750:12:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1850
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "o",
                          "scope": 1958,
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
                              "referencedDeclaration": 1754,
                              "type": "contract DepositContract"
                            },
                            "id": 1849,
                            "name": "UserDefinedTypeName",
                            "src": "2806:15:5"
                          }
                        ],
                        "id": 1850,
                        "name": "VariableDeclaration",
                        "src": "2806:17:5"
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
                              "referencedDeclaration": 1754,
                              "type": "type(contract DepositContract)",
                              "value": "DepositContract"
                            },
                            "id": 1851,
                            "name": "Identifier",
                            "src": "2826:15:5"
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
                                  "referencedDeclaration": 1782,
                                  "type": "mapping(bytes32 => address)",
                                  "value": "depositAddress"
                                },
                                "id": 1852,
                                "name": "Identifier",
                                "src": "2842:14:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1832,
                                  "type": "bytes32",
                                  "value": "clientId"
                                },
                                "id": 1853,
                                "name": "Identifier",
                                "src": "2857:8:5"
                              }
                            ],
                            "id": 1854,
                            "name": "IndexAccess",
                            "src": "2842:24:5"
                          }
                        ],
                        "id": 1855,
                        "name": "FunctionCall",
                        "src": "2826:41:5"
                      }
                    ],
                    "id": 1856,
                    "name": "VariableDeclarationStatement",
                    "src": "2806:61:5"
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
                                  "referencedDeclaration": 4466,
                                  "type": "function (uint256,uint256) pure returns (uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 4531,
                                      "type": "type(library SafeMath)",
                                      "value": "SafeMath"
                                    },
                                    "id": 1857,
                                    "name": "Identifier",
                                    "src": "2882:8:5"
                                  }
                                ],
                                "id": 1858,
                                "name": "MemberAccess",
                                "src": "2882:16:5"
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
                                      "referencedDeclaration": 1753,
                                      "type": "function (address) view external returns (uint256)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1850,
                                          "type": "contract DepositContract",
                                          "value": "o"
                                        },
                                        "id": 1859,
                                        "name": "Identifier",
                                        "src": "2899:1:5"
                                      }
                                    ],
                                    "id": 1860,
                                    "name": "MemberAccess",
                                    "src": "2899:11:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1834,
                                      "type": "address",
                                      "value": "populousTokenContract"
                                    },
                                    "id": 1861,
                                    "name": "Identifier",
                                    "src": "2911:21:5"
                                  }
                                ],
                                "id": 1862,
                                "name": "FunctionCall",
                                "src": "2899:34:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "deposited",
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
                                                  "referencedDeclaration": 1790,
                                                  "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                  "value": "deposits"
                                                },
                                                "id": 1863,
                                                "name": "Identifier",
                                                "src": "2935:8:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1832,
                                                  "type": "bytes32",
                                                  "value": "clientId"
                                                },
                                                "id": 1864,
                                                "name": "Identifier",
                                                "src": "2944:8:5"
                                              }
                                            ],
                                            "id": 1865,
                                            "name": "IndexAccess",
                                            "src": "2935:18:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1834,
                                              "type": "address",
                                              "value": "populousTokenContract"
                                            },
                                            "id": 1866,
                                            "name": "Identifier",
                                            "src": "2954:21:5"
                                          }
                                        ],
                                        "id": 1867,
                                        "name": "IndexAccess",
                                        "src": "2935:41:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1836,
                                          "type": "bytes32",
                                          "value": "receiveCurrency"
                                        },
                                        "id": 1868,
                                        "name": "Identifier",
                                        "src": "2977:15:5"
                                      }
                                    ],
                                    "id": 1869,
                                    "name": "IndexAccess",
                                    "src": "2935:58:5"
                                  }
                                ],
                                "id": 1870,
                                "name": "MemberAccess",
                                "src": "2935:68:5"
                              }
                            ],
                            "id": 1871,
                            "name": "FunctionCall",
                            "src": "2882:122:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1838,
                              "type": "uint256",
                              "value": "depositAmount"
                            },
                            "id": 1872,
                            "name": "Identifier",
                            "src": "3008:13:5"
                          }
                        ],
                        "id": 1873,
                        "name": "BinaryOperation",
                        "src": "2882:139:5"
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
                                          "typeIdentifier": "t_struct$_Deposit_$1770_memory",
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
                                          "referencedDeclaration": 1773,
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
                                                          "referencedDeclaration": 1790,
                                                          "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                          "value": "deposits"
                                                        },
                                                        "id": 1874,
                                                        "name": "Identifier",
                                                        "src": "3074:8:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1832,
                                                          "type": "bytes32",
                                                          "value": "clientId"
                                                        },
                                                        "id": 1875,
                                                        "name": "Identifier",
                                                        "src": "3083:8:5"
                                                      }
                                                    ],
                                                    "id": 1878,
                                                    "name": "IndexAccess",
                                                    "src": "3074:18:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1834,
                                                      "type": "address",
                                                      "value": "populousTokenContract"
                                                    },
                                                    "id": 1876,
                                                    "name": "Identifier",
                                                    "src": "3093:21:5"
                                                  }
                                                ],
                                                "id": 1879,
                                                "name": "IndexAccess",
                                                "src": "3074:41:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1836,
                                                  "type": "bytes32",
                                                  "value": "receiveCurrency"
                                                },
                                                "id": 1877,
                                                "name": "Identifier",
                                                "src": "3116:15:5"
                                              }
                                            ],
                                            "id": 1880,
                                            "name": "IndexAccess",
                                            "src": "3074:58:5"
                                          }
                                        ],
                                        "id": 1881,
                                        "name": "MemberAccess",
                                        "src": "3074:63:5"
                                      }
                                    ],
                                    "id": 1882,
                                    "name": "MemberAccess",
                                    "src": "3074:68:5"
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
                                          "referencedDeclaration": 1770,
                                          "type": "type(struct DepositContractsManager.Deposit storage pointer)",
                                          "value": "Deposit"
                                        },
                                        "id": 1883,
                                        "name": "Identifier",
                                        "src": "3143:7:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1838,
                                          "type": "uint256",
                                          "value": "depositAmount"
                                        },
                                        "id": 1884,
                                        "name": "Identifier",
                                        "src": "3151:13:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1840,
                                          "type": "uint256",
                                          "value": "receiveAmount"
                                        },
                                        "id": 1885,
                                        "name": "Identifier",
                                        "src": "3166:13:5"
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
                                              "referencedDeclaration": 4956,
                                              "type": "uint256",
                                              "value": "now"
                                            },
                                            "id": 1886,
                                            "name": "Identifier",
                                            "src": "3181:3:5"
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
                                            "id": 1887,
                                            "name": "Literal",
                                            "src": "3187:7:5"
                                          }
                                        ],
                                        "id": 1888,
                                        "name": "BinaryOperation",
                                        "src": "3181:13:5"
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
                                        "id": 1889,
                                        "name": "Literal",
                                        "src": "3196:5:5"
                                      }
                                    ],
                                    "id": 1890,
                                    "name": "FunctionCall",
                                    "src": "3143:59:5"
                                  }
                                ],
                                "id": 1891,
                                "name": "FunctionCall",
                                "src": "3074:129:5"
                              }
                            ],
                            "id": 1892,
                            "name": "ExpressionStatement",
                            "src": "3074:129:5"
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
                                                      "referencedDeclaration": 1790,
                                                      "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                      "value": "deposits"
                                                    },
                                                    "id": 1893,
                                                    "name": "Identifier",
                                                    "src": "3259:8:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1832,
                                                      "type": "bytes32",
                                                      "value": "clientId"
                                                    },
                                                    "id": 1894,
                                                    "name": "Identifier",
                                                    "src": "3268:8:5"
                                                  }
                                                ],
                                                "id": 1897,
                                                "name": "IndexAccess",
                                                "src": "3259:18:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1834,
                                                  "type": "address",
                                                  "value": "populousTokenContract"
                                                },
                                                "id": 1895,
                                                "name": "Identifier",
                                                "src": "3278:21:5"
                                              }
                                            ],
                                            "id": 1898,
                                            "name": "IndexAccess",
                                            "src": "3259:41:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1836,
                                              "type": "bytes32",
                                              "value": "receiveCurrency"
                                            },
                                            "id": 1896,
                                            "name": "Identifier",
                                            "src": "3301:15:5"
                                          }
                                        ],
                                        "id": 1899,
                                        "name": "IndexAccess",
                                        "src": "3259:58:5"
                                      }
                                    ],
                                    "id": 1900,
                                    "name": "MemberAccess",
                                    "src": "3259:68:5"
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
                                          "referencedDeclaration": 4494,
                                          "type": "function (uint256,uint256) pure returns (uint256)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 4531,
                                              "type": "type(library SafeMath)",
                                              "value": "SafeMath"
                                            },
                                            "id": 1901,
                                            "name": "Identifier",
                                            "src": "3330:8:5"
                                          }
                                        ],
                                        "id": 1902,
                                        "name": "MemberAccess",
                                        "src": "3330:16:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "deposited",
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
                                                          "referencedDeclaration": 1790,
                                                          "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                          "value": "deposits"
                                                        },
                                                        "id": 1903,
                                                        "name": "Identifier",
                                                        "src": "3364:8:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1832,
                                                          "type": "bytes32",
                                                          "value": "clientId"
                                                        },
                                                        "id": 1904,
                                                        "name": "Identifier",
                                                        "src": "3373:8:5"
                                                      }
                                                    ],
                                                    "id": 1905,
                                                    "name": "IndexAccess",
                                                    "src": "3364:18:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1834,
                                                      "type": "address",
                                                      "value": "populousTokenContract"
                                                    },
                                                    "id": 1906,
                                                    "name": "Identifier",
                                                    "src": "3383:21:5"
                                                  }
                                                ],
                                                "id": 1907,
                                                "name": "IndexAccess",
                                                "src": "3364:41:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1836,
                                                  "type": "bytes32",
                                                  "value": "receiveCurrency"
                                                },
                                                "id": 1908,
                                                "name": "Identifier",
                                                "src": "3406:15:5"
                                              }
                                            ],
                                            "id": 1909,
                                            "name": "IndexAccess",
                                            "src": "3364:58:5"
                                          }
                                        ],
                                        "id": 1910,
                                        "name": "MemberAccess",
                                        "src": "3364:68:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1838,
                                          "type": "uint256",
                                          "value": "depositAmount"
                                        },
                                        "id": 1911,
                                        "name": "Identifier",
                                        "src": "3450:13:5"
                                      }
                                    ],
                                    "id": 1912,
                                    "name": "FunctionCall",
                                    "src": "3330:147:5"
                                  }
                                ],
                                "id": 1913,
                                "name": "Assignment",
                                "src": "3259:218:5"
                              }
                            ],
                            "id": 1914,
                            "name": "ExpressionStatement",
                            "src": "3259:218:5"
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
                                                      "referencedDeclaration": 1790,
                                                      "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                      "value": "deposits"
                                                    },
                                                    "id": 1915,
                                                    "name": "Identifier",
                                                    "src": "3491:8:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1832,
                                                      "type": "bytes32",
                                                      "value": "clientId"
                                                    },
                                                    "id": 1916,
                                                    "name": "Identifier",
                                                    "src": "3500:8:5"
                                                  }
                                                ],
                                                "id": 1919,
                                                "name": "IndexAccess",
                                                "src": "3491:18:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1834,
                                                  "type": "address",
                                                  "value": "populousTokenContract"
                                                },
                                                "id": 1917,
                                                "name": "Identifier",
                                                "src": "3510:21:5"
                                              }
                                            ],
                                            "id": 1920,
                                            "name": "IndexAccess",
                                            "src": "3491:41:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1836,
                                              "type": "bytes32",
                                              "value": "receiveCurrency"
                                            },
                                            "id": 1918,
                                            "name": "Identifier",
                                            "src": "3533:15:5"
                                          }
                                        ],
                                        "id": 1921,
                                        "name": "IndexAccess",
                                        "src": "3491:58:5"
                                      }
                                    ],
                                    "id": 1922,
                                    "name": "MemberAccess",
                                    "src": "3491:67:5"
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
                                          "referencedDeclaration": 4494,
                                          "type": "function (uint256,uint256) pure returns (uint256)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 4531,
                                              "type": "type(library SafeMath)",
                                              "value": "SafeMath"
                                            },
                                            "id": 1923,
                                            "name": "Identifier",
                                            "src": "3561:8:5"
                                          }
                                        ],
                                        "id": 1924,
                                        "name": "MemberAccess",
                                        "src": "3561:16:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "received",
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
                                                          "referencedDeclaration": 1790,
                                                          "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                          "value": "deposits"
                                                        },
                                                        "id": 1925,
                                                        "name": "Identifier",
                                                        "src": "3595:8:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1832,
                                                          "type": "bytes32",
                                                          "value": "clientId"
                                                        },
                                                        "id": 1926,
                                                        "name": "Identifier",
                                                        "src": "3604:8:5"
                                                      }
                                                    ],
                                                    "id": 1927,
                                                    "name": "IndexAccess",
                                                    "src": "3595:18:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1834,
                                                      "type": "address",
                                                      "value": "populousTokenContract"
                                                    },
                                                    "id": 1928,
                                                    "name": "Identifier",
                                                    "src": "3614:21:5"
                                                  }
                                                ],
                                                "id": 1929,
                                                "name": "IndexAccess",
                                                "src": "3595:41:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1836,
                                                  "type": "bytes32",
                                                  "value": "receiveCurrency"
                                                },
                                                "id": 1930,
                                                "name": "Identifier",
                                                "src": "3637:15:5"
                                              }
                                            ],
                                            "id": 1931,
                                            "name": "IndexAccess",
                                            "src": "3595:58:5"
                                          }
                                        ],
                                        "id": 1932,
                                        "name": "MemberAccess",
                                        "src": "3595:67:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1840,
                                          "type": "uint256",
                                          "value": "receiveAmount"
                                        },
                                        "id": 1933,
                                        "name": "Identifier",
                                        "src": "3680:13:5"
                                      }
                                    ],
                                    "id": 1934,
                                    "name": "FunctionCall",
                                    "src": "3561:146:5"
                                  }
                                ],
                                "id": 1935,
                                "name": "Assignment",
                                "src": "3491:216:5"
                              }
                            ],
                            "id": 1936,
                            "name": "ExpressionStatement",
                            "src": "3491:216:5"
                          },
                          {
                            "attributes": {
                              "functionReturnParameters": 1848
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
                                    "id": 1937,
                                    "name": "Literal",
                                    "src": "3729:4:5"
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
                                              "referencedDeclaration": 1773,
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
                                                              "referencedDeclaration": 1790,
                                                              "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                              "value": "deposits"
                                                            },
                                                            "id": 1938,
                                                            "name": "Identifier",
                                                            "src": "3735:8:5"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 1832,
                                                              "type": "bytes32",
                                                              "value": "clientId"
                                                            },
                                                            "id": 1939,
                                                            "name": "Identifier",
                                                            "src": "3744:8:5"
                                                          }
                                                        ],
                                                        "id": 1940,
                                                        "name": "IndexAccess",
                                                        "src": "3735:18:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1834,
                                                          "type": "address",
                                                          "value": "populousTokenContract"
                                                        },
                                                        "id": 1941,
                                                        "name": "Identifier",
                                                        "src": "3754:21:5"
                                                      }
                                                    ],
                                                    "id": 1942,
                                                    "name": "IndexAccess",
                                                    "src": "3735:41:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1836,
                                                      "type": "bytes32",
                                                      "value": "receiveCurrency"
                                                    },
                                                    "id": 1943,
                                                    "name": "Identifier",
                                                    "src": "3777:15:5"
                                                  }
                                                ],
                                                "id": 1944,
                                                "name": "IndexAccess",
                                                "src": "3735:58:5"
                                              }
                                            ],
                                            "id": 1945,
                                            "name": "MemberAccess",
                                            "src": "3735:63:5"
                                          }
                                        ],
                                        "id": 1946,
                                        "name": "MemberAccess",
                                        "src": "3735:70:5"
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
                                        "id": 1947,
                                        "name": "Literal",
                                        "src": "3808:1:5"
                                      }
                                    ],
                                    "id": 1948,
                                    "name": "BinaryOperation",
                                    "src": "3735:74:5"
                                  }
                                ],
                                "id": 1949,
                                "name": "TupleExpression",
                                "src": "3728:82:5"
                              }
                            ],
                            "id": 1950,
                            "name": "Return",
                            "src": "3721:89:5"
                          }
                        ],
                        "id": 1951,
                        "name": "Block",
                        "src": "3023:798:5"
                      }
                    ],
                    "id": 1952,
                    "name": "IfStatement",
                    "src": "2878:943:5"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1848
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
                            "id": 1953,
                            "name": "Literal",
                            "src": "3838:5:5"
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
                            "id": 1954,
                            "name": "Literal",
                            "src": "3845:1:5"
                          }
                        ],
                        "id": 1955,
                        "name": "TupleExpression",
                        "src": "3837:10:5"
                      }
                    ],
                    "id": 1956,
                    "name": "Return",
                    "src": "3830:17:5"
                  }
                ],
                "id": 1957,
                "name": "Block",
                "src": "2796:1058:5"
              }
            ],
            "id": 1958,
            "name": "FunctionDefinition",
            "src": "2596:1258:5"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "releaseDeposit",
              "payable": false,
              "scope": 2265,
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
                      "scope": 2156,
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
                        "id": 1959,
                        "name": "ElementaryTypeName",
                        "src": "4459:7:5"
                      }
                    ],
                    "id": 1960,
                    "name": "VariableDeclaration",
                    "src": "4459:16:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "populousTokenContract",
                      "scope": 2156,
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
                        "id": 1961,
                        "name": "ElementaryTypeName",
                        "src": "4477:7:5"
                      }
                    ],
                    "id": 1962,
                    "name": "VariableDeclaration",
                    "src": "4477:29:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "receiveCurrency",
                      "scope": 2156,
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
                        "id": 1963,
                        "name": "ElementaryTypeName",
                        "src": "4508:7:5"
                      }
                    ],
                    "id": 1964,
                    "name": "VariableDeclaration",
                    "src": "4508:23:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "receiver",
                      "scope": 2156,
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
                        "id": 1965,
                        "name": "ElementaryTypeName",
                        "src": "4533:7:5"
                      }
                    ],
                    "id": 1966,
                    "name": "VariableDeclaration",
                    "src": "4533:16:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "depositIndex",
                      "scope": 2156,
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
                        "id": 1967,
                        "name": "ElementaryTypeName",
                        "src": "4551:4:5"
                      }
                    ],
                    "id": 1968,
                    "name": "VariableDeclaration",
                    "src": "4551:17:5"
                  }
                ],
                "id": 1969,
                "name": "ParameterList",
                "src": "4458:111:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2156,
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
                        "id": 1972,
                        "name": "ElementaryTypeName",
                        "src": "4623:4:5"
                      }
                    ],
                    "id": 1973,
                    "name": "VariableDeclaration",
                    "src": "4623:4:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2156,
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
                        "id": 1974,
                        "name": "ElementaryTypeName",
                        "src": "4629:4:5"
                      }
                    ],
                    "id": 1975,
                    "name": "VariableDeclaration",
                    "src": "4629:4:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2156,
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
                        "id": 1976,
                        "name": "ElementaryTypeName",
                        "src": "4635:4:5"
                      }
                    ],
                    "id": 1977,
                    "name": "VariableDeclaration",
                    "src": "4635:4:5"
                  }
                ],
                "id": 1978,
                "name": "ParameterList",
                "src": "4622:18:5"
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
                      "referencedDeclaration": 4924,
                      "type": "modifier ()",
                      "value": "onlyPopulous"
                    },
                    "id": 1970,
                    "name": "Identifier",
                    "src": "4593:12:5"
                  }
                ],
                "id": 1971,
                "name": "ModifierInvocation",
                "src": "4593:12:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1980
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "o",
                          "scope": 2156,
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
                              "referencedDeclaration": 1754,
                              "type": "contract DepositContract"
                            },
                            "id": 1979,
                            "name": "UserDefinedTypeName",
                            "src": "4655:15:5"
                          }
                        ],
                        "id": 1980,
                        "name": "VariableDeclaration",
                        "src": "4655:17:5"
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
                              "referencedDeclaration": 1754,
                              "type": "type(contract DepositContract)",
                              "value": "DepositContract"
                            },
                            "id": 1981,
                            "name": "Identifier",
                            "src": "4675:15:5"
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
                                  "referencedDeclaration": 1782,
                                  "type": "mapping(bytes32 => address)",
                                  "value": "depositAddress"
                                },
                                "id": 1982,
                                "name": "Identifier",
                                "src": "4691:14:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1960,
                                  "type": "bytes32",
                                  "value": "clientId"
                                },
                                "id": 1983,
                                "name": "Identifier",
                                "src": "4706:8:5"
                              }
                            ],
                            "id": 1984,
                            "name": "IndexAccess",
                            "src": "4691:24:5"
                          }
                        ],
                        "id": 1985,
                        "name": "FunctionCall",
                        "src": "4675:41:5"
                      }
                    ],
                    "id": 1986,
                    "name": "VariableDeclarationStatement",
                    "src": "4655:61:5"
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
                                          "referencedDeclaration": 1763,
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
                                                  "referencedDeclaration": 1773,
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
                                                                  "referencedDeclaration": 1790,
                                                                  "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                                  "value": "deposits"
                                                                },
                                                                "id": 1987,
                                                                "name": "Identifier",
                                                                "src": "4739:8:5"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "argumentTypes": null,
                                                                  "overloadedDeclarations": [
                                                                    null
                                                                  ],
                                                                  "referencedDeclaration": 1960,
                                                                  "type": "bytes32",
                                                                  "value": "clientId"
                                                                },
                                                                "id": 1988,
                                                                "name": "Identifier",
                                                                "src": "4748:8:5"
                                                              }
                                                            ],
                                                            "id": 1989,
                                                            "name": "IndexAccess",
                                                            "src": "4739:18:5"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 1962,
                                                              "type": "address",
                                                              "value": "populousTokenContract"
                                                            },
                                                            "id": 1990,
                                                            "name": "Identifier",
                                                            "src": "4758:21:5"
                                                          }
                                                        ],
                                                        "id": 1991,
                                                        "name": "IndexAccess",
                                                        "src": "4739:41:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1964,
                                                          "type": "bytes32",
                                                          "value": "receiveCurrency"
                                                        },
                                                        "id": 1992,
                                                        "name": "Identifier",
                                                        "src": "4781:15:5"
                                                      }
                                                    ],
                                                    "id": 1993,
                                                    "name": "IndexAccess",
                                                    "src": "4739:58:5"
                                                  }
                                                ],
                                                "id": 1994,
                                                "name": "MemberAccess",
                                                "src": "4739:63:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1968,
                                                  "type": "uint256",
                                                  "value": "depositIndex"
                                                },
                                                "id": 1995,
                                                "name": "Identifier",
                                                "src": "4803:12:5"
                                              }
                                            ],
                                            "id": 1996,
                                            "name": "IndexAccess",
                                            "src": "4739:77:5"
                                          }
                                        ],
                                        "id": 1997,
                                        "name": "MemberAccess",
                                        "src": "4739:87:5"
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
                                        "id": 1998,
                                        "name": "Literal",
                                        "src": "4830:1:5"
                                      }
                                    ],
                                    "id": 1999,
                                    "name": "BinaryOperation",
                                    "src": "4739:92:5"
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
                                          "referencedDeclaration": 1769,
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
                                                  "referencedDeclaration": 1773,
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
                                                                  "referencedDeclaration": 1790,
                                                                  "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                                  "value": "deposits"
                                                                },
                                                                "id": 2000,
                                                                "name": "Identifier",
                                                                "src": "4847:8:5"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "argumentTypes": null,
                                                                  "overloadedDeclarations": [
                                                                    null
                                                                  ],
                                                                  "referencedDeclaration": 1960,
                                                                  "type": "bytes32",
                                                                  "value": "clientId"
                                                                },
                                                                "id": 2001,
                                                                "name": "Identifier",
                                                                "src": "4856:8:5"
                                                              }
                                                            ],
                                                            "id": 2002,
                                                            "name": "IndexAccess",
                                                            "src": "4847:18:5"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 1962,
                                                              "type": "address",
                                                              "value": "populousTokenContract"
                                                            },
                                                            "id": 2003,
                                                            "name": "Identifier",
                                                            "src": "4866:21:5"
                                                          }
                                                        ],
                                                        "id": 2004,
                                                        "name": "IndexAccess",
                                                        "src": "4847:41:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1964,
                                                          "type": "bytes32",
                                                          "value": "receiveCurrency"
                                                        },
                                                        "id": 2005,
                                                        "name": "Identifier",
                                                        "src": "4889:15:5"
                                                      }
                                                    ],
                                                    "id": 2006,
                                                    "name": "IndexAccess",
                                                    "src": "4847:58:5"
                                                  }
                                                ],
                                                "id": 2007,
                                                "name": "MemberAccess",
                                                "src": "4847:63:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1968,
                                                  "type": "uint256",
                                                  "value": "depositIndex"
                                                },
                                                "id": 2008,
                                                "name": "Identifier",
                                                "src": "4911:12:5"
                                              }
                                            ],
                                            "id": 2009,
                                            "name": "IndexAccess",
                                            "src": "4847:77:5"
                                          }
                                        ],
                                        "id": 2010,
                                        "name": "MemberAccess",
                                        "src": "4847:88:5"
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
                                        "id": 2011,
                                        "name": "Literal",
                                        "src": "4939:5:5"
                                      }
                                    ],
                                    "id": 2012,
                                    "name": "BinaryOperation",
                                    "src": "4847:97:5"
                                  }
                                ],
                                "id": 2013,
                                "name": "BinaryOperation",
                                "src": "4739:205:5"
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
                                      "referencedDeclaration": 1738,
                                      "type": "function (address,address,uint256) external returns (bool)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1980,
                                          "type": "contract DepositContract",
                                          "value": "o"
                                        },
                                        "id": 2014,
                                        "name": "Identifier",
                                        "src": "4960:1:5"
                                      }
                                    ],
                                    "id": 2015,
                                    "name": "MemberAccess",
                                    "src": "4960:10:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1962,
                                      "type": "address",
                                      "value": "populousTokenContract"
                                    },
                                    "id": 2016,
                                    "name": "Identifier",
                                    "src": "4971:21:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1966,
                                      "type": "address",
                                      "value": "receiver"
                                    },
                                    "id": 2017,
                                    "name": "Identifier",
                                    "src": "4994:8:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "deposited",
                                      "referencedDeclaration": 1763,
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
                                              "referencedDeclaration": 1773,
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
                                                              "referencedDeclaration": 1790,
                                                              "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                              "value": "deposits"
                                                            },
                                                            "id": 2018,
                                                            "name": "Identifier",
                                                            "src": "5004:8:5"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 1960,
                                                              "type": "bytes32",
                                                              "value": "clientId"
                                                            },
                                                            "id": 2019,
                                                            "name": "Identifier",
                                                            "src": "5013:8:5"
                                                          }
                                                        ],
                                                        "id": 2020,
                                                        "name": "IndexAccess",
                                                        "src": "5004:18:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1962,
                                                          "type": "address",
                                                          "value": "populousTokenContract"
                                                        },
                                                        "id": 2021,
                                                        "name": "Identifier",
                                                        "src": "5023:21:5"
                                                      }
                                                    ],
                                                    "id": 2022,
                                                    "name": "IndexAccess",
                                                    "src": "5004:41:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1964,
                                                      "type": "bytes32",
                                                      "value": "receiveCurrency"
                                                    },
                                                    "id": 2023,
                                                    "name": "Identifier",
                                                    "src": "5046:15:5"
                                                  }
                                                ],
                                                "id": 2024,
                                                "name": "IndexAccess",
                                                "src": "5004:58:5"
                                              }
                                            ],
                                            "id": 2025,
                                            "name": "MemberAccess",
                                            "src": "5004:63:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1968,
                                              "type": "uint256",
                                              "value": "depositIndex"
                                            },
                                            "id": 2026,
                                            "name": "Identifier",
                                            "src": "5068:12:5"
                                          }
                                        ],
                                        "id": 2027,
                                        "name": "IndexAccess",
                                        "src": "5004:77:5"
                                      }
                                    ],
                                    "id": 2028,
                                    "name": "MemberAccess",
                                    "src": "5004:87:5"
                                  }
                                ],
                                "id": 2029,
                                "name": "FunctionCall",
                                "src": "4960:132:5"
                              }
                            ],
                            "id": 2030,
                            "name": "BinaryOperation",
                            "src": "4739:353:5"
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
                                  "referencedDeclaration": 1767,
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
                                          "referencedDeclaration": 1773,
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
                                                          "referencedDeclaration": 1790,
                                                          "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                          "value": "deposits"
                                                        },
                                                        "id": 2031,
                                                        "name": "Identifier",
                                                        "src": "5108:8:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1960,
                                                          "type": "bytes32",
                                                          "value": "clientId"
                                                        },
                                                        "id": 2032,
                                                        "name": "Identifier",
                                                        "src": "5117:8:5"
                                                      }
                                                    ],
                                                    "id": 2033,
                                                    "name": "IndexAccess",
                                                    "src": "5108:18:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1962,
                                                      "type": "address",
                                                      "value": "populousTokenContract"
                                                    },
                                                    "id": 2034,
                                                    "name": "Identifier",
                                                    "src": "5127:21:5"
                                                  }
                                                ],
                                                "id": 2035,
                                                "name": "IndexAccess",
                                                "src": "5108:41:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1964,
                                                  "type": "bytes32",
                                                  "value": "receiveCurrency"
                                                },
                                                "id": 2036,
                                                "name": "Identifier",
                                                "src": "5150:15:5"
                                              }
                                            ],
                                            "id": 2037,
                                            "name": "IndexAccess",
                                            "src": "5108:58:5"
                                          }
                                        ],
                                        "id": 2038,
                                        "name": "MemberAccess",
                                        "src": "5108:63:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1968,
                                          "type": "uint256",
                                          "value": "depositIndex"
                                        },
                                        "id": 2039,
                                        "name": "Identifier",
                                        "src": "5172:12:5"
                                      }
                                    ],
                                    "id": 2040,
                                    "name": "IndexAccess",
                                    "src": "5108:77:5"
                                  }
                                ],
                                "id": 2041,
                                "name": "MemberAccess",
                                "src": "5108:89:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 4956,
                                  "type": "uint256",
                                  "value": "now"
                                },
                                "id": 2042,
                                "name": "Identifier",
                                "src": "5200:3:5"
                              }
                            ],
                            "id": 2043,
                            "name": "BinaryOperation",
                            "src": "5108:95:5"
                          }
                        ],
                        "id": 2044,
                        "name": "BinaryOperation",
                        "src": "4739:464:5"
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
                                      "referencedDeclaration": 1769,
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
                                              "referencedDeclaration": 1773,
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
                                                              "referencedDeclaration": 1790,
                                                              "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                              "value": "deposits"
                                                            },
                                                            "id": 2045,
                                                            "name": "Identifier",
                                                            "src": "5228:8:5"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 1960,
                                                              "type": "bytes32",
                                                              "value": "clientId"
                                                            },
                                                            "id": 2046,
                                                            "name": "Identifier",
                                                            "src": "5237:8:5"
                                                          }
                                                        ],
                                                        "id": 2049,
                                                        "name": "IndexAccess",
                                                        "src": "5228:18:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1962,
                                                          "type": "address",
                                                          "value": "populousTokenContract"
                                                        },
                                                        "id": 2047,
                                                        "name": "Identifier",
                                                        "src": "5247:21:5"
                                                      }
                                                    ],
                                                    "id": 2050,
                                                    "name": "IndexAccess",
                                                    "src": "5228:41:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1964,
                                                      "type": "bytes32",
                                                      "value": "receiveCurrency"
                                                    },
                                                    "id": 2048,
                                                    "name": "Identifier",
                                                    "src": "5270:15:5"
                                                  }
                                                ],
                                                "id": 2051,
                                                "name": "IndexAccess",
                                                "src": "5228:58:5"
                                              }
                                            ],
                                            "id": 2052,
                                            "name": "MemberAccess",
                                            "src": "5228:63:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1968,
                                              "type": "uint256",
                                              "value": "depositIndex"
                                            },
                                            "id": 2053,
                                            "name": "Identifier",
                                            "src": "5292:12:5"
                                          }
                                        ],
                                        "id": 2054,
                                        "name": "IndexAccess",
                                        "src": "5228:77:5"
                                      }
                                    ],
                                    "id": 2055,
                                    "name": "MemberAccess",
                                    "src": "5228:88:5"
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
                                    "id": 2056,
                                    "name": "Literal",
                                    "src": "5319:4:5"
                                  }
                                ],
                                "id": 2057,
                                "name": "Assignment",
                                "src": "5228:95:5"
                              }
                            ],
                            "id": 2058,
                            "name": "ExpressionStatement",
                            "src": "5228:95:5"
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
                                                      "referencedDeclaration": 1790,
                                                      "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                      "value": "deposits"
                                                    },
                                                    "id": 2059,
                                                    "name": "Identifier",
                                                    "src": "5367:8:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1960,
                                                      "type": "bytes32",
                                                      "value": "clientId"
                                                    },
                                                    "id": 2060,
                                                    "name": "Identifier",
                                                    "src": "5376:8:5"
                                                  }
                                                ],
                                                "id": 2063,
                                                "name": "IndexAccess",
                                                "src": "5367:18:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1962,
                                                  "type": "address",
                                                  "value": "populousTokenContract"
                                                },
                                                "id": 2061,
                                                "name": "Identifier",
                                                "src": "5386:21:5"
                                              }
                                            ],
                                            "id": 2064,
                                            "name": "IndexAccess",
                                            "src": "5367:41:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1964,
                                              "type": "bytes32",
                                              "value": "receiveCurrency"
                                            },
                                            "id": 2062,
                                            "name": "Identifier",
                                            "src": "5409:15:5"
                                          }
                                        ],
                                        "id": 2065,
                                        "name": "IndexAccess",
                                        "src": "5367:58:5"
                                      }
                                    ],
                                    "id": 2066,
                                    "name": "MemberAccess",
                                    "src": "5367:68:5"
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
                                          "referencedDeclaration": 4466,
                                          "type": "function (uint256,uint256) pure returns (uint256)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 4531,
                                              "type": "type(library SafeMath)",
                                              "value": "SafeMath"
                                            },
                                            "id": 2067,
                                            "name": "Identifier",
                                            "src": "5438:8:5"
                                          }
                                        ],
                                        "id": 2068,
                                        "name": "MemberAccess",
                                        "src": "5438:16:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "deposited",
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
                                                          "referencedDeclaration": 1790,
                                                          "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                          "value": "deposits"
                                                        },
                                                        "id": 2069,
                                                        "name": "Identifier",
                                                        "src": "5472:8:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1960,
                                                          "type": "bytes32",
                                                          "value": "clientId"
                                                        },
                                                        "id": 2070,
                                                        "name": "Identifier",
                                                        "src": "5481:8:5"
                                                      }
                                                    ],
                                                    "id": 2071,
                                                    "name": "IndexAccess",
                                                    "src": "5472:18:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1962,
                                                      "type": "address",
                                                      "value": "populousTokenContract"
                                                    },
                                                    "id": 2072,
                                                    "name": "Identifier",
                                                    "src": "5491:21:5"
                                                  }
                                                ],
                                                "id": 2073,
                                                "name": "IndexAccess",
                                                "src": "5472:41:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1964,
                                                  "type": "bytes32",
                                                  "value": "receiveCurrency"
                                                },
                                                "id": 2074,
                                                "name": "Identifier",
                                                "src": "5514:15:5"
                                              }
                                            ],
                                            "id": 2075,
                                            "name": "IndexAccess",
                                            "src": "5472:58:5"
                                          }
                                        ],
                                        "id": 2076,
                                        "name": "MemberAccess",
                                        "src": "5472:68:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "deposited",
                                          "referencedDeclaration": 1763,
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
                                                  "referencedDeclaration": 1773,
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
                                                                  "referencedDeclaration": 1790,
                                                                  "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                                  "value": "deposits"
                                                                },
                                                                "id": 2077,
                                                                "name": "Identifier",
                                                                "src": "5558:8:5"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "argumentTypes": null,
                                                                  "overloadedDeclarations": [
                                                                    null
                                                                  ],
                                                                  "referencedDeclaration": 1960,
                                                                  "type": "bytes32",
                                                                  "value": "clientId"
                                                                },
                                                                "id": 2078,
                                                                "name": "Identifier",
                                                                "src": "5567:8:5"
                                                              }
                                                            ],
                                                            "id": 2079,
                                                            "name": "IndexAccess",
                                                            "src": "5558:18:5"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 1962,
                                                              "type": "address",
                                                              "value": "populousTokenContract"
                                                            },
                                                            "id": 2080,
                                                            "name": "Identifier",
                                                            "src": "5577:21:5"
                                                          }
                                                        ],
                                                        "id": 2081,
                                                        "name": "IndexAccess",
                                                        "src": "5558:41:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1964,
                                                          "type": "bytes32",
                                                          "value": "receiveCurrency"
                                                        },
                                                        "id": 2082,
                                                        "name": "Identifier",
                                                        "src": "5600:15:5"
                                                      }
                                                    ],
                                                    "id": 2083,
                                                    "name": "IndexAccess",
                                                    "src": "5558:58:5"
                                                  }
                                                ],
                                                "id": 2084,
                                                "name": "MemberAccess",
                                                "src": "5558:63:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1968,
                                                  "type": "uint256",
                                                  "value": "depositIndex"
                                                },
                                                "id": 2085,
                                                "name": "Identifier",
                                                "src": "5622:12:5"
                                              }
                                            ],
                                            "id": 2086,
                                            "name": "IndexAccess",
                                            "src": "5558:77:5"
                                          }
                                        ],
                                        "id": 2087,
                                        "name": "MemberAccess",
                                        "src": "5558:87:5"
                                      }
                                    ],
                                    "id": 2088,
                                    "name": "FunctionCall",
                                    "src": "5438:221:5"
                                  }
                                ],
                                "id": 2089,
                                "name": "Assignment",
                                "src": "5367:292:5"
                              }
                            ],
                            "id": 2090,
                            "name": "ExpressionStatement",
                            "src": "5367:292:5"
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
                                                      "referencedDeclaration": 1790,
                                                      "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                      "value": "deposits"
                                                    },
                                                    "id": 2091,
                                                    "name": "Identifier",
                                                    "src": "5673:8:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1960,
                                                      "type": "bytes32",
                                                      "value": "clientId"
                                                    },
                                                    "id": 2092,
                                                    "name": "Identifier",
                                                    "src": "5682:8:5"
                                                  }
                                                ],
                                                "id": 2095,
                                                "name": "IndexAccess",
                                                "src": "5673:18:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1962,
                                                  "type": "address",
                                                  "value": "populousTokenContract"
                                                },
                                                "id": 2093,
                                                "name": "Identifier",
                                                "src": "5692:21:5"
                                              }
                                            ],
                                            "id": 2096,
                                            "name": "IndexAccess",
                                            "src": "5673:41:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1964,
                                              "type": "bytes32",
                                              "value": "receiveCurrency"
                                            },
                                            "id": 2094,
                                            "name": "Identifier",
                                            "src": "5715:15:5"
                                          }
                                        ],
                                        "id": 2097,
                                        "name": "IndexAccess",
                                        "src": "5673:58:5"
                                      }
                                    ],
                                    "id": 2098,
                                    "name": "MemberAccess",
                                    "src": "5673:67:5"
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
                                          "referencedDeclaration": 4466,
                                          "type": "function (uint256,uint256) pure returns (uint256)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 4531,
                                              "type": "type(library SafeMath)",
                                              "value": "SafeMath"
                                            },
                                            "id": 2099,
                                            "name": "Identifier",
                                            "src": "5743:8:5"
                                          }
                                        ],
                                        "id": 2100,
                                        "name": "MemberAccess",
                                        "src": "5743:16:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "received",
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
                                                          "referencedDeclaration": 1790,
                                                          "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                          "value": "deposits"
                                                        },
                                                        "id": 2101,
                                                        "name": "Identifier",
                                                        "src": "5777:8:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1960,
                                                          "type": "bytes32",
                                                          "value": "clientId"
                                                        },
                                                        "id": 2102,
                                                        "name": "Identifier",
                                                        "src": "5786:8:5"
                                                      }
                                                    ],
                                                    "id": 2103,
                                                    "name": "IndexAccess",
                                                    "src": "5777:18:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1962,
                                                      "type": "address",
                                                      "value": "populousTokenContract"
                                                    },
                                                    "id": 2104,
                                                    "name": "Identifier",
                                                    "src": "5796:21:5"
                                                  }
                                                ],
                                                "id": 2105,
                                                "name": "IndexAccess",
                                                "src": "5777:41:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1964,
                                                  "type": "bytes32",
                                                  "value": "receiveCurrency"
                                                },
                                                "id": 2106,
                                                "name": "Identifier",
                                                "src": "5819:15:5"
                                              }
                                            ],
                                            "id": 2107,
                                            "name": "IndexAccess",
                                            "src": "5777:58:5"
                                          }
                                        ],
                                        "id": 2108,
                                        "name": "MemberAccess",
                                        "src": "5777:67:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "received",
                                          "referencedDeclaration": 1765,
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
                                                  "referencedDeclaration": 1773,
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
                                                                  "referencedDeclaration": 1790,
                                                                  "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                                  "value": "deposits"
                                                                },
                                                                "id": 2109,
                                                                "name": "Identifier",
                                                                "src": "5862:8:5"
                                                              },
                                                              {
                                                                "attributes": {
                                                                  "argumentTypes": null,
                                                                  "overloadedDeclarations": [
                                                                    null
                                                                  ],
                                                                  "referencedDeclaration": 1960,
                                                                  "type": "bytes32",
                                                                  "value": "clientId"
                                                                },
                                                                "id": 2110,
                                                                "name": "Identifier",
                                                                "src": "5871:8:5"
                                                              }
                                                            ],
                                                            "id": 2111,
                                                            "name": "IndexAccess",
                                                            "src": "5862:18:5"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 1962,
                                                              "type": "address",
                                                              "value": "populousTokenContract"
                                                            },
                                                            "id": 2112,
                                                            "name": "Identifier",
                                                            "src": "5881:21:5"
                                                          }
                                                        ],
                                                        "id": 2113,
                                                        "name": "IndexAccess",
                                                        "src": "5862:41:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1964,
                                                          "type": "bytes32",
                                                          "value": "receiveCurrency"
                                                        },
                                                        "id": 2114,
                                                        "name": "Identifier",
                                                        "src": "5904:15:5"
                                                      }
                                                    ],
                                                    "id": 2115,
                                                    "name": "IndexAccess",
                                                    "src": "5862:58:5"
                                                  }
                                                ],
                                                "id": 2116,
                                                "name": "MemberAccess",
                                                "src": "5862:63:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1968,
                                                  "type": "uint256",
                                                  "value": "depositIndex"
                                                },
                                                "id": 2117,
                                                "name": "Identifier",
                                                "src": "5926:12:5"
                                              }
                                            ],
                                            "id": 2118,
                                            "name": "IndexAccess",
                                            "src": "5862:77:5"
                                          }
                                        ],
                                        "id": 2119,
                                        "name": "MemberAccess",
                                        "src": "5862:86:5"
                                      }
                                    ],
                                    "id": 2120,
                                    "name": "FunctionCall",
                                    "src": "5743:219:5"
                                  }
                                ],
                                "id": 2121,
                                "name": "Assignment",
                                "src": "5673:289:5"
                              }
                            ],
                            "id": 2122,
                            "name": "ExpressionStatement",
                            "src": "5673:289:5"
                          },
                          {
                            "attributes": {
                              "functionReturnParameters": 1978
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
                                    "id": 2123,
                                    "name": "Literal",
                                    "src": "6001:4:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "deposited",
                                      "referencedDeclaration": 1763,
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
                                              "referencedDeclaration": 1773,
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
                                                              "referencedDeclaration": 1790,
                                                              "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                              "value": "deposits"
                                                            },
                                                            "id": 2124,
                                                            "name": "Identifier",
                                                            "src": "6023:8:5"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 1960,
                                                              "type": "bytes32",
                                                              "value": "clientId"
                                                            },
                                                            "id": 2125,
                                                            "name": "Identifier",
                                                            "src": "6032:8:5"
                                                          }
                                                        ],
                                                        "id": 2126,
                                                        "name": "IndexAccess",
                                                        "src": "6023:18:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1962,
                                                          "type": "address",
                                                          "value": "populousTokenContract"
                                                        },
                                                        "id": 2127,
                                                        "name": "Identifier",
                                                        "src": "6042:21:5"
                                                      }
                                                    ],
                                                    "id": 2128,
                                                    "name": "IndexAccess",
                                                    "src": "6023:41:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1964,
                                                      "type": "bytes32",
                                                      "value": "receiveCurrency"
                                                    },
                                                    "id": 2129,
                                                    "name": "Identifier",
                                                    "src": "6065:15:5"
                                                  }
                                                ],
                                                "id": 2130,
                                                "name": "IndexAccess",
                                                "src": "6023:58:5"
                                              }
                                            ],
                                            "id": 2131,
                                            "name": "MemberAccess",
                                            "src": "6023:63:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1968,
                                              "type": "uint256",
                                              "value": "depositIndex"
                                            },
                                            "id": 2132,
                                            "name": "Identifier",
                                            "src": "6087:12:5"
                                          }
                                        ],
                                        "id": 2133,
                                        "name": "IndexAccess",
                                        "src": "6023:77:5"
                                      }
                                    ],
                                    "id": 2134,
                                    "name": "MemberAccess",
                                    "src": "6023:87:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "received",
                                      "referencedDeclaration": 1765,
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
                                              "referencedDeclaration": 1773,
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
                                                              "referencedDeclaration": 1790,
                                                              "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                              "value": "deposits"
                                                            },
                                                            "id": 2135,
                                                            "name": "Identifier",
                                                            "src": "6128:8:5"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 1960,
                                                              "type": "bytes32",
                                                              "value": "clientId"
                                                            },
                                                            "id": 2136,
                                                            "name": "Identifier",
                                                            "src": "6137:8:5"
                                                          }
                                                        ],
                                                        "id": 2137,
                                                        "name": "IndexAccess",
                                                        "src": "6128:18:5"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 1962,
                                                          "type": "address",
                                                          "value": "populousTokenContract"
                                                        },
                                                        "id": 2138,
                                                        "name": "Identifier",
                                                        "src": "6147:21:5"
                                                      }
                                                    ],
                                                    "id": 2139,
                                                    "name": "IndexAccess",
                                                    "src": "6128:41:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1964,
                                                      "type": "bytes32",
                                                      "value": "receiveCurrency"
                                                    },
                                                    "id": 2140,
                                                    "name": "Identifier",
                                                    "src": "6170:15:5"
                                                  }
                                                ],
                                                "id": 2141,
                                                "name": "IndexAccess",
                                                "src": "6128:58:5"
                                              }
                                            ],
                                            "id": 2142,
                                            "name": "MemberAccess",
                                            "src": "6128:63:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1968,
                                              "type": "uint256",
                                              "value": "depositIndex"
                                            },
                                            "id": 2143,
                                            "name": "Identifier",
                                            "src": "6192:12:5"
                                          }
                                        ],
                                        "id": 2144,
                                        "name": "IndexAccess",
                                        "src": "6128:77:5"
                                      }
                                    ],
                                    "id": 2145,
                                    "name": "MemberAccess",
                                    "src": "6128:86:5"
                                  }
                                ],
                                "id": 2146,
                                "name": "TupleExpression",
                                "src": "5983:245:5"
                              }
                            ],
                            "id": 2147,
                            "name": "Return",
                            "src": "5976:252:5"
                          }
                        ],
                        "id": 2148,
                        "name": "Block",
                        "src": "5214:1025:5"
                      }
                    ],
                    "id": 2149,
                    "name": "IfStatement",
                    "src": "4735:1504:5"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1978
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
                            "id": 2150,
                            "name": "Literal",
                            "src": "6256:5:5"
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
                            "id": 2151,
                            "name": "Literal",
                            "src": "6263:1:5"
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
                            "id": 2152,
                            "name": "Literal",
                            "src": "6266:1:5"
                          }
                        ],
                        "id": 2153,
                        "name": "TupleExpression",
                        "src": "6255:13:5"
                      }
                    ],
                    "id": 2154,
                    "name": "Return",
                    "src": "6248:20:5"
                  }
                ],
                "id": 2155,
                "name": "Block",
                "src": "4645:1630:5"
              }
            ],
            "id": 2156,
            "name": "FunctionDefinition",
            "src": "4435:1840:5"
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
              "scope": 2265,
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
                      "scope": 2168,
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
                        "id": 2157,
                        "name": "ElementaryTypeName",
                        "src": "6495:7:5"
                      }
                    ],
                    "id": 2158,
                    "name": "VariableDeclaration",
                    "src": "6495:16:5"
                  }
                ],
                "id": 2159,
                "name": "ParameterList",
                "src": "6494:18:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2168,
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
                        "id": 2160,
                        "name": "ElementaryTypeName",
                        "src": "6534:7:5"
                      }
                    ],
                    "id": 2161,
                    "name": "VariableDeclaration",
                    "src": "6534:7:5"
                  }
                ],
                "id": 2162,
                "name": "ParameterList",
                "src": "6533:9:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2162
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
                              "referencedDeclaration": 1782,
                              "type": "mapping(bytes32 => address)",
                              "value": "depositAddress"
                            },
                            "id": 2163,
                            "name": "Identifier",
                            "src": "6560:14:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2158,
                              "type": "bytes32",
                              "value": "clientId"
                            },
                            "id": 2164,
                            "name": "Identifier",
                            "src": "6575:8:5"
                          }
                        ],
                        "id": 2165,
                        "name": "IndexAccess",
                        "src": "6560:24:5"
                      }
                    ],
                    "id": 2166,
                    "name": "Return",
                    "src": "6553:31:5"
                  }
                ],
                "id": 2167,
                "name": "Block",
                "src": "6543:48:5"
              }
            ],
            "id": 2168,
            "name": "FunctionDefinition",
            "src": "6468:123:5"
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
              "scope": 2265,
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
                      "scope": 2211,
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
                        "id": 2169,
                        "name": "ElementaryTypeName",
                        "src": "7050:7:5"
                      }
                    ],
                    "id": 2170,
                    "name": "VariableDeclaration",
                    "src": "7050:16:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "populousTokenContract",
                      "scope": 2211,
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
                        "id": 2171,
                        "name": "ElementaryTypeName",
                        "src": "7068:7:5"
                      }
                    ],
                    "id": 2172,
                    "name": "VariableDeclaration",
                    "src": "7068:29:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "receiveCurrency",
                      "scope": 2211,
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
                        "id": 2173,
                        "name": "ElementaryTypeName",
                        "src": "7099:7:5"
                      }
                    ],
                    "id": 2174,
                    "name": "VariableDeclaration",
                    "src": "7099:23:5"
                  }
                ],
                "id": 2175,
                "name": "ParameterList",
                "src": "7049:74:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2211,
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
                        "id": 2176,
                        "name": "ElementaryTypeName",
                        "src": "7163:4:5"
                      }
                    ],
                    "id": 2177,
                    "name": "VariableDeclaration",
                    "src": "7163:4:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2211,
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
                        "id": 2178,
                        "name": "ElementaryTypeName",
                        "src": "7169:4:5"
                      }
                    ],
                    "id": 2179,
                    "name": "VariableDeclaration",
                    "src": "7169:4:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2211,
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
                        "id": 2180,
                        "name": "ElementaryTypeName",
                        "src": "7175:4:5"
                      }
                    ],
                    "id": 2181,
                    "name": "VariableDeclaration",
                    "src": "7175:4:5"
                  }
                ],
                "id": 2182,
                "name": "ParameterList",
                "src": "7162:18:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2182
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
                                  "referencedDeclaration": 1773,
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
                                                  "referencedDeclaration": 1790,
                                                  "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                  "value": "deposits"
                                                },
                                                "id": 2183,
                                                "name": "Identifier",
                                                "src": "7212:8:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 2170,
                                                  "type": "bytes32",
                                                  "value": "clientId"
                                                },
                                                "id": 2184,
                                                "name": "Identifier",
                                                "src": "7221:8:5"
                                              }
                                            ],
                                            "id": 2185,
                                            "name": "IndexAccess",
                                            "src": "7212:18:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2172,
                                              "type": "address",
                                              "value": "populousTokenContract"
                                            },
                                            "id": 2186,
                                            "name": "Identifier",
                                            "src": "7231:21:5"
                                          }
                                        ],
                                        "id": 2187,
                                        "name": "IndexAccess",
                                        "src": "7212:41:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2174,
                                          "type": "bytes32",
                                          "value": "receiveCurrency"
                                        },
                                        "id": 2188,
                                        "name": "Identifier",
                                        "src": "7254:15:5"
                                      }
                                    ],
                                    "id": 2189,
                                    "name": "IndexAccess",
                                    "src": "7212:58:5"
                                  }
                                ],
                                "id": 2190,
                                "name": "MemberAccess",
                                "src": "7212:63:5"
                              }
                            ],
                            "id": 2191,
                            "name": "MemberAccess",
                            "src": "7212:70:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "deposited",
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
                                              "referencedDeclaration": 1790,
                                              "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                              "value": "deposits"
                                            },
                                            "id": 2192,
                                            "name": "Identifier",
                                            "src": "7296:8:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2170,
                                              "type": "bytes32",
                                              "value": "clientId"
                                            },
                                            "id": 2193,
                                            "name": "Identifier",
                                            "src": "7305:8:5"
                                          }
                                        ],
                                        "id": 2194,
                                        "name": "IndexAccess",
                                        "src": "7296:18:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2172,
                                          "type": "address",
                                          "value": "populousTokenContract"
                                        },
                                        "id": 2195,
                                        "name": "Identifier",
                                        "src": "7315:21:5"
                                      }
                                    ],
                                    "id": 2196,
                                    "name": "IndexAccess",
                                    "src": "7296:41:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2174,
                                      "type": "bytes32",
                                      "value": "receiveCurrency"
                                    },
                                    "id": 2197,
                                    "name": "Identifier",
                                    "src": "7338:15:5"
                                  }
                                ],
                                "id": 2198,
                                "name": "IndexAccess",
                                "src": "7296:58:5"
                              }
                            ],
                            "id": 2199,
                            "name": "MemberAccess",
                            "src": "7296:68:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "received",
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
                                              "referencedDeclaration": 1790,
                                              "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                              "value": "deposits"
                                            },
                                            "id": 2200,
                                            "name": "Identifier",
                                            "src": "7378:8:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2170,
                                              "type": "bytes32",
                                              "value": "clientId"
                                            },
                                            "id": 2201,
                                            "name": "Identifier",
                                            "src": "7387:8:5"
                                          }
                                        ],
                                        "id": 2202,
                                        "name": "IndexAccess",
                                        "src": "7378:18:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2172,
                                          "type": "address",
                                          "value": "populousTokenContract"
                                        },
                                        "id": 2203,
                                        "name": "Identifier",
                                        "src": "7397:21:5"
                                      }
                                    ],
                                    "id": 2204,
                                    "name": "IndexAccess",
                                    "src": "7378:41:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2174,
                                      "type": "bytes32",
                                      "value": "receiveCurrency"
                                    },
                                    "id": 2205,
                                    "name": "Identifier",
                                    "src": "7420:15:5"
                                  }
                                ],
                                "id": 2206,
                                "name": "IndexAccess",
                                "src": "7378:58:5"
                              }
                            ],
                            "id": 2207,
                            "name": "MemberAccess",
                            "src": "7378:67:5"
                          }
                        ],
                        "id": 2208,
                        "name": "TupleExpression",
                        "src": "7198:257:5"
                      }
                    ],
                    "id": 2209,
                    "name": "Return",
                    "src": "7191:264:5"
                  }
                ],
                "id": 2210,
                "name": "Block",
                "src": "7181:281:5"
              }
            ],
            "id": 2211,
            "name": "FunctionDefinition",
            "src": "7020:442:5"
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
              "scope": 2265,
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
                      "scope": 2264,
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
                        "id": 2212,
                        "name": "ElementaryTypeName",
                        "src": "7928:7:5"
                      }
                    ],
                    "id": 2213,
                    "name": "VariableDeclaration",
                    "src": "7928:16:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "populousTokenContract",
                      "scope": 2264,
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
                        "id": 2214,
                        "name": "ElementaryTypeName",
                        "src": "7946:7:5"
                      }
                    ],
                    "id": 2215,
                    "name": "VariableDeclaration",
                    "src": "7946:29:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "receiveCurrency",
                      "scope": 2264,
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
                        "id": 2216,
                        "name": "ElementaryTypeName",
                        "src": "7977:7:5"
                      }
                    ],
                    "id": 2217,
                    "name": "VariableDeclaration",
                    "src": "7977:23:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "depositIndex",
                      "scope": 2264,
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
                        "id": 2218,
                        "name": "ElementaryTypeName",
                        "src": "8002:4:5"
                      }
                    ],
                    "id": 2219,
                    "name": "VariableDeclaration",
                    "src": "8002:17:5"
                  }
                ],
                "id": 2220,
                "name": "ParameterList",
                "src": "7927:93:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2264,
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
                        "id": 2221,
                        "name": "ElementaryTypeName",
                        "src": "8060:4:5"
                      }
                    ],
                    "id": 2222,
                    "name": "VariableDeclaration",
                    "src": "8060:4:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2264,
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
                        "id": 2223,
                        "name": "ElementaryTypeName",
                        "src": "8066:4:5"
                      }
                    ],
                    "id": 2224,
                    "name": "VariableDeclaration",
                    "src": "8066:4:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2264,
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
                        "id": 2225,
                        "name": "ElementaryTypeName",
                        "src": "8072:4:5"
                      }
                    ],
                    "id": 2226,
                    "name": "VariableDeclaration",
                    "src": "8072:4:5"
                  }
                ],
                "id": 2227,
                "name": "ParameterList",
                "src": "8059:18:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2227
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
                              "referencedDeclaration": 1763,
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
                                      "referencedDeclaration": 1773,
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
                                                      "referencedDeclaration": 1790,
                                                      "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                      "value": "deposits"
                                                    },
                                                    "id": 2228,
                                                    "name": "Identifier",
                                                    "src": "8109:8:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 2213,
                                                      "type": "bytes32",
                                                      "value": "clientId"
                                                    },
                                                    "id": 2229,
                                                    "name": "Identifier",
                                                    "src": "8118:8:5"
                                                  }
                                                ],
                                                "id": 2230,
                                                "name": "IndexAccess",
                                                "src": "8109:18:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 2215,
                                                  "type": "address",
                                                  "value": "populousTokenContract"
                                                },
                                                "id": 2231,
                                                "name": "Identifier",
                                                "src": "8128:21:5"
                                              }
                                            ],
                                            "id": 2232,
                                            "name": "IndexAccess",
                                            "src": "8109:41:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2217,
                                              "type": "bytes32",
                                              "value": "receiveCurrency"
                                            },
                                            "id": 2233,
                                            "name": "Identifier",
                                            "src": "8151:15:5"
                                          }
                                        ],
                                        "id": 2234,
                                        "name": "IndexAccess",
                                        "src": "8109:58:5"
                                      }
                                    ],
                                    "id": 2235,
                                    "name": "MemberAccess",
                                    "src": "8109:63:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2219,
                                      "type": "uint256",
                                      "value": "depositIndex"
                                    },
                                    "id": 2236,
                                    "name": "Identifier",
                                    "src": "8173:12:5"
                                  }
                                ],
                                "id": 2237,
                                "name": "IndexAccess",
                                "src": "8109:77:5"
                              }
                            ],
                            "id": 2238,
                            "name": "MemberAccess",
                            "src": "8109:87:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "received",
                              "referencedDeclaration": 1765,
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
                                      "referencedDeclaration": 1773,
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
                                                      "referencedDeclaration": 1790,
                                                      "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                      "value": "deposits"
                                                    },
                                                    "id": 2239,
                                                    "name": "Identifier",
                                                    "src": "8210:8:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 2213,
                                                      "type": "bytes32",
                                                      "value": "clientId"
                                                    },
                                                    "id": 2240,
                                                    "name": "Identifier",
                                                    "src": "8219:8:5"
                                                  }
                                                ],
                                                "id": 2241,
                                                "name": "IndexAccess",
                                                "src": "8210:18:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 2215,
                                                  "type": "address",
                                                  "value": "populousTokenContract"
                                                },
                                                "id": 2242,
                                                "name": "Identifier",
                                                "src": "8229:21:5"
                                              }
                                            ],
                                            "id": 2243,
                                            "name": "IndexAccess",
                                            "src": "8210:41:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2217,
                                              "type": "bytes32",
                                              "value": "receiveCurrency"
                                            },
                                            "id": 2244,
                                            "name": "Identifier",
                                            "src": "8252:15:5"
                                          }
                                        ],
                                        "id": 2245,
                                        "name": "IndexAccess",
                                        "src": "8210:58:5"
                                      }
                                    ],
                                    "id": 2246,
                                    "name": "MemberAccess",
                                    "src": "8210:63:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2219,
                                      "type": "uint256",
                                      "value": "depositIndex"
                                    },
                                    "id": 2247,
                                    "name": "Identifier",
                                    "src": "8274:12:5"
                                  }
                                ],
                                "id": 2248,
                                "name": "IndexAccess",
                                "src": "8210:77:5"
                              }
                            ],
                            "id": 2249,
                            "name": "MemberAccess",
                            "src": "8210:86:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "isReleased",
                              "referencedDeclaration": 1769,
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
                                      "referencedDeclaration": 1773,
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
                                                      "referencedDeclaration": 1790,
                                                      "type": "mapping(bytes32 => mapping(address => mapping(bytes32 => struct DepositContractsManager.DepositList storage ref)))",
                                                      "value": "deposits"
                                                    },
                                                    "id": 2250,
                                                    "name": "Identifier",
                                                    "src": "8310:8:5"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 2213,
                                                      "type": "bytes32",
                                                      "value": "clientId"
                                                    },
                                                    "id": 2251,
                                                    "name": "Identifier",
                                                    "src": "8319:8:5"
                                                  }
                                                ],
                                                "id": 2252,
                                                "name": "IndexAccess",
                                                "src": "8310:18:5"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 2215,
                                                  "type": "address",
                                                  "value": "populousTokenContract"
                                                },
                                                "id": 2253,
                                                "name": "Identifier",
                                                "src": "8329:21:5"
                                              }
                                            ],
                                            "id": 2254,
                                            "name": "IndexAccess",
                                            "src": "8310:41:5"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2217,
                                              "type": "bytes32",
                                              "value": "receiveCurrency"
                                            },
                                            "id": 2255,
                                            "name": "Identifier",
                                            "src": "8352:15:5"
                                          }
                                        ],
                                        "id": 2256,
                                        "name": "IndexAccess",
                                        "src": "8310:58:5"
                                      }
                                    ],
                                    "id": 2257,
                                    "name": "MemberAccess",
                                    "src": "8310:63:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2219,
                                      "type": "uint256",
                                      "value": "depositIndex"
                                    },
                                    "id": 2258,
                                    "name": "Identifier",
                                    "src": "8374:12:5"
                                  }
                                ],
                                "id": 2259,
                                "name": "IndexAccess",
                                "src": "8310:77:5"
                              }
                            ],
                            "id": 2260,
                            "name": "MemberAccess",
                            "src": "8310:88:5"
                          }
                        ],
                        "id": 2261,
                        "name": "TupleExpression",
                        "src": "8095:313:5"
                      }
                    ],
                    "id": 2262,
                    "name": "Return",
                    "src": "8088:320:5"
                  }
                ],
                "id": 2263,
                "name": "Block",
                "src": "8078:337:5"
              }
            ],
            "id": 2264,
            "name": "FunctionDefinition",
            "src": "7902:513:5"
          }
        ],
        "id": 2265,
        "name": "ContractDefinition",
        "src": "164:8255:5"
      }
    ],
    "id": 2266,
    "name": "SourceUnit",
    "src": "0:8419:5"
  },
  "networks": {
    "3": {
      "events": {},
      "links": {},
      "address": "0x2b91fb4af659a53d27686b0e64e9c09c691da4d4"
    }
  },
  "schemaVersion": "1.0.0",
  "updatedAt": "2018-01-24T16:07:29.328Z"
}