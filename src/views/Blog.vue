<template>
  <div class="space-y-10">
    <div
      v-for="post of postsList"
      v-bind:key="post.id"
      class="flex justify-center"
    >
      <div class="max-w-sm rounded overflow-hidden shadow-lg space-y-6">
        <span class="font-bold text-xl mb-2">{{ post.title }}</span>
        <div>
          <span class="text-gray-700 text-base">{{ post.body }}</span>
        </div>
      </div>
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
}
</script>

<style></style>
