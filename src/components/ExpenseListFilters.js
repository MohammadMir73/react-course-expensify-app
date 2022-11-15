import React from "react";
import { DateRangePicker } from "react-dates";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount, setEndDate, setStartDate } from "../actions/filters"

class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };
    onDatesChange = ( { startDate, endDate } ) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused}))
        console.log(this.props)
    };
    render() {
        return (
            <div>
                <input 
                    type='text' value={this.props.filters.text} onChange={(e) => {
                    this.props.setTextFilter(e.target.value)
                    }} 
                />
                <br/>
                <select 
                    value={this.props.filters.sortBy} 
                    onChange={(e) => {
                        if (e.target.value === "amount") {
                            this.props.sortByAmount();
                        }
                        if (e.target.value === "date") {
                            this.props.sortByDate();
                        }
                    }
                }>
                    <option value={"date"}>Date</option>
                    <option value={"amount"}>Amount</option>
                </select>
                <br/>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    showClearDates= {true}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
         </div>
        )   
    }
};
 

const mapStateToProps = (state) => ({
    filters: state.filters
});
const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);