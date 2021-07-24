const username = require("username");

getUsername = () => {
    (async () => {
        console.log(await username());
        //=> 'sindresorhus'
        //return await username();
    })();
};

module.exports = {
    getUsername: () => { getUsername() },
}
