import {assert} from 'chai';
import PopulousEthComm from '../../index';
import createdCurrencies, {createCurrencyTest} from '../../testsCommon/create-currency-test';


describe('Populous / currency functions > ', function () {
  const ethComm = new PopulousEthComm();

  it('should init currency token Euros EUR', function (done) {
    this.timeout(15 * 60 * 1000); // 15 min

    const params = {
      tokenName: 'EUR Pokens',
      decimalUnits: 3,
      tokenSymbol: 'EUR',
    };

    if (!createdCurrencies[params.tokenSymbol]) {
      createCurrencyTest(ethComm, params)
        .then((currencyAddress) => {
          assert.isString(currencyAddress);
          assert.lengthOf(currencyAddress, 42);

          console.log('currency EUR address', currencyAddress);
          done();
        })
        .catch(done)
    } else {
      done();
    }
  });

  it('should return a exist currency address', function (done) {
    assert(createdCurrencies.EUR, 'Currency required.');

    this.timeout(15 * 60 * 1000); // 15 min

    ethComm.api.populous.getCurrency('EUR')
      .then(currencyAddress => {

        assert.isString(currencyAddress);
        assert.lengthOf(currencyAddress, 42);
        console.log('Exist currency address', currencyAddress);

        done();
      })
      .catch(done);
  });

  it('should return an existing currency symbol', function (done) {
    assert(createdCurrencies.EUR, 'Currency required.');

    this.timeout(15 * 60 * 1000); // 15 min

    ethComm.api.populous.getCurrencySymbol(createdCurrencies.EUR)
      .then(currencySymbol => {
        assert.isString(currencySymbol);
        assert.equal(currencySymbol, 'EUR');
        console.log('Existing currency symbol', currencySymbol);
        done();
      })
      .catch(done);
  });

});