describe('startVowel', function() {
  it('returns true if the first letter of a string is a vowel', function() {
    expect(startVowel("apple")).to.equal(true);
  });

  it('returns false if the first letter of a string is not a vowel', function() {
    expect(startVowel("dog")).to.equal(false);
  });
});

describe('addAy', function() {
  it('adds ay to the end of a word', function(){
    expect(addAy("Pig")).to.equal("Pigay");
  });
});

describe('moveCon', function() {

  it('for words that start with one or more consonants, it removes them and concats them to the end', function() {
    expect(moveCon("squid")).to.equal("idsquay")
  })

  it('for words that start with one or more consonants, it removes them and concats them to the end', function() {
    expect(moveCon("track")).to.equal("acktray")
  })

});
describe('pigLatin', function() {
  it('returns a sentence, translated into piglatin', function() {
    expect(pigLatin("dogs are great")).to.eq("ogsday areay eatgray")
  });

  it('returns a sentence, translated into piglatin', function() {
    expect(pigLatin("dogs are, great!")).to.eq("ogsday areay, eatgray!")
  });
});

describe('hasPunc', function() {
  it('returns true if a word ends with punctuation', function() {
    expect(hasPunc('test,')).to.eq(true)
  });
});
//cat atcay
//turn urntay
//ok koay
