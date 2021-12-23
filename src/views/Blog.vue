<template>
  <div class="space-y-10">
    <div
      v-for="blog of blogList"
      v-bind:key="blog.title"
      class="flex justify-center"
    >
      <div class="max-w-sm rounded overflow-hidden shadow-lg space-y-6">
        <img :src="blog.url" />
        <span class="font-bold text-xl mb-2">{{ blog.title }}</span>
        <div>
          <span class="text-gray-700 text-base">{{ blog.body }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Photos } from "@/types/Photos";
import { Posts } from "@/types/Posts";
import { Component, Vue } from "vue-property-decorator";

interface BLOG {
  title: string;
  body: string;
  url: string;
}

@Component
export default class Blog extends Vue {
  // postsの一覧を格納する配列
  private postsList = new Array<Posts>();
  // photosを格納する配列
  private photoList = new Array<Photos>();
  // postsListのtitle,bodyと photoListのurlをオブジェクトにした配列
  private blogList = new Array<BLOG>();

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
    // photoLisrにPhotosの一覧情報を格納
    await this["$store"].dispatch("getPhotos");
    this.photoList = this.$store.getters.getPhotos;

    for (let i = 0; i < 30; i++) {
      this.blogList.push({
        title: this.postsList[i].title,
        body: this.postsList[i].body,
        url: this.photoList[i].url,
      });
    }
  }
}
</script>

<style></style>
