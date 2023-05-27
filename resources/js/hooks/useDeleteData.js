import baseURL from "../Api/baseURL";

const useDeleteData = async (url,parms) => {
    const res = await baseURL.delete(url,parms);
    return res
}

export default useDeleteData

