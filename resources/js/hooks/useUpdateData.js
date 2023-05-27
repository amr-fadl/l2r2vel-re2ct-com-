import baseURL from "../Api/baseURL";

const useUpdateDataWithImage = async (url,parmas) => {
    // const config = {
    //     headers: {
    //         'Content-Type': 'application/json',
    //     }
    // }
    const res = await baseURL.post(url,parmas);
    console.log(res);

    return res
}

const useUpdateData = async (url,parms) => {
    const res = await baseURL.put(url,parms);
    return res
}
export {useUpdateData,useUpdateDataWithImage}
//
