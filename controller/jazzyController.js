const JAZZY = require ('../model/jazzyModel');

// to create route
const create_route = async (req,res)=>{
  const {title,description,image,category,price} = req.body
  const jazzy = new JAZZY({
    title,description,image,category,price
  })
  try{
    if (!title || !description || !image || !category || !price) {
      res.status(404).json({ err: "All input fields should be filled!" });
    }
  if (title || description || image || category || label) {
    const savedjazzy = await jazzy.save();
    res.status(200).json(savedjazzy);
  }
} catch (err) {
  res.status(500).json({ message: err });
}
};

 // const savedjazzy =await jazzy.save()
    // res.status(200).json(savedjazzy)

  // }catch(err){
  //   res.staus(404).json({message:err})
  // };


// for all route
const all_route = async (req,res)=>{
  try{
    const allRoute = await JAZZY.find()
    res.json(allRoute)
  }catch(err){
    res.status(404).json({message:err})
  }
};

// for specific post
const specific_route = async (req,res)=>{
  try{
    const specificRoute =await JAZZY.findById(req.params.postId)
    res.json(specificRoute)
  }catch(err){
    res.status(404).json({message:err})
  }
};

// to delete post
const delete_route = async (req,res)=>{
  try{
    const deleteRoute = await JAZZY.findByIdAndDelete({_id:req.params.postId})
    res.json(deleteRoute)
  }catch(err){
    res.status(404).json({message:err})
  }
};

// to update or edit post
const update_post =async (req,res)=>{
  try{
const updateRoute = await JAZZY.updateOne({_id:req.params.postId},{$set:req.body})
res.json(updateRoute)
  }catch(err){
    res.status(404).json({message:err})
  }
}




module.exports ={
  create_route,
  all_route,
  specific_route,
  delete_route,
  update_post
}