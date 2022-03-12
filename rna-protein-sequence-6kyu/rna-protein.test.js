const protein = require('./rna-protein');

describe('Amino Acid Unique ', () => {
  test('Phenylalanine', () => {
    expect(protein('UUC')).toBe('F');
    expect(protein('UUU')).toBe('F');
  });
  test('Leucine', () => {
    expect(protein('UUA')).toBe('L');
    expect(protein('UUG')).toBe('L');
    expect(protein('CUU')).toBe('L');
    expect(protein('CUC')).toBe('L');
    expect(protein('CUA')).toBe('L');
    expect(protein('CUG')).toBe('L');
  });
  test('Isoleucine', () => {
    expect(protein('AUU')).toBe('I');
    expect(protein('AUC')).toBe('I');
    expect(protein('AUA')).toBe('I');
  });
  test('Methionine', () => {
    expect(protein('AUG')).toBe('M');
  });
  test('Valine', () => {
    expect(protein('GUU')).toBe('V');
    expect(protein('GUC')).toBe('V');
    expect(protein('GUA')).toBe('V');
    expect(protein('GUG')).toBe('V');
  });
  test('Serine', () => {
    expect(protein('UCU')).toBe('S');
    expect(protein('UCC')).toBe('S');
    expect(protein('UCA')).toBe('S');
    expect(protein('UCG')).toBe('S');
    expect(protein('AGU')).toBe('S');
    expect(protein('AGC')).toBe('S');
  });
  test('Proline', () => {
    expect(protein('CCU')).toBe('P');
    expect(protein('CCC')).toBe('P');
    expect(protein('CCA')).toBe('P');
    expect(protein('CCG')).toBe('P');
  });
  test('Threonine', () => {
    expect(protein('ACU')).toBe('T');
    expect(protein('ACC')).toBe('T');
    expect(protein('ACA')).toBe('T');
    expect(protein('ACG')).toBe('T');
  });
  test('Alanine', () => {
    expect(protein('GCU')).toBe('A');
    expect(protein('GCC')).toBe('A');
    expect(protein('GCA')).toBe('A');
    expect(protein('GCG')).toBe('A');
  });
  test('Tyrosine', () => {
    expect(protein('UAU')).toBe('Y');
    expect(protein('UAC')).toBe('Y');
  });
  test('Histidine', () => {
    expect(protein('CAU')).toBe('H');
    expect(protein('CAC')).toBe('H');
  });
  test('Glutamine', () => {
    expect(protein('CAA')).toBe('Q');
    expect(protein('CAG')).toBe('Q');
  });
  test('Asparagine', () => {
    expect(protein('AAU')).toBe('N');
    expect(protein('AAC')).toBe('N');
  });
  test('Lysine', () => {
    expect(protein('AAA')).toBe('K');
    expect(protein('AAG')).toBe('K');
  });
  test('Aspartic Acid', () => {
    expect(protein('GAU')).toBe('D');
    expect(protein('GAC')).toBe('D');
  });
  test('Glutamic Acid', () => {
    expect(protein('GAA')).toBe('E');
    expect(protein('GAG')).toBe('E');
  });
  test('Cystine', () => {
    expect(protein('UGU')).toBe('C');
    expect(protein('UGC')).toBe('C');
  });
  test('Tryptophan', () => {
    expect(protein('UGG')).toBe('W');
  });
  test('Arginine', () => {
    expect(protein('CGU')).toBe('R');
    expect(protein('CGC')).toBe('R');
    expect(protein('CGA')).toBe('R');
    expect(protein('AGG')).toBe('R');
    expect(protein('AGA')).toBe('R');
    expect(protein('AGG')).toBe('R');
  });
  test('Glycine', () => {
    expect(protein('GUU')).toBe('G');
    expect(protein('GGC')).toBe('G');
    expect(protein('GGA')).toBe('G');
    expect(protein('GGG')).toBe('G');
  });
  test('Stop codon', () => {
    expect(protein('UAA')).toBe('Stop');
    expect(protein('UGA')).toBe('Stop');
    expect(protein('UAG')).toBe('Stop');
  });
});

describe('Combination ', () => {
  test('Case 1', () => {
    expect(protein('UGCGAUGAAUGGGCUCGCUCC')).toBe('CDEWARS');
  });
  test('Case 2', () => {
    expect(protein('UUCAUUAAUGAG')).toBe('FINE');
  });
  test('Case 3', () => {
    expect(protein('ACCGAAAGCACG')).toBe('TEST');
  });
});
