export interface Delivery {
  delivery: Slot;
  pickup: Slot;
}

export interface Slot {
  slot_date: string;
  slot_start: string;
  slot_end: string;
  display: string;
}
