/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.si.asz.webservice;

import com.google.gson.Gson;
import com.si.asz.db.DBConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Path;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Produces;

/**
 * REST Web Service
 *
 * @author Irshad K K
 */
@Path("aszservice")
public class AszserviceResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of AszserviceResource
     */
    public AszserviceResource() {
    }

    /**
     * Retrieves representation of an instance of
     * com.si.asz.webservice.AszserviceResource
     *
     * @return an instance of java.lang.String
     */
    @GET
    @Path("getData")
    @Produces("application/json")
    public String getJson() {
        List list = new ArrayList();
        Gson gson = new Gson();
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
            /*
             * Id int NOT NULL AUTO_INCREMENT,
             FirstName varchar(255),
             OthereNames varchar(255),
             DateOfBirth date,
             Country varchar(255),
             */

            preparedStatement = connection.prepareStatement("SELECT * from tbl_testApp");
            resultSet = preparedStatement.executeQuery();

            while (resultSet.next()) {
                Map map = new HashMap();
                map.put("Id", resultSet.getString(1));
                map.put("FirstName", resultSet.getString(2));
                map.put("OthereNames", resultSet.getString(3));
                map.put("DateOfBirth", resultSet.getString(4));
                map.put("Country", resultSet.getString(5));
                list.add(map);

            }

        } catch (Exception ex) {
            System.out.println("ezx==" + ex);
        }
        return gson.toJson(list);
    }

    @POST
    @Path("putData")
    @Produces("application/json")
    public String putJson(Object params) {
//        MultivaluedMap params = context.getQueryParameters();
        System.out.println("params==" + (Map) params);
        //FirstName  OthereNames  DateOfBirth  Country 
        Map paramMap = (Map) params;
        String FirstName = paramMap.get("FirstName").toString();
        String OthereNames = paramMap.get("OthereNames").toString();
        String DateOfBirth = paramMap.get("DateOfBirth").toString();
        String Country = paramMap.get("Country").toString();
        List list = new ArrayList();
        Gson gson = new Gson();
        try {

            Statement statement = null;
            PreparedStatement preparedStatement = null;
            ResultSet resultSet = null;
            DBConnection dBConnection = DBConnection.getInstance();
            Connection connection = dBConnection.getConnection();
            preparedStatement = connection.prepareStatement("insert into  tbl_testApp (FirstName,OthereNames,DateOfBirth,Country)  values (?, ?, ?, ? )");
            // "myuser, webpage, datum, summary, COMMENTS from FEEDBACK.COMMENTS");
            // parameters start with 1



            preparedStatement.setString(1, FirstName);
            preparedStatement.setString(2, OthereNames);
            preparedStatement.setString(3, DateOfBirth);
            preparedStatement.setString(4, Country);
            preparedStatement.executeUpdate();



        } catch (Exception ex) {
            System.out.println("ezx==" + ex);
        }
        return gson.toJson(list);
    }
}
