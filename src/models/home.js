// import { getGroups } from "../services/home";

export default {
  namespace: "home",
  state: {
    count: 0
  },
  effects: {
    // *fetchGroups({ payload }, { put, call }) {
    //   let data = yield call(getGroups, payload);
    //   // if (data && data.code === 1000) {
    //   //   console.log(data);
    //   // }
    // }
  },
  reducers: {
    update(state, { payload }) {
      return { ...state, ...payload };
    }
  },
  subscriptions: {}
};
