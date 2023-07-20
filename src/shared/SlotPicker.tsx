const SlotPicker = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="w-1/2 rounded-lg bg-gray-800 p-8 shadow-lg">
        <div className="mb-4">
          <label htmlFor="date" className="text-white">
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="w-full border bg-gray-700 p-2 text-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="slot" className="text-white">
            Slot:
          </label>
          <select
            id="slot"
            name="slot"
            className="w-full border bg-gray-700 p-2 text-white"
          >
            <option value="">Select a slot</option>
            <option value="slot1">Slot 1</option>
            <option value="slot2">Slot 2</option>
            <option value="slot3">Slot 3</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SlotPicker;

// import React, { useState } from "react";

// interface Slot {
//   id: number;
//   time: string;
// }

// interface DateOption {
//   id: number;
//   date: string;
// }

// const SlotPicker: React.FC = () => {
//   const [pickupDate, setPickupDate] = useState<string | null>(null);
//   const [pickupSlot, setPickupSlot] = useState<number | "custom" | null>(null);
//   const [deliveryDate, setDeliveryDate] = useState<string | null>(null);
//   const [deliverySlot, setDeliverySlot] = useState<number | "custom" | null>(
//     null
//   );
//   const [customTimeSlot, setCustomTimeSlot] = useState<string>("");

//   const handlePickupDateSelection = (date: string) => {
//     setPickupDate(date);
//   };

//   const handlePickupSlotSelection = (slot: number | "custom") => {
//     setPickupSlot(slot);
//   };

//   const handleDeliveryDateSelection = (date: string) => {
//     setDeliveryDate(date);
//   };

//   const handleDeliverySlotSelection = (slot: number | "custom") => {
//     setDeliverySlot(slot);
//   };

//   const handleCustomTimeSlotChange = (
//     event: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setCustomTimeSlot(event.target.value);
//   };

//   const dates: DateOption[] = [
//     { id: 1, date: "2023-07-09" },
//     { id: 2, date: "2023-07-10" },
//     { id: 3, date: "2023-07-11" },
//     // Add more dates as needed
//   ];

//   const slots: Slot[] = [
//     { id: 1, time: "8:00 AM - 10:00 AM" },
//     { id: 2, time: "10:00 AM - 12:00 PM" },
//     { id: 3, time: "12:00 PM - 2:00 PM" },
//     { id: 4, time: "2:00 PM - 4:00 PM" },
//     { id: 5, time: "4:00 PM - 6:00 PM" },
//     // Add more slots as needed
//   ];

//   const handleConfirm = () => {
//     // Handle the confirm action
//     // You can access the selected pickup and delivery slots here
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center">
//       <div className="rounded bg-white p-6">
//         <h1 className="mb-4 text-2xl font-semibold">Pickup Details</h1>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <h2 className="mb-2 text-lg font-semibold">Date</h2>
//             <select
//               className="w-full rounded border border-gray-300 p-2"
//               onChange={(e) => handlePickupDateSelection(e.target.value)}
//               value={pickupDate || ""}
//             >
//               <option value="">Select a date</option>
//               {dates.map((date) => (
//                 <option key={date.id} value={date.date}>
//                   {date.date}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <h2 className="mb-2 text-lg font-semibold">Time Slot</h2>
//             <select
//               className="w-full rounded border border-gray-300 p-2"
//               onChange={(e) =>
//                 handlePickupSlotSelection(e.target.value as number | "custom")
//               }
//               value={pickupSlot || ""}
//             >
//               <option value="">Select a time slot</option>
//               {slots.map((slot) => (
//                 <option key={slot.id} value={slot.id}>
//                   {slot.time}
//                 </option>
//               ))}
//               <option value="custom">Custom Time Slot</option>
//             </select>
//             {pickupSlot === "custom" && (
//               <input
//                 type="text"
//                 className="mt-2 w-full rounded border border-gray-300 p-2"
//                 placeholder="Enter custom time slot"
//                 value={customTimeSlot}
//                 onChange={handleCustomTimeSlotChange}
//               />
//             )}
//           </div>
//         </div>

//         <h1 className="mb-4 mt-6 text-2xl font-semibold">Delivery Details</h1>
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <h2 className="mb-2 text-lg font-semibold">Date</h2>
//             <select
//               className="w-full rounded border border-gray-300 p-2"
//               onChange={(e) => handleDeliveryDateSelection(e.target.value)}
//               value={deliveryDate || ""}
//             >
//               <option value="">Select a date</option>
//               {dates.map((date) => (
//                 <option key={date.id} value={date.date}>
//                   {date.date}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div>
//             <h2 className="mb-2 text-lg font-semibold">Time Slot</h2>
//             <select
//               className="w-full rounded border border-gray-300 p-2"
//               onChange={(e) =>
//                 handleDeliverySlotSelection(e.target.value as number | "custom")
//               }
//               value={deliverySlot || ""}
//             >
//               <option value="">Select a time slot</option>
//               {slots.map((slot) => (
//                 <option key={slot.id} value={slot.id}>
//                   {slot.time}
//                 </option>
//               ))}
//               <option value="custom">Custom Time Slot</option>
//             </select>
//           </div>
//         </div>

//         <button
//           className="mt-6 rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
//           onClick={handleConfirm}
//         >
//           Confirm
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SlotPicker;
