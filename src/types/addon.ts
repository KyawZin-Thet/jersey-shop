export interface Addon {
  size: number;
  gender: "male" | "female";
  name?: string;
  number?: number;
}

export interface AddonSlice {
  items: Addon[];
  isLoading: boolean;
  error: Error | null;
}
