// home/home.service.ts
import Home from './home.model';
import { IHome } from './home.model';

class HomeService {
  // Create new home settings (only if none exist)
  async createHomeSettings(homeData: IHome) {
    try {
      const existingSettings = await Home.findOne();
      if (existingSettings) {
        throw new Error('Home settings already exist. You can only update them.');
      }

      const settings = new Home(homeData);
      await settings.save();
      return settings;
    } catch (error) {
      console.error('Error creating home settings:', error);
      throw new Error('Failed to create home settings');
    }
  }

  // Get existing home settings
  async getHomeSettings() {
    try {
      const settings = await Home.findOne();
      return settings;
    } catch (error) {
      console.error('Error fetching home settings:', error);
      throw new Error('Failed to retrieve home settings');
    }
  }

  // Update or create home settings
  async updateHomeSettings(homeData: IHome) {
    try {
      const existingSettings = await Home.findOne();

      if (!existingSettings) {
        const newSettings = new Home(homeData);
        await newSettings.save();
        return newSettings;
      }

      const updatedSettings = await Home.findOneAndUpdate({}, homeData, { new: true });
      if (!updatedSettings) {
        throw new Error('Failed to update home settings');
      }

      return updatedSettings;
    } catch (error) {
      console.error('Error updating home settings:', error);
      throw new Error('Failed to update home settings');
    }
  }
}

export default new HomeService();
