const BtnEl=document.getElementById("btn")
const DateholdEl=document.getElementById("dob")
const AgeEl=document.getElementById("age")

BtnEl.addEventListener("click",()=>{
    console.log("click")
    UserDate()
    

})
function UserDate()
{
    const Birthday=DateholdEl.value;
    console.log(Birthday)
    if(Birthday==="")
        {
            alert("Please Enter Date")
        }
        else{
            const age=getAge(Birthday)
            console.log(`${age.Year}Years , ${age.month} months, ${age.days}days`)
            AgeEl.innerText=`${age.Year}Years , ${age.month} months, ${age.days}days`
            }
    
}
function getAge(Birthday)
{
    debugger;
    const currentDate=new Date()
    const BirthdayDate=new Date(Birthday)
    let Year=currentDate.getFullYear()-BirthdayDate.getFullYear()
    let month=currentDate.getMonth()-BirthdayDate.getMonth()
    let days= currentDate.getDate()-BirthdayDate.getDate()

    if(month<0 || (month === 0 && days < 0))
    {
        Year--
        month+=12;
    // before bdy current month came so july(7)-aug(8)=  -1  so enters this loop actual year 27 but 
    //august not reached thats y year--(26)
    //month(-1)+12  = 11 months
    }
    if(days<0)
    {
        month--
        days += new Date(currentDate.getFullYear(),currentDate.getMonth(),0).getDate()
                                   // 1997         08(august)            0 means previous month days(y 0 bcz days range 1-30/31)
                                                                       //     .getDate it provides days for particular month
    }
 
    return {Year,month,days}
   
    
}   



