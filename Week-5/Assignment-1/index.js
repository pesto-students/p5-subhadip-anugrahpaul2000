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
  let userDetails = {};

  await getUser(uId)
    .then((res) => {
      userDetails = res;
    })
    .catch();

  await getServices(["Email", "VPN", "CDN"])
    .then((res) => {
      userDetails.services = res;
    })
    .catch();

  await getServiceCost(userDetails.services)
    .then((res) => {
      userDetails.serviceCost = res;
    })
    .catch();

  let response = `\nUser ID: ${userDetails.userId} \nUsername: '${userDetails.username}' \nServices: ${userDetails.services} \nService Cost: ${userDetails.serviceCost}`;
  console.log(response);
}

const data = generator();

getDetails(data.next().value.userId);
getDetails(data.next().value.userId);
getDetails(data.next().value.userId);
getDetails(data.next().value.userId);
getDetails(data.next().value.userId);
getDetails(data.next().value.userId);
