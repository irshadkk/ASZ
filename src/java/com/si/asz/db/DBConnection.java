/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.si.asz.db;

import java.sql.Connection;
import java.sql.DriverManager;

/**
 *
 * @author Irshad K K
 */
public class DBConnection {

    private static final DBConnection INSTANCE = new DBConnection();
    private static Connection connection = null;

    private DBConnection() {
    }

    public static DBConnection getInstance() {
        return INSTANCE;
    }

    public Connection getConnection() {

        try {
            Class.forName("com.mysql.jdbc.Driver");
            connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/test", "root", "root");

        } catch (Exception ex) {
            System.out.println("ex==" + ex);
        }
        return connection;
    }
}
