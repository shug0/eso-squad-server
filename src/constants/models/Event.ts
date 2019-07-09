interface Event {
  id: string;
  name: string;
  type: string;
}

export interface Events {
  [key: string]: Event;
}

export default Event;
