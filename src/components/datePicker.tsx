interface Props {
    selectedDate: string;
    onDateChange: (date: string) => void;
}
  
const DatePicker = ({ selectedDate, onDateChange }: Props) => {
    const maxDate = new Date().toISOString().split('T')[0];
  
    return (
      <input
        type="date"
        min="1995-06-16"
        max={maxDate}
        value={selectedDate}
        onChange={(e) => onDateChange(e.target.value)}
      />
    );
};
  
export default DatePicker;
  