### Schema

Staff
  WechatId
  Role admin/clean/repair
  Name
  
Schedule
  StaffId
  Day
  Time

Member
  name
  wechatId
  status - RESERVE/RESERVEOK/TENENT/CHECKOUT/CHECKOUTOK
  room
  firstDay
  lastDay
  rent
  service
  utility
  payBy - 1/12
  karma

Payment
  Category rent/elec/
  Description "11月房租"/"5月电费"/"狮子座聚会"
  Balance (rmb)
  Payer member_id
  DueAt datetime
  PaidAt datetime
  Payee admin_id

Repair
  MemberId
  Category
  Details
  PreferredDay
  PreferredTime

Meal
  MemberId
  NumberOfDiners

Cleaning
  MemberId
  PreferredDay
  PreferredTime
  CleanedBy staff_id
  

