const TestToken = artifacts.require('TestToken');

contract('TestToken', function () {

  beforeEach(async function() {
    this.token = await TestToken.new();
  });

  it('should return the correct name', async function() {
    let name = await this.token.name();
    assert.equal(name, "Test Token");
  });

  it('should return the correct symbol', async function() {
    let symbol = await this.token.symbol();
    assert.equal(symbol, "TTN");
  });

  it('should return the correct decimals', async function() {
    let decimals = await this.token.decimals();
    assert.equal(decimals, 18);
  });

});
