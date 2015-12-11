/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.si.asz.db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

/**
 *
 * @author Irshad K K
 */
public class NewMain {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        try {

            Statement statement = null;
            PreparedStatement preparedStatement = null;
            ResultSet resultSet = null;
            DBConnection dBConnection = DBConnection.getInstance();
            Connection connection = dBConnection.getConnection();

//            preparedStatement = connection.prepareStatement("insert into  FEEDBACK.COMMENTS values (default, ?, ?, ?, ? , ?, ?)");
//            // "myuser, webpage, datum, summary, COMMENTS from FEEDBACK.COMMENTS");
//            // parameters start with 1
//            preparedStatement.setString(1, "Test");
//            preparedStatement.setString(2, "TestEmail");
//            preparedStatement.setString(3, "TestWebpage");
//            preparedStatement.setDate(4, new java.sql.Date(2009, 12, 11));
//            preparedStatement.setString(5, "TestSummary");
//            preparedStatement.setString(6, "TestComment");
//            preparedStatement.executeUpdate();

            preparedStatement = connection.prepareStatement("SELECT * from tbl_testApp");
            resultSet = preparedStatement.executeQuery();
            while (resultSet.next()) {
                System.out.println("resultSet.getString(1)==" + resultSet.getString(2));

            }

        } catch (Exception ex) {
            System.out.println("ezx==" + ex);
        }
    }
}
