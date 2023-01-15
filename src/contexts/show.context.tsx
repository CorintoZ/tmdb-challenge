import { createContext, FC, useState } from 'react';

import { ShowI } from '../models/Show';

export const ShowContext = createContext<ShowContextType | null>(null);

export const ShowProvider: FC = ({ children }) => {
  const [shows, setShows] = useState<ShowI[]>([]);
  const getShow = async (showId: number) => {
    const show = shows.find((show) => show.id === showId);
    if (!show) return;
    return show;
  };
  return (
    <ShowContext.Provider value={{ shows, setShows, getShow }}>
      {children}
    </ShowContext.Provider>
  );
};

export type ShowContextType = {
  shows: ShowI[];
  setShows: (shows: ShowI[]) => void;
  getShow: (showId: number) => Promise<ShowI | undefined>;
};
