export type BulkOrderData = {
  customer: {
    name: string;
    company: string;
    phone: string;
    email: string;
  };
  materialSlug: string;
  quantity: string;
  deliveryLocation: string;
  useCase: string;
  notes: string;
};

export const defaultBulkOrderData: BulkOrderData = {
  customer: {
    name: "",
    company: "",
    phone: "",
    email: "",
  },
  materialSlug: "",
  quantity: "",
  deliveryLocation: "",
  useCase: "",
  notes: "",
};
