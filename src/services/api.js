import axios from "axios";

const KEYPIXABAY = "33961477-1e6f371f275d3640a6a90e8ae"

export const fetchFotoWithQuery = async ({ value, page }) => {
    const response = await axios.get(`https://pixabay.com/api/?q=${value}&page=${page}&key=${KEYPIXABAY}&image_type=photo&orientation=horizontal&per_page=12`);
    // console.log(response.data.hits.length)
    if (!response.data.hits.length) {
        // console.log("qweeqwe")
        return Promise.reject(new Error("Sorry! There is no photo at your request."))
    }
    return response.data;
};

// const qwe = {
//     fetchFotoWithQuery,
// }

export default fetchFotoWithQuery;