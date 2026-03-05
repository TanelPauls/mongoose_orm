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
    return res.status(400).send("Invalid numbers");
  }

  res.send(String(nr1 * nr2));
});
// http://localhost:8013/multiply/2/5

router.get("/do-logs/:arv", (req, res) => {
  const arv = Number(req.params.arv);

  if (Number.isNaN(arv)) {
    return res.status(400).send("Invalid number");
  }

  for (let index = 0; index < arv; index++) {
    console.log("See on logi nr " + index);
  }

  res.send();
});
// http://localhost:8013/do-logs/5

export default router;