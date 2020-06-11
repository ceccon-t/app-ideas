package dev.ceccon.validator;

import org.junit.*;

public class BinaryStringValidatorTest {

    private BinaryStringValidator validator = new BinaryStringValidator();

    @Test(expected = NullPointerException.class)
    public void validate_shouldThrowNullPointerExceptionOnNullArgument() {
        validator.validate(null);
    }

    @Test(expected = IllegalArgumentException.class)
    public void validate_shouldRejectStringWithNonNumericCharacters() {
        validator.validate("a");
        validator.validate("00b10");
    }

    @Test(expected = IllegalArgumentException.class)
    public void validate_shouldRejectStringWithDigitsOtherThanZeroOrOne() {
        validator.validate("2");
    }

}
