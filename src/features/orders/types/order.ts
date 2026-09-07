export type TripStatus = "active" | "completed" | "delayed";
export type CurrentTrip = { id: string; name: string; route: string; plate: string; status: TripStatus };
