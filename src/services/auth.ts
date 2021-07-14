import { v4 as uuid } from "uuid";

interface ISignInRequestData {
  email: string;
  password: string;
}

const delay = (amount = 750) =>
  new Promise((resolve) => setTimeout(resolve, amount));

export async function signInRequest(data: ISignInRequestData) {
  await delay();

  return {
    token: uuid(),
    user: {
      name: "Keren Glória",
      email: "kerengloria.kg@gmail.com",
      avatar_url:
        "https://instagram.fssa3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/23421260_177785302803258_7244261290225434624_n.jpg?_nc_ht=instagram.fssa3-1.fna.fbcdn.net&_nc_ohc=jODLQakFJWEAX-YiZk-&tn=OuWDJyOniOFbeQDK&edm=ABfd0MgBAAAA&ccb=7-4&oh=3fe88d0f4695fb7b8c54078a982079bb&oe=60F4F959&_nc_sid=7bff83",
    },
  };
}

export async function recoverUserInformation() {
  await delay();

  return {
    user: {
      name: "Keren Glória",
      email: "kerengloria.kg@gmail.com",
      avatar_url:
        "https://instagram.fssa3-1.fna.fbcdn.net/v/t51.2885-19/s150x150/23421260_177785302803258_7244261290225434624_n.jpg?_nc_ht=instagram.fssa3-1.fna.fbcdn.net&_nc_ohc=jODLQakFJWEAX-YiZk-&tn=OuWDJyOniOFbeQDK&edm=ABfd0MgBAAAA&ccb=7-4&oh=3fe88d0f4695fb7b8c54078a982079bb&oe=60F4F959&_nc_sid=7bff83",
    },
  };
}
