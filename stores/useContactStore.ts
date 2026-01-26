import { create } from "zustand";

type ContactDraft = {
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  industry: string;
  yearsInBusiness: string;
  revenueRange: string;
  transactionVolume: string;
  accountingSoftware: string;
  serviceInterest: string;
  startTimeline: string;
  notes: string;
};

type ContactState = {
  draft: ContactDraft;
  updateField: (field: keyof ContactDraft, value: string) => void;
  reset: () => void;
};

const initialDraft: ContactDraft = {
  fullName: "",
  email: "",
  phone: "",
  businessName: "",
  industry: "",
  yearsInBusiness: "",
  revenueRange: "",
  transactionVolume: "",
  accountingSoftware: "",
  serviceInterest: "",
  startTimeline: "",
  notes: ""
};

export const useContactStore = create<ContactState>((set) => ({
  draft: initialDraft,
  updateField: (field, value) =>
    set((state) => ({
      draft: {
        ...state.draft,
        [field]: value
      }
    })),
  reset: () => set({ draft: initialDraft })
}));
