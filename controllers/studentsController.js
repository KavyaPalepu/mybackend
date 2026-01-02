import student from "../models/studentsModels.js";

const getStudentsDetails = async(req, res) => {
    try{
            // const mydata = await student.find();
            // const mydata = await student.findOne();
            
            const mydata = await student.findById({_id: "694e1d9063798f3a62e045dc"})
            res.status(200).json(mydata);
            console.log(mydata)
    }catch(error){
        console.log(error);
        res.status(500).json({error: error.message})
    }

};
const addStudents = async(req, res) => {
    try{
         const data = req.body;
    console.log(data);
    // const addeddata = await student.create(data);
    const addeddata = await student.insertMany(data);
    console.log(addeddata);
    res.status(201).json("data added");
    }catch(error){
        res.status(500).json({error: error.message})
    }
};

const updateStudents = async(req,res) => {
    const {id} = req.params;
    const data = req.body;
    const updatedData = await student.findByIdAndUpdate({_id: id},data,{new:true});
        if(!updatedData){
            return res.status(404).json({message:"user not existed"});

        }
        try{
            res.status(200).json({student:updatedData,message:"student updated"})

        }catch(error){
             res.status(500).json({error: error.message})
        }
        
    
};


const updateStudentsStatus = async(req,res)=>{
    try{
        await student.updateMany(
            {status:false},
            {$set:{status:true}}
        );
        res.status(200).json({student:updatedData,message:"student updated"})

        }catch(error){
             res.status(500).json({error: error.message})
        }
        
    };

export {getStudentsDetails, addStudents, updateStudents,updateStudentsStatus};