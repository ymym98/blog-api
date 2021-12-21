export class Posts {
  constructor(
    // ユーザーID
    private _userId: number,
    // ID
    private _id: number,
    // タイトル
    private _title: string,
    // ボディ
    private _body: string
  ) {}

  public get userId(): number {
    return this._userId;
  }

  public set userId(userId: number) {
    this._userId = userId;
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

  public get body(): string {
    return this._body;
  }

  public set body(body: string) {
    this._body = body;
  }
}
