import { httpService } from "@/libraries/http-service/http-service"
import { CreateDataUserPayload } from "@/redux/types/user.type";

const UserApi = () => {
    async function getUser() {
        return httpService.get(`https://cms-admin-v2.ihsansolusi.co.id/testapi/user`)
            .then((resp) => resp);
    }

    async function createUser(params: CreateDataUserPayload) {
        return httpService.post(`https://cms-admin-v2.ihsansolusi.co.id/testapi/user`, { ...params })
            .then((resp) => resp);
    }

    async function getUserDetail(params: {id: number}) {
        return httpService.get(`https://cms-admin-v2.ihsansolusi.co.id/testapi/user/${params.id}`)
            .then((resp) => resp);
    }

    async function updateUser(params: CreateDataUserPayload) {
        return httpService.put(`https://cms-admin-v2.ihsansolusi.co.id/testapi/user/${params.id}`, { ...params })
            .then((resp) => resp);
    }

    async function deleteUser(params: {id: string}) {
        return httpService.del(`https://cms-admin-v2.ihsansolusi.co.id/testapi/user/${params.id}`)
            .then((resp) => resp);
    }

    return {
        getUser,
        createUser,
        getUserDetail,
        updateUser,
        deleteUser
    }
}

export default UserApi;