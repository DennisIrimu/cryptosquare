describe('crytosquare', function() {

    it("Returns an encrypted message given a four-letter phrase.", function() {
        expect(cryptosquare('frog')).to.equal('forg');
    });

    it("Returns an encrypted message given a phase the length of a perfect square.", function()   {
        expect(cryptosquare('the quick brown fox')).to.equal('tubnh irfec ooqkw x')
    });

    it("Returns an encrypted message given a phase of any length.", function() {
        expect(cryptosquare('the based god')).to.equal('taghs oeedb d')
    });

});
