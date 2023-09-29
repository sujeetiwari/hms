export enum RoomType {
    SINGLE='SINGLE',
    DOUBLE = 'STANDARD',
    SUITE = 'SUITE',
    DELUXE = 'DELUXE',
  }

export class Room {
    roomId !:number;
    roomType ! :RoomType;
    available !: boolean;
    price !:number;

    calculatePrice() {
        // Calculate the price based on the selected room type
        switch (this.roomType) {
          case RoomType.SINGLE:
            this.price = 3000.0;
            break;
          case RoomType.DOUBLE:
            this.price = 4000.0;
            break;
          case RoomType.SUITE:
            this.price = 5000.0;
            break;
          case RoomType.DELUXE:
            this.price = 6000.0;
            break;
          default:
            this.price = 0; // Default to 0 for unknown room types
            break;
        }
      }
}











