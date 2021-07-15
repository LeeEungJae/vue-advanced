import { fetchUserInfo, fetchItem, fetchList } from "../api/index";

export default {
  FETCH_USERINFO(context, username) {
    return fetchUserInfo(username)
      .then((response) => {
        context.commit("SET_USERINFO", response.data);
      })
      .catch();
  },
  FETCH_ITEM(context, id) {
    return fetchItem(id)
      .then((response) => {
        context.commit("SET_ITEM", response.data);
      })
      .catch();
  },
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName)
      .then((data) => commit("SET_LIST", data.data))
      .catch((err) => console.log(err));
  },
};
