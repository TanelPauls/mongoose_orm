import { Router } from "express";

const router = Router();

router.get('/hello-world', (req, res) => {
  res.send("Hello world at " + new Date());
});
// http://localhost:8013/hello-world

router.get("/hello-variable/:nimi", (req, res) => {
  res.send("Hello " + req.params.nimi)
});
// http://localhost:8013/hello-variable/test

router.get("/add/:nr1/:nr2", (req, res) => {
  res.send(req.params.nr1 + req.params.nr2)
});
// http://localhost:8013/add/raud/tee

router.get("/multiply/:nr1/:nr2", (req, res) => {
  const nr1 = Number(req.params.nr1);
  const nr2 = Number(req.params.nr2);

  if (Number.isNaN(nr1) || Number.isNaN(nr2)) {
    return res.status(400).send("Vähemalt üks sisend pole number");
  }

  res.send(String(nr1 * nr2));
});
// http://localhost:8013/multiply/2/5

router.get("/do-logs/:arv", (req, res) => {
  const arv = Number(req.params.arv);

  if (Number.isNaN(arv)) {
    return res.status(400).send("Vähemalt üks sisend pole number");
  }

  for (let index = 0; index < arv; index++) {
    console.log("See on logi nr " + index);
  }

  res.send();
});
// http://localhost:8013/do-logs/5

router.get("/random/:arv1/:arv2", (req, res) => {
  const arv1 = Number(req.params.arv1);
  const arv2 = Number(req.params.arv2);

  if (Number.isNaN(arv1) || Number.isNaN(arv2)) {
    return res.status(400).send("Vähemalt üks sisend pole number");
  }

  const min = Math.min(arv1, arv2);
  const max = Math.max(arv1, arv2);

  const arv3 = Math.floor(Math.random() * (max - min + 1)) + min;

  res.send(`Arv ${min} ja ${max} vahel: ${arv3}`);
});
// http://localhost:8013/random/1/10

router.get("/born/:aasta/:kuu/:päev", (req, res) => {
  const aasta = Number(req.params.aasta);
  const kuu = Number(req.params.kuu);
  const päev = Number(req.params.päev);

  const today = new Date();
  const birthDate = new Date(aasta, kuu - 1, päev);

  let vanus = today.getFullYear() - birthDate.getFullYear();

  const hasHadBirthday =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!hasHadBirthday) {
    vanus--;
  }

  res.send(`Vanus: ${vanus}`);
});
// http://localhost:8013/born/2000/1/1

export default router;