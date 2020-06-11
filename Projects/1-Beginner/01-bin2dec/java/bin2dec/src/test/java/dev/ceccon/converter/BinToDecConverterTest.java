package dev.ceccon.converter;

import org.junit.*;
import static org.junit.Assert.*;

public class BinToDecConverterTest {

    private BinToDecConverter converter = new BinToDecConverter();

    @Test(expected = NullPointerException.class)
    public void convert_shouldThrowNullPointerExceptionWhenNullArgument() {
        converter.convert(null);
    }

    @Test
    public void convert_shouldReturnZeroForEmptyString() {
        converter.convert("");
    }

    @Test
    public void convert_shouldConvertZero() {
        assertEquals(0, converter.convert("0"));
    }

    @Test
    public void convert_shouldConvertOne() {
        assertEquals(1, converter.convert("1"));
    }

    @Test
    public void convert_shouldCorrectlyConvertFirstEightBinaryPlaces() {
        assertEquals(1, converter.convert("00000001"));
        assertEquals(2, converter.convert("00000010"));
        assertEquals(4, converter.convert("00000100"));
        assertEquals(8, converter.convert("00001000"));
        assertEquals(16, converter.convert("00010000"));
        assertEquals(32, converter.convert("00100000"));
        assertEquals(64, converter.convert("01000000"));
        assertEquals(128, converter.convert("10000000"));
    }

    @Test
    public void convert_shouldCorrectlyAddUpDifferentPlaces() {
        assertEquals(27, converter.convert("00011011"));
    }

    @Test
    public void convert_shouldWorkWithMoreThanEightBinaryPlaces() {
        assertEquals(256, converter.convert("100000000"));
        assertEquals(1024, converter.convert("10000000000"));
    }
}
