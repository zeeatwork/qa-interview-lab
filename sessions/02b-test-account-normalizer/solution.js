/**
 * Select enabled automation accounts and return them in a consistent shape.
 *
 * @param {Array<object>} accounts
 * @returns {Array<{id: string, email: string, environment: string}>}
 */
export function prepareTestAccounts(accounts) {
    let filteredArray = JSON.parse(JSON.stringify(accounts));
    filteredArray.forEach((filteredAccount, i) => {
      if(filteredAccount.enabled !== true || filteredAccount.type != 'automation'){
        filteredArray.splice(i, 1);
      }
       });
       if(!filteredArray){
        return filteredArray;
      } else {
       filteredArray.forEach((filteredAccount) => {

        if(!filteredAccount["environment"]){ filteredAccount["environment"] = "staging";
        }
      })}
      let preparedAccounts = filteredArray.map(account => ({id: account['id'], email: account["email"].toLowerCase(), environment: account["environment"]}));
  return preparedAccounts;
}
