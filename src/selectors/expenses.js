import moment from "moment";

// Get visible expenses

export default (expenses, {text, sortBy, startDate, endDate}) => (
     expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
        const endDateMatch =  endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy ==='date') {
            return  a.createdAt - b.createdAt
        }
        if (sortBy ==='amount') {
            return b.amount - a.amount
        }
    })
);