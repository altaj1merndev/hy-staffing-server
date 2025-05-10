// banner/banner.service.ts
import Banner from './banner.model';
import { IBanner } from './banner.model';

class BannerService {
  // Create new banner (only if none exist)
  async createBanner(bannerData: IBanner) {
    try {
      const existingBanner = await Banner.findOne();
      if (existingBanner) {
        throw new Error('Banner already exists. You can only update it.');
      }

      const banner = new Banner(bannerData);
      await banner.save();
      return banner;
    } catch (error) {
      console.error('Error creating banner:', error);
      throw new Error('Failed to create banner');
    }
  }

  // Get existing banner
  async getBanner() {
    try {
      const banner = await Banner.findOne();
      return banner;
    } catch (error) {
      console.error('Error fetching banner:', error);
      throw new Error('Failed to retrieve banner');
    }
  }

  // Update banner (or create if it doesn't exist)
  async updateBanner(bannerData: IBanner) {
    try {
      const existingBanner = await Banner.findOne();

      if (!existingBanner) {
        const newBanner = new Banner(bannerData);
        await newBanner.save();
        return newBanner;
      }

      const updatedBanner = await Banner.findOneAndUpdate({}, bannerData, { new: true });
      if (!updatedBanner) {
        throw new Error('Failed to update banner');
      }

      return updatedBanner;
    } catch (error) {
      console.error('Error updating banner:', error);
      throw new Error('Failed to update banner');
    }
  }
}

export default new BannerService();
