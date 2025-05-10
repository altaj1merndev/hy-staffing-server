import mongoose, { Schema, Document } from 'mongoose';

interface ILanguage {
  text: string;
  isDefault: boolean;
}

interface INavItem {
  text: string;
  path: string;
}

export interface INavbarSettings extends Document {
  logo: string;
  loginButtonText: string;
  languages: ILanguage[];
  navItems: INavItem[];
}

const LanguageSchema: Schema = new Schema({
  text: {
    type: String,
    required: true,
  },
  isDefault: {
    type: Boolean,
    default: false,
  },
});

const NavItemSchema: Schema = new Schema({
  text: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
});

const NavbarSettingsSchema: Schema = new Schema({
  logo: {
    type: String,
    required: true,
  },

  loginButtonText: {
    type: String,
    required: true,
  },
  languages: {
    type: [LanguageSchema],
    default: [],
  },
  navItems: {
    type: [NavItemSchema],
    default: [],
  },
});

const NavbarSettings = mongoose.model<INavbarSettings>('NavbarSettings', NavbarSettingsSchema);
export default NavbarSettings;
