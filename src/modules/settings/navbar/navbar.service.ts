// navbar/navbar.service.ts
import NavbarSettings from './navbar.model';
import { INavbarSettings } from './navbar.model';

class NavbarService {
  // Create new navbar settings (only allowed if none exist)
  async createNavbarSettings(settingsData: INavbarSettings) {
    try {
      const existingSettings = await NavbarSettings.findOne();
      if (existingSettings) {
        throw new Error('Navbar settings already exist. You can only update them.');
      }

      const settings = new NavbarSettings(settingsData);
      await settings.save();
      return settings;
    } catch (error) {
      console.error('Error creating navbar settings:', error);
      throw new Error('Failed to create navbar settings');
    }
  }

  // Get existing navbar settings
  async getNavbarSettings() {
    try {
      const settings = await NavbarSettings.findOne();
      return settings;
    } catch (error) {
      console.error('Error fetching navbar settings:', error);
      throw new Error('Failed to retrieve navbar settings');
    }
  }

  // Update existing navbar settings or create new ones
  async updateNavbarSettings(settingsData: INavbarSettings) {
    try {
      const existingSettings = await NavbarSettings.findOne();

      if (!existingSettings) {
        const newSettings = new NavbarSettings(settingsData);
        await newSettings.save();
        return newSettings;
      }

      const updatedSettings = await NavbarSettings.findOneAndUpdate({}, settingsData, { new: true });
      if (!updatedSettings) {
        throw new Error('Failed to update navbar settings');
      }

      return updatedSettings;
    } catch (error) {
      console.error('Error updating navbar settings:', error);
      throw new Error('Failed to update navbar settings');
    }
  }
}

export default new NavbarService();
