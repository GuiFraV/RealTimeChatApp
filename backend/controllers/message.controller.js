export const sendMessage = async (req,res) => {
   try {

    const {message} = req.body;
    const {id} = req.params.id;
    const senderId = req.user._id;
    
   } catch (error) {
        console.log("Error in sendMessage controller : ", error.message)
        res.status(500).jsopn({ error: "Internal server error"});
   }
}