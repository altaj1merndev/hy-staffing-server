export interface IAddress {
    logo:string
    lable: string
} 


  export interface INavItem {
    text:string
    path:string
  }


export interface IFooter extends Document {
  logo: string;
  copyrightText: string;
  loginButtonText: string;
  addresses: IAddress[];
  navItems: INavItem[];
}
