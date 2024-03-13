import axios from 'axios';

export const getCase = async (caseName) => {
    return axios({
        method: 'get',
        url: `http://localhost:4000/case?caseName=${caseName}`,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const createCase = async (caseName, caseSummary, caseCategory, caseLocation, caseReference, caseLink) => {
    return axios({
        method: 'put',
        url: 'http://localhost:4000/case',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            "caseName": caseName,
            "caseSummary": caseSummary,
            "caseCategory": caseCategory,
            "caseLocation": caseLocation ,
            "caseReference": caseReference,
            "caseLink":caseLink
        })
    });
}

export const deleteCase = async (caseName, caseSummary, caseCategory, caseLocation, caseReference, caseLink) => {
    return axios({
        method: 'post',
        url: 'http://localhost:4000/case',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            "caseName": caseName,
            "caseSummary": caseSummary,
            "caseCategory": caseCategory,
            "caseLocation": caseLocation ,
            "caseReference": caseReference,
            "caseLink":caseLink
        })
    });
}

export const deleteTag = async (caseName) => {
    return axios({
        method: 'delete',
        url: 'http://localhost:4000/case',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify({
            "casename":caseName
        })
    });
}

export const searchCase = async (caseInput) => {
    return axios({
        method: 'get',
        url: `http://localhost:4000/search?caseInput=${caseInput}`,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}