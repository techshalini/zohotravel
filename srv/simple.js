const cds=require('@sap/cds')
const {travelInitiate}=cds.entities('db')

const mysrv=function(srv){

    srv.on('READ','readtravelInitiate',async(req,res)=>{
        var result=[];
        result=await cds.tx(req).run(SELECT.from(travelInitiate))
        return result
    })
}

module.exports=mysrv