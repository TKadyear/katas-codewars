export function protein(rna) {
  const AminoAcidDictionary = {
    'F': ['UUC', 'UUU'],// Phenylalanine
    'L': ['UUA', 'UUG', 'CUU', 'CUC', 'CUA', 'CUG'], // Leucine
    'I': ['AUU', 'AUC', 'AUA'],// Isoleucine
    'M': ['AUG'],// Methionine
    'V': ['GUU', 'GUC', 'GUA', 'GUG'],// Valine
    'S': ['UCU', 'UCC', 'UCA', 'UCG', 'AGU', 'AGC'],// Serine
    'P': ['CCU', 'CCC', 'CCA', 'CCG'],  // Proline
    'T': ['ACU', 'ACC', 'ACA', 'ACG'],  // Threonine
    'A': ['GCU', 'GCC', 'GCA', 'GCG'],// Alanine
    'Y': ['UAU', 'UAC'], // Tyrosine
    'H': ['CAU', 'CAC'],  // Histidine
    'Q': ['CAA', 'CAG'],  // Glutamine
    'N': ['AAU', 'AAC'],  // Asparagine
    'K': ['AAA', 'AAG'],  // Lysine
    'D': ['GAU', 'GAC'],  // Aspartic Acid
    'E': ['GAA', 'GAG'], // Glutamic Acid
    'C': ['UGU', 'UGC'],  // Cystine
    'W': ['UGG'], // Tryptophan
    'R': ['CGU', 'CGC', 'CGA', 'CGG', 'AGA', 'AGG'],  // Arginine
    'G': ['GGU', 'GGC', 'GGA', 'GGG'], // Glycine
    'Stop': ['UAA', 'UGA', 'UAG']// Stop codon
  }
  let chainProtein = rna.match(/.{1,3}/g).map(element => {
    for (const [key, value] of Object.entries(AminoAcidDictionary)) {
      if (value.includes(element)) {
        return (key === 'Stop') ? '' : key;
      }
    }
  });
  return chainProtein.join("");
}
