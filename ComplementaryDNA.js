function dnaStrand(dna) {
  let new_dna = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      new_dna += "T";
    } else if (dna[i] === "T") {
      new_dna += "A";
    } else if (dna[i] === "C") {
      new_dna += "G";
    } else if (dna[i] === "G") {
      new_dna +="C";
    }
  }
  return new_dna;
}

console.log(dnaStrand("AAAA"));
console.log(dnaStrand("ATTGC"));
console.log(dnaStrand("GTAT"));


// Imporved no loops uses map 
/**
* Returns the complementary DNA strand
* DNA pairs: A↔T, C↔G
* @param {string} dna - DNA sequence containing only A, T, C, G
* @returns {string} Complementary DNA strand
* @example
* dnaStrand("ATTGC") // returns "TAACG"

function dnaStrand(dna) {
 // Input validation
 if (!dna || typeof dna !== 'string') {
   return '';
 }

 // DNA base pair complement mapping
 const COMPLEMENT_MAP = {
   A: 'T',
   T: 'A',
   C: 'G',
   G: 'C'
 };

 // Transform each nucleotide to its complement
 return dna
   .split('')
   .map(nucleotide => COMPLEMENT_MAP[nucleotide])
   .join('');
}

// Test cases
console.log(dnaStrand("AAAA"));   // Expected: "TTTT"
console.log(dnaStrand("ATTGC"));  // Expected: "TAACG"
console.log(dnaStrand("GTAT"));   // Expected: "CATA"
 */