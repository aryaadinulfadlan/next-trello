import { create } from "zustand";

type CardModalStore = {
  id?: string;
  isOpen: boolean;
  onOpen: (id: string) => void;
  onClose: () => void;
};

export const useCardModal = create<CardModalStore>((set) => ({
  id: undefined,
  isOpen: false,
  onOpen: (id: string) => set({ isOpen: true, id }),
  onClose: () => set({ isOpen: false, id: undefined }),
  // onOpen: (id: string) => set((state) => ({ ...state, isOpen: true, id })),
  // onClose: () => set((state) => ({ ...state, isOpen: false, id: undefined })),
}));
