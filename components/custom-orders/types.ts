export type CustomOrderData = {
  productType: string;
  room: string;
  dimensions: {
    width: string;
    height: string;
    depth: string;
    notes: string;
  };
  woodType: string;
  finishType: string;
  style: string;
  features: string[];
  inspiration: {
    fileName: string;
    notes: string;
  };
  budget: string;
  timeline: string;
  contact: {
    name: string;
    phone: string;
    email: string;
  };
};

export type StepProps = {
  data: CustomOrderData;
  updateData: (updates: Partial<CustomOrderData>) => void;
};

export const defaultCustomOrderData: CustomOrderData = {
  productType: "",
  room: "",
  dimensions: {
    width: "",
    height: "",
    depth: "",
    notes: "",
  },
  woodType: "",
  finishType: "",
  style: "",
  features: [],
  inspiration: {
    fileName: "",
    notes: "",
  },
  budget: "",
  timeline: "",
  contact: {
    name: "",
    phone: "",
    email: "",
  },
};
