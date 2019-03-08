import { writeIDToHash, readIDFromHash } from '../src/hash-query.js';

const test = QUnit.test;

QUnit.module('Reading and writing hash query');

test('create hash query for id', assert => {
    // arrange
    const existingQuery = '';
    const userID = '76561198087595919';
    const expected = 'id=76561198087595919';
    // act
    const result = writeIDToHash(existingQuery, userID);
    // assert
    assert.equal(result, expected);
});


test('read id from hash', assert => {
    // arrange
    const query = 'id=76561198087595919';
    const expected = '76561198087595919';
    // act
    const result = readIDFromHash(query);
    // assert
    assert.equal(result, expected);
});