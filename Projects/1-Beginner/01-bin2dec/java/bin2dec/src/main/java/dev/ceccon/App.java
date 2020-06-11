package dev.ceccon;

import dev.ceccon.converter.BinToDecConverter;

import java.util.Scanner;

public class App
{
    public static void main( String[] args ) {

        BinToDecConverter converter = new BinToDecConverter();
        Scanner sc = new Scanner(System.in);

        System.out.print( "Enter a binary number: " );

        String binary = sc.nextLine();

        try {
            int decimal = converter.convert(binary);
            System.out.println("The entered number in decimal is: " + decimal);
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        }

    }
}
