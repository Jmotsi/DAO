import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0x191F2212817840633Cc74fBc5f8f30D1BF27e1e9");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "The Almighty Emblem Of JaysTrust",
        description: "This NFT will give you access to JaysTrustDAO!",
        image: readFileSync("scripts/assets/charity.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();