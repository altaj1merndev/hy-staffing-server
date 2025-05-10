// footer/footer.service.ts
import { IFooter } from './footer.interface';
import Footer from './footer.model';


class FooterService {
  // Create new footer settings (only if none exist)
  async createFooterSettings(settingsData: IFooter) {
    try {
      const existingSettings = await Footer.findOne();
      if (existingSettings) {
        throw new Error('Footer settings already exist. You can only update them.');
      }

      const settings = new Footer(settingsData);
      await settings.save();
      return settings;
    } catch (error) {
      console.error('Error creating footer settings:', error);
      throw new Error('Failed to create footer settings');
    }
  }

  // Get existing footer settings
  async getFooterSettings() {
    try {
      const settings = await Footer.findOne();
      return settings;
    } catch (error) {
      console.error('Error fetching footer settings:', error);
      throw new Error('Failed to retrieve footer settings');
    }
  }

  // Update existing footer settings or create new ones
  async updateFooterSettings(settingsData: IFooter) {
    try {
      const existingSettings = await Footer.findOne();

      if (!existingSettings) {
        const newSettings = new Footer(settingsData);
        await newSettings.save();
        return newSettings;
      }

      const updatedSettings = await Footer.findOneAndUpdate({}, settingsData, { new: true });
      if (!updatedSettings) {
        throw new Error('Failed to update footer settings');
      }

      return updatedSettings;
    } catch (error) {
      console.error('Error updating footer settings:', error);
      throw new Error('Failed to update footer settings');
    }
  }
}

export default new FooterService();
