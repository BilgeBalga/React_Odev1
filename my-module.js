import axios from "axios";



const getData = async (user_id) => {
    const { data: users } = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
    const { data: post } = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id)

    const getDataJson = {
        users,
        post
    }
    return getDataJson;
}


export default getData;
