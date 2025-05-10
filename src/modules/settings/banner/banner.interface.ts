// interfaces/IBanner.ts
export interface IStatistic {
    value: string; // e.g., "30,000", "100+", "99%"
    label: string; // e.g., "Job Placements", "Warehouses in the United States"
  }
  
  export interface IBanner {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    buttonText: string;
    imageUrl: string;
    statistics: IStatistic[];
  }