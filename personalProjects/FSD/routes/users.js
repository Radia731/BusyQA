const express =require("express")
const router= express.Router()

router.get('/', (req, res) =>{
    res.send("user list")
   })
   
router.get('/new', (req, res) =>{
    res.send("user new form")
   })

router.get('/:id', (req, res) =>{
    res.send(`get user with ID ${req.params.id}`)
   })


   module.exports = router