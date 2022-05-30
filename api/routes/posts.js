const express = require("express")
const router = express.Router()
const db = require("./firebase")

const {getDocs, collection, setDoc, doc, addDoc} = require("firebase/firestore")

let posts  = []

router.get("/info", async (req, res, next) => {
  const allDocData = []
  // console.log(req.query)  // shows the URL params (stuff after the ? in the URL)
  const docs = await getDocs(collection(db, "responses"))
  docs.forEach((doc) => {
    const object = doc.data()
    allDocData.push(object)
  })
  res.json({result: allDocData})
})

router.post("/post", async (req, res, next) => {
  console.log(req.body.message)
  await addDoc(collection(db, "responses"), req.body);
  res.send(req.body.message)
})

module.exports = router