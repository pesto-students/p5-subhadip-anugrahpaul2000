function findJudge(N, trust) {
  // Person Likes people
  let likesTownPeople = {};
  // Person Liked by People
  let likeableFromTown = {};

  for (let i = 1; i <= N; i++) {
    likesTownPeople[i] = 0;
    likeableFromTown[i] = 0;
  }

  for (let person of trust) {
    likesTownPeople[person[0]]++;
    likeableFromTown[person[1]]++;
  }

  let judge = 0;

  // if person dont like people can be judge
  for (key in likesTownPeople) {
    if (likesTownPeople[key] === 0) {
      judge = key;
    }
  }

  // if person is liked by people can be judge
  if (likeableFromTown[judge] === N - 1) {
    return judge;
  } else {
    return -1;
  }
}

console.log(findJudge(2, [[1, 2]]));
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
  ])
);
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
    [3, 1],
  ])
);
