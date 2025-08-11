const EventEmitter = require("events");
const path = require("path");
const fs = require("fs");

const emitter = new EventEmitter();

const fileName = "eventFile.json";
const filePath = path.join(__dirname, fileName);

let eventCounts;

try {
  const data = fs.readFileSync(filePath, "utf-8");
  eventCounts = JSON.parse(data);
  console.log("Event counts loaded successfully:", eventCounts);
} catch (error) {
  if (error.code !== "ENOENT") {
    console.error("Error reading file:", error);
  }
  eventCounts = {
    "user-login": 0,
    "user-logout": 0,
    "user-purchase": 0,
    "profile-update": 0,
  };
  // Save initial counts if file did not exist
  fs.writeFileSync(filePath, JSON.stringify(eventCounts, null, 2), "utf-8");
}

const saveEventCounts = async () => {
  try {
    await fs.promises.writeFile(
      filePath,
      JSON.stringify(eventCounts, null, 2),
      "utf-8"
    );
  } catch (err) {
    console.error("Error saving event counts:", err);
  }
};

emitter.on("user-login", (name) => {
  console.log(`User ${name} is logged in the system`);
  console.log(eventCounts["user-login"]);

  eventCounts["user-login"]++;

  saveEventCounts();
});

emitter.on("user-logout", (name) => {
  console.log(`User ${name} is logged out from the system`);

  eventCounts["user-logout"]++;
  saveEventCounts();
});

emitter.on("user-purchase", (arg) => {
  console.log(`User ${arg.name} is purchased the ${arg.item} from the amazon`);
  eventCounts["user-purchase"]++;
  saveEventCounts();
});

emitter.on("profile-update", (arg) => {
  console.log(`User ${arg.name} is updated his ${arg.email} in the system`);
  eventCounts["profile-update"]++;
  saveEventCounts();
});

emitter.on("summary", () => {
  console.log(eventCounts);
});

async function runEvents() {
  emitter.emit("user-login", "Guru");
  await delay(100);

  emitter.emit("user-logout", "Guru");
  await delay(100);

  emitter.emit("user-purchase", { name: "Guru", item: "Computer" });
  await delay(100);

  emitter.emit("profile-update", { name: "Guru", email: "guru@gmail.com" });
  await delay(100);

  emitter.emit("summary");
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

runEvents(); // Call it at the end
