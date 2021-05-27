import { getUsernameAndPasswordFromAuthBasic } from "../index";

describe('Get Username and Password From Headers', () => {
  it('should throw an error when headers input objet is empty', () => {
    const headers = {}
    const t = () => {
      getUsernameAndPasswordFromAuthBasic(headers)
    };
    expect(t).toThrowError('Invalid or Missing Authorization header');
  });
  it('should throw an error when headers input objet has not "authorization" or "Authorization" entries', () => {
    const headers = { "test": "value" }
    const t = () => {
      getUsernameAndPasswordFromAuthBasic(headers)
    };
    expect(t).toThrowError();
  });
  it('should throw an error when authorization header has not start with "Basic "', () => {
    const headers = { authorization: 'test value' }
    const t = () => {
      getUsernameAndPasswordFromAuthBasic(headers)
    };
    expect(t).toThrowError();
  });
  it('should throw an error when Authorization header has not start with "Basic "', () => {
    const headers = { Authorization: 'test value' }
    const t = () => {
      getUsernameAndPasswordFromAuthBasic(headers)
    };
    expect(t).toThrowError();
  });
  it('should return username and password when authorization header is properly set', () => {
    const headers = { authorization: 'Basic dXNlcjp0ZXN0' }
    expect(getUsernameAndPasswordFromAuthBasic(headers)).toEqual({username: "user", password: "test"})
  });
  it('should return username and password when Authorization header is properly set', () => {
    const headers = { Authorization: 'Basic dXNlcjp0ZXN0' }
    expect(getUsernameAndPasswordFromAuthBasic(headers)).toEqual({username: "user", password: "test"})
  });
  it('should return username and password when both authorization Authorization header is properly set', () => {
    const headers = { authorization: 'Basic dXNlcjp0ZXN0', Authorization: 'Basic dXNlcjp0ZXN0' }
    expect(getUsernameAndPasswordFromAuthBasic(headers)).toEqual({username: "user", password: "test"})
  });
});