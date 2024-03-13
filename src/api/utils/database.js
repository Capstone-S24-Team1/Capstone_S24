const { Client } = require("pg");
const connectionString = process.env.CONNECTION_STRING;

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
    const text = "SELECT casename,casesummary,casecategory,casereference,caselink FROM CapstoneCase WHERE casename = $1;";
    const values = [caseName];
    return client.query(text, values);
}

async function createCase(caseName, caseSummary, caseCategory, caseLocation, caseReference, caseLink) {
    const text =
        "INSERT INTO CapstoneCase (casename, casesummary, casecategory, caselocation, casereference, caselink) VALUES ($1, $2, $3, $4, $5);";
    const values = [caseName, caseSummary, caseCategory, caseLocation, caseReference, caseLink];
    return client.query(text, values);
}

async function updateCase(caseName, caseSummary, caseCategory, caseLocation, caseReference, caseLink) {
    const text =
        "UPDATE CapstoneCase SET casesummary = $2, casecategory = $3, caselocation = $4, casereference = $5, caselink = $6 WHERE caseName = $1;";
    const values = [caseName, caseSummary, caseCategory, caseLocation, caseReference, caseLink];
    return client.query(text, values);
}

async function deleteCase(caseName) {
    const text = "DELETE FROM CapstoneCase WHERE casename = $1;";
    const values = [caseName];
    return client.query(text, values);
}

async function searchCase(caseInput){
    const text = "SELECT DISTINCT * FROM CapstoneCase WHERE casename like '%'||$1||'%' or casesummary like '%'||$1||'%' or casecategory like '%'||$1||'%'or caselocation like '%'||$1||'%' or casereference like '%'||$1||'%'";
    const values = [caseInput];
    return client.query(text, values);
}

module.exports = {
    getCase,
    createCase,
    updateCase,
    deleteCase,
    searchCase,
};
