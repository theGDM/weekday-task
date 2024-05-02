import axios from 'axios';

const fetchURL = 'https://api.weekday.technology/adhoc/getSampleJdJSON';

export const GetJObsDetails = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({
        "limit": 10,
        "offset": 0
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
    };

    try {
        let response = await axios.post(fetchURL, requestOptions, raw);
        console.log(response);
    } catch (err) {
        console.log(err);
    }
};
