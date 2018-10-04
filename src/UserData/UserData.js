export function getUserData(userCount = 222) {
  const promise = fetch('https://randomuser.me/api/?results={userCount}')
    .then(response => {
      if(response.status >= 400) {
        throw 'API request Failed: ( ${response.status} )';
      }
      return response.json();
    })
    .then(({results}) => {
      return results;
    })
    .catch(error => {
      console.log(error);
    });

  return promise;
}