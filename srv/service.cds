using { db } from '../db/schema';

  service Myservice {
    // @odata.draft.enabled
    @insertonly
      entity travelInitiate as projection on db.travelInitiate;
    @insertonly
      entity travelupdateInitiate1 as projection on db.travelInitiate;
    @deleteonly
      entity traveldeleteInitiate2 as projection on db.travelInitiate;
      entity city as projection on db.city;
      entity department as projection on db.department;
      entity customername as projection on db.customername;


      
}
