import ErrorClass from "./ErrorClass";
import UserRepository from "../repositories/UserRepository";
import { userPayloadType } from "../types/user.type";
class UserService extends ErrorClass {
  constructor(private userRepository: UserRepository) {
    super();
  }

  public checkUser = async (userCredentials: userPayloadType) => {
    const user = await this.userRepository.checkUserInDB(
      userCredentials as userPayloadType
    );

    if (!user) {
      this.throwNotFoundError("We do not have this user in our records");
    }

    const validPassword = await this.userRepository.checkUserCredentials(
      userCredentials as userPayloadType
    );

    if (!validPassword) {
      this.throwAuthenticationError("The credentials are invalid");
    }

    return user;
  };
}
export default UserService;
