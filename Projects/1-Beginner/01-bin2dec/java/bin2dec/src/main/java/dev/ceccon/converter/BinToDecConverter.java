package dev.ceccon.converter;

import dev.ceccon.validator.BinaryStringValidator;

public class BinToDecConverter {

    BinaryStringValidator validator = new BinaryStringValidator();

    public int convert(String binary) {

        validator.validate(binary);

        int decimalValue = 0;
        int currentBinaryPlace = 0;
        for (int i = binary.length()-1; i >= 0; i--) {
            decimalValue += (Math.pow(2, currentBinaryPlace)) * Character.getNumericValue(binary.charAt(i));
            currentBinaryPlace++;
        }
        return decimalValue;

    }

}
