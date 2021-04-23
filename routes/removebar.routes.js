const { Router } = require("express");
const User = require("../models/User");
const router = Router();

/*
all bars list logic will be here
*/

router.post("/remove", async (req, res) => {
  //console.log(req.body.removeId)
  //console.log(req.body)

  const filter = {_id: req.body.userId};
  const deleteId = {barsList: req.body.removeId};
  //console.log(filter, deleteId)
 
  //User.update({_id: user._id}, {$unset: {field: 1 }}, callback);
  try {
    //const testO = await User.deleteOne( { _id: req.body.userId }, { $pull: {barsList: req.body.removeId } } );
    //User.updateOne({ _id: req.body.userId }, { $pull: {barsList: [req.body.removeId] }})
    // User.updateOne(
    //     { _id: `${req.body.userId}` },
    //     { $pull: { barsList: `${req.body.removeId}` } },
    //     { multi: true }
    // );
    // const testTest = await User.find({ _id: req.body.userId }).then((response)=>{
    //     if (response[0].barsList.includes(req.body.removeId)){
    //          response.update({ $pull: {barsList: req.body.removeId } }) }
        
    // })
    //const testTest = await User.findByIdAndUpdate(filter, {$pull: {barsList: {$in: req.body.removeId }}})
    //const testTest = await User.updateOne( {_id: req.body.userId}, { $pull: {barsList: [req.body.removeId] } }, { safe: true, upsert: true } )
    //const testTest = await User.updateOne({_id: req.body.userId}, { $pop: { barsList: 1 } })
    //const testTest = await User.updateOne({_id: req.body.userId}, { $pull: {barsList: [req.body.removeId] }})
    const testTest = await User.updateOne({_id: req.body.userId}, { $pull: {barsList: { $elemMatch: { $eq: req.body.removeId }}  }})
    console.log(testTest)
    res.json("love you");
  } catch (e) {
    res.status(500).json({ message: "Something goes wrong!" });
  }
});

module.exports = router;
