export type SiteVisitData = {
  projectType: string;
  location: string;
  preferredDate: string;
  photo: {
    fileName: string;
    notes: string;
  };
  contact: {
    name: string;
    phone: string;
    email: string;
  };
};

export type SiteVisitStepProps = {
  data: SiteVisitData;
  updateData: (updates: Partial<SiteVisitData>) => void;
};

export const defaultSiteVisitData: SiteVisitData = {
  projectType: "",
  location: "",
  preferredDate: "",
  photo: {
    fileName: "",
    notes: "",
  },
  contact: {
    name: "",
    phone: "",
    email: "",
  },
};
