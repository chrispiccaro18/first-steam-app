const test = QUnit.test;

QUnit.module('Reading and writing hash query');

function writeIDToHash(existingQuery, userID) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('id', userID);
    return searchParams.toString();
}

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