import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { Posts } from "@/types/Posts";
import { Photos } from "@/types/Photos";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 記事一覧を格納する配列
    posts: new Array<Posts>(),
    // 画像一覧を格納する配列
    photos: new Array<Photos>(),
  },
  actions: {
    /**
     * Posts情報をAPIから取得し、mutationを呼び出す.
     * @param context コンテキスト
     */
    async getPostsList(context) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // payloadにAPIの情報を格納
      const payload = response.data;
      // mutationsを呼び、引数にpayloadを渡す
      context.commit("addPostsList", payload);
    },
    /**
     * Photos情報をAPIから取得し、mutationを呼び出す.
     * @param context コンテキスト
     */
    async getPhotos(context) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const payload = response.data;
      context.commit("addPhotos", payload);
    },
  },
  mutations: {
    /**
     * stateのpostsの配列にAPIで取得した情報を格納する.
     * @param state ステート
     * @param payload Postsの一覧情報
     */
    addPostsList(state, payload) {
      // 初期化(やらないとposts一覧を表示させる度に追加されるため)
      state.posts = new Array<Posts>();
      for (const post of payload) {
        state.posts.push(
          new Posts(post.userId, post.id, post.title, post.body)
        );
      }
    },
    /**
     * stateのphotosの配列にAPIで取得した情報格納する.
     * @param state ステート
     * @param payload Photosの一覧情報
     */
    addPhotos(state, payload) {
      // 初期化
      state.photos = new Array<Photos>();
      for (const photo of payload) {
        state.photos.push(
          new Photos(
            photo.albumId,
            photo.id,
            photo.title,
            photo.url,
            photo.thumbnailUrl
          )
        );
      }
    },
  },
  modules: {},
  getters: {
    /**
     * 全posts情報を返す.
     * @param state ステート
     * @returns 全posts情報
     */
    getPosts(state) {
      return state.posts;
    },
    /**
     * 全photos情報を返す.
     * @param state ステート
     * @returns 全photos情報
     */
    getPhotos(state) {
      return state.photos;
    },
  },
});
