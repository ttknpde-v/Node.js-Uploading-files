package get_databse;

import configure_database.MyDatabase;
import process_sql.InsertIntoStudent;
import process_sql.SearchStudent;

import java.sql.SQLException;


public class GetMyDatabase extends MyDatabase {

    public static void main(String[] args) {

        GetMyDatabase objGetMyDatabase = new GetMyDatabase();
        objGetMyDatabase.setLoadDriver("com.mysql.jdbc.Driver");
        objGetMyDatabase.LoadDriver = objGetMyDatabase.LoadDriver;
        /* into attribute (object) protected */

        objGetMyDatabase.Connect = objGetMyDatabase.setConnect();
        /* into attribute (object) protected
        *  I need to use variable connect */



        new InsertIntoStudent().displayInsert(objGetMyDatabase.Connect);
        new SearchStudent().displaySearch(objGetMyDatabase.Connect);
        /* if you don't need a object from class
        *  you can call some method from class by
        *  new <Class>().<method in class> */
            try {
                objGetMyDatabase.Connect.close();
            } catch (SQLException err) {
                System.out.println("Close to Database Failed..."+err);
            }


    }

}

