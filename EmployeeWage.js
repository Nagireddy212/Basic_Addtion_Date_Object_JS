// UC1 checking employee present or abscent
{
    const IS_ABSCENT = 0
    let empCheck = Math.floor(Math.random() *10) % 2;
    if(empCheck == IS_ABSCENT) {
        console.log("UC1 - EMployee is ABSCENT");
    }else{
        console.log("UC1 - Employee is PRESENT");
    }
}

// UC2 Switch
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHrs = 0;
let empCheck = Math.floor(Math.random() *10) % 2;
switch (empCheck) {
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        emHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs = 0;    
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("UC2 - Emp Wage: " + empWage);