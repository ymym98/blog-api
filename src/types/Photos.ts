/**
 * Photosの部品用クラス.
 */
export class Photos {
  constructor(
    // アルバムID
    private _albumId: number,
    // ID
    private _id: number,
    // タイトル
    private _title: string,
    // 画像のURL
    private _url: string,
    // サムネイルURL
    private _thumbnailUrl: string
  ) {}

  public get albumId(): number {
    return this._albumId;
  }

  public set albumId(albumId: number) {
    this._albumId = albumId;
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get title(): string {
    return this._title;
  }

  public set title(title: string) {
    this._title = title;
  }

  public get url(): string {
    return this._url;
  }

  public set url(url: string) {
    this._url = url;
  }

  public get thumbnailUrl(): string {
    return this._thumbnailUrl;
  }

  public set thumbnailUrl(thumbnailUrl: string) {
    this._thumbnailUrl = thumbnailUrl;
  }
}
