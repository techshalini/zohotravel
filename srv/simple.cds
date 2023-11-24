using { db } from '../db/schema';

service Mysrv {
  @readonly
   entity readtravelInt as projection on db.travelInitiate;
   @insertonly
   entity inserttravelInt as projection on db.travelInitiate;
  @deleteonly
   entity deletetravelInt as projection on db.travelInitiate;
@updateonly
   entity updatetravelInt as projection on db.travelInitiate;

}