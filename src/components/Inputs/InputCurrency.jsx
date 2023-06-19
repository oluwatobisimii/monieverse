import React from "react";

const InputCurrency = ({value, setValue}) => {
  

  document.querySelectorAll("input[data-type='currency']").forEach(function (input) {
    input.addEventListener('keyup', function () {
      formatCurrency(input);
    });
    input.addEventListener('blur', function () {
      formatCurrency(input, 'blur');
    });
  });
  
  function formatNumber(n) {
    // Format number 1000000 to 1,234,567
    return n.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  
  function formatCurrency(input, blur) {
    // Appends $ to value, validates decimal side
    // and puts cursor back in the right position.
  
    // Get input value
    var input_val = input.value;
  
    // Don't validate empty input
    if (input_val === '') {
      return;
    }
  
    // Original length
    var original_len = input_val.length;
  
    // Initial caret position
    var caret_pos = input.selectionStart;
  
    // Check for decimal
    if (input_val.indexOf('.') >= 0) {
      // Get position of the first decimal
      // This prevents multiple decimals from being entered
      var decimal_pos = input_val.indexOf('.');
  
      // Split number by decimal point
      var left_side = input_val.substring(0, decimal_pos);
      var right_side = input_val.substring(decimal_pos);
  
      // Add commas to the left side of the number
      left_side = formatNumber(left_side);
  
      // Validate right side
      right_side = formatNumber(right_side);
  
      // On blur, make sure there are 2 numbers after the decimal
      if (blur === 'blur') {
        right_side += '00';
      }
  
      // Limit decimal to only 2 digits
      right_side = right_side.substring(0, 2);
  
      // Join number by "."
      input_val = left_side + '.' + right_side;
    } else {
      // No decimal entered
      // Add commas to the number
      // Remove all non-digits
      input_val = formatNumber(input_val);
      
  
      // Final formatting
      if (blur === 'blur') {
        input_val += '.00';
      }
    }
  
    // Send the updated string to the input
    input.value = input_val;
  
    // Put caret back in the right position
    var updated_len = input_val.length;
    caret_pos = updated_len - original_len + caret_pos;
    input.setSelectionRange(caret_pos, caret_pos);
  }
  
  return (
    <input
      type="text"
      value={value}
      pattern="^\d{1,3}(,\d{3})*(\.\d+)?$"
      data-type="currency"
      onChange={(e) => {
        setValue(e.target.value);
      }}
      placeholder="0"
      className="text-d-xs lg:text-d-sm font-clashGrotesk font-medium text-gray-400 focus:outline-none placeholder:text-gray-400"
    />
  );
};

export default InputCurrency;
