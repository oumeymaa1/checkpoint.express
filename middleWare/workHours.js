function workingHours (req, res, next) {
    let date = new Date ()
    let hours = date.getHours()
    let day = date.getDay ()
    let openingdays = [1,2,3,4,5]
    if (openingdays.includes(day) && hours >= 12 && hours <=17) {
        return next () 
    } else {
        res.redirect ("/errorpage")
    }
}

module.exports = workingHours