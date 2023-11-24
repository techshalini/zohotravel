const cds=require('@sap/cds')
const {travelInitiate}=cds.entities('db')

const mysrv=function(srv){

    srv.on('READ','readtravelInitiate',async(req,res)=>{
        var result=[];
        result=await cds.tx(req).run(SELECT.from(travelInitiate))
        return result
    });

    srv.on("DELETE","deletetravelInt", async(req,res)=>{
        let returnData = await cds.transaction(req).run([
            DELETE.from(travelInitiate).where(req.data)
        ]).then((resolve,reject)=>{
            if(typeof(resolve) !==undefined){
                return req.data;
            }
            else{
                req.error('error occured');
            }
        }).catch(err =>{
            req.error('error',err)
        });
        return returnData;
    });

    srv.on("CREATE","inserttravelInt",async(req,res)=>{
        let returnData = await cds.transaction(req).run([
           INSERT.into(travelInitiate).entries([req.data]) 
        ]).then((resolve,reject)=>{
            if(typeof(resolve) !== undefined){
                return req.data;
            }
            else{
                req.error('error aagya');
            }

        }).catch(err =>{
            req.error('error',err)
        });
        return returnData;
    });

    srv.on("UPDATE","updatetravelInt", async(req,res)=>{
     
        let returnData= await cds.transaction(req).run([
            UPDATE(travelInitiate).set({
         Expected_date_of_departure:req.data.Expected_date_of_departure,
          Billable:req.data.Billable,
          Expected_Date_Of_Arrival:req.data.Expected_Date_Of_Arrival,
          Expected_Duration_In_Days:req.data.Expected_Duration_In_Days,
          Purpose_of_Visit:req.data.Purpose_of_Visit,
          Expected_Date_Of_Return:req.data.Expected_Date_Of_Return
    
    
            }).where({ID: req.data.ID}),
            
        ]).then((resolve,reject)=>{
            if(typeof(resolve) !== undefined){
                return req.data;
            }else{
                req.error('error occured');
            }
        }).catch(err => {
            req.error('error',err);
        });
        return returnData;
      });
    

}

module.exports=mysrv