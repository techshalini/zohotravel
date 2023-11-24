using { managed,cuid,Currency,temporal } from '@sap/cds/common';
namespace db;

entity travelInitiate{
    key ID: String;
    Employee_Department:association to department;
    Departure_City:Association to city;
    Expected_date_of_departure:DateTime;
    Billable: billable;
    Customer_Name:Association to customername;
    Place_of_Visit:Association to city;
    Expected_Date_Of_Arrival:DateTime;
    Expected_Duration_In_Days:String;
    Purpose_of_Visit:String;
    Expected_Date_Of_Return:DateTime;
}

 entity city{
   city:String;
 }
 entity customername {
    name:String
 }

 entity department {
    department:String;
 } 

type billable : String enum {
       
        Yes   = 'Y';
        No    = 'N';
        Other  = 'O'
  }
  