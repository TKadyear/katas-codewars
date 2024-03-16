import { test, describe } from "node:test";
import  assert  from "node:assert";
import { protein } from "./rna-protein.js";

describe('Amino Acid Unique ', () => {
  test('Phenylalanine', () => {
    assert.equal(protein('UUC'), 'F');
    assert.equal(protein('UUU'), 'F');
  });
  test('Leucine', () => {
    assert.equal(protein('UUA'), 'L');
    assert.equal(protein('UUG'), 'L');
    assert.equal(protein('CUU'), 'L');
    assert.equal(protein('CUC'), 'L');
    assert.equal(protein('CUA'), 'L');
    assert.equal(protein('CUG'), 'L');
  });
  test('Isoleucine', () => {
    assert.equal(protein('AUU'), 'I');
    assert.equal(protein('AUC'), 'I');
    assert.equal(protein('AUA'), 'I');
  });
  test('Methionine', () => {
    assert.equal(protein('AUG'), 'M');
  });
  test('Valine', () => {
    assert.equal(protein('GUU'), 'V');
    assert.equal(protein('GUC'), 'V');
    assert.equal(protein('GUA'), 'V');
    assert.equal(protein('GUG'), 'V');
  });
  test('Serine', () => {
    assert.equal(protein('UCU'), 'S');
    assert.equal(protein('UCC'), 'S');
    assert.equal(protein('UCA'), 'S');
    assert.equal(protein('UCG'), 'S');
    assert.equal(protein('AGU'), 'S');
    assert.equal(protein('AGC'), 'S');
  });
  test('Proline', () => {
    assert.equal(protein('CCU'), 'P');
    assert.equal(protein('CCC'), 'P');
    assert.equal(protein('CCA'), 'P');
    assert.equal(protein('CCG'), 'P');
  });
  test('Threonine', () => {
    assert.equal(protein('ACU'), 'T');
    assert.equal(protein('ACC'), 'T');
    assert.equal(protein('ACA'), 'T');
    assert.equal(protein('ACG'), 'T');
  });
  test('Alanine', () => {
    assert.equal(protein('GCU'), 'A');
    assert.equal(protein('GCC'), 'A');
    assert.equal(protein('GCA'), 'A');
    assert.equal(protein('GCG'), 'A');
  });
  test('Tyrosine', () => {
    assert.equal(protein('UAU'), 'Y');
    assert.equal(protein('UAC'), 'Y');
  });
  test('Histidine', () => {
    assert.equal(protein('CAU'), 'H');
    assert.equal(protein('CAC'), 'H');
  });
  test('Glutamine', () => {
    assert.equal(protein('CAA'), 'Q');
    assert.equal(protein('CAG'), 'Q');
  });
  test('Asparagine', () => {
    assert.equal(protein('AAU'), 'N');
    assert.equal(protein('AAC'), 'N');
  });
  test('Lysine', () => {
    assert.equal(protein('AAA'), 'K');
    assert.equal(protein('AAG'), 'K');
  });
  test('Aspartic Acid', () => {
    assert.equal(protein('GAU'), 'D');
    assert.equal(protein('GAC'), 'D');
  });
  test('Glutamic Acid', () => {
    assert.equal(protein('GAA'), 'E');
    assert.equal(protein('GAG'), 'E');
  });
  test('Cystine', () => {
    assert.equal(protein('UGU'), 'C');
    assert.equal(protein('UGC'), 'C');
  });
  test('Tryptophan', () => {
    assert.equal(protein('UGG'), 'W');
  });
  test('Arginine', () => {
    assert.equal(protein('CGU'), 'R');
    assert.equal(protein('CGC'), 'R');
    assert.equal(protein('CGA'), 'R');
    assert.equal(protein('AGG'), 'R');
    assert.equal(protein('AGA'), 'R');
    assert.equal(protein('AGG'), 'R');
  });
  test('Glycine', () => {
    assert.equal(protein('GGU'), 'G');
    assert.equal(protein('GGC'), 'G');
    assert.equal(protein('GGA'), 'G');
    assert.equal(protein('GGG'), 'G');
  });
  test('Stop codon', () => {
    assert.equal(protein('UAA'), '');
    assert.equal(protein('UGA'), '');
    assert.equal(protein('UAG'), '');
  });
});

describe('Combination ', () => {
  test('Case 1', () => {
    assert.equal(protein('UGCGAUGAAUGGGCUCGCUCC'), 'CDEWARS');
  });
  test('Case 2', () => {
    assert.equal(protein('UUCAUUAAUGAG'), 'FINE');
  });
  test('Case 3', () => {
    assert.equal(protein('ACCGAAAGCACG'), 'TEST');
  });
});
