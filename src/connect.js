const serverUrl = "https://dwkjjhyshhxp.usemoralis.com:2053/server";
const appId = "5HeXyRmJONQizLK8Lqxe3sSpE3h5CbarT9MUx5HG";

const Moralis = window.Moralis;

Moralis.start({ serverUrl, appId });

/** Add from here down */

const currentUser = Moralis.User.current();
if (currentUser) {
  console.log(currentUser.get("ethAddress"));
}

async function login() {
  let user = Moralis.User.current();
  if (!user) {
    try {
      // const user = await Moralis.authenticate({ provider: "walletconnect", chainId: 56 })
      user = await Moralis.authenticate({
        signingMessage: "Connect with Battle Blast",
      });
      return user.get("ethAddress");
    } catch (error) {
      console.log(error);
    }
  }
  return false;
}

async function logOut() {
  await Moralis.User.logOut();
}

export { login, logOut };
