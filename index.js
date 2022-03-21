/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const createEmployeeRecord = function (arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

const createEmployeeRecords = function (arr){
    let out = []
    arr.map(e => out.push(createEmployeeRecord(e)))
    return out
}

const createTimeInEvent = function (date){
    let timeArr = date.split(' ')
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(timeArr[1]),
        date: timeArr[0],
    })
    return this
}

const createTimeOutEvent = function (date){
    let timeArr = date.split(' ')
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(timeArr[1]),
        date: timeArr[0],
    })
    return this
}

const hoursWorkedOnDate = function (date){
    const timeIn = this.timeInEvents.find(o => o.date === date).hour
    const timeOut = this.timeOutEvents.find(o => o.date === date).hour
    return (timeOut - timeIn)/100
}

const wagesEarnedOnDate = function(date){
    return hoursWorkedOnDate.call(this, date)*this.payPerHour
}

const findEmployeeByFirstName = function(srcArray, fN){
    return srcArray.find(o=> o.firstName === fN)
}

const calculatePayroll = function(array){
    let allWagesEarned = []
    array.map(e => allWagesEarned.push(allWagesFor(e)))
    return allWagesEarned.reduce((a,c)=>a+c)
}