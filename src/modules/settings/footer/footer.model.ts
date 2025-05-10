



  // models/footer.model.ts
import mongoose, { Schema, Document } from 'mongoose';
import { IFooter } from './footer.interface';

// interface IAddress {
//   logo: string;
//   lable: string;
// }

// interface INavItem {
//   text: string;
//   path: string;
// }

// export interface IFooter extends Document {
//   logo: string;
//   copyrightText: string;
//   loginButtonText: string;
//   addresses: IAddress[];
//   navItems: INavItem[];
// }

const AddressSchema: Schema = new Schema({
  logo: { type: String, required: true },
  lable: { type: String, required: true },
});

const NavItemSchema: Schema = new Schema({
  text: { type: String, required: true },
  path: { type: String, required: true },
});

const FooterSchema: Schema = new Schema({
  logo: { type: String, required: true },
  copyrightText: { type: String, required: true },
  loginButtonText: { type: String, required: true },
  addresses: {
    type: [AddressSchema],
    default: [],
  },
  navItems: {
    type: [NavItemSchema],
    default: [],
  },
});

const Footer = mongoose.model<IFooter>('Footer', FooterSchema);
export default Footer;
