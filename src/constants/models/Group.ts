interface Group {
  eventId: string;
  players_template: {[key: string]: string};
  host: string;
  created: string;
}

export interface Groups {
  [key: string]: Group;
}

export default Group;
