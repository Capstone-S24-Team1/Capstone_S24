const { Client } = require("pg");
const connectionString = process.env.CONNECTION_STRING;

console.log(connectionString)

const client = new Client({
  connectionString,
})

client
    .connect()
    .then(() => {
        console.log("client connected");
    })
    .catch((err) => {
        console.log(err);
    });

async function getCase(caseName) {
    const text = "SELECT casename,casesummary,casereference,caselink FROM CapstoneCase WHERE casename = $1;";
    const values = [caseName];
    return client.query(text, values);
}

async function createCase(caseName, caseSummary, caseLocation, caseReference, caseLink) {
    const text =
        "INSERT INTO CapstoneCase (casename, casesummary, caselocation, casereference, caselink) VALUES ($1, $2, $3, $4, $5);";
    const values = [caseName, caseSummary, caseLocation, caseReference, caseLink];
    return client.query(text, values);
}

async function updateCase(caseName, caseSummary, caseLocation, caseReference, caseLink) {
    const text =
        "UPDATE CapstoneCase SET casesummary = $2, caselocation = $3, casereference = $4, caselink = $5 WHERE caseName = $1;";
    const values = [caseName, caseSummary, caseLocation, caseReference, caseLink];
    return client.query(text, values);
}

async function deleteCase(caseName) {
    const text = "DELETE FROM CapstoneCase WHERE casename = $1;";
    const values = [caseName];
    return client.query(text, values);
}


module.exports = {
    getCase,
    createCase,
    updateCase,
    deleteCase,
};
