// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(num, dnaBases) {
  return {
    specimenNum: num,
    dna: dnaBases,
    mutate() {
      let index = Math.random()*15
      let current = this.dna[index];
      let mutate;
      do {
        mutate = mockUpStrand
      } while (mutate !== current)
      this.dna[index] = mutate
    },
    compareDNA(otherpAequor) {
      let common = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === otherpAequor.dna[i]) {
          common++;
        }
      }
      let percentage = Math.floor((common/this.dna.length)*100)
      console.log(`Specimen #${this.specimenNum} and specimen #${otherpAequor.specimenNum} have ${percentage}% DNA in common.`)
    },
    willLikelySurvive() {
      let cOrGBases = 0;
      this.dna.forEach(base => {
        if (base === "C" || base === "G") {cOrGBases++}
      })
      let percentage = Math.floor((cOrGBases/this.dna.length)*100)
      if (percentage >= 60) {
        return true;
      } else {
        return false
      }
    }
  }
}

let batch = []
let specimen = 1;
while (specimen <= 30) {
  let sample = pAequorFactory(specimen, mockUpStrand())
  if (sample.willLikelySurvive()) {
    specimen++;
    batch.push(sample);
  }
}

console.log(batch)





