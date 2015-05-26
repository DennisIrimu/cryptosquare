describe('crytosquare', function() {

    it("returns 'forg' when given 'frog'", function() {
        expect(cryptosquare('frog')).to.equal('forg');
    });

    it("returns 'tubnh irfec ooqkw x' when given 'the quick brown fox'", function()   {
        expect(cryptosquare('the quick brown fox')).to.equal('tubnh irfec ooqkw x')
    });

    it("returns 'taghs oeedb d' when given 'the based god'", function() {
        expect(cryptosquare('the based god')).to.equal('taghs oeedb d')
    });

});
