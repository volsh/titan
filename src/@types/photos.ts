export type photo = {
  id: number;
  pageURL: string;
};

export type photosResponse = {
  total: number;
  totalHits: number;
  hits: photo[];
};
