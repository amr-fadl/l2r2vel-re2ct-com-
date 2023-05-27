import baseURL from "../Api/baseURL";

const useGetData = async (url,parms) => {
    const res = await baseURL.get(url,parms);
    return res
}
export default useGetData
//
