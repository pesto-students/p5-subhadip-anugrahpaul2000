function* generator() {
  while (true) {
    let obj = {
      userId: Math.floor(Math.random() * 1000),
    };
    yield obj;
  }
}

async function getUser(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        userId: userId,
        username: (Math.random() + 1).toString(36).substring(7),
      });
    }, 1000);
  });
}

async function getServices(service) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(service);
    }, 2000);
  });
}

async function getServiceCost(services) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(services.length * 100);
    }, 3000);
  });
}

async function getDetails(uId) {
  const userDetails = {};

  try {

    const res = await getUser(uId);
    userDetails.userId = res.userId;
    userDetails.username = res.username;

    userDetails.services = await getServices(["Email", "VPN", "CDN"]);
    userDetails.serviceCost =  await getServiceCost(userDetails.services);
  } catch (e){
    console.log(e);
  }

  // await getServices(["Email", "VPN", "CDN"])
  //   .then((res) => {
  //     userDetails.services = res;
  //   })
  //   .catch();


  // await getServiceCost(userDetails.services)
  //   .then((res) => {
  //      = res;
  //   })
  //   .catch();

  let response = `\nUser ID: ${userDetails.userId} \nUsername: '${userDetails.username}' \nServices: ${userDetails.services} \nService Cost: ${userDetails.serviceCost}`;
  console.log(response);
}

const data = generator();

async function main() {

  await getDetails(data.next().value.userId);
  await getDetails(data.next().value.userId);
  await getDetails(data.next().value.userId);
  await getDetails(data.next().value.userId);
  await getDetails(data.next().value.userId);
  await getDetails(data.next().value.userId);
}

main();
