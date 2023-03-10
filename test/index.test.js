import stringReplaceKeys from '../index';

describe('stringReplaceKeys function', () => {
  test('Replace string by object keys', () => {
    const str = 'api/store/[storeId]/user/[userName]'
    const parameters = {
      storeId: 25,
      userName: 'william'
    }
    expect(stringReplaceKeys(str, parameters)).toEqual('api/store/25/user/william')
  });

  test('Replace string without strings match', () => {
    const str = 'test without [strings] match'
    const parameters = {
      otherString: 'test'
    }
    expect(stringReplaceKeys(str, parameters)).toEqual('test without [strings] match')
  })
});
