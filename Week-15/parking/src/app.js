const fs = require("fs");
const ParkingData = {};

path = "./shell/input.txt";
fs.readFile(path, (err, data) => {
  if (err) {
    console.log(err);
  }

  let parsedData = data.toString();
  let commandArray = parsedData.split("\n");
  for (let i in commandArray) {
    parking(commandArray[i]);
  }
});

const parking = (data) => {
  const command = data.split(" ")[0];
  const params = data.split(" ");
  params.shift();
  let message = false;
  let position = false;

  switch (command) {
    case "create_parking_lot":
      ParkingData.totalSlots = parseInt(params[0]);
      ParkingData.slots = Array(6);
      ParkingData.slots.fill({}, 0);
      message = `Created a parking lot with ${ParkingData.totalSlots} slots\n`;
      break;

    case "park":
      ParkingData.slots.every((slotDetails, index) => {
        if (isEmpty(slotDetails)) {
          position = index;
          /**
           * break loop
           */
          return false;
        }
        /**
         * continue loop
         */
        return true;
      });

      if (position === false) {
        message = `Sorry, parking lot is full\n`;
      } else {
        ParkingData.slots[position] = {
          vehicle_number: params[0],
          vehicle_color: params[1],
        };
        message = `Allocated slot number: ${position + 1}\n`;
      }
      break;

    case "leave":
      if (!isEmpty(ParkingData.slots[params[0] - 1])) {
        ParkingData.slots[params[0] - 1] = {};
        message = `Slot number ${params[0]} is free\n`;
      }
      break;

    case "status":
      message = "Slot No.   Registration No.   Colour\n";
      ParkingData.slots.every((slotDetails, index) => {
        if (!isEmpty(slotDetails)) {
          message += `${index + 1}          ${
            slotDetails.vehicle_number
          }      ${slotDetails.vehicle_color}\n`;
        }

        return true;
      });
      break;

    case "registration_numbers_for_cars_with_colour":
      message = `Registration No. of Vehicles with colour: ${params[0]}  \n`;
      ParkingData.slots.every((slotDetails, index) => {
        if (!isEmpty(slotDetails)) {
          if (slotDetails.vehicle_color == params[0]) {
            message += `${slotDetails.vehicle_number}\n`;
          }
        }
        return true;
      });
      break;

    case "slot_numbers_for_cars_with_colour":
      message = `Slot No. of Vehicles with colour: ${params[0]}  \n`;
      ParkingData.slots.every((slotDetails, index) => {
        if (!isEmpty(slotDetails)) {
          if (slotDetails.vehicle_color == params[0]) {
            message += `${index + 1}\n`;
          }
        }
        return true;
      });
      break;

    case "slot_number_for_registration_number":
      message = `Slot No. of Vehicle with Registration No.: ${params[0]} `;
      ParkingData.slots.every((slotDetails, index) => {
        if (!isEmpty(slotDetails)) {
          if (slotDetails.vehicle_number == params[0]) {
            position = index + 1;
            return false;
          }
        }
        return true;
      });

      if (position) {
        message += `is ${position}`;
      } else {
        message += "Not Found";
      }
      break;
  }

  if (message) {
    console.log(message);
  }
};

const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};
