import express from 'express';
import cors from 'cors';
import authProperty from "./routes/property.js";
import authAccount from "./routes/account.js";
import authContact from "./routes/contact.js";
import authAdmin from "./routes/admin.js";
import authPostRequirement from "./routes/postRequirement.js"
import authAgent from "./routes/agent.js"
import authAd from "./routes/ad.js"
import authProPlan from "./routes/proPlan.js"
import authMap from "./routes/map.js"
import authPay from "./routes/pay.js"
import authMailDigest from "./routes/maildigest.js"
import authSettings from "./routes/settings.js"
import authInvite from "./routes/invite.js";
import authAuroRemovalProperty from "./routes/autoRemovePro.js"
import authListing from "./routes/listing.js"

const app = express();
// var corsOptions = {
//     origin: '*',  
// };
// app.use(cors(corsOptions));
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:4176',
    'https://user.landmarkplots.com',
    'https://landmarkplots.com' // <-- add production frontend
  ],
  credentials: true,
}));
app.use(express.json());
// app.use(cors({
//   origin: 'http://dashboard.example.com',
//   credentials: true,
// }));
app.use(express.static("./public"));
  app.use("/api/act", authAccount);
  app.use("/api/pro", authProperty);
  app.use("/api/contact", authContact);
  app.use("/api/admin", authAdmin);
  app.use("/api/postRequirement", authPostRequirement);
  app.use("/api/agent", authAgent);
  app.use("/api/ad", authAd);
  app.use("/api/proPlan", authProPlan);
  app.use("/api/cityMap", authMap);
  app.use("/api/pay", authPay);
  app.use("/api/setting", authSettings);
  app.use("/api/maildigest", authMailDigest);
  app.use("/api/invite", authInvite);
  app.use("/api/proemovalsetting", authAuroRemovalProperty);

  app.use("/api/listing", authListing);
  app.listen(8016, () => {
    console.log("App is running ");
  });