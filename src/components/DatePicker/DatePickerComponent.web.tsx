import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  DatePicker,
  TimePicker,
  DateTimePicker,
} from "@material-ui/pickers";
import { DatePickerComponentProps as Props } from "./DatePickerComponentType";

const DatePickerComponent: React.FC<Props> = ({
  value,
  onChange,
  mode,
  toggleVisibility,
  isVisible,
}) => {
  const Picker =
    mode === "date"
      ? DatePicker
      : mode === "time"
      ? TimePicker
      : DateTimePicker;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Picker
        value={value}
        open={isVisible}
        onChange={(d) => {
          toggleVisibility();
          onChange(null, d);
        }}
        onClose={() => toggleVisibility()}
        variant="dialog"
        TextFieldComponent={() => null}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePickerComponent;