package dev.ceccon.validator;

public class BinaryStringValidator {

    public void validate(String toValidate) {
        isNotNull(toValidate);
        isBinary(toValidate);
    }

    private void isNotNull(String toValidate) {
        toValidate.toString();
    }

    private void isBinary(String toValidate) {
        for (int i = 0; i < toValidate.length(); i++) {
            charIsBinary(toValidate.charAt(i));
        }
    }

    private void charIsBinary(Character c) {
        Integer value = null;
        try {
            value = Character.getNumericValue(c);
        } catch (Exception e) {
            throwInvalidChar(c);
        }
        if (value == null || ((value != 0) && (value != 1)) )
            throwInvalidChar(c);
    }

    private void throwInvalidChar(Character c) {
        throw new IllegalArgumentException("INVALID ARGUMENT: Entered char '" + c + "' is different than 0 or 1.");
    }

}
