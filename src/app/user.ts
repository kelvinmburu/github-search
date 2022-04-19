// export class User {
//   photo: any;
//   userName: any;
//   bio: any;
//   followers: any;
//   following: any;
//   repos: any;
// }

export class User {
    constructor(public photo: string, public userName: string, public followers:number, public following:number, public repos:number, public bio: string) { }
}
