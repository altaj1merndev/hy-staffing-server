export interface INavbar  {
    logo: string;
    email: string;
    phoneNumber: string;
    loginButtonText : string;
  }

  export interface ILanguage {
    text:string,
    isDefault: boolean
  }

  export interface INavItem {
    text:string
    path:string
  }