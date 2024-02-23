import prisma from "../utils/prisma";
import { userPayloadType } from "../types/user.type";
class UserRepository {
  public checkUserInDB = async (userCredentials: userPayloadType) => {
    const { email } = userCredentials;
    const userExist = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    return userExist;
  };

  public checkUserCredentials = async (userCredentials: userPayloadType) => {
    const { email, password } = userCredentials;
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    return user?.password === password;
  };
}
export default UserRepository;
