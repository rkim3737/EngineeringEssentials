import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

// TODO - add your @Path here
public class Test {

    // TODO - Add a @GET resource to get company data
    // Your service should return data for a given stock ticker
    public static String getCompany( String companySymbol ) throws IOException {
        List<Company> allCompanies = InputValidator.readAllCompanies("companyInfo.json");
        Company target = null;

//        return allCompanies.toString();

        System.out.println(allCompanies);
        System.out.println(allCompanies.get(0));

        for( Company co : allCompanies ){
            if( co.getSymbol().equalsIgnoreCase(companySymbol) )
                target = co;
        }

        return target.getName();
    }

    public static void main(String[] args) {
        System.out.println(Test.getCompany("APPL"));
    }

}
