const { UserRepository } = require("../../../src/repositories");
const mockingoose = require("mockingoose").default;
const { user } = require("../../../src/models");
let {
  UserModelMock: { usere, users }
} = require("../../mocks");

describe("user Repository", () => {
  beforeEach(() => {
    mockingoose.resetAll();
    jest.clearAllMocks();
  });
  
  //estos son los tests:
  it("Should find a user by id", async () => {
    const _user = { ...usere };
    delete _user.password;
    mockingoose(user).toReturn(usere, "findOne");

    const _userRepository = new UserRepository({ user });
    const expected = await _userRepository.get(_user._id);

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
  });

  it("Should find a user by username", async () => {
    const _user = { ...usere };
    delete _user.password;
    mockingoose(user).toReturn(usere, "findOne");

    const _userRepository = new UserRepository({ user });
    const expected = await _userRepository.getUserByUserName(_user.username);

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
  });

  it("Should return a usere collection", async () => {
    users = users.map(usere => {
      delete usere.password;
      return usere;
    });

    mockingoose(user).toReturn(users, "find");

    const _userRepository = new UserRepository({ user });
    const expected = await _userRepository.getAll();
    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(users);
  });

  it("Should update an especific usere by id", async () => {
    const _user = { ...usere };
    delete _user.password;
    mockingoose(user).toReturn(_user, "findOneAndUpdate");
    const _userRepository = new UserRepository({ user });
    const expected = await _userRepository.update(usere._id, {
      name: "Marluan"
    });

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(_user);
  });

  it("Should delete an especific usere by id", async () => {
    mockingoose(user).toReturn(usere, "findOneAndDelete");
    const _userRepository = new UserRepository({ user });
    const expected = await _userRepository.delete(usere._id);
    expect(JSON.parse(JSON.stringify(expected))).toEqual(true);
  });
});
