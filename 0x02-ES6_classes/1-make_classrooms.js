// 1-make_classrooms.js

import ClassRoom from './0-classroom';

export default function initializeRooms() {
  return [new ClassRoom(10), new ClassRoom(15), new ClassRoom(20)];
}
