import { Router } from "express";
import Toode from "../models/Toode.js";

const router = Router();

let toode = new Toode(1, "Koola", 1.5, true);

router.get("/toode", (req, res) =>  {
  res.send(toode)
});
// http://localhost:8013/toode

router.get("/kustuta-toode", (req, res) =>  {
  toode = null;
  res.send(toode)
});
// http://localhost:8013/kustuta-toode

router.get("/kustuta-toode2", (req, res) =>  {
  toode = null;
  res.send("Edukalt kustutatud");
});
// http://localhost:8013/kustuta-toode2

router.get("/suurenda-hinda", (req, res) =>  {
  if (toode !== null) {
    toode.price = toode.price + 1;
  }
  res.send(toode);
});
// http://localhost:8013/suurenda-hinda

router.get("/muuda-aktiivsust", (req, res) =>  {
  if (toode !== null) {
    if(toode.isActive){
        toode.isActive = false;
        res.send("Toode muudetud mitteaktiivseks");
    } else {
        toode.isActive = true;
        res.send("Toode muudetud aktiivseks");
    }
  }
  
});
// http://localhost:8013/muuda-aktiivsust

router.get("/toode/muuda_nimi/:nimi", (req, res) =>  {
  const name = req.params.nimi;
  const oldName = toode.name;
  
  toode.name = name;
  res.send(`Toote nimi muudetud: ${oldName} -> ${name}`);
});

// http://localhost:8013/toode/muuda_nimi/Pepsi

export default router;