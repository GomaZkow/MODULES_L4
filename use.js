const { loaderData } = require("./src/modules/LoaderData.js");
const { createCatalog, writeFile } = require("./src/modules/fileSystem.js");
const { sortString } = require("./src/modules/sortString.js");

async function processUsers() {
    try {
        const result = await new Promise((resolve, reject) => {
            loaderData("https://jsonplaceholder.typicode.com/users", (result) => {
                if (result.error) reject(result.error);
                else resolve(result.data);
            });
        });

        await createCatalog("users");
        const names = result.map((user) => user.name);
        const emails = result.map((user) => user.email);
        const sortedNames = sortString(names);
        const sortedEmails = sortString(emails);

        await writeFile("users/names.txt", sortedNames.join("\n"));
        await writeFile("users/emails.txt", sortedEmails.join("\n"));
        console.log("success");
    } catch (error) {
        console.error(error);
    }
}
processUsers();
