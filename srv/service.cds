using { db } from '../db/schema';

  service Myservice {
    
      entity travelInitiate as projection on db.travelInitiate;
      entity city as projection on db.city;
      entity department as projection on db.department;
      entity customername as projection on db.customername;


      
}
