const { UserService } = require("../../../src/services");
const { UserRepositoryMock } = require("../../mocks");
const {
  UserModelMock: { usere, users }
} = require("../../mocks");

describe("User Service", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should find a usere by id", async () => {
    const UserRepository = UserRepositoryMock;
    UserRepository.get.mockReturnValue(usere);

    const _userService = new UserService({ UserRepository });
    const expected = await _userService.get(usere._id);
    expect(expected).toMatchObject(usere);
  });

  it("Should find a usere by username", async () => {
    const UserRepository = UserRepositoryMock;
    UserRepository.getUserByUserName.mockReturnValue(usere);

    const _userService = new UserService({ UserRepository });
    const expected = await _userService.getUserByUserName(usere.username);
    expect(expected).toMatchObject(usere);
  });

  it("Should return a usere collection", async () => {
    const UserRepository = UserRepositoryMock;
    UserRepository.getAll.mockReturnValue(users);

    const _userService = new UserService({ UserRepository });
    const expected = await _userService.getAll();
    expect(expected).toMatchObject(users);
  });

  it("Should update a usere by id", async () => {
    const UserRepository = UserRepositoryMock;
    UserRepository.update.mockReturnValue(usere);

    const _userService = new UserService({ UserRepository });
    const expected = await _userService.repository.update(usere._id, usere);
    expect(expected).toMatchObject(usere);
  });

  it("Should delete a usere by id", async () => {
    const UserRepository = UserRepositoryMock;
    UserRepository.delete.mockReturnValue(true);

    const _userService = new UserService({ UserRepository });

    const expected = await _userService.repository.delete(usere._id);
    expect(expected).toEqual(true);
  });
});
