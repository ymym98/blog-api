<template>
  <div>
    <div v-for="post of postsList" v-bind:key="post.id">
      タイトル：<br />
      {{ post.title }}
      <br />
      ボディ：<br />
      {{ post.body }}
    </div>
  </div>
</template>

<script lang="ts">
import { Posts } from "@/types/Posts";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Blog extends Vue {
  // postsの一覧を格納する配列
  private postsList = new Array<Posts>();
  private postsTitle = "";
  private postsBody = "";

  /**
   * vuexのaction経由で非同期でAPIを取得する.
   *
   * @remarks
   * この画面が表示されたタイミングでvuexのactionsを呼ぶ（dispatchする）
   * ライフサイクルフックのcreatedイベント利用。
   * 取得してからゲットするため、async awaitを利用している。
   */
  async created(): Promise<void> {
    await this["$store"].dispatch("getPostsList");
    // postListにPostsの一覧情報を格納
    this.postsList = this["$store"].getters.getPosts;
  }

  //   showPosts() {
  //     for(let post of this.postsList){

  //     }
}
</script>

<style></style>
