import { create } from "zustand";

interface CommandDialogState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useCommandDialogStore = create<CommandDialogState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
