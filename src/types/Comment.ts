/**
 * Commentの部品用クラス.
 */
export class Comment {
  constructor(
    // ポストID
    private _postId: number,
    // ID
    private _id: number,
    // 名前
    private _name: string,
    // メールアドレス
    private _email: string,
    // ボディ
    private _body: string
  ) {}

  public get postId(): number {
    return this._postId;
  }

  public set postId(postId: number) {
    this._postId = postId;
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get email(): string {
    return this._email;
  }

  public set email(email: string) {
    this._email = email;
  }

  public get body(): string {
    return this._body;
  }

  public set body(body: string) {
    this._body = body;
  }
}
