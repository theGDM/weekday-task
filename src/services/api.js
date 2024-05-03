import axios from 'axios';

const fetchURL = 'https://api.weekday.technology/adhoc/getSampleJdJSON'; //api endpoint

export const GetJObsDetails = async (limit, offset) => {
    console.log(`limit: ${limit}, offset: ${offset}`);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
        "limit": limit,
        "offset": offset
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
    };

    try {
        return await axios.post(fetchURL, requestOptions, raw);
    } catch (err) {
        console.log(err);
    }
};
